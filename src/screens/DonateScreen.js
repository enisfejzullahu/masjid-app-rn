import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Keyboard,
  Image,
} from "react-native";
import styles from "../../assets/styles/DonateScreenStyles";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";

import { CircularProgress } from "react-native-svg-circular-progress";
import { Picker } from "@react-native-picker/picker";
import {
  validateCardNumber,
  validateCVC,
  validateExpiryDate,
  validateEmail,
} from "../validation/CreditCardValidator";

// Import SVG icons
import BackIconGreen from "../../assets/SVG/BackIconGreen";
import ShapesTop from "../../assets/SVG/ShapesTop";
import ShareIcon from "../../assets/SVG/ShareIcon";
import SecureIcon from "../../assets/SVG/SecureIcon";

// CustomInput component
const CustomInput = ({
  label,
  requiredText,
  placeholder,
  containerStyle,
  inputRef,
  returnKeyType,
  onSubmitEditing,
  keyboardType,
  value,
  onChangeText,
  error,
  rightIcon,
}) => (
  <View style={[styles.inputContainer, containerStyle]}>
    <Text style={styles.label}>
      {label} <Text style={styles.requiredText}>{requiredText}</Text>
    </Text>
    <View style={styles.inputWrapper}>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder={placeholder}
        placeholderTextColor="#9B9B9B"
        ref={inputRef}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
      {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
    </View>
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
  </View>
);

const DonateScreen = ({ route, navigation }) => {
  const { title, goal, currentAmount, description } = route.params || {};
  const progress = (currentAmount / goal) * 100;

  // State hooks
  const [amount, setAmount] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    email: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false); // New state for form visibility
  const API_URL = "http://192.168.100.33:3000";

  // Refs for focusing on the next input
  const emailRef = useRef();
  const cardNumberRef = useRef();
  const expiryRef = useRef();
  const cvcRef = useRef();
  const cardFieldRef = useRef();

  const { confirmPayment } = useConfirmPayment();

  // Format amount to two decimal places
  const formatAmount = (value) => {
    if (!value) return "0.00";
    return parseFloat(value).toFixed(2);
  };

  // Handlers for input changes
  const handleCardNumberChange = (text) => {
    const formattedText = text
      .replace(/\s+/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardNumber(formattedText);

    const numericValue = formattedText.replace(/\s+/g, "");
    setErrors((prevErrors) => ({
      ...prevErrors,
      cardNumber: validateCardNumber(numericValue) ? "" : "Invalid card number",
    }));
  };

  const handleExpiryDateChange = (text) => {
    // Remove all non-numeric characters
    const numericText = text.replace(/\D/g, "");

    // Format as MM/YY
    let formattedText = "";
    if (numericText.length > 2) {
      formattedText = `${numericText.slice(0, 2)}/${numericText.slice(2, 4)}`;
    } else {
      formattedText = numericText;
    }

    setExpiryDate(formattedText);

    // Validate numeric part MMYY
    setErrors((prevErrors) => ({
      ...prevErrors,
      expiryDate: validateExpiryDate(numericText.slice(0, 4))
        ? ""
        : "Invalid expiry date",
    }));
  };

  const handleCvcChange = (text) => {
    setCvc(text);
    setErrors((prevErrors) => ({
      ...prevErrors,
      cvc: validateCVC(text) ? "" : "Invalid CVC",
    }));
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: validateEmail(text) ? "" : "Invalid email address",
    }));
  };

  const handleAmountChange = (text) => {
    setAmount(text);
    if (text) {
      setIsFormVisible(true);
    } else {
      setIsFormVisible(false);
    }
  };

  const handleDonatePress = async () => {
    try {
      const response = await fetch(
        `${API_URL}/payments/create-payment-intent`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: parseFloat(amount)}), // Amount in cents
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const { clientSecret } = await response.json();

      console.log("Client Secret:", clientSecret);

      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        type: "Card",
        paymentMethodType: "Card",
        billingDetails: {
          email: email,
        },
      });

      if (error) {
        console.error("Payment confirmation error:", error);
        Alert.alert("Payment failed. Please try again.");
      } else if (paymentIntent) {
        console.log("Payment successful:", paymentIntent);
        Alert.alert(
          "Donation successful! You will receive your receipt shortly."
        );
      }
    } catch (error) {
      console.error("Payment error:", error);
      Alert.alert("Payment error. Please try again.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <ShapesTop width="100%" height={150} />
        <Text style={styles.title}>Donacione</Text>
      </View>

      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => navigation.goBack()}
      >
        <BackIconGreen style={styles.backIcon} />
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
      >
        <View style={styles.card}>
          {/* Card Header */}
          <View style={styles.topPart}>
            <View style={styles.topLeftPart}>
              <Text style={styles.cardTitle}>{title || "No Title"}</Text>
              <TouchableOpacity style={styles.shareButton}>
                <ShareIcon width={30} height={30} />
                <Text style={styles.shareText}>Shpërndaje</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.progressCircleContainer}>
              <CircularProgress
                percentage={progress}
                fillColor="#fff"
                tintColor="#06A85D"
                backgroundColor="#2CC484"
                radius={100}
                strokeWidth={37}
              />
              <View style={styles.centeredTextContainer}>
                <Text style={styles.amountText}>${currentAmount || "0"}</Text>
                <View style={styles.smalldivider} />
                <Text style={styles.amountText}>${goal || "0"}</Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <View style={styles.middlePart}>
            <Text style={styles.text}>{description}</Text>
          </View>

          {/* Amount Input */}
          <View style={styles.amountInputContainer}>
            <TextInput
              style={styles.amountInput}
              placeholder="0.00"
              keyboardType="numeric"
              placeholderTextColor="#06A85D"
              value={amount}
              onChangeText={handleAmountChange}
              onBlur={() => setAmount(formatAmount(amount))}
              returnKeyType="done" // Show "Done" on the keyboard
              onSubmitEditing={() => {
                // Trigger an action when the return key is pressed
                setAmount(formatAmount(amount)); // Ensure the amount is formatted
                Keyboard.dismiss(); // Close the keyboard after pressing "Done"
              }}
            />

            <Text style={styles.currencyText}>EUR</Text>
          </View>
          <Text style={styles.totalText}>Totali: {formatAmount(amount)}€</Text>

          {/* Conditional rendering of Payment Form */}
          {isFormVisible && (
            <View style={styles.paymentForm}>
              <Text style={styles.formTitle}>Dhuroni</Text>
              <Text style={styles.formLabel}>
                Sa para deshironi t'i dhuroni?
              </Text>

              {/* Custom Inputs */}
              <CustomInput
                label="Email"
                requiredText="Kërkohet për faturë"
                inputRef={emailRef}
                returnKeyType="next"
                onSubmitEditing={() => cardFieldRef.current.focus()}
                value={email}
                onChangeText={handleEmailChange}
                error={errors.email}
              />
              <CardField
                postalCodeEnabled={false}
                placeholder={{ number: "4242 4242 4242 4242" }}
                cardStyle={styles.cardField}
                style={styles.cardFieldContainer}
                onFocus={() => {}}
                ref={cardFieldRef}
              />

              <TouchableOpacity
                style={styles.donateButton}
                onPress={handleDonatePress}
              >
                <SecureIcon width={20} height={20} />

                <Text style={styles.donateButtonText}>Dhuroni</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>

      {/* <View style={styles.securePaymentContainer}>
        <Text style={styles.securePaymentText}>
          Transaksioni juaj është i sigurt
        </Text>
      </View> */}
    </KeyboardAvoidingView>
  );
};

export default DonateScreen;

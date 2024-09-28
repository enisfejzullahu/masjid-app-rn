import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import styles from "../../assets/styles/HelpScreenStyles";

import BackIconGreen from "../../assets/SVG/BackIconGreen";
import ShapesTop from "../../assets/SVG/ShapesTop";
import ChevronDownIcon from "../../assets/SVG/ChevronDownIcon";
import ChevronUpIcon from "../../assets/SVG/ChevronUpIcon";

const HelpScreen = ({ route, navigation }) => {
  // State to handle dropdown toggles
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Toggle FAQ function
  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIconContainer}
        onPress={() => navigation.goBack()}
      >
        <BackIconGreen style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.header}>
        <ShapesTop width="100%" height={150} />
        <Text style={styles.title}>Ndihma dhe Kontakti</Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Për çfarë keni nevojë?</Text>

          {/* FAQ Section */}
          {faqData.map((faq, index) => (
            <View key={index} style={styles.faqItem}>
              <TouchableOpacity
                style={styles.questionContainer}
                onPress={() => toggleFAQ(index)}
              >
                <Text style={styles.question}>{faq.question}</Text>
                {expandedFAQ === index ? (
                  <ChevronUpIcon style={styles.chevronIcon} />
                ) : (
                  <ChevronDownIcon style={styles.chevronIcon} />
                )}
              </TouchableOpacity>
              {expandedFAQ === index && (
                <Text style={styles.answer}>{faq.answer}</Text>
              )}
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Kontakti</Text>
          <View style={styles.contactSection}>
            <Text style={styles.contactText}>
              Për ndihmë të mëtejshme ose pyetje, na kontaktoni në:
            </Text>
            <Text style={styles.contactText}>Email: support@xhamiame.com</Text>
            <Text style={styles.contactText}>Telefon: +381 49 123 456</Text>
            <Text style={styles.contactText}>
              Adresa: Prishtine, Kosove
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// FAQ data array
const faqData = [
  {
    question: "Cilat xhami gjenden në aplikacion?",
    answer:
      "Aplikacioni përmban një listë të gjerë xhamish në rajonin tuaj, duke përfshirë detaje të ndryshme si adresën, kontaktin, dhe oraret e faljeve.",
  },
  {
    question: "Si mund të kërkoj për një xhami të caktuar në aplikacion?",
    answer:
      "Ju mund të përdorni funksionin e kërkimit për të gjetur xhaminë që dëshironi. Shtypni mbi ikonën e kërkimit dhe shkruani emrin e xhamisë ose vendndodhjen e saj.",
  },
  {
    question: "Si mund të gjej xhaminë më të afërt përmes aplikacionit?",
    answer:
      "Aplikacioni përdor lokacionin tuaj për t'ju treguar xhamitë më të afërta. Thjesht aktivizoni opsionin e lokacionit dhe do të shihni një listë të xhamive pranë jush.",
  },
  {
    question: "A mund të marr njoftime për aktivitete të xhamive?",
    answer:
      "Po, ju mund të merrni njoftime për aktivitete dhe ngjarje të ndryshme të xhamive duke aktivizuar njoftimet në seksionin e cilësimeve.",
  },
];

export default HelpScreen;

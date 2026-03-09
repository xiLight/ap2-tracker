const quizzes = {
    '1.1': [
        {
            question: "Welches Vorgehensmodell ist streng phasenbasiert und linear?",
            options: ["Scrum", "Wasserfallmodell", "Kanban", "Spiralmodell"],
            correct: 1,
            explanation: "Das Wasserfallmodell ist das klassische, lineare Vorgehensmodell, bei dem jede Phase vollständig abgeschlossen sein muss, bevor die nächste beginnt."
        },
        {
            question: "Was ist der Hauptvorteil von agilen Methoden wie Scrum im Vergleich zu klassischen Modellen?",
            options: [
                "Sie erfordern keine Dokumentation.",
                "Sie sind immer billiger.",
                "Hohe Flexibilität und schnelle Anpassung an Änderungen.",
                "Der Kunde muss nicht in den Prozess einbezogen werden."
            ],
            correct: 2,
            explanation: "Agile Methoden zeichnen sich durch kurze Iterationen (Sprints) aus, die es erlauben, schnell auf geänderte Anforderungen zu reagieren."
        }
    ],
    '2.3': [
        {
            question: "Welcher SQL-Befehl gehört zur DML (Data Manipulation Language)?",
            options: ["CREATE TABLE", "UPDATE", "GRANT", "ALTER TABLE"],
            correct: 1,
            explanation: "UPDATE manipuliert bestehende Daten. CREATE und ALTER gehören zur DDL (Definition), GRANT zur DCL (Control)."
        },
        {
            question: "Was besagt das 'A' im ACID-Prinzip?",
            options: [
                "Availability (Verfügbarkeit)",
                "Authentication (Authentifizierung)",
                "Atomicity (Atomarität)",
                "Accuracy (Genauigkeit)"
            ],
            correct: 2,
            explanation: "Atomarität bedeutet 'Ganz oder gar nicht'. Eine Transaktion wird entweder vollständig ausgeführt oder bei einem Fehler komplett zurückgerollt."
        },
        {
            question: "Du möchtest alle Mitarbeiter anzeigen, die noch KEINER Abteilung zugeordnet sind. Welcher JOIN ist hierfür (in Kombination mit IS NULL) am besten geeignet, wenn alle Mitarbeiter in der linken Tabelle stehen?",
            options: ["INNER JOIN", "FULL OUTER JOIN", "LEFT JOIN", "CROSS JOIN"],
            correct: 2,
            explanation: "Ein LEFT JOIN liefert alle Datensätze der linken Tabelle (Mitarbeiter). Wenn es rechts (Abteilung) keinen Match gibt, steht dort NULL. So lassen sich Mitarbeiter ohne Abteilung filtern."
        }
    ],
    '3.4': [
        {
            question: "Nach welchem DSGVO-Prinzip dürfen Daten nur für den bei Erhebung festgelegten Grund verarbeitet werden?",
            options: [
                "Datenminimierung",
                "Zweckbindung",
                "Speicherbegrenzung",
                "Richtigkeit"
            ],
            correct: 1,
            explanation: "Die Zweckbindung besagt, dass Daten nicht für andere, unvereinbare Zwecke weiterverwendet werden dürfen."
        },
        {
            question: "Du bindest eine Open-Source-Bibliothek mit GPL-Lizenz in deine geschlossene, kommerzielle Software ein. Was ist die Konsequenz (Copyleft)?",
            options: [
                "Du musst Lizenzgebühren zahlen.",
                "Du musst dein gesamtes Werk ebenfalls unter der GPL (Open Source) veröffentlichen.",
                "Es gibt keine Konsequenzen, GPL erlaubt alles.",
                "Du darfst die Software nur intern verwenden."
            ],
            correct: 1,
            explanation: "Die GPL ist eine restriktive 'virale' Lizenz (Copyleft). Wenn man GPL-Code modifiziert/einbindet und das Ergebnis weitergibt, muss das Gesamtwerk wieder unter der GPL stehen."
        }
    ],
    '4.1': [
        {
            question: "Ein Auszubildender befindet sich in der Probezeit. Welche Kündigungsfrist gilt für ihn und den Ausbildungsbetrieb?",
            options: [
                "Keine Frist, fristlos von Tag auf Tag kündbar ohne Grund.",
                "2 Wochen.",
                "4 Wochen zum Monatsende.",
                "In der Probezeit kann nicht gekündigt werden."
            ],
            correct: 0,
            explanation: "Nach BBiG kann das Berufsausbildungsverhältnis während der Probezeit jederzeit ohne Einhalten einer Kündigungsfrist und ohne Angabe von Gründen gekündigt werden."
        },
        {
            question: "Wer trägt die Kosten für die gesetzliche Unfallversicherung (Berufsgenossenschaft) komplett alleine?",
            options: [
                "Der Arbeitnehmer",
                "Der Arbeitgeber",
                "Der Staat",
                "Arbeitgeber und Arbeitnehmer zu je 50%"
            ],
            correct: 1,
            explanation: "Im Gegensatz zu KV, PV, RV und AV, die idR paritätisch (50/50) geteilt werden, trägt der Arbeitgeber den Beitrag zur gesetzlichen Unfallversicherung zu 100%."
        }
    ]
};

const quizzes = {
    // ---- PB1: Planen, Vorbereiten und Durchführen von Arbeitsaufträgen / Softwareentwicklung ----
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
    '1.2': [
        {
            question: "Welche Architektur-Eigenschaft trifft auf Microservices zu?",
            options: [
                "Alle Komponenten laufen in einem einzigen, großen Prozess.",
                "Das System ist stark gekoppelt (Tight Coupling).",
                "Einzelne fachliche Dienste sind unabhängig voneinander deploy- und skalierbar.",
                "Es darf nur eine einzige relationale Datenbank für alle Services geben."
            ],
            correct: 2,
            explanation: "Microservices sind kleine, eigenständige Dienste, die lose gekoppelt sind und unabhängig voneinander entwickelt, skaliert und veröffentlicht werden können."
        },
        {
            question: "Was ist der wesentliche Unterschied zwischen einer Client/Server- und einer Peer-to-Peer-Architektur?",
            options: [
                "P2P benötigt immer einen zentralen Server.",
                "Bei Client/Server haben alle Teilnehmer die exakt gleichen Rechte.",
                "Client/Server basiert auf einer zentralen Instanz, P2P ist dezentral ohne dedizierten Server.",
                "P2P funktioniert nur im lokalen Netzwerk."
            ],
            correct: 2,
            explanation: "In einem P2P-Netzwerk gibt es keinen zentralen Server – jeder Node kann sowohl Client als auch Server sein."
        }
    ],
    '1.3': [
        {
            question: "Welches UML-Diagramm eignet sich am besten, um das statische Klassengerüst und Vererbungen einer Software darzustellen?",
            options: ["Use-Case-Diagramm", "Aktivitätsdiagramm", "Sequenzdiagramm", "Klassendiagramm"],
            correct: 3,
            explanation: "Das Klassendiagramm ist das wichtigste Strukturdiagramm der UML, um Klassen, Attribute, Methoden und deren Beziehungen zueinander abzubilden."
        },
        {
            question: "Welches Entwurfsmuster (Design Pattern) trennt Daten, Darstellung und Steuerung strikt voneinander?",
            options: ["Singleton", "Model-View-Controller (MVC)", "Observer", "Factory"],
            correct: 1,
            explanation: "MVC trennt die interne Datenhaltung (Model) von der Präsentation (View) und der Logik (Controller)."
        }
    ],
    '1.4': [
        {
            question: "Welches Paradigma der objektorientierten Programmierung beschreibt das Verbergen interner Daten und Zustände (z. B. durch private Attribute)?",
            options: ["Polymorphismus", "Vererbung", "Kapselung (Encapsulation)", "Abstraktion"],
            correct: 2,
            explanation: "Kapselung schützt die internen Daten eines Objekts vor unkontrolliertem Zugriff von außen. Zugriffe erfolgen meist kontrolliert über Getter/Setter."
        },
        {
            question: "Zwei verschiedene Klassen implementieren dasselbe Interface mit derselben Methode, verhalten sich dort aber unterschiedlich. Wie nennt man dieses Konzept?",
            options: ["Polymorphismus (Vielgestaltigkeit)", "Deklaration", "Überladung (Overloading)", "Serialisierung"],
            correct: 0,
            explanation: "Poly- (viel) morphismus (Gestalt): Verschiedene Objekte können auf dieselbe Botschaft unterschiedlich reagieren."
        }
    ],
    '1.5': [
        {
            question: "Bei welchem Testverfahren kennt der Tester den Quellcode NICHT und testet das System nur gegen die Anforderungen?",
            options: ["White-Box-Test", "Unit-Test", "Black-Box-Test", "Integrationstest"],
            correct: 2,
            explanation: "Beim Black-Box-Test betrachtet der Tester die Software als 'schwarzen Kasten'. Ihn interessiert nur, ob bei bestimmten Eingaben die erwarteten Ausgaben erzeugt werden."
        },
        {
            question: "Was beschreibt der Begriff CI (Continuous Integration)?",
            options: [
                "Die kontinuierliche Auslieferung der Software an den Endkunden.",
                "Das regelmäßige automatische Zusammenführen, Bauen und Testen von Code-Änderungen auf einem zentralen Server.",
                "Ein Entwurfsmuster für Benutzeroberflächen.",
                "Ein Backup-Verfahren."
            ],
            correct: 1,
            explanation: "Continuous Integration sorgt dafür, dass Code-Änderungen mehrmals täglich automatisch integriert und durch Unittests geprüft werden, um Fehler früh zu erkennen."
        }
    ],

    // ---- PB2: Kundenspezifische Anwendungsentwicklung ----
    '2.1': [
        {
            question: "Auf welcher Schicht (Layer) des OSI-Modells arbeiten handelsübliche Router?",
            options: ["Schicht 1 (Physical)", "Schicht 2 (Data Link)", "Schicht 3 (Network)", "Schicht 4 (Transport)"],
            correct: 2,
            explanation: "Router arbeiten auf Schicht 3 (Vermittlungsschicht) und routen Datenpakete anhand von logischen IP-Adressen durch Netzwerke."
        },
        {
            question: "Eine IPv4-Adresse ist 32 Bit lang. Wieviel Bit hat eine IPv6-Adresse?",
            options: ["64 Bit", "128 Bit", "256 Bit", "512 Bit"],
            correct: 1,
            explanation: "IPv6 nutzt 128 Bit (hexadezimale Schreibweise) zur Adressierung, um das Adressknappheitsproblem von IPv4 zu lösen."
        }
    ],
    '2.2': [
        {
            question: "Welche Zeitkomplexität (Big-O) hat das Suchen eines Elements in einem unsortierten Array standardmäßig (Worst-Case)?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correct: 2,
            explanation: "Lineare Suche: Man muss im schlimmsten Fall jedes der 'n' Elemente einmal prüfen, ob es das gesuchte Element ist."
        },
        {
            question: "Was ist ein wesentliches Merkmal einer einfach verketteten Liste (Singly Linked List) im Vergleich zu einem Array?",
            options: [
                "Man kann in O(1) auf das X-te Element zugreifen (Random Access).",
                "Der Speicherplatz muss beim Erstellen fest dimensioniert werden.",
                "Die Elemente liegen nicht zwingend nebeneinander im RAM; jedes Element kennt nur seinen direkten Nachfolger.",
                "Sie verbraucht weniger Speicherplatz als ein Array."
            ],
            correct: 2,
            explanation: "Bei verketteten Listen hat jeder Knoten einen Pointer auf den nächsten. Dadurch ist sie dynamisch erweiterbar, bietet aber keinen sofortigen Index-Zugriff wie ein Array."
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

    // ---- PB3: Wirtschafts- und IT-Sicherheit / Qualitätssicherung ----
    '3.1': [
        {
            question: "Welche Aussage zur asymmetrischen Verschlüsselung ist KORREKT?",
            options: [
                "Sender und Empfänger tauschen vorab einen geheimen Schlüssel aus.",
                "Zum Verschlüsseln nutzt man den Public Key des Empfängers, der Empfänger entschlüsselt mit seinem Private Key.",
                "Sie ist wesentlich schneller als symmetrische Verschlüsselung.",
                "Es gibt nur einen einzigen Schlüssel (Shared Secret)."
            ],
            correct: 1,
            explanation: "Bei asymmetrischer Verschlüsselung (z.B. RSA) wird ein Schlüsselpaar (Public/Private) verwendet. Niemals den Private Key weitergeben!"
        },
        {
            question: "Was ist das Hauptziel von Hash-Funktionen (wie SHA-256) in der IT-Sicherheit?",
            options: [
                "Daten komprimieren, um Speicherplatz zu sparen.",
                "Eine Zwei-Wege-Verschlüsselung anzubieten.",
                "Die Integrität von Daten sicherzustellen (Prüfsumme, Passwörter).",
                "Ein VPN aufzubauen."
            ],
            correct: 2,
            explanation: "Hashes sind Einweg-Funktionen. Sie dienen dazu, Passwörter sicher abzulegen oder zu prüfen, ob eine Datei verändert wurde (Integrität)."
        }
    ],
    '3.2': [
        {
            question: "Wofür steht das 'T' in TDD (Test-Driven Development)?",
            options: ["Time", "Target", "Test", "Task"],
            correct: 2,
            explanation: "Test-Driven Development: Man schreibt zuerst den Test, der anfangs fehlschlägt (Red), implementiert dann den Code (Green) und räumt ihn auf (Refactor)."
        },
        {
            question: "Im V-Modell stehen sich die Entwicklungsphasen und Testphasen gegenüber. Wer testet im 'Abnahmetest' (Acceptance Test) auf Basis der Anforderungsdefinition?",
            options: ["Der Systemadministrator", "Der Programmierer der Funktion", "Der Kunde/Auftraggeber", "Der Datenbank-Admin"],
            correct: 2,
            explanation: "Der Abnahmetest (oberste Stufe rechts) prüft, ob die anfänglichen Anforderungen des Kunden (oberste Stufe links) erfüllt wurden. Er wird vom Kunden durchgeführt."
        }
    ],
    '3.3': [
        {
            question: "Wie löst man in Git einen Merge-Konflikt?",
            options: [
                "Indem man den Computer neu startet.",
                "Man öffnet die konfliktierten Dateien, bereinigt manuell die Konflikt-Marker (<<<< === >>>>) und committet danach.",
                "Man muss das gesamte Repository löschen und neu klonen.",
                "Git löst alle Merge-Konflikte immer vollautomatisch anhand eines KIsystems."
            ],
            correct: 1,
            explanation: "Merge-Konflikte müssen manuell durch Sichten des Codes entschärft werden, indem man festlegt, welche Zeilen behalten werden."
        },
        {
            question: "Was macht der Befehl 'git push'?",
            options: [
                "Er holt die neusten Updates vom Server.",
                "Er legt einen neuen Branch an.",
                "Er überträgt lokale Commits in das Remote-Repository (z.B. auf GitHub).",
                "Er löscht alle lokalen Änderungen."
            ],
            correct: 2,
            explanation: "Pull = Holen, Commit = Speichern (lokal), Push = Hochladen (remote)."
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

    // ---- PB4: WISO ----
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
    ],
    '4.2': [
        {
            question: "Ab wie vielen wahlberechtigten Arbeitnehmern darf in einem Betrieb ein Betriebsrat (BetrVG) gewählt werden?",
            options: [
                "Ab 10 wahlberechtigten Arbeitnehmern.",
                "Ab 5 wahlberechtigten Arbeitnehmern, von denen 3 wählbar sind.",
                "Ab 50 Mitarbeitern.",
                "Ein Betriebsrat ist in Deutschland in jedem Unternehmen gesetzliche Pflicht."
            ],
            correct: 1,
            explanation: "Voraussetzung (BetrVG §1) sind in der Regel mindestens fünf ständige wahlberechtigte Arbeitnehmer, von denen drei wählbar sein müssen."
        },
        {
            question: "Für wen setzt sich die JAV (Jugend- und Auszubildendenvertretung) primär ein?",
            options: [
                "Für Senioren ab 60 Jahren.",
                "Für jugendliche Arbeitnehmer unter 18 und Azubis unter 25 Jahren.",
                "Für die Geschäftsführung.",
                "Für alle Mitarbeiter der IT-Abteilung."
            ],
            correct: 1,
            explanation: "Die JAV vertritt die besonderen Interessen der jugendlichen Arbeitnehmer (<18) und der Auszubildenden (<25)."
        }
    ],
    '4.3': [
        {
            question: "Wer haftet bei einer Gesellschaft mit beschränkter Haftung (GmbH)?",
            options: [
                "Die Gesellschafter mit ihrem gesamten Privatvermögen.",
                "Nur der Geschäftsführer.",
                "Die Gesellschaft haftet ausschließlich mit ihrem Gesellschaftsvermögen.",
                "Der Aufsichtsrat."
            ],
            correct: 2,
            explanation: "Die GmbH ist eine juristische Person (Kapitalgesellschaft). Das Privatvermögen der Gesellschafter bleibt (bis auf wenige Ausnahmen) unberührt."
        },
        {
            question: "Ein Vertrag ist zustande gekommen, wenn...",
            options: [
                "zwei übereinstimmende Willenserklärungen (Antrag und Annahme) abgegeben wurden.",
                "eine Partei etwas mündlich verspricht.",
                "er notariell beglaubigt ist.",
                "mindestens ein Zeuge anwesend war."
            ],
            correct: 0,
            explanation: "Verträge entstehen nach dem BGB durch zwei übereinstimmende, sich aufeinander beziehende Willenserklärungen: Angebot (Antrag) und Annahme."
        }
    ],
    '4.4': [
        {
            question: "Was sagt der Begriff 'Kritischer Pfad' in der Netzplantechnik aus?",
            options: [
                "Die teuerste Route im Projekt.",
                "Die Kette von Vorgängen, bei denen es keinen Zeitpuffer gibt (Gesamtpuffer = 0). Verzögert sich hier etwas, verzögert sich das ganze Projekt.",
                "Die Vorgänge, die besonders fehleranfällig sind.",
                "Die Route, die vom Kunden nicht gewünscht ist."
            ],
            correct: 1,
            explanation: "Der kritische Pfad bestimmt die minimale Gesamtdauer eines Projekts. Er besteht aus den Vorgängen, die Null Pufferzeit haben."
        },
        {
            question: "Was ist der Unterschied zwischen fixen und variablen Kosten in der KLR?",
            options: [
                "Fixe Kosten ändern sich mit der Produktionsmenge (z.B. Material), variable Kosten bleiben immer gleich.",
                "Fixe Kosten fallen unabhängig von der Ausbringungsmenge an (z.B. Miete). Variable Kosten sind abhängig von der Produktionsmenge (z.B. Material).",
                "Fixe Kosten gibt es nur bei Dienstleistern.",
                "Es gibt keinen Unterschied, beides sind Einzelkosten."
            ],
            correct: 1,
            explanation: "Miete, Maschineabschreibungen oder Managergehälter sind Fixkosten. Materialkosten oder Stückakkordlöhne verändern sich pro produziertem Stück (variabel)."
        }
    ]
};

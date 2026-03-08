// ----------------------------------------------------------------------
// DATEI: assets/js/content.js
// INHALT: Detaillierte Lerninhalte für AP2 Fachinformatiker Anwendungsentwicklung
// ----------------------------------------------------------------------

window.AP2_CONTENT = {
  // --- PB 1: Planen eines Softwareproduktes ---
  '1.1': `
    <h3>Vorgehensmodelle & Analyse</h3>
    <p>Als Anwendungsentwickler musst du entscheiden, wie ein Softwareprojekt organisiert wird. Die Wahl des Vorgehensmodells bestimmt den gesamten Ablauf.</p>
    
    <h4>1. Scrum (Agil)</h4>
    <ul>
      <li><strong>Rollen:</strong> Product Owner (vertritt Kunden, priorisiert Backlog), Scrum Master (beseitigt Hindernisse, coacht), Developer (setzen um).</li>
      <li><strong>Artefakte:</strong> Product Backlog (Alle Anforderungen), Sprint Backlog (Ziele für aktuellen Sprint), Increment (Lauffähiges Zwischenprodukt).</li>
      <li><strong>Events:</strong> Sprint (Timebox, meist 2-4 Wochen), Daily Scrum (15 Min Update), Sprint Review (Demo für Stakeholder), Retrospektive (Prozessverbesserung).</li>
    </ul>

    <h4>2. Klassische Modelle</h4>
    <ul>
      <li><strong>Wasserfall:</strong> Strenge Phasen (Analyse &rarr; Design &rarr; Implementierung &rarr; Test &rarr; Betrieb). Ein Schritt muss abgeschlossen sein, bevor der nächste beginnt. Schlecht bei unklaren Anforderungen.</li>
      <li><strong>V-Modell (XT):</strong> Wie Wasserfall, aber jede Entwicklungsphase hat eine direkte Testphase gegenüber (Validierung & Verifikation). Standard bei Behörden.</li>
      <li><strong>Spiralmodell:</strong> Iterativ mit starkem Fokus auf <strong>Risikoanalyse</strong> in jedem Zyklus.</li>
    </ul>

    <h4>3. Anforderungsmanagement (Requirements Engineering)</h4>
    <ul>
      <li><strong>Lastenheft:</strong> Was will der Kunde? (Vom Auftraggeber erstellt).</li>
      <li><strong>Pflichtenheft:</strong> Wie setzen wir es um? (Vom Auftragnehmer erstellt, Basis für den Vertrag).</li>
      <li><strong>User Stories:</strong> "Als [Rolle] möchte ich [Ziel/Fähigkeit], um [Nutzen]." - Dient als Diskussionsgrundlage.</li>
      <li><strong>Use Cases:</strong> Detaillierte Beschreibung der Interaktion zwischen Akteur und System (inkl. Vorbedingungen, Standardablauf, Alternativen).</li>
    </ul>

    <h4>4. Wirtschaftlichkeit & Analyse</h4>
    <ul>
      <li><strong>Nutzwertanalyse:</strong> Quantifizierung nicht-monetärer Kriterien (z.B. Benutzerfreundlichkeit, Skalierbarkeit) durch Gewichtung.</li>
      <li><strong>TCO (Total Cost of Ownership):</strong> Alle Kosten über den gesamten Lebenszyklus (Anschaffung, Betrieb, Wartung, Schulungen).</li>
      <li><strong>Make-or-Buy:</strong> Entscheidung, ob Software selbst entwickelt oder gekauft (COTS - Commercial Off-The-Shelf) wird.</li>
    </ul>
  `,

  '1.2': `
    <h3>Objektorientierung & Design Patterns</h3>
    <p>Die Grundlage moderner Software-Architektur bildet die Objektorientierung (OOP) sowie bewährte Lösungsmuster (Design Patterns).</p>

    <h4>1. Prinzipien der OOP</h4>
    <ul>
      <li><strong>Kapselung (Encapsulation):</strong> Geheimnisprinzip. Zustände (Attribute) sind von außen verborgen und nur über definierte Schnittstellen (Methoden, Getter/Setter) zugänglich.</li>
      <li><strong>Vererbung (Inheritance):</strong> Eine Klasse (Kind) übernimmt Attribute und Methoden einer anderen (Eltern). Reduziert Code-Duplizierung (DRY).</li>
      <li><strong>Polymorphie (Vielgestaltigkeit):</strong> Objekte unterschiedlicher Klassen können über dieselbe Schnittstelle aufgerufen werden (z.B. überschriebene Methoden, Interfaces).</li>
      <li><strong>Abstraktion:</strong> Fokus auf das Wesentliche durch Weglassen irrelevanter Details (z.B. abstrakte Klassen).</li>
    </ul>

    <h4>2. SOLID-Prinzipien</h4>
    <ul>
      <li><strong>S</strong>ingle Responsibility: Eine Klasse sollte nur einen einzigen Grund zur Änderung haben.</li>
      <li><strong>O</strong>pen/Closed: Offen für Erweiterungen, geschlossen für Änderungen (z.B. durch Interfaces/Vererbung).</li>
      <li><strong>L</strong>iskov Substitution: Kindklassen müssen ihre Elternklassen ersetzen können, ohne dass das System bricht.</li>
      <li><strong>I</strong>nterface Segregation: Viele kleine, spezifische Interfaces sind besser als ein großes (Fat Interface).</li>
      <li><strong>D</strong>ependency Inversion: Abhaengigkeit von Abstraktionen, nicht von konkreten Implementierungen (Dependency Injection).</li>
    </ul>

    <h4>3. Design Patterns (Entwurfsmuster) (GoF)</h4>
    <p>Bewährte Lösungsansätze für wiederkehrende Design-Probleme:</p>
    <ul>
      <li><strong>Singleton (Erzeugung):</strong> Garantiert, dass nur genau eine Instanz einer Klasse existiert (z.B. Datenbank-Verbindung). <em>Achtung: Oft als Anti-Pattern angesehen wegen versteckten Abhängigkeiten.</em></li>
      <li><strong>Factory Method (Erzeugung):</strong> Erstellung von Objekten über eine zentrale Methode statt direktem <code>new</code>. Erleichtert den Austausch von Implementierungen.</li>
      <li><strong>Observer / Beobachter (Verhalten):</strong> Ein Subjekt benachrichtigt bei Statusänderung automatisch alle registrierten Beobachter (z.B. Event-Listener in UI).</li>
      <li><strong>Strategy (Verhalten):</strong> Algorithmen kapseln und zur Laufzeit austauschbar machen (z.B. verschiedene Sortierverfahren, Zahlungsarten).</li>
      <li><strong>MVC (Model-View-Controller):</strong> Architekturmuster zur Trennung von Daten (Model), Darstellung (View) und Steuerung (Controller).</li>
    </ul>
  `,

  '1.3': `
    <h3>UML-Modellierung (Struktur & Verhalten)</h3>
    <p>Die Unified Modeling Language (UML) ist der Standard zur Visualisierung von Software-Systemen.</p>

    <h4>1. Klassendiagramm (Struktur)</h4>
    <p>Kern der OOD. Zeigt das statische Modell.</p>
    <ul>
      <li><strong>Sichtbarkeiten:</strong> <code>+</code> (public), <code>-</code> (private), <code>#</code> (protected), <code>~</code> (package).</li>
      <li><strong>Assoziation:</strong> Allgemeine Beziehung zwischen zwei Klassen (z.B. Lehrer unterrichtet Schüler).</li>
      <li><strong>Aggregation (Leere Raute):</strong> "Hat-ein" (Has-A). Das Teil kann ohne das Ganze existieren (z.B. Auto &rarr; Reifen).</li>
      <li><strong>Komposition (Ausgefüllte Raute):</strong> Starke "Hat-ein" Beziehung. Das Teil stirbt mit dem Ganzen (z.B. Gebäude &rarr; Raum).</li>
      <li><strong>Generalisierung/Vererbung (Leerer Pfeil):</strong> "Ist-ein" (Is-A). Kindklasse erbt (z.B. PKW erbt von Fahrzeug).</li>
      <li><strong>Abhängigkeit (Gestrichelter Pfeil):</strong> Nutzt-Beziehung (z.B. Parameter in Methode).</li>
    </ul>

    <h4>2. Sequenzdiagramm (Verhalten)</h4>
    <p>Zeigt den Kommunikationsfluss zwischen Objekten über die Zeit.</p>
    <ul>
      <li><strong>Akteure/Objekte:</strong> Oben angeordnet.</li>
      <li><strong>Lebenslinien:</strong> Gestrichelte Linien nach unten. Balken (Aktivierungsblöcke) zeigen aktive Verarbeitung an.</li>
      <li><strong>Nachrichten:</strong> 
        <ul>
          <li>Durchgezogener Pfeil: Synchroner Aufruf (Warten auf Antwort).</li>
          <li>Gestrichelter Pfeil, offene Spitze: Asynchroner Aufruf (Kein Warten).</li>
          <li>Gestrichelter Pfeil: Rückgabewert (Return).</li>
        </ul>
      </li>
      <li><strong>Fragmente (Frames):</strong>
        <ul>
          <li><code>alt</code> (Alternative / If-Else)</li>
          <li><code>opt</code> (Optional / If ohne Else)</li>
          <li><code>loop</code> (Schleife)</li>
        </ul>
      </li>
    </ul>

    <h4>3. Weitere Diagramme</h4>
    <ul>
      <li><strong>Anwendungsfalldiagramm (Use Case):</strong> Zeigt Akteure, Systemgrenze und Use Cases. 
        <ul>
          <li><code>&lt;&lt;include&gt;&gt;</code>: Zwingende Ausführung eines Sub-Cases.</li>
          <li><code>&lt;&lt;extend&gt;&gt;</code>: Optionale Ausführung bei bestimmter Bedingung (Extension Point).</li>
        </ul>
      </li>
      <li><strong>Zustandsdiagramm:</strong> Zeigt die Lebensphasen <em>eines einzigen</em> Objekts (Start, Zustände, Transitionen via Events/Guards, Ende).</li>
      <li><strong>Aktivitätsdiagramm:</strong> Visualisiert Abläufe und Algorithmen (Gabelungen, Synchronisation).</li>
    </ul>
  `,

  '1.4': `
    <h3>Software-Architektur & Schnittstellen</h3>
    <p>Die Architektur bestimmt, wie ein System aus Komponenten zusammengesetzt ist und wie diese kommunizieren.</p>

    <h4>1. Architektur-Stile</h4>
    <ul>
      <li><strong>Monolith:</strong> Alle Komponenten in einer einzigen, deploybaren Einheit. Leicht am Anfang, schwer skalierbar und wartbar bei großen Teams.</li>
      <li><strong>Schichtenarchitektur (N-Tier) z.B. 3-Tier:</strong>
        <ol>
          <li>Präsentationsschicht (Client/UI)</li>
          <li>Logikschicht (Application/Business Logic)</li>
          <li>Datenhaltungsschicht (Database)</li>
        </ol>
        <em>Vorteil:</em> Separation of Concerns, Austauschbarkeit von Layern.
      </li>
      <li><strong>Microservices:</strong> Kleine, unabhängige Dienste, die je eine spezifische Geschäftsfunktion abbilden. Sie kommunizieren via APIs. Eigene DB pro Service möglich. <em>Vorteil:</em> Unabhängig skalierbar, flexibler Techeinsatz. <em>Nachteil:</em> Hohe Komplexität, verteilte Transaktionen.</li>
    </ul>

    <h4>2. REST APIs (Representational State Transfer)</h4>
    <p>Strukturierter Zugriff auf Web-Ressourcen via HTTP.</p>
    <ul>
      <li><strong>HTTP-Methoden:</strong>
        <ul>
          <li><code>GET</code>: Ressource abfragen (sicher, idempotent).</li>
          <li><code>POST</code>: Neue Ressource erstellen (nicht idempotent).</li>
          <li><code>PUT</code>: Gesamte Ressource ersetzen (idempotent).</li>
          <li><code>PATCH</code>: Ressource teilweise aktualisieren.</li>
          <li><code>DELETE</code>: Ressource löschen (idempotent).</li>
        </ul>
      </li>
      <li><strong>HTTP-Statuscodes:</strong>
        <ul>
          <li><code>2xx Erfolg</code> (200 OK, 201 Created, 204 No Content)</li>
          <li><code>3xx Umleitung</code> (301 Moved Permanently, 304 Not Modified)</li>
          <li><code>4xx Client-Fehler</code> (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)</li>
          <li><code>5xx Server-Fehler</code> (500 Internal Server Error, 502 Bad Gateway)</li>
        </ul>
      </li>
    </ul>

    <h4>3. Datenaustauschformate</h4>
    <ul>
      <li><strong>JSON (JavaScript Object Notation):</strong> Leichtgewichtig, gut lesbar, Key-Value Pairs, De-facto-Standard bei REST.</li>
      <li><strong>XML (Extensible Markup Language):</strong> Schwergewichtiger, stark typisiert (via XSD/DTD). Standard bei SOAP.</li>
    </ul>
  `,

  '1.5': `
    <h3>UI/UX & Ergonomie</h3>
    <p>Eine gute Software muss für den Nutzer intuitiv bedienbar, effizient und zugänglich sein.</p>

    <h4>1. Softwareergonomie (DIN EN ISO 9241-110)</h4>
    <p>Grundsätze der Dialoggestaltung:</p>
    <ul>
      <li><strong>Aufgabenangemessenheit:</strong> Untersützt bei der Erledigung der Arbeitsaufgabe ohne unnötigen Aufwand.</li>
      <li><strong>Selbstbeschreibungsfähigkeit:</strong> Jeder Dialogschritt ist durch Rückmeldungen verständlich.</li>
      <li><strong>Erwartungskonformität:</strong> Konsistent, entspricht den Erfahrungen des Nutzers.</li>
      <li><strong>Lernförderlichkeit:</strong> Die Software unterstützt den Nutzer beim Erlernen der Funktionen.</li>
      <li><strong>Steuerbarkeit:</strong> Nutzer kann Ablauf, Geschwindigkeit und Richtung beeinflussen.</li>
      <li><strong>Fehlertoleranz:</strong> Erwartetes Ziel wird trotz fehlerhafter Eingabe erreicht (z.B. Autokorrektur, Undo).</li>
      <li><strong>Individualisierbarkeit:</strong> Anpassbar an Nutzerbedürfnisse (z.B. Darkmode, Shortcuts).</li>
    </ul>

    <h4>2. Barrierefreiheit (Accessibility)</h4>
    <p>Software und Websites müssen für Menschen mit Einschränkungen (Sehen, Hören, Motorik, Kognition) nutzbar sein. Relevant ist hier die <strong>BITV 2.0</strong> (Behörden) und die <strong>WCAG 2.1</strong> (Web Content Accessibility Guidelines). Die 4 Prinzipien (POUR):</p>
    <ul>
      <li><strong>Perceivable (Wahrnehmbar):</strong> Text-Alternativen (Alt-Tags) für Bilder, ausreichender Farbkontrast.</li>
      <li><strong>Operable (Bedienbar):</strong> Alles muss per Tastatur erreichbar sein, genug Zeit für Eingaben, Tab-Reihenfolge.</li>
      <li><strong>Understandable (Verständlich):</strong> Einfache Sprache, klare Fehlermeldungen, vorhersehbares Verhalten.</li>
      <li><strong>Robust (Robust):</strong> Kompatibel mit Assistenztechnologien (Screenreader via ARIA).</li>
    </ul>

    <h4>3. Design-Prozess</h4>
    <ul>
      <li><strong>Wireframes:</strong> "Skelett" der UI. Grober Aufbau, Graustufen, Fokus auf Struktur.</li>
      <li><strong>Mockup:</strong> Statische Design-Skizze mit Farben, Typografie und Bildern.</li>
      <li><strong>Prototyp:</strong> Klickbar, simuliert die Interaktionen (Flow) der finalen App.</li>
    </ul>
  `,

  // --- PB 2: Entwicklung und Umsetzung von Algorithmen ---
  '2.1': `
    <h3>Algorithmen & Programmierung</h3>
    <p>Von der Logikkonzeption bis zur fehlerfreien Implementierung.</p>

    <h4>1. Logik-Darstellung</h4>
    <ul>
      <li><strong>Struktogramme (Nassi-Shneiderman):</strong> Zeigen den Ablaufbaustein für Baustein (Sequenz, Verzweigung/IF, Schleife/WHILE). Wichtig in der AP2: Oft musst du vorgegebenen Code in ein Struktogramm überführen oder umgekehrt.</li>
      <li><strong>Aktivitätsdiagramm (UML):</strong> Rauten für Entscheidungen (inkl. Guards in eckigen Klammern <code>[Bedingung]</code>). Breite schwarze Balken (Fors/Join) für parallele Abläufe.</li>
    </ul>

    <h4>2. Such- und Sortieralgorithmen</h4>
    <ul>
      <li><strong>Bubble Sort:</strong> Vergleicht benachbarte Elemente und tauscht sie bei falscher Reihenfolge. (Ineffizient, O(n^2)).</li>
      <li><strong>Selection Sort (MinSort):</strong> Sucht das kleinste Element im Array und setzt es ganz nach vorne.</li>
      <li><strong>Insertion Sort:</strong> Fügt das nächste Element an der passenden Stelle in den bereits sortierten vorderen Teil ein.</li>
      <li><strong>Lineare Suche:</strong> Geht Element für Element durch. (Dauer im Worst-Case = n).</li>
      <li><strong>Binäre Suche:</strong> Funktioniert <em>nur bei sortierten Listen</em>. Teilt die Liste in der Mitte, prüft ob gesuchter Wert größer oder kleiner ist, halbiert erneut. (Sehr effizient, O(log n)).</li>
    </ul>

    <h4>3. Rekursion vs. Iteration</h4>
    <ul>
      <li><strong>Iteration:</strong> Schleifenbetrieben (<code>for</code>, <code>while</code>). Speicherschonend.</li>
      <li><strong>Rekursion:</strong> Eine Funktion, die sich selbst aufruft. Benötigt eine <strong>Abbruchbedingung</strong> (Base Case), sonst droht ein Stack Overflow.</li>
    </ul>

    <h4>4. Fehlerbehandlung (Exception Handling)</h4>
    <p>Nutze <code>try { ... } catch (Exception e) { ... } finally { ... }</code>.</p>
    <ul>
      <li><strong>try:</strong> Gefährlicher Code (z.B. Dateizugriff, DB-Connect).</li>
      <li><strong>catch:</strong> Block, der ausgeführt wird, wenn der Fehler auftritt. Hier Loggen!</li>
      <li><strong>finally:</strong> Wird <em>immer</em> ausgeführt (auch bei Return oder Fehler), z.B. Ressourcen schließen (Connection close).</li>
    </ul>
  `,

  '2.2': `
    <h3>Datenbank-Design & Normalisierung</h3>
    <p>Von der Anforderungsanalyse zum soliden relationalen Datenbankschema.</p>

    <h4>1. ER-Modell (Entity-Relationship-Model nach Chen)</h4>
    <ul>
      <li><strong>Entitäten:</strong> Objekt, über das Daten gespeichert werden (Rechteck), z.B. <code>Kunde</code>.</li>
      <li><strong>Attribute:</strong> Eigenschaften (Oval), z.B. <code>Vorname</code>, Primärschlüssel unterstrichen.</li>
      <li><strong>Relationen:</strong> Beziehung zwischen Entitäten (Raute), z.B. <code>bestellt</code>.</li>
      <li><strong>Kardinalitäten (Chen-Notation):</strong> <code>1:1</code>, <code>1:n</code> (Ein Kunde bestellt n Artikel), <code>m:n</code> (Mehrere Schüler besuchen mehrere Kurse).</li>
    </ul>

    <h4>2. Vom ERM zum Relationalen Modell</h4>
    <ul>
      <li><strong>1:1</strong>: Den Primary Key (PK) der einen Tabelle als Foreign Key (FK) in die andere setzen.</li>
      <li><strong>1:n</strong>: Der PK der "1"-Seite wird als FK in der Tabelle der "n"-Seite eingetragen. (z.B. Kunden_ID landet als FK in tbl_Bestellungen).</li>
      <li><strong>m:n</strong>: Muss <strong>zwingend</strong> in eine Kreuztabelle/Verknüpfungstabelle aufgelöst werden! Die neue Tabelle enthält die PKs beider Tabellen als FK, welche zusammen einen zusammengesetzten PK bilden.</li>
    </ul>

    <h4>3. Normalisierung</h4>
    <p>Ziel: Vermeidung von Redundanzen (doppelte Daten) und Anomalien (Einfüge-, Änderungs-, Löschanomalie).</p>
    <ul>
      <li><strong>Nullte Normalform (0. NF):</strong> Daten unsortiert (z.B. in einer Excel-Tabelle), Mehrfachfelder erlaubt.</li>
      <li><strong>Erste Normalform (1. NF):</strong> Atomarität. Alle Attribute sind unteilbar (z.B. 'Name' aufteilen in 'Vorname' und 'Nachname'). Pro Feld nur EIN Wert, keine Mengen/Listen! Jeder Datensatz hat einen PK.</li>
      <li><strong>Zweite Normalform (2. NF):</strong> Ist in 1.NF + Jedes Nicht-Schlüssel-Attribut muss voll funktional abhängig vom <em>gesamten</em> (zusammengesetzten) Primärschlüssel sein. (Falls ein Attribut nur von einem Teil des PKs abhängt, muss es in eine neue Tabelle ausgelagert werden).</li>
      <li><strong>Dritte Normalform (3. NF):</strong> Ist in 2.NF + Keine transitiven Abhängigkeiten. Kein Nicht-Schlüssel-Attribut darf von einem anderen Nicht-Schlüssel-Attribut abhängen (z.B. PLZ &rarr; Ort. Ort auslagern in Tabelle tbl_PlzOrt, PLZ bleibt als FK).</li>
    </ul>

    <h4>4. Referenzielle Integrität</h4>
    <p>Regel, die sicherstellt, dass Fremdschlüssel nur Werte annehmen dürfen, die als Primärschlüssel in der referenzierten Tabelle existieren (Keine verwaisten Datensätze).</p>
    <ul>
      <li><strong>ON DELETE CASCADE:</strong> Wird Eltern-Datensatz gelöscht, werden alle Kinder auch gelöscht.</li>
      <li><strong>ON DELETE SET NULL:</strong> Foreign Key der Kinder wird auf NULL gesetzt.</li>
    </ul>
  `,

  '2.3': `
    <h3>Fortgeschrittenes SQL</h3>
    <p>Datenabfrage (DQL), Datenmanipulation (DML), Datendefinition (DDL) und Zugriffssteuerung (DCL).</p>

    <h4>1. JOINs - Tabellen verknüpfen</h4>
    <ul>
      <li><strong>INNER JOIN:</strong> Liefert Schnittmenge. Nur Datensätze, bei denen ein Match in beiden Tabellen vorliegt.</li>
      <li><strong>LEFT (OUTER) JOIN:</strong> Liefert <em>alle</em> Datensätze der linken Tabelle und die gematchten der rechten. Wo es rechts keinen Match gibt, steht <code>NULL</code> (Sehr wichtig für "Welche Kunden haben noch nie bestellt?").</li>
      <li><strong>RIGHT JOIN:</strong> Analog zu Left Join.</li>
      <li><strong>FULL JOIN:</strong> Liefert alles von links und rechts (Schnitt- inkl. Restmenge).</li>
      <li><strong>SELF JOIN:</strong> Die Tabelle wird mit sich selbst verknüpft (z.B. Mitarbeiterstruktur: Mitarbeiter.Chef_ID = Mitarbeiter.Mitarbeiter_ID. Erfordert <em>Aliase</em> <code>M1</code>, <code>M2</code>).</li>
    </ul>

    <h4>2. Aggregatfunktionen & Gruppierung</h4>
    <p>Funktionen, die mehrere Zeilen zu einem Ergebnis zusammenfassen: <code>COUNT()</code>, <code>SUM()</code>, <code>AVG()</code>, <code>MIN()</code>, <code>MAX()</code>.</p>
    <ul>
      <li>Sobald eine Aggregatfunktion genutzt wird, <strong>müssen alle nicht-aggregierten Spalten im <code>SELECT</code> zwingend im <code>GROUP BY</code> stehen!</strong></li>
      <li><strong>HAVING:</strong> Ist wie <code>WHERE</code>, aber für aggregierte Daten. (Erst wird gefiltert [WHERE], dann gruppiert [GROUP BY], dann auf Gruppen-Bedingungen gefiltert [HAVING]).</li>
    </ul>

    <h4>3. DML / DDL / TCL Statements</h4>
    <ul>
      <li><strong>DML (Manipulation):</strong> <code>INSERT INTO ... VALUES (...)</code>, <code>UPDATE ... SET ... WHERE</code>, <code>DELETE FROM ... WHERE</code>.</li>
      <li><strong>DDL (Definition):</strong> <code>CREATE TABLE tbl (...)</code>, <code>ALTER TABLE tbl ADD/DROP COLUMN</code>, <code>DROP TABLE ...</code></li>
      <li><strong>TCL (Transaktionen):</strong> <code>BEGIN TRANSACTION</code>, <code>COMMIT</code> (speichern), <code>ROLLBACK</code> (rückgängig machen bei Fehler). Ein Commit stellt das ACID-Prinzip sicher.</li>
    </ul>

    <h4>4. ACID-Prinzip bei Transaktionen</h4>
    <ul>
      <li><strong>A (Atomicity):</strong> Ganz oder gar nicht (Unteilbarkeit).</li>
      <li><strong>C (Consistency):</strong> Nach der Transaktion muss die DB in einem konsistenten Zustand gemäß Constraints sein.</li>
      <li><strong>I (Isolation):</strong> Parallel ablaufende Transaktionen dürfen sich nicht beeinflussen.</li>
      <li><strong>D (Durability):</strong> Bestätigte Transaktionen bleiben dauerhaft (auch bei Stromausfall).</li>
    </ul>

    <h4>5. Indizes & Views</h4>
    <ul>
      <li><strong>Index:</strong> Beschleunigt das Lesen drastisch (B-Baum Struktur), verlangsamt aber Schreib-Operationen (INSERT/UPDATE/DELETE). Primärschlüssel werden automatisch indiziert.</li>
      <li><strong>View (Sicht):</strong> Eine als Objekt in der DB gespeicherte SELECT-Abfrage (Virtuelle Tabelle). Vorteil: Kapselt komplexe Joins, erhöht Sicherheit (Beschränkung auf bestimmte Spalten), speichert selbst keine Daten (außer Materialized Views).</li>
    </ul>
  `,

  // --- PB 3: Fachrichtungsübergreifend ---
  '3.1': `
    <h3>Netzwerktechnik & Cloud</h3>

    <h4>1. Das OSI-Modell</h4>
    <p>Das Referenzmodell für Netzwerkprotokolle (7 Schichten):</p>
    <ol>
      <li><strong>Physical Layer (Bitübertragung):</strong> Kabel, Stecker, Hubs (Bits, 0/1).</li>
      <li><strong>Data Link Layer (Sicherungsschicht):</strong> MAC-Adressen, Error-Detection, Switches (Frames).</li>
      <li><strong>Network Layer (Vermittlungsschicht):</strong> IP-Adressen, Routing, Router (Pakete). Wichtigste Schicht für Entwickler (IP)!</li>
      <li><strong>Transport Layer (Transportschicht):</strong> TCP (zuverlässig, verbindungsortieniert, 3-Way-Handshake) vs. UDP (schnell, verbindungslos, z.B. Streaming, DNS), Ports (Segmente/Datagramme).</li>
      <li><strong>Session Layer (Sitzungsschicht):</strong> Sitzungsaufbau/-abbau.</li>
      <li><strong>Presentation Layer (Darstellungsschicht):</strong> Verschlüsselung, Datenkompression (ASCII, JPEG, SSL/TLS).</li>
      <li><strong>Application Layer (Anwendungsschicht):</strong> Interaktion mit Benutzer (HTTP, FTP, SMTP, DNS) (Daten).</li>
    </ol>

    <h4>2. Wichtige Protokolle & Ports</h4>
    <ul>
      <li><strong>DNS (Domain Name System, Port 53, meist UDP):</strong> Übersetzt Namen (google.de) in IP-Adressen. Rekursiver Name Server (Provider) fragt für dich bis zum Root-Server (Iterativ).</li>
      <li><strong>DHCP (Port 67/68, UDP):</strong> Automatische Vergabe von IP-Adressen (DORA-Prinzip: Discover, Offer, Request, Acknowledge).</li>
      <li><strong>HTTP/HTTPS (Port 80/443, TCP)</strong>.</li>
      <li><strong>SSH (Port 22, TCP):</strong> Sichere Shell. / <strong>FTP (Port 20/21, TCP)</strong>: File Transfer.</li>
    </ul>

    <h4>3. IPv6 & Subnetting Bascis</h4>
    <ul>
      <li><strong>IPv4:</strong> 32 Bit (z.B. 192.168.1.1). Ausgeschöpft.</li>
      <li><strong>IPv6:</strong> 128 Bit, hexadezimal notiert. Enorm großer Adressraum, IPsec standardmäßig integriert, kein NAT mehr zwingend nötig.</li>
    </ul>

    <h4>4. Virtualisierung & Cloud</h4>
    <ul>
      <li><strong>Hypervisor Typ 1 (Bare Metal):</strong> Läuft direkt auf der Hardware (z.B. VMware ESXi, Proxmox). Höhere Perfomance.</li>
      <li><strong>Hypervisor Typ 2 (Hosted):</strong> Läuft auf einem Host-OS (z.B. VirtualBox, VMware Workstation).</li>
      <li><strong>Container (Docker):</strong> Teilen sich den Kernel des Host-OS (Betriebssystem-Virtualisierung). Wesentlich leichtgewichtiger, starten in Millisekunden.</li>
      <li><strong>Cloud-Modelle:</strong>
        <ul>
          <li><code>IaaS</code> (Infrastructure): Du bekommst Blanko-Server/VMs (z.B. AWS EC2). OS pflegen tust DU.</li>
          <li><code>PaaS</code> (Platform): Du lieferst Code, Plattform stellt Runtime (z.B. Heroku, AWS Beanstalk). OS pflegt PROVIDER.</li>
          <li><code>SaaS</code> (Software): Komplett fertige App (z.B. M365, Salesforce).</li>
        </ul>
      </li>
    </ul>
  `,

  '3.2': `
    <h3>IT-Sicherheit (Security)</h3>

    <h4>1. Die 4 Schutzziele</h4>
    <ol>
      <li><strong>Vertraulichkeit (Confidentiality):</strong> Daten sind nur für Befugte lesbar (Maßnahme: Verschlüsselung, Rechtekonzept).</li>
      <li><strong>Integrität (Integrity):</strong> Daten dürfen nicht unbemerkt verändert/verfälscht werden (Maßnahme: Hashing, Digitale Signatur).</li>
      <li><strong>Verfügbarkeit (Availability):</strong> Systeme müssen jederzeit für Benutzer erreichbar sein (Maßnahme: RAID, Backups, USV, Load-Balancing).</li>
      <li><strong>Authentizität (Authenticity):</strong> Der Kommunikationspartner ist tatsächlich der, der er vorgibt zu sein (Maßnahme: Zertifikate, Signaturen).</li>
    </ol>

    <h4>2. Kryptografie (Verschlüsselung & Hashing)</h4>
    <ul>
      <li><strong>Symmetrisch (z.B. AES 256):</strong> <em>Ein</em> Schlüssel zum Ver-/Entschlüsseln. Extrem schnell. <em>Problem:</em> Wie tauscht man den Schlüssel sicher aus?</li>
      <li><strong>Asymmetrisch (z.B. RSA):</strong> Schlüsselpaar aus Private Key (geheim) und Public Key (öffentlich). Verschlüsselt man mit dem Public Key, kann <em>nur</em> der Private Key dechiffrieren. Langsam! Löst das Schlüsseltauschproblem.</li>
      <li><strong>Hybride Verschlüsselung (TLS/SSL):</strong> Nutzt Asymmetrisch zum sicheren Austausch eines Session-Keys (Symmetrisch). Danach wird der schnelle symmetrische Key für die Dauer der Sitzung für die eigentlichen Daten (AES) genutzt.</li>
      <li><strong>Hashing (z.B. SHA-256, bcrypt für Passwörter):</strong> <em>Einweg-Funktion!</em> Aus Text wird ein Hash generiert fester Länge. Aus dem Hash kann nicht der Klartext berechnet werden (Keine Entschlüsselung möglich!). Dient zur Prüfung der Integrität (z.B. Passwortabgleich).</li>
    </ul>

    <h4>3. Digitale Signatur</h4>
    <p>Dient zum Nachweis der Integrität und des Urhebers:</p>
    <ol>
      <li>Sender hasht das Dokument.</li>
      <li>Sender verschlüsselt den Hash <strong>mit seinem Private Key!</strong> = Signatur.</li>
      <li>Dokument + Signatur senden.</li>
      <li>Empfänger entschlüsselt Signatur mit Public Key des Senders &rarr; erhält den Hash.</li>
      <li>Empfänger hasht Dokument selbst und vergleicht beide Hashes. Match = Integrität & Authentizität bestätigt.</li>
    </ol>

    <h4>4. Wichtige Web-Angriffe & Abwehr</h4>
    <ul>
      <li><strong>SQL-Injection:</strong> Einschleusen von Schadcode über Inputfelder. <em>Abwehr:</em> Prepared Statements / Parameterized Queries. Niemals Strings zusammenbauen (String-Konkatenation).</li>
      <li><strong>XSS (Cross-Site Scripting):</strong> Einschleusen von bösem JavaScript in die Webseite (z.B. im Gästebuch), das bei anderen Nutzern ausgeführt wird und z.B. Session-Cookies klaut. <em>Abwehr:</em> HTML-Encoding, Output-Sanitization.</li>
      <li><strong>CSRF (Cross-Site Request Forgery):</strong> Angreifer trickst Nutzer aus, unbemerkt Aktionen auszuführen (z.B. via Image-Tag). <em>Abwehr:</em> CSRF-Tokens (Anti-Forgery-Tokens in Forms).</li>
    </ul>
  `,

  '3.3': `
    <h3>Qualitätssicherung & DevOps</h3>

    <h4>1. Teststufen (Das V-Modell)</h4>
    <ol>
      <li><strong>Modultest / Unit-Test:</strong> Isoliertes Testen der kleinsten Softwarebausteine (z.B. eine Methode). Häufig durch Mocks/Stubs isoliert. White-Box-Ansatz. (Verantwortlich: Entwickler)</li>
      <li><strong>Integrationstest:</strong> Testet das Zusammenspiel mehrerer Module oder Subsysteme. (Verantwortlich: Entwickler/Tester)</li>
      <li><strong>Systemtest:</strong> Testet das Gesamtsystem gegen die definierten Anforderungen im Pflichtenheft unter produktionsähnlichen Bedingungen. Black-Box-Ansatz. (Tester)</li>
      <li><strong>Abnahmetest (Akzeptanztest):</strong> Testet, ob die Software den Bedürfnissen des Kunden entspricht. (Verantwortlich: Kunde / Product Owner).</li>
    </ol>

    <h4>2. Testmethoden & Metriken</h4>
    <ul>
      <li><strong>Black-Box-Test:</strong> Tester kennt den Quellcode nicht. Testet Input vs. Output (funktionale Anforderungen).</li>
      <li><strong>White-Box-Test:</strong> Tester kennt Sourcecode. Testet internen Logikfluss (If-Zweige, Schleifen).</li>
      <li><strong>Äquivalenzklassenbildung:</strong> (Black-Box Methode) Eingaben in Klassen aufteilen, bei denen das Programm sich gleich verhalten soll. Man testet pro Klasse nur 1-2 Werte, um Aufwand zu reduzieren (z.B. Gültig: 1-100, Ungültig: <1, Ungültig: >100).</li>
      <li><strong>Grenzwertanalyse:</strong> (Black-Box) Testet exakt an den Rändern der Äquivalenzklassen (z.B. 0, 1, 100, 101), da dort meist Off-By-One-Fehler passieren (<= vs <).</li>
      <li><strong>Code Coverage (C0, C1, C2):</strong> 
        <ul>
          <li>Zeilenabdeckung (C0, Statement Coverage): % der ausgeführten Zeilen (schwach).</li>
          <li>Zweigabdeckung (C1, Branch Coverage): Wurde jede Verzweigung (True/False) mind. 1x durchlaufen? (Standard).</li>
          <li>Bedingungsabdeckung (C2, Condition / Path Coverage): Jede Teildebedingung im IF wurde separat auf True/False getestet. (Sehr stark).</li>
        </ul>
      </li>
    </ul>

    <h4>3. TDD - Test Driven Development</h4>
    <p>Ablauf (Red, Green, Refactor):</p>
    <ol>
      <li>Test schreiben (und fehlschlagen sehen -> Red).</li>
      <li>Mindestcode schreiben, um Test zu bestehen (-> Green).</li>
      <li>Code optimieren (Refactoring), Tests müssen grün bleiben.</li>
    </ol>

    <h4>4. Versionsverwaltung (Git)</h4>
    <ul>
      <li>Zentrale Architektur vs. Dezentral/Verteilt (bei Git hat jeder den vollen Quellcode lokal).</li>
      <li><strong>Befehle:</strong> 
        <code>add</code> (in Staging Area packen), 
        <code>commit</code> (Lokal ins Repo snapshotten), 
        <code>push</code> (auf Remote-Server wie GitHub hochladen), 
        <code>pull</code> (Updates vom Server laden), 
        <code>branch</code> (Abzweigung erzeugen), 
        <code>merge</code> (Zweige zusammenführen, erzeugt Merge-Commit).
      </li>
    </ul>
  `,

  '3.4': `
    <h3>Datenschutz (DSGVO) & Recht</h3>

    <h4>1. Die DSGVO-Prinzipien (Art. 5)</h4>
    <p>Die Verarbeitung personenbezogener Daten muss zwingend diesen Prinzipien folgen:</p>
    <ul>
      <li><strong>Rechtmäßigkeit & Transparenz:</strong> Es braucht immer eine Erlaubnis (Erlaubnisvorbehalt): Z.B. Einwilligung, Vertragserfüllung oder berechtigtes Interesse. Der Betroffene muss informiert werden.</li>
      <li><strong>Zweckbindung:</strong> Daten dürfen nur für den bei Erhebung festgelegten, legitimen Zweck verarbeitet werden.</li>
      <li><strong>Datenminimierung (Datensparsamkeit):</strong> Nur sammeln, was zwingend nötig ist (z.B. für Newsletter reicht E-Mail, kein Geburtsdatum).</li>
      <li><strong>Richtigkeit:</strong> Daten müssen aktuell und korrekt gehalten werden.</li>
      <li><strong>Speicherbegrenzung:</strong> Sobald der Zweck wegfällt, müssen Daten gelöscht werden (Ausnahme: Gesetzliche Aufbewahrungsfristen von z.B. 10 Jahren bei Rechnungen [HGB]).</li>
      <li><strong>Integrität & Vertraulichkeit (TOMs):</strong> Daten müssen technisch und organisatorisch vor unbefugtem Zugriff gesichert werden (Verschlüsselung, Zugangskontrolle).</li>
    </ul>

    <h4>2. Wichtige Konzepte der DSGVO</h4>
    <ul>
      <li><strong>Betroffenenrechte:</strong> Recht auf Auskunft (Art. 15), Recht auf vergessene werden / Löschung (Art. 17), Recht auf Datenübertragbarkeit.</li>
      <li><strong>Besondere Kategorien von Daten (Art. 9):</strong> (Gesundheitsdaten, Biometrie, Religion, Politische Meinung) <em>Besonders streng geschützt!</em> Hier bedarf es zwingend einer ausdrücklichen Einwilligung.</li>
      <li><strong>Auftragsverarbeitungsvertrag (AVV):</strong> MUSS geschlossen werden, wenn Personendaten von einem externen Dienstleister verarbeitet werden (z.B. Cloud-Hoster, externes Lohnbüro).</li>
      <li><strong>Datenschutzbeauftragter (DSB):</strong> Pflicht in der Regel ab 20 Mitarbeitern, die ständig mit automatisierter Datenverarbeitung beschäftigt sind. Darf kein Geschäftsführer sein (Interessenkonflikt).</li>
    </ul>

    <h4>3. Urheberrecht / Lizenzen</h4>
    <p>Software ("Werke") ist urheberrechtlich geschützt ab Zeitpunkt der Schaffung.</p>
    <ul>
      <li><strong>Proprietär:</strong> EULA (End User License Agreement), Nutzungsrecht erkauft.</li>
      <li><strong>Open Source - Permissiv:</strong> (MIT, Apache) -> Man darf Code ändern, gewerblich nutzen und auch als proprietäre Software weiterverkaufen/verschließen ("Copycenter").</li>
      <li><strong>Open Source - Restriktiv (Copyleft):</strong> (GPL - Gnu Public License) -> Man darf Code nutzen, ABER: Wenn man ihn modifiziert und veröffentlicht, muss zwingend das Gesamtwerk wieder unter derselben Open Source Lizenz stehen ("Virale Lizenz").</li>
    </ul>
  `,

  // --- PB 4: Wirtschafts- und Sozialkunde ---
  '4.1': `
    <h3>Arbeits- & Tarifrecht</h3>
    
    <h4>1. Gesetzliche Rahmenbedingungen</h4>
    <ul>
      <li><strong>Arbeitszeitgesetz (ArbZG):</strong> Regelt Pausen (nach 6h mind. 30 Min, nach 9h mind. 45 Min). Max 8h / max 10h bei Ausgleich. Ruhezeit nach Schicht: mind. 11h.</li>
      <li><strong>Jugendarbeitsschutzgesetz (JArbSchG):</strong> Für unter 18-Jährige. Max 5 Tage/Woche, max 40h, max 8h/Tag. Keine Wochenendarbeit. Mehr Urlaub.</li>
      <li><strong>Kündigungsschutzgesetz (KSchG):</strong> Greift i.d.R. nach 6 Monaten Probezeit in Betrieben mit >10 Vollzeit-Mitarbeitern. Kündigung nur zulässig, wenn personenbedingt, verhaltensbedingt (Abmahnung vorher nötig!) oder betriebsbedingt (Sozialauswahl!).</li>
      <li><strong>Kündigungsfristen (Gesetzlich BGB):</strong> Arbeitnehmer -> 4 Wochen zum 15. oder Ende d.M.</li>
    </ul>

    <h4>2. Ausbildungsvertrag (BBiG)</h4>
    <ul>
      <li>Muss vor Ausbildungsbeginn schriftlich geschlossen sein.</li>
      <li>Probezeit zwingend: 1 - 4 Monate. Kündigung in der Probezeit ohne Grund von Tag auf Tag fristlos möglich.</li>
      <li>Nach Probezeit: Azubi kündigt mit 4 Wochen Frist (Berufsaufgabe/-wechsel). Betrieb kann nur fristlos kündigen (Wichtiger Grund wie Diebstahl) - ordentlich ist der Azubi quasi unkündbar!</li>
    </ul>

    <h4>3. Tarifrecht & Mitbestimmung</h4>
    <ul>
      <li><strong>Tarifautonomie:</strong> Staat mischt sich nicht ein. Gewerkschaften (Arbeitnehmer) und Arbeitgeberverbände handeln Tarife aus (Manteltarifvertrag für URL/Schichten, Lohn-/Gehaltstarifvertrag für Geld). Streikrecht.</li>
      <li><strong>Betriebsrat (Betriebsverfassungsgesetz - BetrVG):</strong> Kann in Betrieben ab 5 ständigen, wahlberechtigten Mitarbeitern gewählt werden. 
        <ul>
          <li><strong>Mitbestimmungsrechte:</strong> (Zwingend! Zustimmen nötig) bei sozialen Angelegenheiten z.B. Arbeitszeiten, Überstunden, Urlaubsplan.</li>
          <li><strong>Mitwirkungsrechte:</strong> (Betriebsrat muss angehört werden) bei Kündigungen! Eine Kündigung ohne BR-Anhörung ist nichtig.</li>
        </ul>
      </li>
    </ul>

    <h4>4. Sozialversicherungen</h4>
    <p>Beiträge werden zur Hälfte geteilt (Arbeitnehmer / Arbeitgeber), <strong>außer bei Unfallversicherung, die zahlt AG 100%.</strong></p>
    <ol>
      <li><strong>Krankenversicherung (KV):</strong> Krankenkassen, z.B. AOK, TK. (~14,6% + Zusatzbeitrag)</li>
      <li><strong>Pflegeversicherung (PV):</strong> Pflegekassen. Kinderlose zahlen etwas mehr.</li>
      <li><strong>Rentenversicherung (RV):</strong> DRV Bund (Macht mit 18,6% den größten Posten aus). (Generationenvertrag).</li>
      <li><strong>Arbeitslosenversicherung (AV):</strong> Bundesagentur für Arbeit.</li>
      <li><strong>Unfallversicherung (UV):</strong> Berufsgenossenschaften (Volle Kosten trägt AG!). Gilt für Arbeitsweg und Arbeit.</li>
    </ol>
  `,

  '4.2': `
    <h3>Der Betrieb & Markt</h3>

    <h4>1. Rechtsformen im Überblick</h4>
    <ul>
      <li><strong>Einzelkaufmann / GbR / OHG (Personengesellschaften):</strong>
        <ul>
          <li>Kein Mindestkapital.</li>
          <li>Vollhaftung! Du haftest drastisch gesagt mit Haus und Hof (Privatvermögen) + Geschäftsvermögen.</li>
        </ul>
      </li>
      <li><strong>GmbH (Gesellschaft mit beschränkter Haftung) - Kapitalgesellschaft:</strong>
        <ul>
          <li>Mindeststammkapital: 25.000 €</li>
          <li>Haftung nur mit dem Gesellschaftsvermögen.</li>
          <li>Organe: Geschäftsführung, Gesellschafterversammlung.</li>
          <li>Notarieller Vertrag & Handelsregistereintrag (Abt. B) zwingend!</li>
        </ul>
      </li>
      <li><strong>AG (Aktiengesellschaft) - Kapitalgesellschaft:</strong>
        <ul>
          <li>Grundkapital: 50.000 €</li>
          <li>Anteile (Aktien) handelbar.</li>
          <li>Organe: Vorstand (Geschäftsführung), Aufsichtsrat (Überwachung), Hauptversammlung.</li>
        </ul>
      </li>
    </ul>

    <h4>2. Marktmechanismen & Wettbewerb</h4>
    <ul>
      <li><strong>Preisbildung:</strong> Entsteht dort wo Angebot und Nachfrage gleich groß sind (Gleichgewichtspreis).</li>
      <li><strong>Monopol:</strong> Einer bietet an, viele fragen nach (Preissetzungsmacht z.B. Bahnstreckenbetrieb).</li>
      <li><strong>Oligopol:</strong> Wenige große Anbieter, viele kleine Nachfrager (z.B. Mobilfunkmarkt, Tankstellen).</li>
      <li><strong>Polypol:</strong> Viele Anbieter, viele Nachfrager (ideale Wettbewerbsform, z.B. Wochenmarkt, App-Developer).</li>
    </ul>

    <h4>3. Marketing (Die 4 P's)</h4>
    <p>Marketing Mix, wichtig für IT-Projekte bei Softwarevertrieb:</p>
    <ol>
      <li><strong>Product (Produktpolitik):</strong> Was verkaufe ich? (Design, Qualität, Features, Marke, Verpackung)</li>
      <li><strong>Price (Preispolitik):</strong> Wie viel verlange ich? (Rabatte, Zahlungsbedingungen, Skimming- vs. Penetration-Strategie)</li>
      <li><strong>Place (Distributionspolitik):</strong> Wie kommt das Produkt zum Kunden? (Direktvertrieb, SaaS/Download, Partnerkanäle, App Stores)</li>
      <li><strong>Promotion (Kommunikationspolitik):</strong> Wie wird das Produkt bekannt? (Werbung, SEO, Sponsoring, PR)</li>
    </ol>

    <h4>4. Betriebsziele</h4>
    <ul>
      <li><strong>Ökonomisch:</strong> Gewinnmaximierung, Umsatzsteigerung, Kostensenkung (Bsp: Wir produzieren billiger in Fernost).</li>
      <li><strong>Ökologisch:</strong> Umweltschutz, CO2 Reduktion, Green-IT / Rechenzentrum (Bsp: Ökostrom nutzen).</li>
      <li><strong>Sozial:</strong> Mitarbeitersicherheit, Arbeitszufriedenheit, Faire Löhne (Bsp: Homeoffice anbieten).</li>
      <li><strong>Zielkonflikt:</strong> Ökonomische Kostensenkung beißt sich oft mit Ökologie oder Sozialzielen.</li>
    </ul>
  `,

  '4.3': `
    <h3>Finanzierung & Buchführung</h3>

    <h4>1. Rechnungs-Elemente (Pflichtangaben)</h4>
    <p>Nach § 14 UStG, bei Rechnungen über 250 € brutto:</p>
    <ul>
      <li>Vollständiger Name und Anschrift (Rechnungssteller & Rechnungsempfänger)</li>
      <li>Steuernummer oder USt-IdNr. des leistenden Unternehmers</li>
      <li>Fortlaufende, einmalige Rechnungsnummer & Ausstellungsdatum</li>
      <li>Menge (Anzahl Lizenzen, Stunden) und Art (Entwicklung, Support) der Leistung</li>
      <li>Datum/Zeitraum der Leistung/Lieferung</li>
      <li>Entgelt netto, Steuersatz (z.B. 19%) und Umsatzsteuerbetrag separat!</li>
    </ul>

    <h4>2. Finanzierung (Welches Kapital brauche ich?)</h4>
    <ul>
      <li><strong>Innenfinanzierung:</strong> Kapital generiert sich von innen (z.B. Gewinne/Rücklagen werden einbehalten, Verkauf nicht benötigter Server-Anlagen -> Kapitalfreisetzung).</li>
      <li><strong>Außenfinanzierung:</strong> Geld kommt von außen.
        <ul>
          <li><strong>Fremdfinanzierung:</strong> Kredit bei Bank (kostet Zinsen, kein Mitspracherecht d. Bank). Leasing (Maschine gehört mir nicht, monatliche Rate).</li>
          <li><strong>Beteiligungsfinanzierung (Eigenkapital):</strong> Ein neuer Gesellschafter/Investor steigt ein. Gibt frisches Geld, will aber Mitspracherecht/Rendite.</li>
        </ul>
      </li>
    </ul>

    <h4>3. Umsatzsteuer & Vorsteuerabzug</h4>
    <ul>
      <li>Als Unternehmen zahlst DU <code>Vorsteuern</code> beim Einkauf von Waren (z.B. Laptops).</li>
      <li>Du schlägst deine eigene <code>Umsatzsteuer</code> auf den Rechnungspreis auf und fängst sie vom Endkunden ein (Mehrwertsteuer).</li>
      <li>Ans Finanzamt zahlst du nur die Differenzfaktor (<code>Zahllast = Vereinnahmte Umsatzsteuer - Bezahlte Vorsteuer</code>). Die Steuer wird vom Endverbraucher getragen, für Unternehmen ist sie durchlaufender Posten.</li>
    </ul>

    <h4>4. Berechnung Kosten/Gewinn (KLR)</h4>
    <ul>
      <li><strong>Fixkosten (Kf):</strong> Miete Serverraum. Sind immer da, auch wenn du 0 Stück produzierst.</li>
      <li><strong>Variable Kosten (Kv):</strong> Softwarelizenz pro User. Steigen proportional mit der Menge (x).</li>
      <li>Gesamtkosten (K) = Kf + (Kv * x)</li>
      <li><strong>Break-Even-Point (Gewinnschwelle):</strong> Der Punkt (Stückzahl), ab dem Umsatz genau den Gesamtkosten entspricht. Ab jetzt machst du Gewinn.</li>
      <li>Formel: <code>Menge (x) = Fixkosten / (Stückpreis - Variable Stückkosten)</code></li>
    </ul>
  `,

  '4.4': `
    <h3>Nachhaltigkeit & Gesellschaft</h3>

    <h4>1. Green IT & Umweltschutz</h4>
    <p>Die IT hat einen enormen Strombedarf und erzeugt viel Elektroschrott.</p>
    <ul>
      <li><strong>Green-IT in The IT:</strong> Reduzierung des Energieverbrauchs in Rechenzentren (Virtualisierung, effiziente Kühlung).</li>
      <li><strong>Green-IT by IT:</strong> Durch Software Ressourcen woanders sparen (z.B. Videokonferenz statt Flug).</li>
      <li><strong>ElektroG (RoHS / WEEE):</strong> Rücknahme- und Entsorgungspflicht vom Hersteller für alte Server, Laptops (Sondermüll vermeiden).</li>
    </ul>

    <h4>2. Globalisierung</h4>
    <ul>
      <li><strong>Vorteile:</strong> Weltweite Teams, geringe Hardware-Kosten (Produktion Asien), weltweit Software deployen als SaaS. Neue Absatzmärkte.</li>
      <li><strong>Nachteile:</strong> Wettbewerbsdruck, Abhängigkeit von Lieferketten (z.B. Chipmangel), unterschiedliche gesetzliche/kulturelle Hürden bei Teams (Timezones, Sprache).</li>
    </ul>

    <h4>3. Arbeitskräftewandel & Weiterbildung</h4>
    <ul>
      <li>Die IT altert schnell ("Halbwertszeit des Wissens ist kurz"). <strong>Lebenslanges Lernen (LLL)</strong> ist in der Anwendungsentwicklung elementar.</li>
      <li>Gefahr der Automatisierung (KI), Notwendigkeit von Softskills und "Deep Work".</li>
      <li>Arbeitgeber bietet Schulungen / Zertifizierungen.</li>
    </ul>

    <h4>4. Security-Awareness (Faktor Mensch)</h4>
    <p>Social Engineering, Phishing, Schulungen. Die beste technische Firewall bringt nichts, wenn der Mensch davor manipuliert wird.</p>
  `,
};

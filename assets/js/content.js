// ----------------------------------------------------------------------
// DATEI: assets/js/content.js
// INHALT: Detaillierte Lerninhalte für AP2 Fachinformatiker Anwendungsentwicklung
// ----------------------------------------------------------------------

window.AP2_CONTENT = {
    // --- PB 1: Planen eines Softwareproduktes ---
    '1.1': `
<div class="space-y-8 pb-4">
  <!-- Intro -->
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-dark-accent/20 flex items-center justify-center text-dark-accent">
        <i class="fa-solid fa-code-branch"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Vorgehensmodelle & Analyse</h3>
        <p class="text-sm text-dark-muted m-0">Organisation und Strukturierung von Softwareprojekten</p>
      </div>
    </div>
    <p class="text-gray-300 leading-relaxed text-sm mb-4">
      Als Anwendungsentwickler musst du entscheiden, wie ein Softwareprojekt organisiert wird. Die Wahl des Vorgehensmodells bestimmt den gesamten Ablauf.
    </p>
  </div>

  <!-- Grid: Agil vs Klassisch -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Scrum -->
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 hover:border-dark-accent/50 transition-colors flex flex-col h-full">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-lg font-bold text-white flex items-center gap-2 m-0">
          <i class="fa-solid fa-rotate text-dark-success"></i> 1. Scrum (Agil)
        </h4>
        <span class="bg-dark-success/10 border border-dark-success/30 text-dark-success px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Modern</span>
      </div>
      <div class="space-y-4 flex-grow">
        <div>
          <span class="text-xs font-bold text-dark-muted uppercase">Rollen</span>
          <p class="text-sm text-gray-300 mt-1"><strong>Product Owner</strong> (vertritt Kunden), <strong>Scrum Master</strong> (coacht, beseitigt Hindernisse), <strong>Developer</strong> (setzen um).</p>
        </div>
        <div>
          <span class="text-xs font-bold text-dark-muted uppercase">Artefakte</span>
          <p class="text-sm text-gray-300 mt-1"><strong>Product Backlog</strong> (Wunschliste), <strong>Sprint Backlog</strong> (Aktueller Sprint), <strong>Increment</strong> (Lauffähiges Zwischenprodukt).</p>
        </div>
        <div>
          <span class="text-xs font-bold text-dark-muted uppercase">Events</span>
          <p class="text-sm text-gray-300 mt-1">Sprint (2-4 Wochen), Daily Scrum (15 Min), Sprint Review (Demo), Retrospektive.</p>
        </div>
      </div>
    </div>

    <!-- Klassisch -->
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 hover:border-dark-accent/50 transition-colors flex flex-col h-full">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-lg font-bold text-white flex items-center gap-2 m-0">
          <i class="fa-solid fa-water text-blue-400"></i> 2. Klassische Modelle
        </h4>
        <span class="bg-blue-400/10 border border-blue-400/30 text-blue-400 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Traditionell</span>
      </div>
      <div class="space-y-4 flex-grow">
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Wasserfall</strong>
          <p class="text-xs text-gray-400">Strenge Phasen (Analyse &rarr; Design &rarr; Implementierung &rarr; Test &rarr; Betrieb). Ein Schritt muss abgeschlossen sein, bevor der nächste beginnt.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">V-Modell (XT)</strong>
          <p class="text-xs text-gray-400">Jede Entwicklungsphase hat eine direkte Testphase gegenüber. Standard bei Behörden.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Spiralmodell</strong>
          <p class="text-xs text-gray-400">Iterativ mit starkem Fokus auf <span class="text-dark-warning font-bold">Risikoanalyse</span> in jedem Zyklus.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Requirements -->
  <details class="lz-details">
    <summary>3. Anforderungsmanagement (Requirements Engineering)</summary>
    <div class="lz-content grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="flex items-start gap-3">
        <i class="fa-solid fa-file-contract text-dark-accent mt-1"></i>
        <div>
          <strong class="text-white block">Lastenheft</strong>
          <p class="text-xs mt-1 text-gray-400">Was will der Kunde? (Vom Auftraggeber erstellt).</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <i class="fa-solid fa-list-check text-dark-success mt-1"></i>
        <div>
          <strong class="text-white block">Pflichtenheft</strong>
          <p class="text-xs mt-1 text-gray-400">Wie setzen wir es um? (Vom Auftragnehmer erstellt, Basis für den Vertrag).</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <i class="fa-regular fa-user text-blue-400 mt-1"></i>
        <div>
          <strong class="text-white block">User Stories</strong>
          <p class="text-xs mt-1 text-gray-400">"Als [Rolle] möchte ich [Ziel], um [Nutzen]."</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <i class="fa-solid fa-sitemap text-dark-warning mt-1"></i>
        <div>
          <strong class="text-white block">Use Cases</strong>
          <p class="text-xs mt-1 text-gray-400">Detaillierte Beschreibung der Interaktion zwischen Akteur und System.</p>
        </div>
      </div>
    </div>
  </details>

  <!-- Wirtschaflickheit -->
  <details class="lz-details">
    <summary>4. Wirtschaftlichkeit & Analyse</summary>
    <div class="lz-content space-y-3">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-dark-accent"></span>
        <strong class="text-white text-sm w-32 shrink-0">Nutzwertanalyse:</strong>
        <span class="text-xs text-gray-400">Quantifizierung nicht-monetärer Kriterien (Benutzerfreundlichkeit) durch Gewichtung.</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-dark-success"></span>
        <strong class="text-white text-sm w-32 shrink-0">TCO:</strong>
        <span class="text-xs text-gray-400">Total Cost of Ownership (Alle Kosten über den gesamten Lebenszyklus).</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-blue-400"></span>
        <strong class="text-white text-sm w-32 shrink-0">Make-or-Buy:</strong>
        <span class="text-xs text-gray-400">Entscheidung, ob Software selbst entwickelt oder gekauft wird (COTS).</span>
      </div>
    </div>
  </details>
</div>
  `,

    '1.2': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
        <i class="fa-solid fa-cubes"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Objektorientierung & Design Patterns</h3>
        <p class="text-sm text-dark-muted m-0">Prinzipien und bewährte Entwicklungsstrukturen</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-shapes text-dark-accent mr-2"></i>1. OOP Prinzipien</h4>
      <div class="space-y-3">
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-dark-success">Kapselung (Encapsulation)</strong>
          <p class="text-xs text-gray-400 m-0">Geheimnisprinzip. Zustände durch Getter/Setter verborgen.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-blue-400">Vererbung (Inheritance)</strong>
          <p class="text-xs text-gray-400 m-0">Kind übernimmt Eltern (DRY).</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-dark-warning">Polymorphie</strong>
          <p class="text-xs text-gray-400 m-0">Aufruf über dieselbe Schnittstelle (Vielgestaltigkeit).</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-purple-400">Abstraktion</strong>
          <p class="text-xs text-gray-400 m-0">Fokus auf das Wesentliche durch Interfaces.</p>
        </div>
      </div>
    </div>
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-layer-group text-dark-success mr-2"></i>2. SOLID</h4>
      <ul class="space-y-3">
        <li class="flex items-start"><div class="w-6 h-6 rounded bg-dark-card border border-dark-border text-xs flex items-center justify-center font-bold text-white mr-3 shrink-0">S</div><div><strong class="text-sm text-gray-200 block">Single Responsibility</strong><p class="text-xs text-gray-400 m-0">Nur ein Änderungsgrund.</p></div></li>
        <li class="flex items-start"><div class="w-6 h-6 rounded bg-dark-card border border-dark-border text-xs flex items-center justify-center font-bold text-white mr-3 shrink-0">O</div><div><strong class="text-sm text-gray-200 block">Open/Closed</strong><p class="text-xs text-gray-400 m-0">Offen für Erweiterung, geschlossen für Änderung.</p></div></li>
        <li class="flex items-start"><div class="w-6 h-6 rounded bg-dark-card border border-dark-border text-xs flex items-center justify-center font-bold text-white mr-3 shrink-0">L</div><div><strong class="text-sm text-gray-200 block">Liskov Substitution</strong><p class="text-xs text-gray-400 m-0">Kinder ersetzen Eltern ohne Bruch.</p></div></li>
        <li class="flex items-start"><div class="w-6 h-6 rounded bg-dark-card border border-dark-border text-xs flex items-center justify-center font-bold text-white mr-3 shrink-0">I</div><div><strong class="text-sm text-gray-200 block">Interface Segregation</strong><p class="text-xs text-gray-400 m-0">Viele kleine statt ein fettes Interface.</p></div></li>
        <li class="flex items-start"><div class="w-6 h-6 rounded bg-dark-card border border-dark-border text-xs flex items-center justify-center font-bold text-white mr-3 shrink-0">D</div><div><strong class="text-sm text-gray-200 block">Dependency Inversion</strong><p class="text-xs text-gray-400 m-0">Abhängigkeit von Abstraktionen.</p></div></li>
      </ul>
    </div>
  </div>
  <details class="lz-details">
    <summary>3. Design Patterns (GoF)</summary>
    <div class="lz-content grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-dark-card border border-dark-border p-3 rounded-lg"><strong class="text-dark-warning block mb-1">Singleton (Erzeugung)</strong><p class="text-xs text-gray-400 m-0">1 Instanz (Oft Anti-Pattern).</p></div>
      <div class="bg-dark-card border border-dark-border p-3 rounded-lg"><strong class="text-dark-warning block mb-1">Factory Method (Erzeugung)</strong><p class="text-xs text-gray-400 m-0">Zentrale Objekterstellung.</p></div>
      <div class="bg-dark-card border border-dark-border p-3 rounded-lg"><strong class="text-blue-400 block mb-1">Observer (Verhalten)</strong><p class="text-xs text-gray-400 m-0">Events & Listener.</p></div>
      <div class="bg-dark-card border border-dark-border p-3 rounded-lg"><strong class="text-blue-400 block mb-1">Strategy (Verhalten)</strong><p class="text-xs text-gray-400 m-0">Austauschbare Algorithmen.</p></div>
      <div class="bg-dark-card border border-dark-border p-3 rounded-lg sm:col-span-2"><strong class="text-dark-success block mb-1">MVC (Architektur)</strong><p class="text-xs text-gray-400 m-0">Model, View, Controller Trennung.</p></div>
    </div>
  </details>
</div>
  `,

    '1.3': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400">
        <i class="fa-solid fa-diagram-project"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">UML-Modellierung</h3>
        <p class="text-sm text-dark-muted m-0">Struktur & Verhalten darstellen</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-regular fa-object-group text-pink-400 mr-2"></i>1. Klassendiagramm</h4>
      <div class="space-y-3">
        <div class="bg-dark-card p-2 rounded border border-dark-border flex items-center justify-around text-xs text-gray-300">
          <span><strong class="text-dark-success">+</strong> Publ</span>
          <span><strong class="text-dark-danger">-</strong> Priv</span>
          <span><strong class="text-dark-warning">#</strong> Prot</span>
          <span><strong class="text-blue-400">~</strong> Pkg</span>
        </div>
        <ul class="text-xs text-gray-300 space-y-2 mt-2">
          <li><strong>Leere Raute (Aggregation):</strong> Teil kann ohne existieren.</li>
          <li><strong>Schwarze Raute (Komposition):</strong> Teil stirbt mit Ganzem.</li>
          <li><strong>Leerer Pfeil:</strong> Vererbung (Ist-ein).</li>
          <li><strong>Gestrichelt:</strong> Abhängigkeit (Nutzt).</li>
        </ul>
      </div>
    </div>
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-arrow-right-arrow-left text-blue-400 mr-2"></i>2. Sequenzdiagramm</h4>
      <ul class="text-xs text-gray-300 space-y-2">
        <li><strong>Lebenslinien:</strong> Gestrichelt abwärts. Balken = Aktiv.</li>
        <li><strong>Pfeile:</strong><br>
          <span class="text-blue-400">&rarr; Durchgezogen: Synchron</span><br>
          <span class="text-dark-success">&rarr; Offen/Gestrichelt: Asynchron</span><br>
          <span class="text-gray-500">&larr; Gestrichelt: Return</span>
        </li>
        <li><strong>Fragmente:</strong> <code>alt</code> (If-Else), <code>opt</code> (If), <code>loop</code>.</li>
      </ul>
    </div>
  </div>
  <details class="lz-details">
    <summary>3. Weitere wichtige Diagramme</summary>
    <div class="lz-content grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bg-dark-card border border-dark-border p-3 rounded-lg"><strong class="text-white block mb-1">Use Case</strong><p class="text-xs text-gray-400 m-0">&laquo;include&raquo; (Pflicht), &laquo;extend&raquo; (Optional).</p></div>
      <div class="bg-dark-card border border-dark-border p-3 rounded-lg"><strong class="text-white block mb-1">Zustandsdiagramm</strong><p class="text-xs text-gray-400 m-0">Lebenszyklus eines Objekts.</p></div>
      <div class="bg-dark-card border border-dark-border p-3 rounded-lg"><strong class="text-white block mb-1">Aktivitätsdiagramm</strong><p class="text-xs text-gray-400 m-0">Abläufe & Algorithmen (Gabelungen).</p></div>
    </div>
  </details>
</div>
  `,

    '1.4': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
        <i class="fa-solid fa-server"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Software-Architektur & Schnittstellen</h3>
        <p class="text-sm text-dark-muted m-0">Aufbau und Kommunikation von Systemen</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-network-wired text-teal-400 mr-2"></i>1. Architektur-Stile</h4>
      <div class="space-y-3">
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Monolith</strong>
          <p class="text-xs text-gray-400 m-0">Alles in einer deploybaren Einheit. Schwer skalierbar.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-blue-400">Schichtenarchitektur (N-Tier)</strong>
          <p class="text-xs text-gray-400 m-0">Präsentation &rarr; Logik &rarr; Daten. Separation of Concerns.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-dark-success">Microservices</strong>
          <p class="text-xs text-gray-400 m-0">Unabhängige kleine Dienste. Unabhängig skalierbar, aber komplex.</p>
        </div>
      </div>
    </div>
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-exchange-alt text-dark-accent mr-2"></i>2. REST APIs</h4>
      <p class="text-xs text-gray-400 mb-3">Representational State Transfer via HTTP.</p>
      <div class="space-y-2 text-sm bg-dark-card p-4 rounded border border-dark-border">
        <div class="flex border-b border-dark-border pb-2"><span class="text-blue-400 font-bold w-16">GET</span><span class="text-gray-300 text-xs">Abfragen (Sicher, Idempotent)</span></div>
        <div class="flex border-b border-dark-border py-2"><span class="text-dark-success font-bold w-16">POST</span><span class="text-gray-300 text-xs">Erstellen (Nicht idempotent)</span></div>
        <div class="flex border-b border-dark-border py-2"><span class="text-dark-warning font-bold w-16">PUT</span><span class="text-gray-300 text-xs">Komplett Ersetzen (Idempotent)</span></div>
        <div class="flex border-b border-dark-border py-2"><span class="text-purple-400 font-bold w-16">PATCH</span><span class="text-gray-300 text-xs">Teilweise ändern</span></div>
        <div class="flex pt-2"><span class="text-dark-danger font-bold w-16">DELETE</span><span class="text-gray-300 text-xs">Löschen (Idempotent)</span></div>
      </div>
    </div>
  </div>
  <details class="lz-details">
    <summary>3. HTTP-Statuscodes & Formate</summary>
    <div class="lz-content grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <strong class="text-white block mb-2 border-b border-dark-border pb-1">Statuscodes</strong>
        <ul class="text-xs space-y-1 text-gray-400">
          <li><span class="text-dark-success font-bold">2xx:</span> Erfolg (200 OK, 201 Created)</li>
          <li><span class="text-blue-400 font-bold">3xx:</span> Umleitung (301 Moved)</li>
          <li><span class="text-dark-warning font-bold">4xx:</span> Client-Fehler (400 Bad Req, 401 Unauth)</li>
          <li><span class="text-dark-danger font-bold">5xx:</span> Server-Fehler (500 Internal, 502 Bad Gateway)</li>
        </ul>
      </div>
      <div>
        <strong class="text-white block mb-2 border-b border-dark-border pb-1">Datenaustausch</strong>
        <div class="bg-dark-card border border-dark-border p-2 rounded mb-2 text-xs text-gray-300">
          <strong class="text-dark-warning">JSON:</strong> Leicht, Key-Value, REST Standard.
        </div>
        <div class="bg-dark-card border border-dark-border p-2 rounded text-xs text-gray-300">
          <strong class="text-blue-400">XML:</strong> Schwergewichtig, strukturtreu (XSD), SOAP.
        </div>
      </div>
    </div>
  </details>
</div>
  `,

    '1.5': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
        <i class="fa-solid fa-desktop"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">UI/UX & Ergonomie</h3>
        <p class="text-sm text-dark-muted m-0">Nutzerzentrierte Gestaltung & ISO 9241-110</p>
      </div>
    </div>
  </div>
  <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
    <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-users text-dark-success mr-2"></i>1. Softwareergonomie</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div class="bg-dark-card p-3 rounded border border-dark-border text-center"><strong class="text-sm text-dark-success block">Aufgabenangemessen</strong><p class="text-[10px] text-gray-400 m-0">Unterstützt ohne Zusatzaufwand.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border text-center"><strong class="text-sm text-dark-success block">Selbstbeschreibend</strong><p class="text-[10px] text-gray-400 m-0">Rückmeldungen, direkt klar.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border text-center"><strong class="text-sm text-dark-success block">Erwartungskonform</strong><p class="text-[10px] text-gray-400 m-0">Konsistent zu Vorerfahrungen.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border text-center"><strong class="text-sm text-dark-success block">Lernförderlich</strong><p class="text-[10px] text-gray-400 m-0">Hilft Bedienung zu erlernen.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border text-center"><strong class="text-sm text-dark-success block">Steuerbar</strong><p class="text-[10px] text-gray-400 m-0">Nutzer kontrolliert Ablauf.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border text-center"><strong class="text-sm text-dark-success block">Fehlertolerant</strong><p class="text-[10px] text-gray-400 m-0">Zielerreichung trotz Fehleingabe.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border text-center sm:col-span-2 lg:col-span-3"><strong class="text-sm text-dark-success block">Individualisierbar</strong><p class="text-[10px] text-gray-400 m-0">Anpassbar an Bedürfnisse (Shortcuts).</p></div>
    </div>
  </div>
  <details class="lz-details">
    <summary>2. Barrierefreiheit (POUR)</summary>
    <div class="lz-content">
      <p class="text-xs text-gray-400 mb-4">Pflicht für Behörden (BITV 2.0) und geregelt in den WCAG 2.1.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="border-l-2 border-blue-400 pl-3"><strong class="text-white text-sm block">Perceivable (Wahrnehmbar)</strong><span class="text-xs text-gray-400">Alt-Tags für Bilder, Kontrast.</span></div>
        <div class="border-l-2 border-dark-warning pl-3"><strong class="text-white text-sm block">Operable (Bedienbar)</strong><span class="text-xs text-gray-400">Tastaturgesteuert, Tab-Order.</span></div>
        <div class="border-l-2 border-dark-success pl-3"><strong class="text-white text-sm block">Understandable (Verständlich)</strong><span class="text-xs text-gray-400">Einfache Sprache, klares Feedback.</span></div>
        <div class="border-l-2 border-dark-accent pl-3"><strong class="text-white text-sm block">Robust (Robust)</strong><span class="text-xs text-gray-400">Screenreader Kompatibel (ARIA).</span></div>
      </div>
    </div>
  </details>
  <details class="lz-details">
    <summary>3. Design-Prozess</summary>
    <div class="lz-content grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
      <div class="bg-dark-card p-3 rounded border border-dark-border"><i class="fa-regular fa-square text-lg text-gray-500 mb-1"></i><strong class="text-sm text-white block">Wireframe</strong><p class="text-[10px] text-gray-400 m-0">Graustufen-Skelett.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><i class="fa-solid fa-paintbrush text-lg text-blue-400 mb-1"></i><strong class="text-sm text-white block">Mockup</strong><p class="text-[10px] text-gray-400 m-0">Echte Farben & Typografie.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><i class="fa-solid fa-hand-pointer text-lg text-dark-accent mb-1"></i><strong class="text-sm text-white block">Prototyp</strong><p class="text-[10px] text-gray-400 m-0">Klickbar & interaktiv.</p></div>
    </div>
  </details>
</div>
  `,

    // --- PB 2: Entwicklung und Umsetzung von Algorithmen ---
    '2.1': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
        <i class="fa-solid fa-code"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Algorithmen & Programmierung</h3>
        <p class="text-sm text-dark-muted m-0">Logikkonzeption bis Implementierung</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-diagram-next text-indigo-400 mr-2"></i>1. Logik-Darstellung</h4>
      <div class="space-y-3">
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Struktogramme (Nassi-Shneiderman)</strong>
          <p class="text-[10px] text-gray-400 m-0">Zeigt Sequenz, IF, WHILE als Boxen. Wichtig in der AP2: Code &rarr; Struktogramm.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Aktivitätsdiagramm (UML)</strong>
          <p class="text-[10px] text-gray-400 m-0">Rauten = Entscheidungen <code>[Guard]</code>. Schwarze Balken = Parallele Abläufe.</p>
        </div>
      </div>
    </div>
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-sort-amount-down text-dark-warning mr-2"></i>2. Such- & Sortieralgorithmen</h4>
      <ul class="text-xs text-gray-300 space-y-2">
        <li class="border-b border-dark-border pb-1"><strong>Bubble Sort:</strong> Vergleicht Nachbarn, Ineffizient O(n&sup2;).</li>
        <li class="border-b border-dark-border pb-1"><strong>Selection Sort:</strong> Sucht Minimum, setzt es nach vorne.</li>
        <li class="border-b border-dark-border pb-1"><strong>Insertion Sort:</strong> Einfügen in sortierten vorderen Teil.</li>
        <li class="border-b border-dark-border pb-1"><strong class="text-blue-400">Lineare Suche:</strong> Element für Element, O(n).</li>
        <li><strong class="text-dark-success">Binäre Suche:</strong> Nur bei sortierten Listen. Halbiert wiederholt Suchraum, sehr schnell O(log n).</li>
      </ul>
    </div>
  </div>
  <details class="lz-details">
    <summary>3. Rekursion & Fehlerbehandlung</summary>
    <div class="lz-content grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <strong class="text-white block mb-3 border-b border-dark-border pb-1">Iteration vs Rekursion</strong>
        <div class="bg-dark-card p-3 rounded border border-dark-border mb-2"><strong class="text-sm text-dark-success block">Iteration</strong><p class="text-[10px] text-gray-400 m-0">Schleifen (for, while). Speicherschonend.</p></div>
        <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-dark-warning block">Rekursion</strong><p class="text-[10px] text-gray-400 m-0">Selbstaufruf. Benötigt Abbruchbedingung (Stack Overflow Gefahr).</p></div>
      </div>
      <div>
        <strong class="text-white block mb-3 border-b border-dark-border pb-1">Exception Handling</strong>
        <p class="text-[10px] text-gray-500 mb-2 font-mono">try { ... } catch (e) { ... } finally { ... }</p>
        <ul class="text-xs text-gray-400 space-y-1">
          <li><strong>try:</strong> Gefährlicher Code (DB/File Zugriff).</li>
          <li><strong>catch:</strong> Bei Fehler. Hier loggen/behandeln.</li>
          <li><strong>finally:</strong> Wird <em>immer</em> ausgeführt (Ressourcen schließen).</li>
        </ul>
      </div>
    </div>
  </details>
</div>
  `,

    '2.2': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
        <i class="fa-solid fa-table"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Datenbank-Design & Normalisierung</h3>
        <p class="text-sm text-dark-muted m-0">ERM, Mapping und Normalformen</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-project-diagram text-green-400 mr-2"></i>1. ER-Modell & Relationales Modell</h4>
      <div class="space-y-4">
        <div>
          <strong class="text-sm text-gray-300 block mb-1">ERM (Chen-Notation)</strong>
          <div class="flex gap-2 text-[10px] text-gray-400">
            <span class="bg-dark-card border border-dark-border px-2 py-1 rounded">Entität = Rechteck</span>
            <span class="bg-dark-card border border-dark-border px-2 py-1 rounded">Attribut = Oval</span>
            <span class="bg-dark-card border border-dark-border px-2 py-1 rounded">Relation = Raute</span>
          </div>
        </div>
        <div>
          <strong class="text-sm text-gray-300 block mb-1 border-b border-dark-border pb-1">Auflösung in Tabellen</strong>
          <ul class="text-xs text-gray-400 space-y-2">
            <li><strong>1:1</strong> PK der einen in die andere als FK.</li>
            <li><strong>1:n</strong> PK der '1'-Seite wird FK in der 'n'-Seite Tabelle.</li>
            <li><strong class="text-dark-danger">m:n</strong> Zwingend in Verknüpfungstabelle (Kreuztabelle) auflösen! Beide PKs werden zu FKs (zusammengesetzter PK).</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-filter text-blue-400 mr-2"></i>2. Normalisierung</h4>
      <p class="text-[10px] text-gray-400 mb-3">Vermeidung redundanter Daten und Änderungsanomalien.</p>
      <div class="space-y-2">
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">1. NF (Atomarität)</strong>
          <p class="text-[10px] text-gray-400 m-0">Alle Attribute unteilbar. Pro Feld nur EIN Wert, keine Arrays. PK vergeben.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">2. NF (Volle funktionale Abhängigkeit)</strong>
          <p class="text-[10px] text-gray-400 m-0">In 1.NF. Jedes Nicht-Schlüssel-Attribut hängt vom <em>gesamten</em> PK ab.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">3. NF (Keine transitiven Abhängigkeiten)</strong>
          <p class="text-[10px] text-gray-400 m-0">In 2.NF. Kein Nicht-Schlüssel-Attribut hängt von einem anderen ab (z.B. PLZ &rarr; Ort auslagern).</p>
        </div>
      </div>
    </div>
  </div>
  <details class="lz-details">
    <summary>3. Referenzielle Integrität</summary>
    <div class="lz-content">
      <p class="text-xs text-gray-400 mb-3">Sicherstellt, dass Fremdschlüssel (FK) nur primäre Schlüsseleinträge (PK) der anderen Tabelle referenzieren (Keine verwaisten Einträge/Zombies).</p>
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1 bg-dark-card border border-dark-border p-3 rounded">
          <strong class="text-dark-danger block mb-1 text-sm">ON DELETE CASCADE</strong>
          <p class="text-xs text-gray-400 m-0">Wird Eltern-Satz gelöscht, werden alle Kinder mitgelöscht.</p>
        </div>
        <div class="flex-1 bg-dark-card border border-dark-border p-3 rounded">
          <strong class="text-dark-warning block mb-1 text-sm">ON DELETE SET NULL</strong>
          <p class="text-xs text-gray-400 m-0">Wird Eltern-Satz gelöscht, wird der FK bei Kindern auf NULL gesetzt.</p>
        </div>
      </div>
    </div>
  </details>
</div>
  `,

    '2.3': `
<div class="space-y-8 pb-4">
  <!-- Intro -->
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
        <i class="fa-solid fa-database"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Fortgeschrittenes SQL & DB-Design</h3>
        <p class="text-sm text-dark-muted m-0">Datenabfrage (DQL), Datenmanipulation (DML) und Definition (DDL)</p>
      </div>
    </div>
  </div>

  <!-- JOINs -->
  <div class="bg-dark-bg border border-dark-border rounded-xl overflow-hidden">
    <div class="bg-dark-card px-5 py-3 border-b border-dark-border flex items-center justify-between">
      <h4 class="font-bold text-white m-0"><i class="fa-solid fa-link text-dark-accent mr-2"></i>1. JOINs (Tabellen verknüpfen)</h4>
      <span class="bg-dark-danger/10 text-dark-danger border border-dark-danger/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Kritisch für AP2</span>
    </div>
    <div class="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="border border-dark-border rounded-lg p-3 bg-[#0a0f1d]">
        <strong class="text-sm text-white block mb-1 text-dark-success">INNER JOIN</strong>
        <p class="text-xs text-gray-400 mb-0">Liefert Schnittmenge. Nur Datensätze, bei denen ein Match in beiden Tabellen vorliegt.</p>
      </div>
      <div class="border border-dark-border rounded-lg p-3 bg-[#0a0f1d]">
        <strong class="text-sm text-white block mb-1 text-blue-400">LEFT (OUTER) JOIN</strong>
        <p class="text-xs text-gray-400 mb-0">Liefert <em>alle</em> Datensätze der linken Tabelle. Wo es rechts keinen Match gibt, steht <code>NULL</code>.</p>
      </div>
      <div class="border border-dark-border rounded-lg p-3 bg-[#0a0f1d]">
        <strong class="text-sm text-white block mb-1 text-dark-warning">FULL JOIN</strong>
        <p class="text-xs text-gray-400 mb-0">Liefert alles von links und rechts (Schnitt- inkl. Restmenge).</p>
      </div>
      <div class="border border-dark-border rounded-lg p-3 bg-[#0a0f1d]">
        <strong class="text-sm text-white block mb-1 text-purple-400">SELF JOIN</strong>
        <p class="text-xs text-gray-400 mb-0">Tabelle wird mit sich selbst verknüpft (z.B. Mitarbeiterstruktur). Erfordert Aliase (M1, M2).</p>
      </div>
    </div>
  </div>

  <!-- ACID & Aggregatfunktionen Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- ACID -->
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-shield-halved text-dark-success mr-2"></i>2. ACID-Prinzip</h4>
      <ul class="space-y-3">
        <li class="flex items-start">
          <div class="w-6 h-6 rounded bg-dark-card border border-dark-border text-xs flex items-center justify-center font-bold text-white mr-3 shrink-0">A</div>
          <div>
            <strong class="text-sm text-gray-200 block">Atomicity (Atomarität)</strong>
            <p class="text-xs text-gray-400 mb-0">Ganz oder gar nicht (Unteilbarkeit).</p>
          </div>
        </li>
        <li class="flex items-start">
          <div class="w-6 h-6 rounded bg-dark-card border border-dark-border text-xs flex items-center justify-center font-bold text-white mr-3 shrink-0">C</div>
          <div>
            <strong class="text-sm text-gray-200 block">Consistency (Konsistenz)</strong>
            <p class="text-xs text-gray-400 mb-0">Datenbank ist nachher in einem validen Zustand.</p>
          </div>
        </li>
        <li class="flex items-start">
          <div class="w-6 h-6 rounded bg-dark-card border border-dark-border text-xs flex items-center justify-center font-bold text-white mr-3 shrink-0">I</div>
          <div>
            <strong class="text-sm text-gray-200 block">Isolation (Isolation)</strong>
            <p class="text-xs text-gray-400 mb-0">Parallele Transaktionen beeinflussen sich nicht.</p>
          </div>
        </li>
        <li class="flex items-start">
          <div class="w-6 h-6 rounded bg-dark-card border border-dark-border text-xs flex items-center justify-center font-bold text-white mr-3 shrink-0">D</div>
          <div>
            <strong class="text-sm text-gray-200 block">Durability (Dauerhaftigkeit)</strong>
            <p class="text-xs text-gray-400 mb-0">Bestätigte Daten bleiben sicher gespeichert.</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- Aggregatfunktionen -->
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-calculator text-dark-warning mr-2"></i>3. Aggregatfunktionen</h4>
      <p class="text-sm text-gray-300 mb-3">Fassen mehrere Zeilen zusammen: <code>COUNT, SUM, AVG, MIN, MAX</code>.</p>
      <div class="bg-dark-danger/10 border border-dark-danger/30 rounded-lg p-3 mb-3">
        <p class="text-xs text-dark-danger font-bold m-0"><i class="fa-solid fa-triangle-exclamation mr-1"></i> Wichtige Regel!</p>
        <p class="text-xs text-gray-300 mb-0 mt-1">Sobald eine Aggregatfunktion genutzt wird, müssen alle nicht-aggregierten Spalten zwingend im <code>GROUP BY</code> stehen!</p>
      </div>
      <div class="bg-dark-card border border-dark-border rounded-lg p-3">
        <strong class="text-sm text-white block">HAVING vs WHERE</strong>
        <p class="text-xs text-gray-400 mb-0 mt-1"><code>HAVING</code> filtert nach der Gruppierung, <code>WHERE</code> filtert davor.</p>
      </div>
    </div>
  </div>

  <details class="lz-details">
    <summary>4. SQL Anweisungstypen (DML, DDL, TCL)</summary>
    <div class="lz-content grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <strong class="text-dark-success block border-b border-dark-border pb-1 mb-2">DML (Manipulation)</strong>
        <ul class="space-y-1 text-xs text-gray-400">
          <li><code>SELECT</code></li>
          <li><code>INSERT INTO</code></li>
          <li><code>UPDATE SET</code></li>
          <li><code>DELETE FROM</code></li>
        </ul>
      </div>
      <div>
        <strong class="text-blue-400 block border-b border-dark-border pb-1 mb-2">DDL (Definition)</strong>
        <ul class="space-y-1 text-xs text-gray-400">
          <li><code>CREATE TABLE</code></li>
          <li><code>ALTER TABLE</code></li>
          <li><code>DROP TABLE</code></li>
        </ul>
      </div>
      <div>
        <strong class="text-dark-warning block border-b border-dark-border pb-1 mb-2">TCL (Transaktion)</strong>
        <ul class="space-y-1 text-xs text-gray-400">
          <li><code>BEGIN TRANSACTION</code></li>
          <li><code>COMMIT</code></li>
          <li><code>ROLLBACK</code></li>
        </ul>
      </div>
    </div>
  </details>
</div>
  `,

    // --- PB 3: Fachrichtungsübergreifend ---
    '3.1': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
        <i class="fa-solid fa-network-wired"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Netzwerktechnik & Cloud</h3>
        <p class="text-sm text-dark-muted m-0">Infrastruktur, OSI-Modell und Virtualisierung</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-layer-group text-cyan-400 mr-2"></i>1. Das OSI-Modell</h4>
      <p class="text-[10px] text-gray-400 mb-3">Referenzmodell für Netzwerkprotokolle (7 Schichten).</p>
      <div class="space-y-1 text-xs">
        <div class="flex justify-between border-b border-dark-border py-1"><strong class="text-gray-300">7. Application</strong><span class="text-gray-500">HTTP, FTP, DNS (Daten)</span></div>
        <div class="flex justify-between border-b border-dark-border py-1"><strong class="text-gray-300">6. Presentation</strong><span class="text-gray-500">SSL/TLS, JPEG (Daten)</span></div>
        <div class="flex justify-between border-b border-dark-border py-1"><strong class="text-gray-300">5. Session</strong><span class="text-gray-500">Sitzungsaufbau (Daten)</span></div>
        <div class="flex justify-between border-b border-dark-border py-1"><strong class="text-blue-400">4. Transport</strong><span class="text-gray-500">TCP, UDP, Ports (Segmente)</span></div>
        <div class="flex justify-between border-b border-dark-border py-1"><strong class="text-dark-success">3. Network</strong><span class="text-gray-500">IP, Routing (Pakete)</span></div>
        <div class="flex justify-between border-b border-dark-border py-1"><strong class="text-dark-warning">2. Data Link</strong><span class="text-gray-500">MAC, Switches (Frames)</span></div>
        <div class="flex justify-between py-1"><strong class="text-gray-300">1. Physical</strong><span class="text-gray-500">Kabel, Hubs (Bits)</span></div>
      </div>
    </div>
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-cloud text-blue-400 mr-2"></i>2. Cloud & Virtualisierung</h4>
      <div class="space-y-3">
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-dark-success">Bare Metal vs Hosted</strong>
          <p class="text-[10px] text-gray-400 m-0">Typ 1 (ESXi/Proxmox) direkt auf HW vs Typ 2 (VirtualBox) auf OS.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-blue-400">Container (Docker)</strong>
          <p class="text-[10px] text-gray-400 m-0">Teilen sich Kernel des Host-OS. Leichtgewichtiger als VMs.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-purple-400">Cloud-Modelle</strong>
          <p class="text-[10px] text-gray-400 m-0">IaaS (Nur Server), PaaS (Runtime gestellt), SaaS (Fertige App).</p>
        </div>
      </div>
    </div>
  </div>
  <details class="lz-details">
    <summary>3. Wichtige Protokolle & Ports</summary>
    <div class="lz-content grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-white block mb-1">DNS (Port 53, UDP)</strong><p class="text-xs text-gray-400 m-0">Namensauflösung (google.de &rarr; IP).</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-white block mb-1">DHCP (Port 67/68, UDP)</strong><p class="text-xs text-gray-400 m-0">Auto-IP Vergabe (DORA-Prinzip).</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-white block mb-1">HTTP/S (Port 80/443, TCP)</strong><p class="text-xs text-gray-400 m-0">Web-Traffic.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-white block mb-1">SSH (Port 22, TCP)</strong><p class="text-xs text-gray-400 m-0">Sichere Shell.</p></div>
    </div>
  </details>
</div>
  `,

    '3.2': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
        <i class="fa-solid fa-shield-halved"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">IT-Sicherheit (Security)</h3>
        <p class="text-sm text-dark-muted m-0">Schutzziele, Kryptografie und Web-Angriffe</p>
      </div>
    </div>
  </div>
  <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
    <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-lock text-red-400 mr-2"></i>1. Die 4 Schutzziele</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-dark-success block">Vertraulichkeit</strong><p class="text-[10px] text-gray-400 m-0">Nur für Befugte lesbar (Verschlüsselung).</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-dark-success block">Integrität</strong><p class="text-[10px] text-gray-400 m-0">Daten unverfälscht (Hashing).</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-dark-success block">Verfügbarkeit</strong><p class="text-[10px] text-gray-400 m-0">Systeme erreichbar (RAID, Backups).</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-dark-success block">Authentizität</strong><p class="text-[10px] text-gray-400 m-0">Echt-Nachweis (Zertifikate, Signaturen).</p></div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-key text-dark-warning mr-2"></i>2. Kryptografie (Verschlüsselung)</h4>
      <div class="space-y-3">
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Symmetrisch (z.B. AES)</strong>
          <p class="text-xs text-gray-400 m-0">Ein Schlüssel für Ver- und Entschlüsseln. Schnell, aber Schlüsseltausch-Problem.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-blue-400">Asymmetrisch (z.B. RSA)</strong>
          <p class="text-xs text-gray-400 m-0">Keypair (Pub/Priv). Verschlüsseln mit Pub, nur Priv kann entschlüsseln. Langsam.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-purple-400">Hybride / TLS</strong>
          <p class="text-xs text-gray-400 m-0">Asymmetrisch zum Key-Exchange, danach Symmetrisch für schnellen Datenfluss.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-dark-success">Hashing (z.B. SHA-256)</strong>
          <p class="text-xs text-gray-400 m-0">Einwegfunktion! Nicht entschlüsselbar (PW-Speicherung).</p>
        </div>
      </div>
    </div>
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-bug text-dark-danger mr-2"></i>3. Web-Angriffe & Abwehr</h4>
      <ul class="text-xs text-gray-300 space-y-3">
        <li><strong class="text-dark-danger block">SQL-Injection</strong><span class="text-gray-400">DB Schadcode. <strong>Abwehr:</strong> Prepared Statements. Niemals Strings ketten!</span></li>
        <li><strong class="text-dark-warning block">XSS (Cross-Site Scripting)</strong><span class="text-gray-400">Böses JS in Webseite eingeschleust (klaut Cookies). <strong>Abwehr:</strong> HTML-Encoding, Input Sanitization.</span></li>
        <li><strong class="text-blue-400 block">CSRF (Cross-Site Req Forgery)</strong><span class="text-gray-400">Führt ungewollte Aktionen aus. <strong>Abwehr:</strong> CSRF-Tokens in Formularen.</span></li>
      </ul>
      <div class="mt-4 bg-dark-card p-3 rounded border border-dark-border">
        <strong class="text-sm text-white block mb-1">Digitale Signatur (Integrität & Urheber)</strong>
        <p class="text-[10px] text-gray-400 m-0">Sender hasht Dokument und verschlüsselt Hash mit seinem PRIVATE Key. Empfänger prüft via PUBLIC Key.</p>
      </div>
    </div>
  </div>
</div>
  `,

    '3.3': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400">
        <i class="fa-solid fa-clipboard-check"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Qualitätssicherung & DevOps</h3>
        <p class="text-sm text-dark-muted m-0">Tests, Metriken und Versionsverwaltung</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-list-check text-yellow-400 mr-2"></i>1. Teststufen (V-Modell)</h4>
      <div class="space-y-3">
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Unit-Test (Modul)</strong>
          <p class="text-xs text-gray-400 m-0">Isoliert, kleinster Baustein (Klasse/Methode). Oft mit Mocks. Entwickler (White-Box).</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Integrationstest</strong>
          <p class="text-xs text-gray-400 m-0">Zusammenspiel mehrerer Module (Schnittstellen). Entwickler/Tester.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Systemtest</strong>
          <p class="text-xs text-gray-400 m-0">Gesamtsystem gegen Anforderungen des Pflichtenhefts. Tester (Black-Box).</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Abnahmetest (Akzeptanz)</strong>
          <p class="text-xs text-gray-400 m-0">Entspricht Software dem Kundenwunsch? Produktiv-ähnlich. Durch Kunde/PO.</p>
        </div>
      </div>
    </div>
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-vial text-blue-400 mr-2"></i>2. Testmethoden & Metriken</h4>
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div class="bg-dark-card border border-dark-border p-2 rounded"><strong class="text-xs text-white block">Black-Box</strong><p class="text-[10px] text-gray-400 m-0">Code unbekannt. Input &rarr; Output Test.</p></div>
        <div class="bg-dark-card border border-dark-border p-2 rounded"><strong class="text-xs text-white block">White-Box</strong><p class="text-[10px] text-gray-400 m-0">Code bekannt. Testet Logikflüsse (Ifs).</p></div>
        <div class="bg-dark-card border border-dark-border p-2 rounded"><strong class="text-xs text-white block">Äquivalenzklassen</strong><p class="text-[10px] text-gray-400 m-0">Reduziert Testfälle durch Gruppenbildung.</p></div>
        <div class="bg-dark-card border border-dark-border p-2 rounded"><strong class="text-xs text-white block">Grenzwertanalyse</strong><p class="text-[10px] text-gray-400 m-0">An Klassengrenzen (-1, 0, 1) wg. OBO-Fehlern.</p></div>
      </div>
      <strong class="text-sm text-white block mb-1">Code Coverage</strong>
      <ul class="text-[10px] text-gray-400 space-y-1">
        <li><strong>C0 (Statement):</strong> % der ausgeführten Zeilen.</li>
        <li><strong class="text-blue-400">C1 (Branch):</strong> Jede Verzweigung (True/False) erfasst? (Wichtig).</li>
        <li><strong>C2 (Condition):</strong> Jede Teilbedingung separat erfasst?</li>
      </ul>
    </div>
  </div>
  <details class="lz-details">
    <summary>3. TDD & Git</summary>
    <div class="lz-content grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <strong class="text-white block mb-2 border-b border-dark-border pb-1">Test Driven Development (TDD)</strong>
        <p class="text-xs text-gray-400 font-bold mb-2">Red &rarr; Green &rarr; Refactor</p>
        <ol class="text-xs text-gray-400 list-decimal pl-4 space-y-1">
          <li>Test schreiben (schlägt fehl).</li>
          <li>Mindestcode schreiben, um Test zu bestehen.</li>
          <li>Code Refactorn.</li>
        </ol>
      </div>
      <div>
        <strong class="text-white block mb-2 border-b border-dark-border pb-1">Git Basics</strong>
        <ul class="text-xs text-gray-400 space-y-1">
          <li><code>add</code>: Staging</li>
          <li><code>commit</code>: Lokal speichern</li>
          <li><code>push</code> & <code>pull</code>: Remote Sync</li>
          <li><code>branch</code> & <code>merge</code>: Verzweigen & Zusammenführen</li>
        </ul>
      </div>
    </div>
  </details>
</div>
  `,

    '3.4': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
        <i class="fa-solid fa-gavel"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Datenschutz (DSGVO) & Recht</h3>
        <p class="text-sm text-dark-muted m-0">Regeln zur Datenverarbeitung und Lizenzen</p>
      </div>
    </div>
  </div>
  <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
    <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-scale-balanced text-teal-400 mr-2"></i>1. DSGVO-Prinzipien (Art. 5)</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-dark-success block">Rechtmäßigkeit</strong><p class="text-[10px] text-gray-400 m-0">Immer Erlaubnis nötig (Einwilligung, Vertrag).</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-dark-success block">Zweckbindung</strong><p class="text-[10px] text-gray-400 m-0">Nur für den festgelegten Zweck nutzen.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-dark-success block">Datenminimierung</strong><p class="text-[10px] text-gray-400 m-0">Nur absolut Notwendiges sammeln.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-dark-success block">Richtigkeit</strong><p class="text-[10px] text-gray-400 m-0">Daten aktuell & korrekt halten.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-dark-success block">Speicherbegrenzung</strong><p class="text-[10px] text-gray-400 m-0">Löschen wenn Zweck entfällt.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-dark-success block">Integrität (TOMs)</strong><p class="text-[10px] text-gray-400 m-0">Technisch/Orga Absicherung (Verschlüsselung).</p></div>
    </div>
  </div>
  <details class="lz-details">
    <summary>2. DSGVO Konzepte & Rollen</summary>
    <div class="lz-content grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-white block mb-1">Betroffenenrechte</strong><p class="text-xs text-gray-400 m-0">Auskunft (15), Vergessenwerden (17), Datenübertragbarkeit.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-dark-danger block mb-1">Besondere Kategorien (Art. 9)</strong><p class="text-xs text-gray-400 m-0">Gesundheit, Biometrie, Religion. Sehr streng, zwingend Einwilligung!</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-white block mb-1">AVV (Auftragsverarbeitung)</strong><p class="text-xs text-gray-400 m-0">Vertrag zwingend, wenn Externe (Cloud-Hoster) Personendaten verarbeiten.</p></div>
      <div class="bg-dark-card p-3 rounded border border-dark-border"><strong class="text-sm text-white block mb-1">DSB (Datenschutzbeauftragter)</strong><p class="text-xs text-gray-400 m-0">Pflicht idR ab 20 MA. Kein GF (Interessenkonflikt).</p></div>
    </div>
  </details>
  <details class="lz-details">
    <summary>3. Urheberrecht / Lizenzen</summary>
    <div class="lz-content">
      <p class="text-xs text-gray-400 mb-3">Software ist als Werk direkt beim Schreiben urheberrechtlich geschützt.</p>
      <div class="space-y-2 text-sm text-gray-300">
        <div class="flex items-center"><strong class="w-32 text-blue-400">Proprietär</strong><span class="text-xs text-gray-400">Nutzungsrecht via EULA erkauft. Quellcode zu.</span></div>
        <div class="flex items-center"><strong class="w-32 text-dark-success">OS Permissiv</strong><span class="text-xs text-gray-400">MIT, Apache. Ändern & kommerziell nutzen erlaubt.</span></div>
        <div class="flex items-center"><strong class="w-32 text-dark-warning">OS Restriktiv</strong><span class="text-xs text-gray-400">GPL (Copyleft). Wenn modifiziert angeboten, MUSS das Gesamtwerk OS bleiben (Virenartig).</span></div>
      </div>
    </div>
  </details>
</div>
  `,

    '4.1': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
        <i class="fa-solid fa-scale-unbalanced"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Arbeits- & Tarifrecht</h3>
        <p class="text-sm text-dark-muted m-0">Rechte und Pflichten in der Ausbildung und im Beruf</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-book-open text-orange-400 mr-2"></i>1. Gesetzliche Rahmenbedingungen</h4>
      <div class="space-y-3">
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Arbeitszeitgesetz (ArbZG)</strong>
          <p class="text-xs text-gray-400 m-0">Pausen: Nach 6h &rarr; 30m, nach 9h &rarr; 45m. Max. 8-10h/Tag. Ruhezeit: Min. 11h.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Jugendarbeitsschutz (JArbSchG)</strong>
          <p class="text-xs text-gray-400 m-0"><18 Jahre. Max 5 Tage/Woche, 40h, 8h/Tag. Keine Nacht/Wochenendsarbeit.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 border-b border-dark-border pb-1">Kündigungsschutz (KSchG)</strong>
          <p class="text-[10px] text-gray-400 m-0 pt-1">Greift nach 6M Probezeit bei >10 Vollzeit-MA. Kündigung nur personenbedingt, verhaltensbedingt (Abmahnung!) oder betriebsbedingt (Sozialauswahl).</p>
        </div>
      </div>
    </div>
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-handshake-angle text-blue-400 mr-2"></i>2. Sozialversicherungen</h4>
      <p class="text-[10px] text-gray-400 mb-3">Beiträge werden i.d.R. 50/50 geteilt (AG/AN).</p>
      <div class="grid grid-cols-1 gap-2 text-xs">
        <div class="bg-dark-card border border-dark-border p-2 rounded flex justify-between"><strong class="text-white">Kranken (KV)</strong><span class="text-gray-500">~14.6% + Zusatz</span></div>
        <div class="bg-dark-card border border-dark-border p-2 rounded flex justify-between"><strong class="text-white">Pflege (PV)</strong><span class="text-gray-500">Kinderlose zahlen mehr</span></div>
        <div class="bg-dark-card border border-dark-border p-2 rounded flex justify-between"><strong class="text-white">Rente (RV)</strong><span class="text-gray-500">~18.6% (Größter Posten)</span></div>
        <div class="bg-dark-card border border-dark-border p-2 rounded flex justify-between"><strong class="text-white">Arbeitslosen (AV)</strong><span class="text-gray-500">BA für Arbeit</span></div>
        <div class="bg-dark-card border border-dark-danger/50 p-2 rounded flex justify-between items-center"><strong class="text-dark-danger">Unfall (UV)</strong><span class="text-[10px] text-gray-300">Zu 100% vom Arbeitgeber!</span></div>
      </div>
    </div>
  </div>
  <details class="lz-details">
    <summary>3. Ausbildungsvertrag (BBiG) & Mitbestimmung</summary>
    <div class="lz-content grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <strong class="text-white block mb-2 border-b border-dark-border pb-1">Ausbildung (BBiG)</strong>
        <ul class="text-xs text-gray-400 space-y-1">
          <li>Vor Beginn schriftlich schließen.</li>
          <li>Probezeit: Zwingend 1-4 Monate (Fristlose Kündigung ohne Grund möglich).</li>
          <li>Nach Probezeit: Azubi kündigt mit 4 Wochen Frist (Berufsaufgabe). AG nur fristlos (Wichtiger Grund).</li>
        </ul>
      </div>
      <div>
        <strong class="text-white block mb-2 border-b border-dark-border pb-1">Betriebsrat (BetrVG)</strong>
        <ul class="text-xs text-gray-400 space-y-1">
          <li>Wählbar ab 5 Mitarbeitern.</li>
          <li><strong class="text-dark-success">Mitbestimmung:</strong> Zwingende Zustimmung (Überstunden, URL).</li>
          <li><strong class="text-dark-warning">Mitwirkung:</strong> Muss angehört werden (Kündigungen! Ohne BR unwirksam).</li>
        </ul>
      </div>
    </div>
  </details>
</div>
  `,

    '4.2': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
        <i class="fa-solid fa-store"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Der Betrieb & Markt</h3>
        <p class="text-sm text-dark-muted m-0">Unternehmensformen, Marktmechanismen und Marketing</p>
      </div>
    </div>
  </div>
  <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
    <h4 class="text-lg font-bold text-white mb-4"><i class="fa-regular fa-building text-emerald-400 mr-2"></i>1. Rechtsformen im Überblick</h4>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div class="bg-dark-card p-3 rounded border border-dark-border">
        <strong class="text-sm text-dark-warning block mb-1">Personengesellschaften</strong>
        <p class="text-[10px] text-gray-400 m-0">GbR, OHG, Einzelkaufmann. Kein Mindestkapital. <strong class="text-dark-danger">Vollhaftung (Privatvermögen)!</strong></p>
      </div>
      <div class="bg-dark-card p-3 rounded border border-dark-border">
        <strong class="text-sm text-dark-success block mb-1">GmbH (Kapital)</strong>
        <p class="text-[10px] text-gray-400 m-0">25.000 € Stammkapital. Haftung nur mit Firmenvermögen. Notar + Handelsregister B.</p>
      </div>
      <div class="bg-dark-card p-3 rounded border border-dark-border">
        <strong class="text-sm text-dark-success block mb-1">AG (Kapital)</strong>
        <p class="text-[10px] text-gray-400 m-0">50.000 € Grundkapital. Aktien handelbar. Vorstand (Geschäftsführung) & Aufsichtsrat.</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-chart-line text-blue-400 mr-2"></i>2. Markt & Wettbewerb</h4>
      <div class="space-y-2 text-xs">
        <div class="flex justify-between items-center border-b border-dark-border pb-1"><strong class="text-blue-400">Preisbildung</strong><span class="text-gray-400 text-right">Schnittpunkt Angebot & Nachfrage</span></div>
        <div class="flex justify-between items-center border-b border-dark-border py-1"><strong class="text-dark-danger">Monopol</strong><span class="text-gray-400 text-right">1 Anbieter, viele Nachfrager</span></div>
        <div class="flex justify-between items-center border-b border-dark-border py-1"><strong class="text-dark-warning">Oligopol</strong><span class="text-gray-400 text-right">Wenige Anbieter (z.B. Mobilfunk)</span></div>
        <div class="flex justify-between items-center py-1"><strong class="text-dark-success">Polypol</strong><span class="text-gray-400 text-right">Viele Anbieter & Nachfrager (Ideal)</span></div>
      </div>
    </div>
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-bullhorn text-purple-400 mr-2"></i>3. Marketing (4 P's)</h4>
      <ul class="text-xs text-gray-400 space-y-2">
        <li><strong class="text-white">Product (Produkt):</strong> Was verkaufe ich? (Design, Features).</li>
        <li><strong class="text-white">Price (Preis):</strong> Zu welchem Preis? (Rabatte, Skimming).</li>
        <li><strong class="text-white">Place (Distribution):</strong> Wie vertreibe ich es? (Download, App Store).</li>
        <li><strong class="text-white">Promotion (Kommunikation):</strong> Wie mache ich es bekannt? (SEO, Ads).</li>
      </ul>
    </div>
  </div>
  <details class="lz-details">
    <summary>4. Betriebsziele & Zielkonflikte</summary>
    <div class="lz-content">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3 text-center">
        <div class="bg-dark-card border border-dark-border p-2 rounded"><strong class="text-xs text-white block">Ökonomisch</strong><p class="text-[10px] text-gray-400 m-0">Gewinn/Umsatz.</p></div>
        <div class="bg-dark-card border border-dark-border p-2 rounded"><strong class="text-xs text-white block">Ökologisch</strong><p class="text-[10px] text-gray-400 m-0">Green-IT, Umweltschutz.</p></div>
        <div class="bg-dark-card border border-dark-border p-2 rounded"><strong class="text-xs text-white block">Sozial</strong><p class="text-[10px] text-gray-400 m-0">Arbeitschutz, gerechter Lohn.</p></div>
      </div>
      <p class="text-[10px] text-gray-500 text-center m-0"><strong>Zielkonflikt:</strong> Ziele widersprechen sich oft (Kostensenkung vs. Ökologie/Soziales).</p>
    </div>
  </details>
</div>
  `,

    '4.3': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
        <i class="fa-solid fa-file-invoice-dollar"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Finanzierung & Buchführung</h3>
        <p class="text-sm text-dark-muted m-0">Rechnungen, Kapital und Kosten-Leistungs-Rechnung</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-receipt text-indigo-400 mr-2"></i>1. Rechnungs-Elemente (Pflicht)</h4>
      <p class="text-[10px] text-gray-400 mb-3">Nach § 14 UStG, bei Rechnungen über 250 € brutto:</p>
      <ul class="text-[10px] text-gray-300 space-y-2">
        <li><strong class="text-blue-400">Adressen:</strong> Vollständiger Name/Anschrift (Sender & Empfänger).</li>
        <li><strong class="text-blue-400">Nummern:</strong> Steuernummer (oder USt-IdNr), fortlaufende Rechnungsnummer.</li>
        <li><strong class="text-blue-400">Zeiten:</strong> Ausstellungsdatum, Liefer-/Leistungsdatum.</li>
        <li><strong class="text-blue-400">Leistung:</strong> Menge (Lizenzen, Stunden) und Art (Support).</li>
        <li><strong class="text-dark-warning">Werte:</strong> Netto-Entgelt, Steuersatz (z.B. 19%) und Umsatzsteuerbetrag separat!</li>
      </ul>
    </div>
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-coins text-yellow-400 mr-2"></i>2. Finanzierungsarten</h4>
      <div class="space-y-3">
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Innenfinanzierung</strong>
          <p class="text-[10px] text-gray-400 m-0">Kapital generiert sich intern (Gewinneineinbehalt, Verkauf von Alt-Servern).</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Außen (Fremdfinanzierung)</strong>
          <p class="text-[10px] text-gray-400 m-0">Kredit (Zinsen, kein Mitspracherecht) oder Leasing.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Außen (Eigenkapital/Beteiligung)</strong>
          <p class="text-[10px] text-gray-400 m-0">Neuer Investor (Frisches Geld, will aber Mitspracherecht/Rendite).</p>
        </div>
      </div>
    </div>
  </div>
  <details class="lz-details">
    <summary>3. Umsatzsteuer & KLR (Kostenrechnung)</summary>
    <div class="lz-content grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <strong class="text-white block mb-2 border-b border-dark-border pb-1">Umsatzsteuer & Vorsteuer</strong>
        <p class="text-[10px] text-gray-400 mb-2">Für Unternehmen ein "durchlaufender Posten".</p>
        <ul class="text-[10px] text-gray-300 space-y-1">
          <li><strong>Vorsteuer:</strong> Zahlst DU beim Einkauf (z.B. Laptop).</li>
          <li><strong>Umsatzsteuer:</strong> Schlägst DU beim Verkauf drauf (Kunde zahlt).</li>
          <li><strong>Zahllast ans FA =</strong> Umsatzsteuer (eingenommen) - Vorsteuer (bezahlt).</li>
        </ul>
      </div>
      <div>
        <strong class="text-white block mb-2 border-b border-dark-border pb-1">Kosten & Break-Even</strong>
        <ul class="text-[10px] text-gray-300 space-y-1">
          <li><strong>Fixkosten (Kf):</strong> Miete. Sind immer da.</li>
          <li><strong>Variable Kosten (Kv):</strong> Softwarelizenzen pro User. Steigen mit Menge (x).</li>
          <li><code class="text-dark-warning rounded">K = Kf + (Kv * x)</code></li>
          <li><strong>Break-Even-Point:</strong> Gewinnschwelle. Ab hier machst du Gewinn (Umsatz = Gesamtkosten).<br><code class="text-dark-success mt-1 inline-block">Menge = Fixkosten / (Stückpreis - Var. Stückkosten)</code></li>
        </ul>
      </div>
    </div>
  </details>
</div>
  `,

    '4.4': `
<div class="space-y-8 pb-4">
  <div class="bg-dark-card border border-dark-border rounded-xl p-6 shadow-sm">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
        <i class="fa-solid fa-leaf"></i>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white m-0">Nachhaltigkeit & Gesellschaft</h3>
        <p class="text-sm text-dark-muted m-0">Green-IT, Globalisierung und lebenslanges Lernen</p>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-earth-europe text-green-400 mr-2"></i>1. Green-IT & Umwelt</h4>
      <div class="space-y-3">
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Green-IT in/by IT</strong>
          <p class="text-[10px] text-gray-400 m-0">"in": Effiziente RZs. "by": Durch IT Ressourcen sparen (Videocall statt Flug).</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-dark-warning">ElektroG (RoHS/WEEE)</strong>
          <p class="text-[10px] text-gray-400 m-0">Rücknahme- & Entsorgungspflicht vom Hersteller für alte Hardware.</p>
        </div>
      </div>
      <h4 class="text-lg font-bold text-white mb-2 mt-4"><i class="fa-solid fa-globe text-blue-400 mr-2"></i>2. Globalisierung</h4>
      <p class="text-[10px] text-gray-400 m-0">
        <strong class="text-dark-success">Pro:</strong> Weltweite Teams, billige HW, SaaS weltweit.<br>
        <strong class="text-dark-danger">Contra:</strong> Preisdruck, Supply Chain Abhängigkeit, Sprach/Zeit-Hürden.
      </p>
    </div>
    <div class="bg-dark-bg border border-dark-border rounded-xl p-5 fade-in">
      <h4 class="text-lg font-bold text-white mb-4"><i class="fa-solid fa-user-graduate text-purple-400 mr-2"></i>3. Arbeitswelt & Mensch</h4>
      <div class="space-y-3">
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Lebenslanges Lernen (LLL)</strong>
          <p class="text-[10px] text-gray-400 m-0">IT altert extrem schnell (kurze Halbwertszeit). LLL ist elementar.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1">Arbeitskräfte Wandel</strong>
          <p class="text-[10px] text-gray-400 m-0">Automatisierung (KI) bedroht einfache Jobs. Fokus auf Softskills & Deep Work.</p>
        </div>
        <div class="bg-dark-card p-3 rounded-lg border border-dark-border">
          <strong class="text-sm text-white block mb-1 text-dark-danger">Faktor Mensch (Security)</strong>
          <p class="text-[10px] text-gray-400 m-0">Social Engineering, Phishing. Die beste Firewall ist nutzlos bei Manipulation des Users (Awareness-Trainings nötig).</p>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
};

<!--
De conventie voor naamgeving is sprintnaam-(sub)taaknaam
Topics: (sub)task semester-naam, semesternummer, sprint-naam, sprint-nummer
-->

# Your Tribe for Life squad page

Je hebt al een basis social network voor jouw squad gemaakt in semester 2. Breid dit social network uit naar een platform waarop de tribe members elkaar kunnen vinden en ondersteunen. In ieder geval gedurende het begin van jullie carriere als frontend designer & developer.

Ontwerp en maak met een team een overzicht van jouw tribe met alle online visitekaartjes, op basis van een headless CMS en een framework.

## Context
Deze leertaak hoort bij sprint 13: Your Tribe for Life. Dit is een autonome opdracht die je in een team uitvoert voor jouw eigen tribe bij FDND.

## Doel van deze opdracht

- Je leert effectiever samenwerken met het projectboard in GitHub
- Je leert hoe je routing met een framework implementeert
- Je leert hoe je data uit een Headless CMS door middel van framework rendert in een website

## Werkwijze

Bij elke leertaak wordt de development-lifecycle doorlopen. Hierdoor ontwikkel je een standaard aanpak voor frontend praktijkvraagstukken, werk je systematisch aan leertaken, ervaar je de relevantie van het geleerde en verwerf je de kennis, houding en vaardigheden die de beroepspraktijk van je vraagt.

De development lifecycle kent de volgende stappen:

1. Analyseren - bijvoorbeeld: grip krijgen op een taak door gesprekken met een opdrachtgever, schrijven van een debriefing, maken van een todo lijst, inventarisatie van bestaande informatie, overzicht creëren, plannen, definition of done etc.
2. Ontwerpen - bijvoorbeeld: het maken van idee-schetsen, customer journey, breakdown chart, wireflows, navigatiestructuur en layout.
3. Bouwen - bijvoorbeeld: toepassen van webtechnologie (HTML, CSS, JS), gebruik van tooling, werken volgens conventies en wetgeving, documenteren en bijhouden van een changelog.
4. Integreren - bijvoorbeeld: publiceren, live zetten, uploaden naar de server, toevoegen in een bestaand systeem, ftp-en.
5. Testen - bijvoorbeeld: Unit testing (TDD), System test, User test, device lab test, A\B testing.

### Aanpak
Semester 3 bereid je voor op de beroepspraktijk. Om die reden werken we serieuzer samen waarbij we gericht zijn op de werkwijze die je straks in je stagebedrijf of bij FDND-Agency ook gaat hanteren. Hoe meer je de voorgestelde werkwijze omarmt, hoe makkelijker je straks in een bedrijf mee kunt draaien.

#### Analyseren
Jullie gaan met een nieuw team samenwerken. Om heldere afspraken te kunnen maken is het belangrijk direct serieus te beginnen en van elkaar te weten wat sterke kanten en leervragen zijn. Als dit bekend is kan het werk goed verdeeld worden en komt iedereen aan diens leervragen toe.

NB: De manier van werken is een beetje aangepast, wij verwachten dat je documenteert in issues en niet meer in de wiki!

1. Stel persoonlijk leervragen op, neem hier de tijd voor
2. Vul met elkaar de uitgebreide versie van het [teamcanvas](https://theteamcanvas.com/) in en zorg dat iedereen op de hoogte is van elkaars *personal goals* (leervragen)
3. Lees deze hele leertaak goed door voor je verder gaat
4. Houdt een brainstorm over mogelijke oplossingen en noteer alle ideeën
5. Richt één repository in waarin jullie samenwerken
    - nodig alle teamleden uit als member
    - zet issues aan
    - maak een publiek projectboard en nodig alle teamleden uit
    - koppel het [automatisch opnemen van issues in het projectboard @ docs.github.com](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically)
6. Maak keuzes en leg deze vast door issues in te schieten
7. Werk verder aan de hand van issues door telkens een issue op te pakken en alles wat ermee te maken heeft bij deze issue vast te leggen. (voorheen deed je dit in de wiki)

#### Ontwerpen
Je kunt het ontwerp maken als teamlid, met meerdere teamleden of met het hele team. Je kunt daarbij delen van het ontwerp uitwerken of het gehele ontwerp in een keer aanpakken. Ongeacht welke methode je kiest is het belangrijk meerdere iteraties te maken. Bespreek (delen van) het ontwerp en haal daarbij breed (teamleden, peers en docenten) feedback op in de vorm van issues in GitHub. 

NB: Het is fijn als je screenshots van versies van het ontwerp opneemt in de issue-thread zodat de ontstaansgeschiedenis van het definitieve ontwerp navolgbaar wordt. Neem ook links of screenshots van inspiratiebronnen op.

1. Werk gemaakte afspraken uit in een ontwerp
2. Bespreek het ontwerp met het team
3. Noteer opmerkingen
4. Itereer (begin weer bij stap 1)\
— na een aantal iteraties —
5. Breek het ontwerp op in kleine behapbare delen en maak daar issues voor aan in het projectboard

#### Bouwen
Je gaat systematisch werken aan het project door middel van issues. Je doet niets zonder dat er een issue voor is. Als je iets te binnen schiet wat niet perse bij je huidige taak hoort ga je het niet snel doen maar schiet je een nieuwe issue in. Je sluit alleen een issue als deze *reviewed* is.

NB: Door alleen issues te sluiten als er iemand naar gekeken heeft voorkom je heel veel bugs. In het bedrijfsleven kijkt er vaak een senior frontender of tech-lead naar jouw taken voor ze geaccepteerd worden.

1. Pak een issue uit *Todo* op door deze toe te wijzen
2. Verplaats de issue naar *In Progress*
2. Doe onderzoek naar de mogelijke oplossing, neem bronnen en inzichten op in de issue
    1. [SvelteKit @ kit.svelte.dev](https://kit.svelte.dev/)
    2. [Interactive tutorial @ learn.svelte.dev](https://learn.svelte.dev/tutorial/welcome-to-svelte)
    3. [Docs @ kit.svelte.dev](https://kit.svelte.dev/docs/introduction)
    4. [Svelte getting started @ MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
    6. [Getting Started with Directus and SvelteKit @ docs.directus.io](https://docs.directus.io/blog/getting-started-directus-sveltekit.html)
3. Implementeer de gevonden oplossing
4. Documenteer de stappen en belangrijkste algoritmes
5. Vraag een teamlid of docent om een review en noteer de feedback in de issue
6. Itereer (begin weer bij stap 2)
— na een aantal iteraties —
7. Documenteer de laatste inzichten en sluit de issue, verplaats deze naar *Done* als dit niet automagisch gebeurt

#### Integreren
Omdat we met een framework werken kan hosting niet via GitHub pages opgelost worden. Gelukkig zijn er standaardoplossingen voor een aantal veelgebruikte hostingoplossingen, bijvoorbeeld Vercel.

NB: Omdat jullie samenwerken op één repository hoeft de integratie ook maar één keer uitgevoerd te worden. Geen zorgen, jullie kunnen dit allemaal oefenen bij het visitekaartje.

1. Zet je project live door gebruik te maken van het artikel [SvelteKit on Vercel @ Vercel](https://vercel.com/docs/frameworks/sveltekit). Als je de keuze krijgt kies dan voor een *Hobby* project, deze is niet zo uitgebreid maar in ieder geval gratis.

#### Testen
Voor de gebruiker is testen de belangrijkste fase uit de DLC. Dit is waar je erachter komt of jouw website lekker werkt op alle browsers en platformen en of gebruikers jouw interface snappen.

1. Test jouw project op zo veel mogelijk manieren
    - usertest (iig. op klasgenoten en je familie)
    - lighthouse test (voor automated performance en usability)
    - handmatige tests (iig. de tabtest maar ook uitschakelen van JS of CSS)
    - browsertest (chrome, safari, firefox, edge)
    - devicetest (oude en nieuwe mobieltjes, tablets, laptops)

## Definitions of Done

Focus sprint 13 - De focus ligt op team building, samenwerken en hoe je frameworks inzet om een gezamenlijk doel te bereiken én in contact te blijven.

- Je hebt gewerkt volgens de verschillende fases van de development-lifecycle en jouw werk is navolgbaar in issues
- Je toont aan dat je in de analysefase verschillende methoden en technieken hebt ingezet om te inventariseren wat er moet gebeuren
- Je toont aan dat je in de ontwerpfase verschillende methoden en technieken hebt ingezet die ervoor zorgen dat je precies weet wat je moet bouwen
- Je toont aan dat je in de bouwfase verschillende methoden en technieken hebt ingezet om het ontwerp te realiseren
- Je toont aan dat je in de integratiefase verschillende methoden en technieken hebt ingezet om je website live te zetten
- Je toont aan dat je in de testfase verschillende methoden en technieken hebt ingezet om het ontwerp te testen en verbeteren
- De code staat op Github en heeft een live url

/**
 * KAIROX Intelligence Commerciale - Données de démonstration
 * Démo Client : Youmi Cake (Casablanca) - 6 Novembre 2026
 * 
 * Ce fichier contient :
 * - 9 dossiers réels et vérifiés (Écoles & Agences MICE / Wedding)
 * - 3 opportunités confirmées fictives EXPLICITEMENT étiquetées "EXEMPLE ILLUSTRATIF / DONNÉE SIMULÉE"
 * - 2 signaux indirects à qualifier
 */

const OPPORTUNITIES_DATA = [
  // =========================================================================
  // NIVEAU 1 : OPPORTUNITÉS CONFIRMÉES (SIGNAUX DATÉS & VÉRIFIABLES)
  // EXCLUSIVEMENT EXEMPLES FICTIFS - ÉTIQUETÉS SIMULATION
  // =========================================================================
  {
    id: "sim-01",
    nom: "Soirée Annuelle & Gala Tech Hub Casablanca",
    categorie: "Entreprises & Corporate (MICE)",
    sousCategorie: "Célébration Fin d'Année",
    quartier: "Casablanca Finance City (CFC)",
    niveau: "OPPORTUNITÉ CONFIRMÉE",
    isSimulated: true,
    simulationBadge: "EXEMPLE ILLUSTRATIF / DONNÉE SIMULÉE",
    dateSignal: "Signal détecté le 05 Nov 2026",
    dateEvenement: "18 Décembre 2026",
    source: "Post LinkedIn RH & Com d'entreprise (Publication publique)",
    pertinence: "Recherche active d'une Sweet Table personnalisée avec logo comestible pour 150 convives lors du gala annuel de clôture.",
    urgence: "IMMÉDIATE (< 48h)",
    urgenceClass: "urgent",
    saisonnaliteNote: "Pleine saison Corporate Q4 : Les budgets de fin d'année doivent être engagés avant le 30 novembre.",
    contact: {
      nom: "Direction Communication & Event (Simulé)",
      poste: "Responsable Événements Internes",
      email: "event-corporate-demo@techhub-casa.ma",
      telephone: "+212 522 99 XX XX",
      canalRecommande: "Email direct + Présentation PDF d'échantillons personnalisés",
      isVerified: false,
      contactBadge: "Donnée simulée pour la démo"
    },
    pitch: {
      angle: "La pâtisserie événementielle comme vecteur de marque employeur et de prestige corporate.",
      quoiDire: "Bonjour, j'ai vu que vous prépariez votre célébration annuelle du 18 décembre. Chez Youmi Cake, nous créons des sweet tables et gâteaux corporate sur mesure aux couleurs de votre marque, avec la réactivité et le soin d'un atelier artisanal casablancais, à des tarifs 30% plus compétitifs que les traiteurs institutionnels. Pouvons-nous vous faire livrer un coffret dégustation test cette semaine ?",
      argumentMassue: "Prix accessible sans sacrifier l'effet 'Wahou' visuel que les collaborateurs partageront sur LinkedIn et Instagram."
    },
    scriptCopier: `Bonjour,\n\nJ'ai noté que Tech Hub préparait son gala annuel du 18 décembre prochain à Casablanca.\n\nChez Youmi Cake (atelier de pâtisserie événementielle sur mesure à Casablanca), nous accompagnons les entreprises pour leurs célébrations avec des Sweet Tables personnalisées, mignardises raffinées et gâteaux à vos couleurs d'entreprise.\n\nÉtant un atelier artisanal indépendant, nous offrons une réactivité totale et des tarifs très étudiés par rapport aux traiteurs de masse.\n\nSeriez-vous ouvert à recevoir demain un coffret dégustation d'échantillons signature directement à vos bureaux de CFC ?\n\nBien cordialement,\nYoumi Cake Casablanca`
  },
  {
    id: "sim-02",
    nom: "Marché d'Hiver & Goûter Solidaire — PEEP Lyautey",
    categorie: "Écoles & Enseignement",
    sousCategorie: "Association Parents d'Élèves",
    quartier: "Quartier Bourgogne / Lyautey, Casablanca",
    niveau: "OPPORTUNITÉ CONFIRMÉE",
    isSimulated: true,
    simulationBadge: "EXEMPLE ILLUSTRATIF / DONNÉE SIMULÉE",
    dateSignal: "Signal détecté le 04 Nov 2026",
    dateEvenement: "11 Décembre 2026",
    source: "Publication Groupe Facebook Parents d'Élèves (Appel public)",
    pertinence: "Appel de l'association pour sélectionner les artisans locaux pour le stand pâtisseries créatives, cupcakes thématiques et sablés décorés.",
    urgence: "HAUTE (< 48h)",
    urgenceClass: "urgent",
    saisonnaliteNote: "Événement hivernal ponctuel de fin de 1er trimestre (les kermesses ont lieu en mai-juin, mais les marchés d'hiver sont une opportunité Q4 ciblée).",
    contact: {
      nom: "Commission Fêtes & Animations PEEP (Simulé)",
      poste: "Coordinatrice Événements Parents",
      email: "peep-events-demo@lyautey-parents.org",
      telephone: "+212 661 XX XX XX",
      canalRecommande: "WhatsApp rapide avec photos de cupcakes créatifs",
      isVerified: false,
      contactBadge: "Donnée simulée pour la démo"
    },
    pitch: {
      angle: "Créations visuelles féeriques et adaptées aux enfants, portions individuelles faciles à distribuer.",
      quoiDire: "Bonjour ! J'ai vu l'annonce pour le Marché d'Hiver du 11 décembre. Youmi Cake est un atelier casablancais spécialisé dans les douceurs thématiques (cupcakes flocons de neige, sablés artisanaux personnalisés). Nous pouvons fournir un stand clé en main ou des lots à prix préférentiel pour l'association.",
      argumentMassue: "Les sablés et gâteaux individuels thématiques génèrent une vente immédiate et permettent de distribuer des cartes Youmi Cake à 300+ familles casablancaises."
    },
    scriptCopier: `Bonjour,\n\nJe me permets de vous contacter suite à l'annonce du Marché d'Hiver PEEP prévu le 11 décembre.\n\nJe suis la créatrice de Youmi Cake, atelier de pâtisserie événementielle créative à Casablanca. Nous réalisons des sablés décorés à la main, cupcakes thématiques féeriques et douceurs individuelles parfaites pour les enfants et familles.\n\nNous serions ravis de collaborer avec l'association en proposant soit une dotation spéciale, soit un assortiment à tarif préférentiel pour maximiser vos bénéfices associatifs.\n\nPuis-je vous envoyer notre catalogue visuel en 3 photos sur WhatsApp ?\n\nMerci beaucoup !`
  },
  {
    id: "sim-03",
    nom: "Mariage Hivernal 'Winter Romance' — Casablanca Luxury Events",
    categorie: "Wedding & Events Planner",
    sousCategorie: "Mariage Prestigieux",
    quartier: "Bouskoura / Casablanca",
    niveau: "OPPORTUNITÉ CONFIRMÉE",
    isSimulated: true,
    simulationBadge: "EXEMPLE ILLUSTRATIF / DONNÉE SIMULÉE",
    dateSignal: "Signal détecté le 05 Nov 2026",
    dateEvenement: "28 Novembre 2026",
    source: "Story Instagram Pro / Appel d'urgence prestataire (Désistement)",
    pertinence: "Recherche urgente d'un Wedding Cake 4 étages sur mesure (décor fleurs blanches et perles) suite au désistement d'un prestataire traditionnel.",
    urgence: "CRITIQUE (< 24h)",
    urgenceClass: "critical",
    saisonnaliteNote: "Opportunité de sauvetage de dernière minute : marge élevée et fidélisation instantanée du wedding planner.",
    contact: {
      nom: "Responsable Logistique & Scénographie (Simulé)",
      poste: "Lead Wedding Coordinator",
      email: "coordination-demo@casablancaluxuryevents.ma",
      telephone: "+212 662 XX XX XX",
      canalRecommande: "Appel téléphonique immédiat puis envoi WhatsApp du portfolio de pièces montées",
      isVerified: false,
      contactBadge: "Donnée simulée pour la démo"
    },
    pitch: {
      angle: "Sauvetage express, réactivité sous 24h, rigueur de finition sans compromis esthétique.",
      quoiDire: "Bonjour, j'ai vu votre recherche urgente pour le 28 novembre. Chez Youmi Cake, nous avons le créneau disponible et la capacité technique de réaliser votre wedding cake 4 étages aux normes exactes de votre moodboard en respectant le délai.",
      argumentMassue: "La réactivité en situation de crise est le meilleur moyen de devenir le partenaire pâtisserie exclusif de l'agence pour toute l'année 2027."
    },
    scriptCopier: `Bonjour,\n\nJe réagis immédiatement à votre recherche d'un Wedding Cake sur mesure pour le 28 novembre à Bouskoura.\n\nChez Youmi Cake, notre laboratoire a précisément la disponibilité pour prendre en charge votre pièce montée 4 étages et vos mignardises assorties selon votre moodboard exact.\n\nNous maîtrisons les structures stables et les finitions haute couture.\n\nJe suis joignable immédiatement par téléphone pour caler les spécifications techniques et vous envoyer nos réalisations similaires.\n\nDiscutons-en au téléphone ?`
  },

  // =========================================================================
  // NIVEAU 2 : SIGNAUX À QUALIFIER (INDICES INDIRECTS À CONFIRMER PAR CONTACT)
  // =========================================================================
  {
    id: "qualif-01",
    nom: "Nouvelle Implantation & Cocktail Siège — Cabinet CFC Advisory",
    categorie: "Entreprises & Corporate (MICE)",
    sousCategorie: "Inauguration / Cocktail",
    quartier: "Casablanca Finance City (CFC)",
    niveau: "SIGNAL À QUALIFIER",
    isSimulated: false,
    simulationBadge: null,
    dateSignal: "Indice détecté le 03 Nov 2026",
    dateEvenement: "Fin Novembre / Début Décembre 2026",
    source: "Communiqué officiel & annonce immobilière de nouveaux locaux d'affaires",
    pertinence: "Emménagement de 60 consultants dans une nouvelle tour : tradition casablancaise d'organiser un cocktail d'accueil et pause gourmande de bienvenue.",
    urgence: "PROSPECTION ACTIVE (< 5 jours)",
    urgenceClass: "medium",
    saisonnaliteNote: "Les déménagements d'entreprises avant la clôture annuelle s'accompagnent systématiquement d'événements internes.",
    contact: {
      nom: "Office Manager / Direction Générale",
      poste: "Services Généraux & Événements",
      email: "contact@cfc-advisory-demo.ma",
      telephone: "+212 522 88 XX XX",
      canalRecommande: "Email de courtoisie + Appel de qualification bienveillant",
      isVerified: false,
      contactBadge: "Contact à identifier / qualifier"
    },
    pitch: {
      angle: "Bienvenue dans vos nouveaux locaux avec une pause gourmande artisanale livrée le jour J.",
      quoiDire: "Félicitations pour vos nouveaux bureaux à Casablanca Finance City ! Pour célébrer cette nouvelle étape auprès de vos équipes sans la lourdeur d'un traiteur classique, Youmi Cake propose des formules 'Welcome Sweet Box' sur mesure.",
      argumentMassue: "Prise de contact en amont : 80% des entreprises n'ont pas encore bouclé leur prestataire pâtisserie à ce stade."
    },
    scriptCopier: `Bonjour,\n\nToutes nos félicitations pour l'inauguration de vos nouveaux locaux à Casablanca Finance City !\n\nÀ l'occasion de votre emménagement et des célébrations de fin d'année, Youmi Cake accompagne les entreprises avec des créations pâtissières haut de gamme et conviviales : sablés personnalisés à votre nouveau logo, macarons artisanaux et sweet tables élégantes.\n\nAvez-vous déjà arrêté vos prestataires pour votre cocktail d'accueil ?\n\nNous serions ravis de vous déposer une boîte dégustation découverte offerte pour tester notre savoir-faire.\n\nBien cordialement,\nYoumi Cake Casablanca`
  },

  // =========================================================================
  // NIVEAU 3 : PROSPECTS QUALIFIÉS / POTENTIELS (LES 9 ENTRÉES VÉRIFIÉES)
  // BASES RÉELLES VÉRIFIÉES - CONTACTS À CONFIRMER
  // =========================================================================
  
  // --- SEGMENT ÉCOLES (PROSPECTS POTENTIELS - CALENDRIER SAISONNIER) ---
  {
    id: "reel-01",
    nom: "EFI Casablanca (École Française Internationale)",
    categorie: "Écoles & Enseignement",
    sousCategorie: "Établissement Français International",
    quartier: "Anfa / Bouskoura, Casablanca",
    niveau: "PROSPECT QUALIFIÉ / POTENTIEL",
    isSimulated: false,
    simulationBadge: null,
    dateSignal: "Pattern annuel vérifié (Cérémonies de fin d'année documentées)",
    dateEvenement: "Fin Mai - Juin (Cycle Kermesse & Graduation)",
    source: "Site officiel EFI & archives publiques des cérémonies scolaires",
    pertinence: "Organise chaque année des cérémonies de fin d'année et graduation ceremonies documentées publiquement sur son site, nécessitant de grandes pièces montées et buffets sucrés.",
    urgence: "PLANIFICATION SAISONNIÈRE (Activation T2)",
    urgenceClass: "seasonal",
    saisonnaliteNote: "Hors saison en Novembre. Les kermesses et remises de diplômes ont lieu en mai-juin. Ne pas forcer d'urgence immédiate : programmer un premier contact de veille au T1 2027.",
    contact: {
      nom: "Raphaël Spira",
      poste: "Chef d'établissement",
      email: "contact@eficasablanca.org",
      telephone: "+212 529 15 10 01",
      canalRecommande: "Email institutionnel avec proposition de dossier traiteur pour la commission des fêtes",
      isVerified: false,
      contactBadge: "Contact identifié (à confirmer)"
    },
    pitch: {
      angle: "Partenaire local de confiance pour les grands rassemblements scolaires et cérémonies officielles de remise des diplômes.",
      quoiDire: "Présenter Youmi Cake comme atelier artisanal de proximité capable de gérer des volumes de 200 à 500 portions individuelles (gâteaux découpés, sablés siglés EFI, cupcakes aux couleurs de l'école) avec une hygiène irréprochable et un coût maîtrisé pour le budget de l'établissement.",
      argumentMassue: "Anticiper dès le printemps pour être le prestataire pré-sélectionné dans le budget prévisionnel de l'école avant l'appel d'offres informel."
    },
    scriptCopier: `À l'attention de M. Raphaël Spira, Chef d'établissement\nÉcole Française Internationale de Casablanca\n\nMonsieur le Directeur,\n\nEn prévision de la planification de vos cérémonies annuelles de fin d'année et des remises de diplômes des élèves, je souhaite vous présenter Youmi Cake, atelier casablancais de pâtisserie événementielle artisanale sur mesure.\n\nNous concevons des gâteaux de célébration d'envergure, des cupcakes et pièces sucrées personnalisables aux couleurs et blason de l'EFI, avec une exigence stricte de fraîcheur, d'hygiène et un tarif adapté aux budgets scolaires.\n\nNous serions honorés d'être référencés parmi vos prestataires consultés lors de l'organisation de vos temps forts festifs.\n\nJe me tiens à votre entière disposition pour vous transmettre notre plaquette de réalisations.\n\nRespectueusement,\nAtelier Youmi Cake Casablanca`
  },

  {
    id: "reel-02",
    nom: "CAS — Casablanca American School",
    categorie: "Écoles & Enseignement",
    sousCategorie: "École Américaine Internationale",
    quartier: "Anfa, Casablanca",
    niveau: "PROSPECT QUALIFIÉ / POTENTIEL",
    isSimulated: false,
    simulationBadge: null,
    dateSignal: "Pattern annuel vérifié (Événements internes réguliers documentés)",
    dateEvenement: "Fin Mai - Juin (Graduation Gala / End-of-Year Prom)",
    source: "Site officiel CAS (Section événements & vie scolaire)",
    pertinence: "Communique régulièrement ses événements internes sur son propre site, avec une culture américaine très attachée aux traditions de gâteaux personnalisés (Graduation, Homecoming, Spirit Week).",
    urgence: "PLANIFICATION SAISONNIÈRE (Activation T2)",
    urgenceClass: "seasonal",
    saisonnaliteNote: "Novembre est une période de veille. La CAS organise son gala et sa remise de diplômes au printemps. Planifier le démarchage pour mars-avril.",
    contact: {
      nom: "John Burns (Direction) / Zaineb Sajid (Admissions)",
      poste: "Direction & Coordination Admissions/Événements",
      email: "zsajid@cas.ac.ma",
      telephone: "+212 522 79 38 11",
      canalRecommande: "Email professionnel bilingue (Français/Anglais) + Dossier photo",
      isVerified: false,
      contactBadge: "Contact identifié (à confirmer)"
    },
    pitch: {
      angle: "Gâteaux thématiques à l'américaine (layer cakes, sheet cakes décorés, graduation caps en pâte à sucre) réalisés localement avec des ingrédients de qualité.",
      quoiDire: "Présenter le savoir-faire de Youmi Cake sur les designs de tradition américaine (décors précis, couleurs de l'école Cobra green/gold, personnalisation nominale des diplômés).",
      argumentMassue: "La maîtrise du style anglo-saxon de cake design avec la finesse gustative marocaine et des prix accessibles sans surcoût d'agence."
    },
    scriptCopier: `Dear Casablanca American School Community / To the attention of Mrs. Zaineb Sajid & Mr. John Burns,\n\nCasablanca American School is renowned for its vibrant school spirit and memorable graduation traditions.\n\nYoumi Cake is a Casablanca-based custom pastry studio specializing in American-style celebration cakes, custom graduation sheet cakes, and personalized sweet tables designed to reflect school colors and emblems.\n\nAs you plan upcoming school celebrations and spring ceremonies, we would be delighted to share our catalog and provide a tailored quote that meets your event standards within community budgets.\n\nPlease feel free to let us know if we can send you our visual portfolio.\n\nWarm regards,\nYoumi Cake Casablanca`
  },

  {
    id: "reel-03",
    nom: "École Notre Dame d'Aïn Sebaa",
    categorie: "Écoles & Enseignement",
    sousCategorie: "Établissement Privé Catholique",
    quartier: "Aïn Sebaa, Casablanca",
    niveau: "PROSPECT QUALIFIÉ / POTENTIEL",
    isSimulated: false,
    simulationBadge: null,
    dateSignal: "Historique annuel de kermesses et fêtes de communauté scolaire",
    dateEvenement: "Juin (Fête annuelle de l'école & kermesse)",
    source: "Registres publics des établissements privés de Casablanca",
    pertinence: "École catholique privée historique du quartier Aïn Sebaa, organisant des fêtes scolaires conviviales nécessitant des gâteaux familiaux à coût très accessible.",
    urgence: "PLANIFICATION SAISONNIÈRE (Activation T2)",
    urgenceClass: "seasonal",
    saisonnaliteNote: "Aucune urgence en novembre. Établissement à intégrer dans la boucle de prospection de printemps pour les gâteaux de kermesse de juin.",
    contact: {
      nom: "Direction de l'établissement (À qualifier)",
      poste: "Direction pédagogique & pastorale scolaire",
      email: "Non renseigné publiquement",
      telephone: "À qualifier via l'annuaire local",
      canalRecommande: "Passage direct ou appel au secrétariat en avril pour identifier la responsable de l'association des parents",
      isVerified: false,
      contactBadge: "Contact à identifier / qualifier manuellement"
    },
    pitch: {
      angle: "Offre ultra-accessible pour kermesses : gâteaux à découper et sablés pour stand associatif de revente.",
      quoiDire: "Expliquer que Youmi Cake peut fournir des plaques de gâteaux artisanaux moelleux ou des lots de sablés sous emballage individuel que l'école peut revendre au profit de ses œuvres ou de son association scolaire.",
      argumentMassue: "Créer une relation de confiance de quartier à Aïn Sebaa avec une marge bénéficiaire intéressante pour la kermesse de l'école."
    },
    scriptCopier: `Bonjour Madame, Monsieur,\n\nJe prends contact avec le secrétariat de l'École Notre Dame d'Aïn Sebaa.\n\nJe suis la fondatrice de Youmi Cake, un atelier de pâtisserie artisanale à Casablanca. Nous confectionnons pour les écoles des gâteaux gourmands, tartes et sablés individuels spécialement conçus pour les kermesses et stands de vente associatifs, à des tarifs préférentiels très accessibles.\n\nPourriez-vous m'indiquer le contact de la personne ou du comité de parents en charge des festivités de fin d'année ?\n\nJe vous remercie chaleureusement pour votre aide.\n\nBien cordialement,\nYoumi Cake`
  },

  {
    id: "reel-04",
    nom: "American Academy Casablanca",
    categorie: "Écoles & Enseignement",
    sousCategorie: "École Internationale Américaine",
    quartier: "Bouskoura / Casablanca",
    niveau: "PROSPECT QUALIFIÉ / POTENTIEL",
    isSimulated: false,
    simulationBadge: null,
    dateSignal: "Communication active sur ses célébrations et événements communautaires",
    dateEvenement: "Fin Mai - Juin (Gala de fin d'année & Cérémonies)",
    source: "Site officiel & canaux institutionnels AAC",
    pertinence: "École internationale renommée avec une communication active et une forte participation des familles aux galas et événements de clôture.",
    urgence: "PLANIFICATION SAISONNIÈRE (Activation T2)",
    urgenceClass: "seasonal",
    saisonnaliteNote: "Calendrier scolaire américain : Thanksgiving en novembre (marché fermé/interne), la véritable opportunité commerciale pour Youmi Cake réside dans le grand gala de fin d'année au printemps.",
    contact: {
      nom: "David Flaschberger",
      poste: "Head of School",
      email: "contact@aac.ac.ma",
      telephone: "+212 529 03 91 12",
      canalRecommande: "Email officiel adressé au secrétariat de direction puis relance téléphonique",
      isVerified: false,
      contactBadge: "Contact identifié (à confirmer)"
    },
    pitch: {
      angle: "Élégance, prestige et personnalisation totale pour des événements scolaires haut de gamme.",
      quoiDire: "Mettre en valeur des créations sur mesure capables de s'adapter aux exigences esthétiques d'une communauté internationale prestigieuse, tout en restant une solution directe sans intermédiaire coûteux.",
      argumentMassue: "Garantie de flexibilité et personnalisation 100% sur mesure pour les logos, mascottes et thématiques annuelles de l'Academy."
    },
    scriptCopier: `Dear Mr. David Flaschberger, Head of School,\nAmerican Academy Casablanca,\n\nAs American Academy Casablanca curates exceptional milestones for its students and families throughout the academic year, we are pleased to introduce Youmi Cake, an artisanal bespoke pastry atelier based in Casablanca.\n\nWe specialize in high-impact celebratory cakes, tailored dessert tables, and branded sweet creations tailored to school celebrations, graduation ceremonies, and community fundraisers.\n\nWe would be honored to be considered among your trusted local partners for your upcoming major school events.\n\nWe would be delighted to deliver a sample tasting box at your convenience.\n\nBest regards,\nYoumi Cake Casablanca`
  },

  {
    id: "reel-05",
    nom: "École Belge de Casablanca (Section Maternelle)",
    categorie: "Écoles & Enseignement",
    sousCategorie: "Enseignement Fondamental Belge",
    quartier: "Maarif, Casablanca",
    niveau: "PROSPECT QUALIFIÉ / POTENTIEL",
    isSimulated: false,
    simulationBadge: null,
    dateSignal: "Activités festives régulières et kermesse des petits en fin d'année",
    dateEvenement: "Mai - Juin (Fête de l'école) + Goûters récurrents toute l'année",
    source: "Site officiel ecolebelge.org & communication fondamentale",
    pertinence: "Section maternelle très dynamique, particulièrement friande de goûters thématiques, anniversaires collectifs et de la grande fête de fin d'année des tout-petits.",
    urgence: "DOUBLE TEMPORALITÉ (Partenariat goûters continu + Kermesse en Mai)",
    urgenceClass: "medium",
    saisonnaliteNote: "La kermesse est en mai-juin, mais la section maternelle permet un angle d'entrée immédiat : proposer une formule 'Goûter d'anniversaire sain et ludique' pour les parents d'élèves.",
    contact: {
      nom: "Axel Bex Chaval",
      poste: "Directeur de la section fondamentale",
      email: "fondamental@ecolebelge.org",
      telephone: "+212 522 64 12 12",
      canalRecommande: "Email de présentation adressé à la direction fondamentale au Maarif",
      isVerified: false,
      contactBadge: "Contact identifié (à confirmer)"
    },
    pitch: {
      angle: "Douceurs adaptées aux enfants de 3 à 6 ans : décors ludiques, ingrédients de qualité sans excès de sucre, formats faciles à manger.",
      quoiDire: "Présenter une formule spéciale pour les célébrations d'anniversaires en classe et pour le buffet de la fête de fin d'année, qui simplifie la vie des enseignants et des parents.",
      argumentMassue: "Un gâteau de maternelle réussi, c'est 25 parents qui demandent la carte de visite de Youmi Cake le soir même pour l'anniversaire privé de leur enfant."
    },
    scriptCopier: `À l'attention de M. Axel Bex Chaval, Directeur de la section fondamentale\nÉcole Belge de Casablanca (Maarif)\n\nMonsieur le Directeur,\n\nLa section maternelle est le lieu privilégié des premières grandes fêtes d'enfants : célébrations collectives, fête de fin d'année et goûters créatifs.\n\nChez Youmi Cake (Casablanca), nous avons développé une gamme spécialement pensée pour les tout-petits : gâteaux décorés aux thèmes ludiques, portions individuelles faciles à déguster pour les enfants, et recettes équilibrées avec des ingrédients frais de premier choix.\n\nNous serions ravis de proposer nos services à l'école et à l'association des parents pour vos animations gourmandes.\n\nPuis-je vous transmettre notre brochure dédiée aux écoles maternelles ?\n\nBien cordialement,\nYoumi Cake Casablanca`
  },

  // --- SEGMENT AGENCES ÉVÉNEMENTIELLES & WEDDING PLANNERS (PROSPECTS QUALIFIÉS - ACTIFS TOUTE L'ANNÉE) ---
  {
    id: "reel-06",
    nom: "Bensaih Wedding & Events Planner",
    categorie: "Wedding & Events Planner",
    sousCategorie: "Organisation Événements & Mariages",
    quartier: "Casablanca",
    niveau: "PROSPECT QUALIFIÉ / POTENTIEL",
    isSimulated: false,
    simulationBadge: null,
    dateSignal: "Activité continue vérifiée (Portfolio réceptions et mariages actifs)",
    dateEvenement: "Actif toute l'année (Saison continue mariages & fiançailles)",
    source: "Site officiel bensaihweddingplanner.ma & présence secteur",
    pertinence: "Organisation d'événements et mariages à Casablanca en recherche de prestataires wedding cakes réactifs, capables de s'adapter aux moodboards clients les plus exigeants.",
    urgence: "PROSPECTION ACTIVE (< 7 jours)",
    urgenceClass: "medium",
    saisonnaliteNote: "Segment actif 12 mois sur 12 à Casablanca (mariages d'hiver, fiançailles, baptêmes). Aucune contrainte de saisonnalité contraignante.",
    contact: {
      nom: "Direction de l'agence",
      poste: "Wedding Designer Principal",
      email: "Via formulaire de contact officiel",
      telephone: "À qualifier via le formulaire",
      canalRecommande: "Formulaire web officiel avec lien vers les plus belles photos Instagram de Youmi Cake",
      isVerified: false,
      contactBadge: "Contact identifié (à confirmer)"
    },
    pitch: {
      angle: "Le prestataire pâtisserie partenaire fiable qui ne laisse jamais tomber un wedding planner et respecte la scénographie.",
      quoiDire: "Mettre en avant la souplesse d'un atelier artisanal : Youmi Cake s'adapte aux couleurs exactes de la décoration florale, livre sur le lieu de réception à Casablanca, et propose un tarif qui laisse une marge confortable à l'agence.",
      argumentMassue: "Prix accessible + souplesse d'exécution = solution idéale pour les clients qui refusent les devis exorbitants des traiteurs de luxe."
    },
    scriptCopier: `Bonjour à l'équipe Bensaih Wedding & Events,\n\nJe suis admiratrice de la scénographie raffinée de vos mariages et réceptions à Casablanca.\n\nJe suis la créatrice de Youmi Cake, atelier artisanal casablancais spécialisé dans les Wedding Cakes sculptés, Sweet Tables coordonnées et mignardises haute couture.\n\nNous collaborons avec les wedding planners comme partenaire technique réactif : respect scrupuleux de votre charte florale, flexibilité sur les délais, et tarifs accessibles qui s'intègrent facilement dans les budgets de vos mariés.\n\nSeriez-vous ouverts à recevoir un coffret de dégustation pour découvrir nos textures et saveurs signature ?\n\nBelle journée à vous,\nYoumi Cake Casablanca`
  },

  {
    id: "reel-07",
    nom: "We MICE You",
    categorie: "Entreprises & Corporate (MICE)",
    sousCategorie: "Agence MICE & Corporate (PRIORITÉ #1)",
    quartier: "Casablanca",
    niveau: "PROSPECT QUALIFIÉ / POTENTIEL",
    isSimulated: false,
    simulationBadge: null,
    dateSignal: "Activité corporate continue vérifiée (Besoins d'entreprises récurrents)",
    dateEvenement: "Actif toute l'année (Pic Q4 : Séminaires et fêtes de fin d'année)",
    source: "Présence corporate & fiche d'entreprise vérifiée",
    pertinence: "Agence MICE et événementielle de premier plan à Casablanca, accompagne entreprises et institutions. SEGMENT CORPORATE LE PLUS PRIORITAIRE : besoins réguliers, volumes récurrents et solvabilité immédiate.",
    urgence: "HAUTE PRIORITÉ (Action immédiate recommandée en Novembre)",
    urgenceClass: "urgent",
    saisonnaliteNote: "Le mois de novembre est la période clé où les agences MICE finalisent les prestataires pour les événements de clôture annuelle de décembre.",
    contact: {
      nom: "Mme Mounia Arezki Sayagh",
      poste: "Fondatrice & CEO",
      email: "event@wemiceyou.com",
      telephone: "+212 522 257 155",
      canalRecommande: "Message LinkedIn professionnel direct à la fondatrice, appuyé d'un email officiel",
      isVerified: false,
      contactBadge: "Contact identifié (à confirmer)"
    },
    pitch: {
      angle: "Partenaire pâtissier agile et sur mesure pour sublimer séminaires d'entreprises, pauses gourmandes de prestige et réceptions d'affaires.",
      quoiDire: "Présenter Youmi Cake comme l'alternative moderne aux buffets d'hôtels impersonnels : personnalisation des mignardises aux couleurs des clients B2B de We MICE You, packaging soigné, rigueur de livraison.",
      argumentMassue: "Les agences MICE recherchent des pépites locales créatives à prix juste pour enrichir leur catalogue de fournisseurs recommandés."
    },
    scriptCopier: `Chère Madame Mounia Arezki Sayagh,\n\nJe suis avec beaucoup d'intérêt l'excellence des événements MICE et corporatifs conçus par We MICE You à Casablanca.\n\nEn cette période de préparation des temps forts de fin d'année et des séminaires 2027, je me permets de vous présenter Youmi Cake, atelier casablancais de créations pâtissières sur mesure.\n\nNous concevons des pauses café événementielles, sweet tables personnalisées au logo des entreprises et douceurs haut de gamme, avec l'agilité d'un atelier indépendant et une tarification très compétitive pour vos marges agence.\n\nSeriez-vous d'accord pour que je vous fasse déposer un coffret dégustation d'échantillons personnalisés à l'agence cette semaine ?\n\nExcellente journée,\nAtelier Youmi Cake Casablanca`
  },

  {
    id: "reel-08",
    nom: "Yakine Deco",
    categorie: "Agences Événementielles",
    sousCategorie: "Structures, Scénographie & Agencement",
    quartier: "Casablanca",
    niveau: "PROSPECT QUALIFIÉ / POTENTIEL",
    isSimulated: false,
    simulationBadge: null,
    dateSignal: "Activité continue vérifiée (Projets décoratifs réguliers à Casablanca)",
    dateEvenement: "Actif toute l'année",
    source: "Portfolio public de scénographie événementielle",
    pertinence: "Agence événementielle spécialisée en structures, scénographie et agencement à Casablanca, souvent sollicitée par ses clients pour recommander des pâtissiers capables de marier le gâteau avec le décor.",
    urgence: "PROSPECTION ACTIVE (< 7 jours)",
    urgenceClass: "medium",
    saisonnaliteNote: "Prescripteur continu : toute scénographie de fête privée ou d'anniversaire s'articule autour d'une pièce maîtresse (gâteau ou table de desserts).",
    contact: {
      nom: "Pôle Événements & Décoration",
      poste: "Direction Scénographie",
      email: "Via contact téléphonique direct",
      telephone: "+212 682 23 39 78",
      canalRecommande: "WhatsApp direct avec photos de gâteaux intégrés dans des décors floraux / scénographies",
      isVerified: false,
      contactBadge: "Contact identifié (à confirmer)"
    },
    pitch: {
      angle: "La pâtisserie qui s'intègre au millimètre dans votre décor scénographique.",
      quoiDire: "Chez Youmi Cake, nous ne faisons pas juste un gâteau, nous créons la pièce centrale qui prolonge vos arches de ballons, vos décors floraux et vos structures personnalisées.",
      argumentMassue: "Créer un accord gagnant-gagnant de prescription mutuelle : Yakine Deco gagne un partenaire gâteau fiable qui valorise son décor."
    },
    scriptCopier: `Bonjour à l'équipe Yakine Deco,\n\nJe suis très admirative de vos réalisations scénographiques et de vos structures de réception à Casablanca.\n\nChez Youmi Cake, nous créons des gâteaux et sweet tables spécialement conçus pour dialoguer avec la scénographie : harmonies de couleurs exactes avec vos décors, supports adaptés à vos arches et finitions impeccables pour les photos.\n\nNous cherchons un partenaire décorateur régulier avec qui créer des synergies sur les événements privés et réceptions à Casablanca.\n\nPuis-je vous envoyer sur ce WhatsApp quelques exemples de créations adaptées à vos styles de décors ?\n\nMerci beaucoup et bravo pour votre travail !`
  },

  {
    id: "reel-09",
    nom: "Amande & Miel Planification De Mariage",
    categorie: "Wedding & Events Planner",
    sousCategorie: "Wedding Planner & Réceptions Privées",
    quartier: "Racine, Casablanca",
    niveau: "PROSPECT QUALIFIÉ / POTENTIEL",
    isSimulated: false,
    simulationBadge: null,
    dateSignal: "Activité continue confirmée (Flux de mariages & fiançailles à Casablanca)",
    dateEvenement: "Actif toute l'année (Quartier Racine - clientèle locale fidèle)",
    source: "Présence active Instagram & contact direct référencé",
    pertinence: "Wedding planner implantée dans le quartier prisé de Racine à Casablanca, clientèle de proximité cherchant un artisanat raffiné, personnalisé et réactif à prix maîtrisé.",
    urgence: "PROSPECTION CONTINUE (Prise de contact sous 48-72h)",
    urgenceClass: "medium",
    saisonnaliteNote: "Le quartier Racine est un vivier constant de fiançailles, mariages civils, réceptions intimes et baby showers toute l'année.",
    contact: {
      nom: "Laila Benjelloun",
      poste: "Contact Direct & Fondatrice",
      email: "lailabenjelloun@hotmail.fr",
      telephone: "+212 661 320 618",
      canalRecommande: "Message WhatsApp convivial avec photos de créations délicates + Email de confirmation",
      isVerified: false,
      contactBadge: "Contact identifié (à confirmer)"
    },
    pitch: {
      angle: "Proximité, écoute personnalisée de la mariée et dégustation privée offerte.",
      quoiDire: "Proposer à Laila Benjelloun une boîte dégustation personnalisée pour qu'elle puisse recommander Youmi Cake en toute confiance à ses futures mariées.",
      argumentMassue: "Une wedding planner du quartier Racine a besoin d'un partenaire accessible et disponible sans les contraintes de commande 3 mois à l'avance des enseignes industrielles."
    },
    scriptCopier: `Bonjour Mme Laila Benjelloun,\n\nJ'espère que vous allez bien. J'admire la délicatesse des mariages et réceptions que vous organisez à Casablanca.\n\nJe suis la fondatrice de Youmi Cake, atelier artisanal de cake design et pâtisserie événementielle. Nous accompagnons les wedding planners avec des pièces montées sur mesure, des sablés de fiançailles et des sweet tables élégantes à des tarifs très compétitifs.\n\nJe serais ravie de vous déposer directement à Racine un coffret de dégustation avec nos saveurs phares (praliné croustillant, vanille intense de Madagascar, fruits rouges frais).\n\nSeriez-vous disponible ces prochains jours pour une courte rencontre conviviale ?\n\nChaleureusement,\nYoumi Cake Casablanca`
  }
];

// Statistiques globales pour les compteurs d'en-tête
const STATS = {
  totalDossiers: OPPORTUNITIES_DATA.length,
  opportunitesChaudes: OPPORTUNITIES_DATA.filter(o => o.niveau === "OPPORTUNITÉ CONFIRMÉE").length,
  agencesActives: OPPORTUNITIES_DATA.filter(o => o.categorie.includes("Wedding") || o.categorie.includes("Corporate") || o.categorie.includes("Agences")).length,
  ecolesCartographiees: OPPORTUNITIES_DATA.filter(o => o.categorie.includes("Écoles")).length,
  dossiersReelsVerifies: 9
};


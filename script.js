let characters = [
    {
        name: "Washerwoman",
        id:"washerwoman",	
        description: "La Washerwoman scopre che uno specifico personaggio Townsfolk è in gioco, ma non chi lo sta interpretando.",
        intro: "<ul><li>Durante la prima notte, la Washerwoman viene svegliata, le vengono mostrati due giocatori e scopre il personaggio di uno di essi.</li><li>scopre questa informazione una sola volta e poi non scopre più nulla.</li></ul>",
        ability: "Inizi sapendo che 1 di 2 giocatori è un particolare Townsfolk.",
        flavor: "\"Macchie di sangue su una giacca da sera? No, è sherry da cucina. Che disattenzione.\"",
        examples: "<p>Evin è il Chef e Amy è il Ravenkeeper. La Washerwoman scopre che o Evin o Amy è lo Chef.</p><p>Julian è l'Imp e Alex è la Virgin. La Washerwoman scopre che o Julian o Alex è la Virgin.</p><p>Marianna è la Spy e Sarah è la Scarlet Woman. La Washerwoman scopre che uno di loro è il Ravenkeeper. <i>(Questo accade perché la Spy viene registrato come un Townsfolk—in questo caso, il Ravenkeeper)</i></p>",
        howToRun: "<p>Mentre prepari la prima notte, metti il token promemoria <strong>TOWNSFOLK</strong> della Washerwoman accanto a qualsiasi token personaggio Townsfolk e metti il token promemoria <strong>WRONG</strong> della Washerwoman accanto a qualsiasi altro token personaggio.</p><p>Durante la prima notte, sveglia la Washerwoman e indica i giocatori contrassegnati <strong>TOWNSFOLK</strong> e <strong>WRONG</strong>. Mostra alla Washerwoman il token personaggio contrassegnato <strong>TOWNSFOLK</strong>. Rimetti a dormire la Washerwoman. Rimuovi i token promemoria della Washerwoman quando è conveniente.</p>",
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Librarian",
        id:"librarian",	
        description: "Il Librarian scopre che un particolare personaggio Outsider è in gioco, ma non chi lo sta interpretando.",
        intro: "<ul><li>Durante la prima notte, il Librarian scopre che uno di due giocatori è uno specifico Outsider.</li><li>scopre questa informazione una sola volta e poi non scopre più nulla.</li><li>Il Drunk è un Outsider. Se il Librarian scopre che uno di due giocatori è il Drunk, non scopre il Townsfolk che il giocatore del Drunk crede di essere.</li></ul>",
        ability: "Inizi sapendo che 1 di 2 giocatori è un particolare Outsider. (Oppure che zero sono in gioco.)",
        flavor: '"Certainly Madam, under normal circumstances, you may borrow the Codex Malificarium from the library vaults. However, you do not seem to be a member."',
        examples: "<p style='margin-top: 0;'>Benjamin è il Saint e Filip è il Baron. Il Librarian scopre che o Benjamin o Filip è il Saint.</p><p>Non ci sono Outsider in questa partita. Il Librarian scopre uno '0'.</p><p>Abdallah è il Drunk, che crede di essere il Monk, e Douglas è l'Undertaker. Il Librarian scopre che o Abdallah o Douglas è il Drunk. <i>(Questo accade perché il Librarian scopre il personaggio reale. Il Drunk è il vero personaggio di Abdallah, non il Monk.)</i></p>",
        howToRun: `<p>Mentre prepari la prima notte, metti il token promemoria <strong>OUTSIDER</strong> del Librarian accanto a qualsiasi token personaggio Outsider e metti il token promemoria <strong>WRONG</strong> del Librarian accanto a qualsiasi altro token personaggio.</p><p>Durante la prima notte, sveglia il Librarian e indica i giocatori contrassegnati <strong>OUTSIDER</strong> e <strong>WRONG</strong>. Mostra al Librarian il token personaggio contrassegnato <strong>OUTSIDER</strong>. Rimetti a dormire il Librarian. Rimuovi i token promemoria del Librarian quando è conveniente.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Investigator",
        id:"investigator",	
        description: "L'Investigator scopre che un particolare personaggio Minion è in gioco, ma non chi lo sta interpretando.",
        intro: "<ul><li>Durante la prima notte, l'Investigator scopre che uno di due giocatori è uno specifico Minion.</li><li>scopre questa informazione una sola volta e poi non scopre più nulla.</li></ul>",
        ability: "Inizi sapendo che 1 di 2 giocatori è un particolare Minion.",
        flavor: '"It is a fine night for a stroll, wouldn’t you say, Mister Morozov? Or should I say... BARON Morozov?"',
        examples: "<p>Amy è il Baron e Julian è il Mayor. L'Investigator scopre che o Amy o Julian è il Baron.</p><p>Angelus è la Spy e Lewis è il Poisoner. L'Investigator scopre che o Angelus o Lewis è la Spy.</p><p>Brianna è la Recluse e Marianna è l'Imp. L'Investigator scopre che o Brianna o Marianna è il Poisoner. <i>(Questo accade perché la Recluse viene registrata come un Minion—in questo caso, il Poisoner.)</i></p>",
        howToRun: `<p>Mentre prepari la prima notte, metti il token promemoria <strong>MINION</strong> dell'Investigator accanto a qualsiasi token personaggio Minion e metti il token promemoria <strong>WRONG</strong> dell'Investigator accanto a qualsiasi altro token personaggio.</p><p>Durante la prima notte, sveglia l'Investigator e indica i giocatori contrassegnati <strong>MINION</strong> e <strong>WRONG</strong>. Mostra all'Investigator il token personaggio contrassegnato <strong>MINION</strong>. Rimetti a dormire l'Investigator. Rimuovi i token promemoria dell'Investigator quando è conveniente.</p>`,
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Chef",
        id:"chef",	
        description: "Lo Chef sa se i giocatori evil sono seduti uno accanto all’altro.",
        intro: "<ul><li>Nella prima notte, lo Chef scopre esattamente quante coppie di giocatori malvagi ci sono in totale. Una coppia è composta da due giocatori, ma un giocatore può far parte di due coppie. Quindi, due giocatori seduti uno accanto all’altro sono una coppia. Tre giocatori seduti uno accanto all’altro sono due coppie. Quattro giocatori seduti uno accanto all’altro sono tre coppie. E così via.</li><li>Lo Chef rileva i Traveller malvagi come gli altri tipi di personaggio, ma solo se quei Traveller sono entrati in gioco prima che lo Chef agisca.</li></ul>",
        ability: "Inizi sapendo quante coppie di giocatori malvagi ci sono sedute vicino tra loro.",
        flavor: '"This evening’s reservations seem odd. Never before has Mrs Mayweather kept company with that scamp from Hudson lane. Yet, tonight, they have a table for two. Strange."',
        examples: "<p>Nessun giocatore malvagio è seduto accanto a un altro. Lo Chef scopre uno \"0\".</p><p>L’Imp è seduto accanto al Baron. Dall’altra parte del cerchio, il Poisoner è seduto accanto alla Scarlet Woman. Lo Chef scopre un \"2\".</p><p>Uno Scapegoat malvagio è seduto tra l’Imp e un Minion. Dall’altra parte del cerchio, due Minion sono seduti uno accanto all’altro. Lo Chef scopre un \"3\".</p><p>La Recluse è seduta tra l’Imp e il Poisoner. Lo Chef scopre un \"1\". Qui, la Recluse viene registrata come malvagio per la coppia Imp-Recluse, ma come good per la coppia Poisoner-Recluse</p>",
        howToRun: "<p>Durante la prima notte, sveglia lo Chef. Mostra allo Chef con le dita <i>(0, 1, 2, ecc.)</i> il numero di coppie di giocatori malvagi vicini. Rimetti a dormire lo Chef.</p>",
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Empath",
        id:"empath",	
        description: "L'Empath continua ad scoprire se i suoi vicini vivi sono buoni o malvagi.",
        intro: "<ul><li>L'Empath scopre solo quanti dei suoi vicini sono malvagi, non <i>quale</i> lo sia.</li><li>L'Empath non rileva i giocatori morti. Quindi, se l'Empath è seduto accanto a un giocatore morto, non ottiene informazioni su quel giocatore morto. Al suo posto, ottiene informazioni sul giocatore vivo più vicino in quella direzione.</li><li>L'Empath agisce dopo il Demone, quindi se il Demone uccide uno dei vicini vivi dell'Empath, l'Empath non scopre informazioni sul giocatore appena morto. Le informazioni dell'Empath sono accurate all'alba, non al tramonto.</li></ul>",
        ability: "Ogni notte, scopri quanti dei tuoi 2 vicini vivi sono malvagi.",
        flavor: '"My skin prickles. Something is not right here. I can feel it."',
        examples: "<p>L'Empath ha come vicini due giocatori good — un Soldier e un Monk. L'Empath scopre uno \"0\".</p><p>Il giorno successivo, il Soldier viene giustiziato. Quella notte, il Monk viene ucciso dall'Imp. L'Empath ora rileva i giocatori vivi seduti accanto al Soldier e al Monk, che sono un Librarian e un Gunslinger evil. L'Empath ora scopre un \"1\".</p><p>In una notte successiva, rimangono vivi solo tre giocatori: l'Empath, l'Imp e il Baron. Indipendentemente da chi sia seduto dove, l'Empath scopre un \"2\".</p>",
        howToRun: "Ogni notte, sveglia l'Empath. Mostragli con le dita <i>(0, 1 o 2)</i> il numero di giocatori evil vicini all'Empath. Rimetti a dormire l'Empath.",
        group: "Townsfolk",
        script: "tb"
    },
{
        name: "Fortune Teller",
        id:"fortuneteller",	
        description: "La Fortune Teller può individuare chi è il Demone, ma a volte crede che giocatori buoni siano Demone.",
        intro: "<ul><li>Ogni notte, la Fortune Teller sceglie due giocatori e scopre se almeno uno di essi è un Demone. Non scopre quale dei due sia il Demone, solo che uno dei due lo è. Se nessuno dei due è il Demone, lo scopre.</li><li>Sfortunatamente, un giocatore, chiamato Red Herring, verrà registrato come un Demone dalla Fortune Teller se viene scelto. Il Red Herring è lo stesso giocatore per tutta la durata della partita. Questo giocatore può essere qualsiasi giocatore buono, anche la Fortune Teller stessa, e la Fortune Teller non sa quale giocatore sia.</li><li>La Fortune Teller può scegliere qualsiasi due giocatori — vivi o morti, o anche se stessa. Se sceglie un Demone morto, la Fortune Teller riceve comunque un cenno affermativo.</li>",
        ability: "Ogni notte, scegli 2 giocatori: scopri se uno dei due è un Demone. C’è un giocatore buono che per te risulta essere un Demone.",
        flavor: '"I sense great evil in your soul! But... that could just be your perfume. I am allergic to Elderberry."',
        examples: "<p>La Fortune Teller sceglie il Mayor e l'Undertaker, e scopre un \"no\".</p><p>La Fortune Teller sceglie l'Imp e l'Empath, e scopre un \"yes\".</p><p>La Fortune Teller sceglie un Imp vivo e un Imp morto, e scopre un \"yes\".</p><p>La Fortune Teller sceglie se stessa e un Saint, che è il Red Herring. La Fortune Teller scopre un \"yes\".</p>",
        howToRun: "<p>Mentre prepari la prima notte, metti il token promemoria <strong>RED HERRING</strong> della Fortune Teller accanto a qualsiasi token personaggio buono, segnando quel giocatore come Red Herring.</p><p>Ogni notte, sveglia la Fortune Teller. La Fortune Teller indica due giocatori qualsiasi. Se uno dei giocatori scelti è un Demone o il Red Herring, annuisci. Altrimenti, scuoti la testa. Rimetti a dormire la Fortune Teller.</p><p class=\"modal__callout-box\">Nelle partite più piccole, a volte è consigliato rendere la Fortune Teller il proprio Red Herring, poiché in questo modo la Fortune Teller ottiene più informazioni.</p>",
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Undertaker",
        id:"undertaker",	
        description: "L'Undertaker scopre quale personaggio è stato giustiziato oggi.",
        intro: "<ul><li>Il giocatore deve essere morto per esecuzione affinché l'Undertaker scopra chi era. Le morti durante il giorno per altri motivi, come quando il Gunslinger sceglie un giocatore da uccidere o l’esilio di un Traveller, non contano.</li><li>L'Undertaker si sveglia ogni notte tranne la prima, poiché non ci sono ancora state esecuzioni.</li><li>Se oggi non è morto nessuno, l'Undertaker non scopre nulla. Lo Storyteller o non sveglia l'Undertaker durante la notte, oppure lo sveglia ma non mostra alcun token.</li><li>Se il Drunk viene giustiziato, all'Undertaker viene mostrato il token personaggio del Drunk, non il token del Townsfolk che il giocatore del Drunk credeva di essere.</li></ul>",
        ability: "Ogni notte*, scopri quale personaggio è morto oggi per esecuzione.",
        flavor: '"Hmmm....cosa abbiamo qui? Lo stivale sinistro è consumato fino al tacco, con schegge di selce sotto la lingua. Questo è l’abbigliamento di un militare."',
        examples: "<p>Il Mayor viene giustiziato oggi. Quella notte, all'Undertaker viene mostrato il token del Mayor.</p><p>Il Drunk, che crede di essere la Virgin, viene giustiziato oggi. All'Undertaker viene mostrato il token del Drunk, perché l'Undertaker scopre il vero personaggio del giocatore, non il personaggio che il giocatore crede di essere.</p><p>La Spy viene giustiziata. Due Traveller vengono esiliati. Quella notte, all'Undertaker viene mostrato il token del Butler, perché la Spy viene registrata come il Butler e perché gli esili non sono esecuzioni.</p><p>Oggi non è stato giustiziato nessuno. Quella notte, l'Undertaker non si sveglia.</p>",
        howToRun: "<p>Se un giocatore muore per esecuzione, metti il token promemoria <strong>DIED TODAY</strong> dell'Undertaker accanto al token personaggio del giocatore morto.</p><p>Ogni notte tranne la prima, se almeno un giocatore è morto oggi per esecuzione, sveglia l'Undertaker. Mostra all'Undertaker il token personaggio contrassegnato <strong>DIED TODAY</strong>. Rimetti a dormire l'Undertaker. Rimuovi il token promemoria dell'Undertaker quando è conveniente.</p><p class=\"modal__callout-box\">In Trouble Brewing, può esserci solo un’esecuzione al giorno, e ogni esecuzione provoca la morte di un giocatore. In altre edizioni, potrebbero esserci più esecuzioni al giorno (nel qual caso lo Storyteller sceglie quale personaggio mostrare all'Undertaker) oppure l’esecuzione potrebbe non causare una morte (nel qual caso l'Undertaker non scopre nulla).</p>",
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Monk",
        id:"monk",	
        description: "Il Monk protegge gli altri dal Demone.",
        intro: "<ul><li>Ogni notte tranne la prima, il Monk può scegliere di proteggere qualsiasi giocatore tranne se stesso.</li><li>Se il Demone attacca un giocatore che è stato protetto dal Monk, quel giocatore non muore. Il Demone non può attaccare un altro giocatore — semplicemente, questa notte non c’è alcuna morte.</li><li>Il Monk non protegge dal fatto che il Demone nomini ed esegua qualcuno.</li></ul>",
        ability: "Ogni notte*, scegli un giocatore (non te stesso): è al sicuro dal Demone stanotte.",
        flavor: "\"’Tis an ill and deathly wind that blows tonight. Come, my brother, take shelter in the abbey while the storm rages. By my word, or by my life, you will be safe.\"",
        examples: "<p>Il Monk protegge la Fortune Teller. L'Imp attacca la Fortune Teller. Nessuno muore stanotte.</p><p>Il Monk protegge il Mayor e l'Imp attacca il Mayor. L’abilità \"un altro giocatore muore\" del Mayor non si attiva, perché il Mayor è al sicuro dall’Imp. Nessuno muore stanotte.</p><p>Il Monk protegge l'Imp. L'Imp sceglie di uccidere se stesso stanotte, ma non succede nulla. L'Imp rimane vivo e non viene creato un nuovo Imp.</p>",
        howToRun: "<p>Ogni notte tranne la prima, sveglia il Monk. Il Monk indica qualsiasi giocatore tranne se stesso. <i>(Se il Monk indica se stesso, scuoti la testa in segno di no e invitalo a indicare un altro giocatore.)</i> Rimetti a dormire il Monk. Metti il token promemoria <strong>SAFE</strong> del Monk accanto al token personaggio del giocatore scelto.</p><p>Se il Demone attacca il giocatore contrassegnato <strong>SAFE</strong>, il giocatore rimane vivo. <i>(Non contrassegnarlo con il token promemoria <strong>DEAD</strong> del Demone né aggiungere un sudario come faresti normalmente.)</i> All’alba, dichiara che nessuno è morto durante la notte. </i>(Non dire perché.)</i></p><p>All’alba, rimuovi il token promemoria <strong>SAFE</strong>.</p><p class=\"modal__callout-box\">In altre edizioni, i Demone possono avere abilità diverse dall’uccidere. La protezione del Monk previene anche tutti gli altri effetti dannosi dell’abilità del Demone, come avvelenare o rendere malvagio il giocatore protetto.</p>",
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Ravenkeeper",
        id:"ravenkeeper",	
        description: "Il Ravenkeeper scopre il personaggio di qualsiasi giocatore, ma solo se il Ravenkeeper muore di notte.",
        intro: "<ul><li>Il Ravenkeeper viene svegliato nella notte in cui muore e sceglie immediatamente un giocatore.</li><li>Il Ravenkeeper può scegliere un giocatore morto, se lo desidera.</li></ul>",
        ability: "Se muori di notte, vieni svegliato per scegliere un giocatore: scopri il suo personaggio.",
        flavor: "\"My birds will avenge me! Fly! Fly, my sweet and dutiful pets! Take your message to those in dark corners! To the manor and to the river! Let them read of the nature of my death.\"",
        examples: "<p>Il Ravenkeeper viene ucciso dall'Imp, poi si sveglia per scegliere un giocatore. Dopo qualche esitazione, sceglie Ben. Ben è l'Empath e il Ravenkeeper scopre questa informazione.</p><p>L'Imp attacca il Mayor. Il Mayor non muore, ma il Ravenkeeper muore al suo posto, a causa dell’abilità del Mayor. Il Ravenkeeper viene svegliato e sceglie Doug, che è una Recluse morta. Il Ravenkeeper scopre che Doug è la Scarlet Woman, poiché la Recluse viene registrata come un Minion.</p>",
        howToRun: "<p>Se il Ravenkeeper è morto stanotte, sveglialo. Indica qualsiasi giocatore. Mostra al Ravenkeeper il token personaggio del giocatore scelto. Rimetti a dormire il Ravenkeeper.</p><p class=\"modal__callout-box\">Consigliamo di scoraggiare o persino vietare ai giocatori di parlare di ciò che stanno facendo di notte mentre lo fanno.</p>",
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Virgin",
        id:"virgin",	
        description: "La Virgin è al sicuro dall’esecuzione… forse. I giocatori che nominano la Virgin di solito muoiono.",
        intro: "<ul><li>Se un Townsfolk nomina la Virgin, quel Townsfolk viene immediatamente giustiziato. Poiché può esserci una sola esecuzione al giorno, il processo di nomina termina immediatamente, anche se un giocatore stava per morire.</li><li>Solo i Townsfolk vengono giustiziati a causa dell’abilità della Virgin. Se un Outsider, un Minion o un Demone nomina la Virgin, non succede nulla e la votazione continua.</li><li>L’abilità della Virgin è potente perché, se un Townsfolk la nomina e muore, allora entrambi i personaggi sono quasi certamente Townsfolk.</li><li>Dopo essere stata nominata per la prima volta, la Virgin perde la sua abilità, anche se il nominatore non è morto, e anche se la Virgin era avvelenata o drunk.</li></ul>",
        ability: "La prima volta che vieni nominata, se il nominatore è un Townsfolk, viene immediatamente giustiziato.",
        flavor: "\"Sono pura. Che coloro che sono senza peccato si gettino a terra e soffrano al mio posto. La mia reputazione non sarà macchiata dalle vostre accuse velenose.\"",
        examples: "<p>La Washerwoman nomina la Virgin. La Washerwoman muore e la votazione termina.</p><p>Il Drunk, che crede di essere lo Chef, nomina la Virgin. Il Drunk rimane vivo e la Virgin perde la sua abilità, perché il Drunk è un Outsider, non un Townsfolk. I giocatori possono ora votare se giustiziare o meno la Virgin.</p><p>Un giocatore morto nomina la Virgin. I morti, tuttavia, non possono nominare. Lo Storyteller dichiara che questa nomina non conta. La Virgin non perde la sua abilità.</p>",
        howToRun: "<p>Se il primo giocatore in assoluto a nominare la Virgin è un Townsfolk, dichiara immediatamente che il giocatore che ha nominato viene giustiziato. Quel giocatore <strong>muore</strong> — metti un sudario sul suo token personaggio nel Grimorio. <strong>La Virgin perde la sua abilità</strong> — metti il token promemoria <strong>NO ABILITY</strong> della Virgin accanto al token della Virgin. Termina il processo di nomina e passa alla fase notturna. <i>(Nessun altro può essere giustiziato oggi.)</i></p><p>Se il primo giocatore in assoluto a nominare la Virgin non è un Townsfolk, continua la votazione normalmente. <strong>La Virgin perde la sua abilità</strong> — metti il token promemoria <strong>NO ABILITY</strong> della Virgin accanto al token della Virgin.</p>",
        group: "Townsfolk",
        script: "tb"
    },
    {
        name: "Slayer",
        id:"slayer",	
        description: "Lo Slayer può uccidere il Demone indovinando chi è.",
        intro: "<ul><li>Lo Slayer può scegliere di usare la propria abilità in qualsiasi momento durante il giorno e deve dichiararlo pubblicamente. Se lo Slayer sceglie il Demone, il Demone muore immediatamente. Altrimenti, non succede nulla.</li><li>I giocatori non scoprono l’identità del giocatore morto. Dopotutto, potrebbe essere stata la Recluse!</li><li>Uno Slayer che usa la propria abilità mentre è avvelenato o drunk non può usarla di nuovo.</li><li>Lo Slayer vorrà scegliere un giocatore vivo. Anche se lo Slayer sceglie un Imp morto, non succede nulla, perché un giocatore morto non può morire di nuovo.</li><li>I giocatori possono dire qualsiasi cosa in qualsiasi momento, quindi un giocatore che finge di essere lo Slayer può fingere di usare l’abilità dello Slayer.</li></ul>",
        ability: "Una volta per partita, durante il giorno, scegli pubblicamente un giocatore: se è il Demone, muore.",
        flavor: '"Muori."',
        examples: "<p>Lo Slayer sceglie l'Imp. L'Imp muore e i buoni vincono!</p><p>Lo Slayer sceglie la Recluse. La Recluse muore, ma la partita continua, perché la Recluse viene registrata come l'Imp.</p><p>L'Imp sta bluffando come se fosse lo Slayer. Dichiara di usare la sua abilità da Slayer sulla Scarlet Woman. Non succede nulla.</p>",
        howToRun: "<p>Durante il giorno, lo Slayer può dichiarare di voler usare la propria abilità. In tal caso, lo Slayer indica un qualsiasi giocatore. Se il giocatore scelto è un Demone vivo, dichiara che il giocatore scelto <strong>muore</strong> — metti un sudario sul suo token personaggio nel Grimorio. Se il giocatore scelto non è un Demone vivo, dì \"Non succede nulla.\" In entrambi i casi, <strong>lo Slayer perde la sua abilità</strong> — metti il token promemoria <strong>NO ABILITY</strong> dello Slayer accanto al token dello Slayer.</p><p class=\"modal__callout-box\">Se un giocatore sta bluffando come se fosse lo Slayer e dichiara di voler usare la propria abilità, comportati come se fosse davvero lo Slayer — concedi tempo per la discussione, lascia che prenda la decisione e comportati come se stessi trafficando con i token nel Grimorio, poi dì \"Non succede nulla.\"</p><p class=\"modal__callout-box\">Quando lo Slayer dichiara di voler usare la propria abilità, concedi al gruppo uno o due minuti per discutere su chi lo Slayer dovrebbe scegliere. Questo permette al gruppo di sentirsi responsabile della vittoria (o della sconfitta!), ma lo Slayer prende sempre la decisione finale.</p></p>",
        group: "Townsfolk",
        script: "tb"
    },
{
        name: "Soldier",
        id:"soldier",	
        description: "Il Soldier non può essere ucciso dal Demone.",
        intro: "<ul><li>Il Soldier non può morire a causa dell’abilità del Demone. Quindi, se l’Imp attacca il Soldier di notte, non succede nulla. Nessuno muore. L’Imp non può scegliere un altro giocatore da attaccare al suo posto.</li><li>Il Soldier può comunque morire per esecuzione, anche se il nominatore era il Demone. Il Soldier è protetto dall’abilità del Demone di uccidere, non dalle azioni del giocatore Demone.</li></ul>",
        ability: "Sei al sicuro dal Demone.",
        flavor: '"Come David disse a Golia, come Teseo disse al Minotauro, come Arjuna disse a Bhagadatta... No."',
        examples: "<p>L’Imp attacca il Soldier. Il Soldier non muore, quindi nessuno muore quella notte.</p><p>Il Poisoner avvelena il Soldier, poi l’Imp attacca il Soldier. Il Soldier muore, perché mentre è avvelenato non ha alcuna abilità.</p><p>L’Imp attacca il Mayor. Lo Storyteller sceglie che muoia il Soldier al suo posto. Tuttavia, poiché il Soldier non può essere ucciso dal Demone, quella notte non muore nessuno.</p>",
        howToRun: "<p>Durante la notte, se il Demone attacca il Soldier, il Soldier rimane vivo. <i>(All’alba, dichiara che nessuno è morto durante la notte.)</i></p><p class=\"modal__callout-box\">In altre edizioni, i Demone possono avere abilità diverse dall’uccidere. Il Soldier è anche protetto da tutti gli altri effetti dannosi dell’abilità del Demone, come avvelenare o rendere malvagio il Soldier.</p>",
        group: "Townsfolk",
        script: "tb"
    },
{
        name: "Mayor",
        id:"mayor",	
        description: "Il Mayor può vincere con mezzi pacifici nell’ultimo giorno.",
        intro: "<ul><li>Per sopravvivere, il Mayor a volte fa \"accidentalmente\" uccidere qualcun altro. Se il Mayor viene attaccato e dovrebbe morire, lo Storyteller può scegliere che muoia un altro giocatore. Nessuno scopre come è morto durante la notte, solo che è morto.</li><li>Se alla fine del giorno rimangono esattamente tre giocatori vivi e quel giorno non è avvenuta alcuna esecuzione, la partita termina e i buoni vincono.</li><li>I Traveller contano come giocatori per la vittoria del Mayor, quindi devono essere prima esiliati. Ricorda che gli esili non sono esecuzioni.</li><li>I Fabled non contano come giocatori per la vittoria del Mayor, poiché lo Storyteller non è un giocatore.</li><li>Se il Demone attacca il Mayor e lo Storyteller sceglie invece un giocatore morto, il Soldier o un giocatore protetto dal Monk, quel giocatore non muore quella notte.</li></ul>",
        ability: "Se vivono solo 3 giocatori e non avviene alcuna esecuzione, la tua squadra vince. Se muori di notte, un altro giocatore potrebbe morire al tuo posto.",
        flavor: '"Dobbiamo mettere da parte le nostre differenze e porre fine a queste uccisioni senza senso. In fondo siamo tutti contribuenti. Be’, quasi tutti."',
        examples: "<p>L’Imp attacca il Mayor. Lo Storyteller sceglie che muoia invece il Ravenkeeper. Il giorno successivo, ci sono tre giocatori vivi. Non ci sono nomine per l’esecuzione. I buoni vincono.</p><p>Cinque giocatori sono vivi, inclusi due Traveller. Entrambi i Traveller vengono esiliati e la votazione tra i giocatori rimanenti termina in pareggio. Poiché un pareggio significa che nessun giocatore viene giustiziato, i buoni vincono.</p>",
        howToRun: "<p>Durante la notte, se il Mayor dovrebbe morire, scegli se il Mayor muore davvero oppure se il Mayor rimane vivo e muore invece un altro personaggio — metti il token promemoria <strong>DEAD</strong> del Demone accanto al token di quel personaggio invece che a quello del Mayor, e metti un sudario su quel token invece che su quello del Mayor.</p><p>All’alba, dichiara che il giocatore contrassegnato <strong>DEAD</strong> è morto durante la notte. (Non dire come è morto.)</p><p>Al tramonto, se esattamente tre giocatori sono vivi e nessun giocatore è stato giustiziato oggi, dichiara che la partita termina e i buoni vincono.</p><p class=\"modal__callout-box\">Consigliamo di mantenere il Mayor in vita fino all’ultimo giorno, poiché è così che la partita risulta più divertente per i giocatori. In rari casi, se il gruppo è schiacciante­mente convinto molto presto che il Mayor sia davvero il Mayor, lascia che il Mayor muoia così che i malvagi abbiano una possibilità di vincere.</p>",
        group: "Townsfolk",
        script: "tb"
    },
{
        name: "Butler",
        id:"butler",	
        description: "Il Butler può votare solo quando vota il suo Master.",
        intro: "<ul><li>Ogni notte, il Butler sceglie un giocatore come proprio Master. Può essere lo stesso giocatore della notte precedente o uno diverso.</li><li>Se il Master ha la mano alzata per votare, o se il voto del Master è già stato conteggiato, il Butler può alzare la mano per votare.</li><li>Se il Master tiene la mano abbassata, segnalando che non sta votando, oppure se il Master abbassa la mano prima che il suo voto venga conteggiato, anche il Butler deve abbassare la mano.</li><li>Non è responsabilità dello Storyteller controllare il Butler. È il Butler a essere responsabile del proprio voto. Votare deliberatamente quando non si dovrebbe è considerato barare.</li><li>Poiché gli esili non sono mai influenzati dalle abilità, il Butler può votare liberamente per un esilio.</li><li>I giocatori morti possono alzare la mano per votare solo se hanno un token voto. Questo vale anche se il Butler sceglie un giocatore morto come proprio Master.</li><li>Il Butler non è mai obbligato a votare.</li><li>Il voto del Butler può essere conteggiato dallo Storyteller prima o dopo quello del suo Master. La posizione a sedere non è importante.</li></ul>",
        ability: "Ogni notte, scegli un giocatore (non te stesso): domani potrai votare solo se anche lui sta votando.",
        flavor: '"Sì, signore...<br>No, signore...<br>Certo, signore."',
        examples: "<p>Il Butler sceglie Abdallah come proprio Master. Domani, se Abdallah alza la mano per votare un’esecuzione, anche il Butler può farlo. In caso contrario, il Butler non può alzare la mano.</p><p>È in corso una nomina. Il Butler e il suo Master hanno entrambi la mano alzata per votare. Mentre lo Storyteller sta contando i voti, il Master abbassa la mano all’ultimo secondo. Il Butler deve abbassare immediatamente la mano.</p><p>Il Butler è morto. Poiché i giocatori morti non hanno abilità, il Butler può votare con il suo token voto in qualsiasi momento.</p>",
        howToRun: "<p>Ogni notte, sveglia il Butler. Il Butler indica un qualsiasi giocatore. Contrassegna quel giocatore con il token promemoria <strong>MASTER</strong>. Rimetti a dormire il Butler.</p><p>Durante una nomina, il Butler può tenere la mano alzata per votare solo se il Master ha la mano alzata o se il voto del Master è già stato conteggiato.</p><p class=\"modal__callout-box\">Se il Butler vota illegalmente per errore, conteggia comunque il suo voto. In caso contrario, il totale dei voti sarebbe inferiore al dovuto e tutti i giocatori capirebbero chi è il Butler, il che sarebbe ingiusto per la squadra dei malvagi. Gli errori capitano. Continua a giocare e chiarisci la situazione in privato più tardi.</p>",
        group: "Outsider",
        script: "tb"
    },
{
        name: "Drunk",
        id:"drunk",	
        description: "Il giocatore Drunk crede di essere un Townsfolk e non ha idea di essere in realtà il Drunk.",
        intro: "<ul><li>Durante la preparazione, il token del Drunk non viene messo nel sacchetto. Al suo posto, viene messo nel sacchetto un token personaggio Townsfolk, e il giocatore che pesca quel token è segretamente il Drunk per tutta la partita. Lo Storyteller lo sa. Il giocatore no.</li><li>Il Drunk non ha alcuna abilità. Ogni volta che l’abilità del Townsfolk che crede di essere dovrebbe influenzare la partita in qualche modo, non lo fa. Tuttavia, lo Storyteller finge che il giocatore sia il Townsfolk che crede di essere. Se quel personaggio dovrebbe svegliarsi di notte, il Drunk si sveglia e agisce come se fosse quel Townsfolk. Se quel Townsfolk dovrebbe ottenere informazioni, lo Storyteller può invece fornire informazioni false — ed è incoraggiato a farlo.</li></ul>",
        ability: "Non sai di essere il Drunk. Credi di essere un personaggio Townsfolk, ma non lo sei.",
        flavor: '"Sono solo un *hic* bevitore sociale, mia cara. Ammetto però di essere un grande *burp* frequentatore di feste."',
        examples: "<p>Il Drunk, che crede di essere il Soldier, viene attaccato dall’Imp. Il Drunk muore.</p><p>Il Drunk, che crede di essere l’Empath, si sveglia e scopre uno \"0\" anche se è seduto accanto a un giocatore malvagio. La notte successiva, scopre un \"1\".</p><p>Il Drunk, che crede di essere il Ravenkeeper, viene ucciso di notte. Sceglie il Saint, ma scopre che questo giocatore è il Poisoner.</p><p>La Fortune Teller viene giustiziata. Quella notte, il Drunk, che crede di essere l’Undertaker, scopre che il Drunk è morto oggi.</p>",
        howToRun: "<p>Durante la preparazione della partita, prima di mettere i token personaggio nel sacchetto, rimuovi il token del Drunk e aggiungi un token personaggio Townsfolk. Aggiungi il token promemoria <strong>IS THE DRUNK</strong> del Drunk al Grimorio. Metti nel sacchetto il token Townsfolk scambiato, non il token personaggio del Drunk.</p><p>Mentre prepari la prima notte, metti il token promemoria <strong>IS THE DRUNK</strong> del Drunk accanto a qualsiasi token personaggio Townsfolk, cambiando il personaggio di quel giocatore in Drunk. Ora è un Outsider e non ha l’abilità di quel personaggio Townsfolk. <i>(Ma crede di averla.)</i></p><p>Durante la partita, comportati come se il Drunk fosse davvero quel personaggio Townsfolk. <i>(Se quel personaggio dovrebbe svegliarsi di notte per agire, il Drunk si sveglia per agire. Se la sua abilità dovrebbe fornirgli informazioni, puoi dargli informazioni false se lo desideri. Vedi \"Drunkenness and Poisoning\" nel regolamento.)</i></p>",
        group: "Outsider",
        script: "tb"
    },
{
        name: "Recluse",
        id:"recluse",	
        description: "La Recluse appare malvagia ma in realtà è buona.",
        intro: "<ul><li>Ogni volta che l’allineamento della Recluse viene rilevato, lo Storyteller sceglie se la Recluse viene registrata come buona o malvagia.</li><li>Ogni volta che la Recluse è bersaglio di un’abilità che colpisce Minion o Demone specifici, lo Storyteller sceglie se la Recluse viene registrata come quel Minion o Demone specifico.</li><li>La Recluse può essere registrata come buona o malvagia, oppure come Outsider, Minion o Demone, in momenti diversi della stessa notte. Lo Storyteller sceglie ciò che è più interessante.</li><li>Una Recluse che viene registrata come un particolare Minion o Demone non possiede l’abilità di quel personaggio. Per esempio, una Recluse che viene registrata come Poisoner non si sveglia di notte e non può avvelenare un giocatore.</li></ul>",
        ability: "Potresti essere registrata come malvagia e come un Minion o un Demone, anche se sei morta.",
        flavor: '"Dannatacci vostri, levate quelle luride mani dal mio cibo, avete capito? Grr. Brutta gentaglia laggiù a sud che mi viene a infastidire dopo, eh! Via! Il mio raccolto non ha nulla a che fare con frustate e demoni, non ho mai combattuto la mia gente. Via, sparite!"',
        examples: "<p>Lo Slayer usa la sua abilità sulla Recluse. Lo Storyteller decide che la Recluse viene registrata come l’Imp, quindi la Recluse muore. Lo Slayer crede di aver appena ucciso l’Imp.</p><p>L’Empath, che ha come vicini la Recluse e il Monk, scopre di avere un vicino malvagio. La notte successiva, l’Empath scopre di non avere alcun vicino malvagio.</p><p>L’Investigator scopre che o la Recluse o il Saint è la Scarlet Woman.</p><p>La Recluse viene giustiziata. L’Undertaker scopre che è stato giustiziato l’Imp.</p><p>La Recluse è seduta accanto all’Imp e a un Traveller malvagio. Poiché mostrare un \"2\" allo Chef potrebbe essere troppo rivelatore, lo Storyteller fornisce allo Chef informazioni vere ma diverse — uno \"0\".</p>",
        howToRun: "<p>Ogni volta che la Recluse è bersaglio di un’abilità che rileva o influenza personaggi malvagi, scegli quale personaggio e quale allineamento la Recluse viene registrata come. <i>(Fai ciò che è appropriato, come mostrare un token personaggio malvagio, annuire, mostrare numeri con le dita o permettere il funzionamento di un’abilità che normalmente influenzerebbe solo giocatori malvagi, Minion o Demone.)</i></p>",
        group: "Outsider",
        script: "tb"
    },
{
        name: "Saint",
        id:"saint",	
        description: "Il Saint termina la partita se viene giustiziato.",
        intro: "<ul><li>Se il Saint muore per esecuzione, la partita termina. I buoni perdono e i malvagi vincono.</li><li>Se il Saint muore in qualsiasi modo diverso dall’esecuzione — ad esempio se viene ucciso dal Demone — la partita continua.</li></ul>",
        ability: "Se muori per esecuzione, la tua squadra perde.",
        flavor: '"La saggezza genera pace. La pazienza genera saggezza. Non temete, perché verrà il tempo in cui anche la paura svanirà. Preghiamo, e che l’unità della nostra visione faccia santi tutti noi."',
        examples: "<p>Ci sono sette giocatori vivi e le nomine sono in corso. Il Saint riceve quattro voti ed è sul punto di morire. Poi viene nominato il Baron, ma ottiene solo tre voti. Non avvengono altre nomine oggi. Il Saint viene giustiziato e i malvagi vincono.</p><p>L’Imp viene nominato e i giocatori votano. Il Gunslinger uccide il Saint. Il Saint muore, ma la partita continua.</p><p>Il Saint viene giustiziato. Tuttavia, si attiva l’abilità dello Scapegoat, quindi muore lo Scapegoat al suo posto. La partita continua, perché il Saint non è morto.</p>",
        howToRun: "<p>Se il Saint muore per esecuzione, dichiara che la partita termina e i malvagi vincono.</p><p class=\"modal__callout-box\">L’abilità del Saint contiene la strana frase \"la tua squadra perde\". In Trouble Brewing, questo significa sempre \"i malvagi vincono\" perché il Saint è sempre buono. In altre edizioni, è possibile che i personaggi cambino allineamento. Se un Saint malvagio viene giustiziato, i buoni vincono.</p>",
        group: "Outsider",
        script: "tb"
    },
{
        name: "Poisoner",
        id:"poisoner",	
        description: "Il Poisoner interferisce segretamente con le abilità dei personaggi.",
        intro: "<ul><li>Ogni notte, il Poisoner sceglie qualcuno da avvelenare per quella notte e per l’intero giorno successivo.</li><li>Un giocatore avvelenato non ha alcuna abilità, ma lo Storyteller finge che ce l’abbia. Non influisce realmente sulla partita. Tuttavia, per mantenere l’illusione che il giocatore avvelenato non sia avvelenato, lo Storyteller lo sveglia nel momento appropriato e segue la procedura come se non fosse avvelenato. Se la sua abilità dovrebbe fornirgli informazioni, lo Storyteller può fornirgli informazioni false.</li><li>Se un giocatore avvelenato usa un’abilità “una volta per partita” mentre è avvelenato, non può più usare quell’abilità.</li></ul>",
        ability: "Ogni notte, scegli un giocatore: è avvelenato stanotte e durante il giorno di domani.",
        flavor: '"Aggiungi il composto Alfa al composto Beta... NON TROPPO!"',
        examples: "<p>Durante la notte, il Poisoner avvelena lo Slayer. Il giorno successivo, lo Slayer prova a uccidere l’Imp. Non succede nulla. Lo Slayer ora non ha più alcuna abilità.</p><p>L’Empath avvelenato, che è seduto accanto a due giocatori malvagi, scopre uno \"0\". La notte successiva, non essendo più avvelenato, l’Empath scopre l’informazione corretta: un \"2\".</p><p>L’Investigator viene avvelenato. scopre che uno di due giocatori è il Baron, anche se nessuno dei due è un Minion. <i>(Oppure potrebbe scoprire i giocatori corretti, ma il tipo di Minion sbagliato.)</i></p><p>L’Undertaker viene avvelenato. Anche se l’Imp è morto oggi, scopre che è morta la Virgin. Alcuni giorni dopo, un Saint avvelenato viene giustiziato e muore, e la partita continua.</p><p>Il Poisoner avvelena il Mayor, poi diventa l’Imp. Il Mayor non è più avvelenato perché non c’è più alcun Poisoner in gioco.</p>",
        howToRun: "<p>Ogni notte, sveglia il Poisoner. Il Poisoner indica un qualsiasi giocatore. Il giocatore scelto diventa <strong>avvelenato</strong> — metti il token promemoria <strong>POISONED</strong> accanto al token personaggio del giocatore scelto. Rimetti a dormire il Poisoner. <i>(Il giocatore avvelenato si sveglia e agisce normalmente. Non ha alcuna abilità, ma crede di averla. Se la sua abilità dovrebbe fornirgli informazioni, puoi fornirgli informazioni false se lo desideri. Vedi “Drunkenness and Poisoning” nel regolamento.)</i></p><p>Ogni tramonto, il giocatore avvelenato torna <strong>sano</strong> — rimuovi il token promemoria <strong>POISONED</strong>.</p>",
        group: "Minion",
        script: "tb"
    },
{
        name: "Spy",
        id:"spy",	
        description: "La Spy sa chi sono tutti. Appare buona, ma in realtà è malvagia.",
        intro: "<ul><li>Se un qualsiasi personaggio ha un’abilità che rileva o influenza un giocatore buono, allora la Spy può essere registrata come buona per quel personaggio. Se un qualsiasi personaggio ha un’abilità che rileva Townsfolk o Outsider, allora la Spy può essere registrata come uno specifico Townsfolk o Outsider per quel giocatore. È lo Storyteller a scegliere come la Spy viene registrata, anche come più personaggi o con entrambi gli allineamenti durante la stessa notte.</li><li>Una Spy che viene registrata come un particolare Townsfolk o Outsider non possiede l’abilità di quel personaggio. Per esempio, una Spy che viene registrata come Slayer non può uccidere il Demone.</li></ul>",
        ability: "Ogni notte, vedi il Grimorio. Potresti essere registrata come buona e come un Townsfolk o un Outsider, anche se sei morta.",
        flavor: '"Qualsiasi mastro birraio degno del suo liquore,<br>sa che nessun intruglio versa guai più in fretta,<br>di quello in cui le spie sembrano raddoppiare."',
        examples: "<p>La Washerwoman scopre che o Abdallah o Doug è il Ravenkeeper. Abdallah è il Monk e Doug è la Spy che viene registrata come Ravenkeeper.</p><p>La Spy è seduta accanto all’Imp e all’Empath. Lo Chef scopre un \"1\" perché la Spy viene registrata come malvagia. Più tardi quella notte, l’Empath scopre uno \"0\" perché la Spy ora viene registrata come buona.</p><p>La Spy nomina la Virgin e viene giustiziata dall’abilità della Virgin, perché lo Storyteller sceglie che la Spy venga registrata come un Townsfolk. Quella notte, l’Undertaker scopre che oggi è morto il Drunk, perché la Spy ora viene registrata come il Drunk.</p>",
        howToRun: "<p>Ogni notte, sveglia la Spy e mostrale il Grimorio per tutto il tempo di cui ha bisogno. Rimetti a dormire la Spy.</p><p>Ogni volta che la Spy è bersaglio di un’abilità che rileva o influenza personaggi buoni, scegli come personaggio e con quale allineamento la Spy viene registrata. <i>(Fai ciò che è appropriato, come mostrare un token personaggio buono, annuire, mostrare numeri con le dita o permettere il funzionamento di un’abilità che normalmente influenzerebbe solo giocatori buoni, Townsfolk o Outsider.)</i></p><p class=\"modal__callout-box\">Ricorda di mantenere il Grimorio ordinato e di mostrarlo alla Spy con l’orientamento corretto, così che la Spy possa vedere facilmente chi è chi.</p>",
        group: "Minion",
        script: "tb"
    },
{
        name: "Baron",
        id:"baron",	
        description: "Il Baron cambia il numero di Outsider in gioco.",
        intro: "<ul><li>Questo cambiamento avviene durante la preparazione e non viene annullato se il Baron muore. Un cambiamento dei personaggi durante la preparazione, indipendentemente da ciò che accade durante la partita, è indicato sulle schede dei personaggi e sui token tra parentesi quadre alla fine della descrizione di un personaggio—come [così].</li><li>Gli Outsider aggiunti sostituiscono sempre dei Townsfolk, non altri tipi di personaggio.</li></ul",
        ability: "Ci sono Outsider extra in gioco. [+2 Outsider]",
        flavor: '"Questa città è andata in malora, eh? Manodopera straniera a buon mercato... ecco l’idea. Infilateli nella miniera, dico io. Un po’ di duro lavoro non ha mai fatto male a nessuno, e due sberle a qualunque brigante dica il contrario. Conta solo il profitto, eh?"',
        examples: "<p>La partita viene preparata per sette giocatori, con cinque Townsfolk, un Minion e un Demone. Poiché il Minion è il Baron, lo Storyteller rimuove due token Townsfolk e aggiunge un token Saint e un token Butler. In totale, nel sacchetto finiscono token per tre Townsfolk, due Outsider, un Minion e un Demone, da far pescare ai giocatori.</p><p>La partita viene preparata per quindici giocatori, con nove Townsfolk, due Outsider, tre Minion e un Demone. Poiché il Baron è in gioco, lo Storyteller deve aggiungere un Drunk e una Recluse. Quindi rimuove il token del Monk e aggiunge un token della Recluse. Poi, invece di aggiungere il token personaggio del Drunk, aggiunge al Grimorio il token promemoria \"Is the Drunk\" del Drunk… perché in questa partita un giocatore non è un Townsfolk — è un Outsider: il Drunk. Tutti questi token personaggio finiscono nel sacchetto da cui i giocatori pescano.</p>",
        howToRun: "<p>Durante la preparazione della partita, rimuovi due token personaggio Townsfolk qualsiasi e aggiungi due token personaggio Outsider qualsiasi. <i>(Se aggiungi il Drunk, ricorda di seguire anche le sue istruzioni di preparazione.)</i> Questi token Outsider vanno nel sacchetto al posto dei token Townsfolk.</p>",
        group: "Minion",
        script: "tb"
    },
{
        name: "Scarlet Woman",
        id:"scarletwoman",	
        description: "La Scarlet Woman diventa il Demone quando il Demone muore.",
        intro: "<ul><li>Se ci sono cinque o più giocatori immediatamente prima che il Demone muoia — cioè quattro o più giocatori rimangono vivi dopo la morte del Demone — allora la Scarlet Woman diventa immediatamente il Demone e la partita continua come se nulla fosse successo.</li><li>I Traveller non contano come giocatori nel determinare se l’abilità della Scarlet Woman si attiva.</li><li>Se sono vivi meno di cinque giocatori quando il Demone viene giustiziato, la partita termina e i buoni vincono.</li><li>Se cinque o più giocatori sono vivi quando l’Imp si uccide da solo di notte, la Scarlet Woman deve diventare il nuovo Imp.</li><li>Se la Scarlet Woman diventa il Demone, lo è a tutti gli effetti. I buoni vincono se viene giustiziata. Attacca ogni notte. Viene registrata come il Demone.</li></ul>",
        ability: "Se ci sono 5 o più giocatori vivi e il Demone muore, diventi il Demone. (I Traveller non contano)",
        flavor: '"Mi hai mostrato i segreti del Concilio della Fiamma Purpurea. Ci siamo uniti nel fuoco, nel desiderio e in una comunione bestiale, e io sarò per sempre al tuo servizio. Ma stanotte, mio caro, io sono il tuo padrone."',
        examples: "<p>Ci sono sette giocatori vivi: l’Imp, la Scarlet Woman, due Townsfolk e tre Traveller. L’Imp viene giustiziato, quindi la partita termina e i buoni vincono, perché i Traveller non contano nel numero di giocatori per l’abilità della Scarlet Woman.</p><p>Ci sono cinque giocatori vivi: l’Imp, la Scarlet Woman, il Baron e due Townsfolk. L’Imp viene giustiziato. La Scarlet Woman diventa l’Imp e la partita continua.</p><p>Lachlan è la Scarlet Woman. La Fortune Teller sceglie Lachlan e Sarah e scopre un \"no\". Più tardi, l’Imp muore, quindi Lachlan diventa l’Imp. La Fortune Teller sceglie di nuovo Lachlan e Sarah e scopre un \"yes\".</p>",
        howToRun: "<p>Se il Demone muore e c’erano cinque o più giocatori vivi immediatamente prima della sua morte, sostituisci il token della Scarlet Woman con un token Imp di riserva, cambiando il personaggio di quel giocatore da Scarlet Woman a Imp. <i>(Ora è il Demone e possiede l’abilità dell’Imp. Se muore, i buoni vincono.)</i></p><p>Quella notte, sveglia il nuovo Imp, mostrargli il token informativo <strong>YOU ARE</strong>, poi mostrargli il token dell’Imp.</p><p class=\"modal__callout-box\">In Trouble Brewing c’è un solo Demone — l’Imp. In altre edizioni, esistono più Demone possibili. Se la Scarlet Woman diventa il Demone, diventa lo stesso tipo di Demone che è morto e ottiene l’abilità di quel Demone. Quando ciò accade, contrassegna la Scarlet Woman con il promemoria <strong>IS THE DEMONE</strong> e segui le istruzioni \"How to Run\" di quel Demone.</p>",
        group: "Minion",
        script: "tb"
    },
{
        name: "Imp",
        id:"imp",	
        description: "<p>L’Imp uccide di notte e può creare copie di se stesso… a un prezzo terribile.</p>",
        intro: "<ul><li>Ogni notte tranne la prima, l’Imp sceglie un giocatore da uccidere. Poiché la maggior parte dei personaggi agisce dopo il Demone, quel giocatore probabilmente non potrà usare la propria abilità stanotte.</li><li>L’Imp, essendo un Demone, sa quali giocatori sono i suoi Minion e conosce tre personaggi buoni non in gioco che può tranquillamente usare come bluff.</li><li>Se l’Imp muore, la partita termina e i buoni vincono. Tuttavia, se l’Imp si uccide da solo di notte, muore e un Minion vivo diventa l’Imp. Questo nuovo Imp non agisce quella stessa notte, ma è ora l’Imp a tutti gli effetti — uccide ogni notte e perde se muore.</li></ul>",
        ability: "Ogni notte*, scegli un giocatore: muore. Se ti uccidi in questo modo, un Minion diventa l’Imp.",
        flavor: '"Dobbiamo mantenere la mente affilata e la spada ancora di più. Il male cammina tra noi e non si fermerà davanti a nulla pur di distruggere noi, brava e semplice gente, portando la nostra bella città alla rovina. Non fidatevi di nessuno. Ma se proprio dovete fidarvi di qualcuno, fidatevi di me."',
        examples: "<p>È la prima notte. L’Imp scopre che Evin e Sarah sono i Minion. L’Imp scopre anche che il Monk, lo Chef e il Librarian non sono in gioco. L’Imp bluffa come Chef, poi più avanti nella partita bluffa come Mayor. Alla fine, l’Imp viene giustiziato e i buoni vincono.</p><p>Durante la notte, l’Imp si sveglia e sceglie un giocatore, che muore. La notte successiva, l’Imp sceglie se stesso per morire. L’Imp muore e il Poisoner diventa l’Imp.</p>",
        howToRun: "<p>Ogni notte tranne la prima, sveglia l’Imp. L’Imp indica un qualsiasi giocatore. Rimetti a dormire l’Imp. Il giocatore scelto <strong>muore</strong> — metti il token promemoria <strong>DEAD</strong> dell’Imp accanto al token personaggio del giocatore scelto nel Grimorio e coprilo con un sudario.</p><p>Se l’Imp si è ucciso da solo di notte, scegli un Minion vivo e sostituisci il suo token personaggio con un token Imp di riserva, cambiando il suo personaggio in Imp. Sveglia il nuovo Imp, mostrargli il token informativo <strong>YOU ARE</strong>, poi mostrargli il token dell’Imp. Rimetti a dormire il nuovo Imp.</p><p>All’alba, dichiara quale giocatore è morto durante la notte. <i>(Non dire come è morto.)</i></p><p class=\"modal__callout-box\">Se l’Imp attacca un giocatore morto di notte, permettiglielo. Ogni volta che l’abilità di un personaggio dice \"scegli un giocatore\", significa che può essere scelto qualsiasi giocatore — vivo o morto. L’Imp potrebbe stare pianificando di bluffare come Soldier, e questo tipo di scelta rende il bluff più credibile.</p>",
        group: "Demon",
        script: "tb"
    },
    {
        name: "Grandmother",
        id: "grandmother",	
        description: "La Grandmother sa chi è il suo Grandchild, ma se viene ucciso dal Demone, anche la Grandmother muore.",
        intro: "<ul><li>Durante la prima notte, la Grandmother scopre chi è il suo Grandchild — un giocatore buono che è un Townsfolk o un Outsider. Il Grandchild non scopre di avere una Grandmother.</li><li>Se il Demone uccide il Grandchild, anche la Grandmother muore. Se il Grandchild muore in qualsiasi altro modo — come per esecuzione o per un altro tipo di morte notturna — la Grandmother non muore.</li></ul>",
        ability: "Inizi sapendo chi è un giocatore buono e il suo personaggio. Se il Demone lo uccide, muori anche tu.",
        flavor: '"Prendi una giacca se esci, caro. E il termos. E la sciarpa. Ho il cuore debole, lo sai. Cosa farei se prendessi freddo… o peggio?"',
        examples: "<p>Durante la prima notte, la Grandmother si sveglia e scopre che Julian, il suo Grandchild, è il Professor. Tre notti dopo, Julian viene ucciso dal Demone, quindi anche la Grandmother muore.</p><p>La Grandmother sa che Lewis, il suo Grandchild, è il Gambler. Lewis gioca d’azzardo e muore a causa di questo. La Grandmother rimane viva.</p><p>La Grandmother sa che Sarah, il suo Grandchild, è il Tinker. Sarah viene uccisa dal Demone, ma la Grandmother è drunk a causa del Sailor, quindi la Grandmother rimane viva.</p>",
        howToRun: "<p>Durante la preparazione della prima notte, scegli un Grandchild contrassegnando un qualsiasi personaggio buono con il promemoria <strong>GRANDCHILD</strong>.</p><p>Durante la prima notte, sveglia la Grandmother e mostrale il token personaggio contrassegnato <strong>GRANDCHILD</strong>, poi indica il giocatore Grandchild, quindi rimetti a dormire la Grandmother.</p><p>Se il Demone uccide il Grandchild, la Grandmother <strong>muore</strong> — contrassegnala con il promemoria <strong>DEAD</strong>.</p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Sailor",
        id: "sailor",	
        description: "Il Sailor è o drunk oppure sta rendendo drunk qualcun altro. Finché il Sailor è sobrio, non può morire.",
        intro: "<ul><li>Ogni notte, il Sailor sceglie un giocatore, che probabilmente diventerà drunk.</li><li>Se sceglie se stesso, perde la sua abilità di \"non poter morire\" finché non torna sobrio.</li><li>Se il Sailor sceglie accidentalmente un giocatore morto, lo Storyteller lo invita a scegliere di nuovo.</li><li>Se il Sailor sceglie un altro giocatore, lo Storyteller decide quale dei due diventa drunk. Se viene scelto un Townsfolk, lo Storyteller di solito rende drunk il Townsfolk, ma se viene scelto un Outsider, un Minion o il Demone, allora lo Storyteller di solito rende drunk il Sailor.</li><li>Quando è sobrio, il Sailor non può morire, anche se non si è ancora svegliato di notte per andare a bere.</li></ul>",
        ability: "Ogni notte, scegli un giocatore vivo: o tu o lui siete drunk fino al tramonto. Non puoi morire.",
        flavor: '"Berrei chiunque di voi sotto il tavolo! Tu! Il chiacchierone! Pensi di reggere il confronto? No? E tu, Nonna? Hai mai provato il Rum Extra Speziato Old McKillys? Garantito per farti spuntare i peli sul petto! Sali a bordo, aye!"',
        examples: "<p>Il Sailor sceglie l’Exorcist e lo Storyteller decide che l’Exorcist è drunk. Quella notte, il Sailor viene attaccato dallo Shabaloth. Il Sailor rimane vivo. Il giorno successivo, il Sailor viene giustiziato ma rimane vivo.</p><p>Durante il giorno, il Gossip fa un’affermazione pubblica che credeva falsa ma che in realtà era vera. Quella notte, l’abilità del Gossip uccide un giocatore. Il Sailor ha reso se stesso drunk e lo Storyteller decide che il Sailor muore.</p><p>Il Sailor sceglie il Mastermind, ma lo Storyteller decide che il Sailor è drunk. Il giorno successivo, il Sailor chiede di essere giustiziato per “dimostrare di essere il Sailor”, ma muore perché è drunk.</p>",
        howToRun: "<p>Ogni notte, sveglia il Sailor. Il Sailor indica un qualsiasi giocatore. Rimetti a dormire il Sailor. O il Sailor o il giocatore scelto diventa <strong>drunk</strong> — contrassegnalo con il promemoria <strong>DRUNK</strong>.</p><p>Se il Sailor sobrio dovrebbe morire, il Sailor rimane vivo. Se il Sailor sobrio viene giustiziato, dichiara che questo giocatore è stato giustiziato ma rimane vivo. <i>(Non dire perché.)</i></p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Chambermaid",
        id: "chambermaid",	
        description: "La Chambermaid scopre chi si è svegliato durante la notte.",
        intro: "<ul><li>Ogni notte, la Chambermaid sceglie due giocatori e scopre se si sono svegliati stanotte. Deve scegliere giocatori vivi e non può scegliere se stessa. Non scopre quali dei due si sono svegliati, ma solo quanti.</li><li>Questa abilità rileva solo i personaggi che si sono svegliati per usare la propria abilità. Non rileva personaggi che si sono svegliati per altri motivi — ad esempio se lo Storyteller ha svegliato un Minion per indicargli chi è il Demone, ha svegliato il Demone per dargli le informazioni iniziali, ha svegliato un giocatore a causa dell’abilità di un altro personaggio o ha svegliato qualcuno per errore.</li><li>Se un personaggio si è svegliato in una notte precedente ma non in questa, non viene rilevato dalla Chambermaid.</li><li>I giocatori che si sono svegliati stanotte a causa della loro abilità ma sono drunk o avvelenati contano comunque come se si fossero svegliati.</li><li>Se la Chambermaid sceglie accidentalmente un giocatore morto, lo Storyteller la invita a scegliere di nuovo.</li></ul>",
        ability: "Ogni notte, scegli 2 giocatori vivi (non te stessa): scopri quanti si sono svegliati stanotte a causa della loro abilità.",
        flavor: '"Non ho visto nulla di sospetto, Milady. Con rispetto parlando, ma se avessi visto qualcosa, di certo non sarebbe stato il padrone di casa che si intrufolava nel laboratorio del professor verso le undici in punto a mescolare pozioni strane, proprio come dicevate voi, signorina."',
        examples: "<p>La Chambermaid sceglie l’Exorcist e l’Innkeeper e scopre un \"2\". La notte successiva, l’Exorcist sceglie lo Shabaloth, che verrà svegliato. Più tardi, la Chambermaid sceglie lo Shabaloth e il Fool. Poiché lo Shabaloth si è svegliato solo a causa dell’abilità dell’Exorcist, la Chambermaid scopre uno \"0\".</p><p>È la seconda notte. La Chambermaid sceglie la Grandmother e il Goon malvagio e scopre un \"2\". Il Goon si sveglierà stanotte, ma la Chambermaid è drunk.</p><p>È la prima notte. La Chambermaid sceglie l’Assassin e il Moonchild e scopre uno \"0\" perché l’Assassin non si sveglia per usare la propria abilità nella prima notte. La notte successiva, sceglie l’Assassin e il Gossip. L’Assassin si è svegliato ma non ha usato la propria abilità. L’abilità del Gossip è stata usata, ma il Gossip non si sveglia per usarla. La Chambermaid scopre un \"1\".</p>",
        howToRun: "<p>Ogni notte, sveglia la Chambermaid. La Chambermaid indica due giocatori vivi qualsiasi, tranne se stessa. Mostra alla Chambermaid con le dita <i>(0, 1 o 2)</i> il numero di personaggi scelti che si sono svegliati stanotte. Rimetti a dormire la Chambermaid.</p><p>Non svegliare la Chambermaid se non ci sono due giocatori vivi tra cui scegliere <i>(a causa del Mastermind, dello Zombuul, ecc.)</i>.</p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Exorcist",
        id: "exorcist",	
        description: "L'Exorcist impedisce al Demone di svegliarsi per attaccare.",
        intro: "<ul><li>Ogni notte, l'Exorcist sceglie un giocatore. Se sceglie un giocatore che non è il Demone, il Demone può comunque attaccare. Se sceglie il Demone, il Demone non si sveglia stanotte, quindi non sceglie giocatori da attaccare stanotte. Il Demone scopre che non può attaccare e chi è l'Exorcist.</li><li>Qualsiasi altra abilità del Demone continua a funzionare — ad esempio lo Zombuul che rimane vivo se viene ucciso, il Pukka che uccide un giocatore che ha attaccato in una notte precedente o lo Shabaloth che rigurgita un giocatore.</li><li>L'Exorcist non può scegliere lo stesso giocatore per due notti di fila.</li></ul>",
        ability: "Ogni notte*, scegli un giocatore (diverso da quello della notte scorsa): il Demone, se scelto, scopre chi sei e poi non si sveglia stanotte.",
        flavor: '"Ti scacciamo, ogni spirito impuro, ogni potere satanico, ogni assalto dell’avversario infernale, ogni legione, ogni gruppo e setta diabolica, nel nome e per la potenza del Signore nostro Gesù Cristo. Ti ordiniamo: vattene e fuggi lontano dalla Chiesa di Dio, dalle anime create da Dio a Sua immagine e redente dal prezioso sangue del divino Agnello."',
        examples: "<p>L'Exorcist sceglie lo Shabaloth. Lo Shabaloth non uccide stanotte. All’alba, lo Storyteller dichiara che quella notte non è morto nessuno.</p><p>L'Exorcist sceglie il Pukka. Il Pukka non si sveglia per attaccare stanotte, ma un giocatore muore comunque a causa dell’attacco del Pukka nella notte precedente.</p><p>Il Po sceglie di non attaccare nessuno. La notte successiva, l'Exorcist sceglie il Po. Il Po non si sveglia per agire stanotte. La notte dopo, l'Exorcist sceglie l'Assassin. L'Assassin può comunque attaccare stanotte e il Po sceglie tre giocatori da attaccare, perché l’ultima scelta del Po era stata nessuno.</p>",
        howToRun: "<p>Ogni notte tranne la prima, sveglia l'Exorcist. L'Exorcist indica un qualsiasi giocatore. Contrassegna il token personaggio del giocatore scelto con il promemoria <strong>CHOSEN</strong>. Rimetti a dormire l'Exorcist.</p><p>Se l'Exorcist ha scelto il Demone, sveglia il Demone. Mostragli il token informativo <strong>THIS CHARACTER SELECTED YOU</strong> e il token dell'Exorcist, poi indica il giocatore Exorcist. Rimetti a dormire il Demone. Più tardi stanotte, non svegliare il Demone.</p><p class=\"modal__callout-box\">Un Demone scelto dall'Exorcist non si sveglierà per usare la propria abilità da Demone, ma si sveglierà comunque se necessario a causa delle abilità di altri personaggi. Questo può essere rilevante se usi l'Exorcist con personaggi di altre edizioni.</p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Innkeeper",
        id: "innkeeper",	
        description: "L'Innkeeper protegge i giocatori dalla morte durante la notte, ma qualcuno diventa drunk nel processo.",
        intro: "<ul><li>L'Innkeeper, come il Monk, rende i giocatori al sicuro dall’essere uccisi dal Demone. Sono anche al sicuro dalla morte causata da Outsider, Minion, Townsfolk e Traveller.</li><li>L'Innkeeper protegge i giocatori solo durante la notte, non durante il giorno.</li><li>Uno dei due giocatori scelti dall'Innkeeper diventa drunk per questa notte e per il giorno successivo. Questo giocatore può essere buono o malvagio, ma quasi sempre sarà buono, a seconda di come sta andando la partita. Un Innkeeper che sceglie se stesso potrebbe diventare drunk, il che significa che non ha alcuna abilità e può morire stanotte — e anche l’altro giocatore scelto per essere protetto non è al sicuro.</li></ul>",
        ability: "Ogni notte*, scegli 2 giocatori: non possono morire stanotte, ma 1 è drunk fino al tramonto.",
        flavor: '"Entra pure, viandante gentile, e riposa le tue ossa stanche. Bevi e rallegrati, poiché le legioni dell’Oscuro non ti tormenteranno stanotte."',
        examples: "<p>L'Innkeeper protegge il Fool e la Chambermaid. Lo Storyteller sceglie che il Fool diventi drunk. Il giorno successivo, quando il Fool viene giustiziato, muore, anche se non aveva ancora usato la sua abilità.</p><p>L'Innkeeper protegge l’Assassin e il Po. Lo Storyteller sceglie che l’Assassin diventi drunk. Più tardi quella notte, l’Assassin usa la sua abilità, ma non succede nulla.</p><p>L'Innkeeper protegge se stesso e il Pacifist. Lo Storyteller sceglie che l’Innkeeper diventi drunk. Il Pacifist viene attaccato dal Demone stanotte e muore.</p>",
        howToRun: "<p>Ogni notte tranne la prima, sveglia l'Innkeeper. L'Innkeeper indica due giocatori qualsiasi. Rimetti a dormire l'Innkeeper. Contrassegna entrambi i giocatori scelti con i promemoria <strong>SAFE</strong>. Uno dei giocatori scelti diventa <strong>drunk</strong> — contrassegnalo con il promemoria <strong>DRUNK</strong>. I giocatori contrassegnati <strong>SAFE</strong> non possono morire stanotte.</p><p>All’alba, rimuovi i promemoria <strong>SAFE</strong>.</p><p>Al tramonto, rimuovi il promemoria <strong>DRUNK</strong>.</p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Gambler",
        id: "gambler",	
        description: "Il Gambler può indovinare chi è chi… ma paga il prezzo finale se sbaglia.",
        intro: "<ul><li>Ogni notte tranne la prima, il Gambler sceglie un giocatore e indovina il suo personaggio indicando la relativa icona sulla scheda dei personaggi. Se l’ipotesi è corretta, non succede nulla. Se l’ipotesi è errata, il Gambler muore.</li><li>Il Gambler non scopre dallo Storyteller se la sua ipotesi è corretta o errata.</li><li>Il Gambler può scegliere qualsiasi giocatore, vivo o morto, anche se stesso.</li></ul>",
        ability: "Ogni notte*, scegli un giocatore e indovina il suo personaggio: se sbagli, muori.",
        flavor: '"Testa, vinco io. Croce, perdi tu."',
        examples: "<p>Il Gambler indica il giocatore Minstrel, poi l’icona del Minstrel. L’ipotesi è corretta, quindi il Gambler rimane vivo, ma viene comunque ucciso dal Demone quella notte.</p><p>Il Devil's Advocate sta bluffando come Pacifist. Quella notte, il Gambler indica il giocatore Devil's Advocate, poi l’icona del Pacifist. L’ipotesi è errata, quindi il Gambler muore.</p>",
        howToRun: "<p>Ogni notte tranne la prima, sveglia il Gambler. Il Gambler indica un qualsiasi giocatore, poi indica un’icona personaggio qualsiasi sulla sua scheda dei personaggi. Rimetti a dormire il Gambler. Se il giocatore scelto è un personaggio diverso da quello indicato dall’icona scelta, il Gambler <strong>muore</strong> — contrassegnalo con il promemoria <strong>DEAD</strong>.</p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Gossip",
        id: "gossip",	
        description: "Il Gossip dice deliberatamente menzogne nella speranza di portare alla luce la verità.",
        intro: "<ul><li>Ogni giorno, il Gossip può fare un’affermazione pubblica. Se questa affermazione è vera, lo Storyteller uccide un giocatore quella notte. Se è falsa, nessun giocatore muore a causa del Gossip.</li><li>Parole biascicate, sussurri, affermazioni di cui lo Storyteller non sa se siano vere o false, o affermazioni che qualcuno non può sentire non contano. Come per l’abilità dello Slayer, lo Storyteller e tutti i giocatori devono poter sentire e comprendere il Gossip ed essere consapevoli che il Gossip sta usando la propria abilità affinché lo Storyteller possa stabilire cosa accade dopo.</li><li>Se il Gossip ha fatto un’affermazione vera durante il giorno mentre era drunk o avvelenato, ma è sobrio e sano quando la sua abilità si attiva quella notte, lo Storyteller uccide comunque un giocatore.</li></ul>",
        ability: "Ogni giorno, puoi fare un’affermazione pubblica. Stanotte, se era vera, un giocatore muore.",
        flavor: '"Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla. Bla."',
        examples: "<p>Durante il giorno, il Gossip dice: \"Sono il Gossip. La mia affermazione pubblica è: il Demone indossa un cappello.\" Il Demone non indossa un cappello. Quella notte, nessuno muore a causa dell’abilità del Gossip.</p><p>Il Gossip è seduto accanto a un Traveller buono e al Pacifist. Durante il giorno, il Gossip drunk dice: \"Entrambi i miei vicini sono buoni.\" Al tramonto, il Gossip drunk torna sobrio. Quella notte, la Chambermaid muore.</p><p>Durante il giorno, il Gossip fa un’affermazione vera. Quella notte, il Gossip viene ucciso dal Demone. Perde la sua abilità, quindi la sua affermazione non uccide nessuno stanotte.</p>",
        howToRun: "<p>Ogni giorno, se il Gossip fa un’affermazione pubblica definita e vera, metti il promemoria <strong>DEAD</strong> del Gossip al centro del lato sinistro del Grimorio come promemoria per te stesso di usarlo stanotte.</p><p>Ogni notte tranne la prima, se il Gossip ha fatto oggi un’affermazione pubblica definita e vera, scegli un qualsiasi giocatore. Il giocatore scelto <strong>muore</strong> — contrassegnalo con il promemoria <strong>DEAD</strong>.</p><p class=\"modal__callout-box\">Quando scegli un giocatore che deve morire a causa dell’abilità del Gossip, ti consigliamo di scegliere un personaggio che morirà davvero, non uno protetto dalla morte da un’abilità (come il Fool o la Tea Lady). Il Gossip ottiene informazioni quando la sua affermazione provoca una morte. Questo è più utile per la squadra dei buoni ed è più divertente per tutti.</p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Courtier",
        id: "courtier",	
        description: "Il Courtier rende drunk un personaggio, senza sapere quale giocatore sia.",
        intro: "<ul><li>Una volta per partita, il Courtier sceglie un personaggio che diventa drunk per tre notti e tre giorni, a partire immediatamente.</li><li>Il Courtier non scopre se la scelta ha avuto successo o meno, quindi potrebbe scegliere un personaggio che non è in gioco.</li><li>Il Courtier sceglie un personaggio, <i>non</i> un giocatore. Potrebbe essere necessario ricordarlo al giocatore Courtier. Anche i giocatori malvagi che bluffano come Courtier potrebbero aver bisogno di questo promemoria.</li><li>Se un Courtier drunk o avvelenato sceglie un personaggio, quel personaggio non diventa drunk, anche se il Courtier in seguito torna sobrio e sano. Se il Courtier ha reso un personaggio drunk ma poi il Courtier diventa drunk o avvelenato, il giocatore reso drunk torna sobrio. Se il Courtier torna sobrio e sano prima che siano trascorse le tre notti e i tre giorni, quel giocatore diventa di nuovo drunk.</li></ul>",
        ability: "Una volta per partita, di notte, scegli un personaggio: è drunk per 3 notti e 3 giorni.",
        flavor: '"Temo più un esercito di cento pecore guidato da un leone che un esercito di cento leoni guidato da una pecora."',
        examples: "<p>Per quattro notti, il Courtier si sveglia ma non usa la sua abilità. Durante la quinta notte, rende drunk lo Shabaloth. Per le tre notti successive, lo Shabaloth agisce ma non può uccidere nessuno.</p><p>Il Courtier usa la sua abilità mentre è drunk. Non succede nulla, ma non viene più svegliato.</p><p>Il Courtier rende drunk il Mastermind. Il Po viene giustiziato mentre il Mastermind è ancora vivo. La partita termina e i buoni vincono.</p>",
        howToRun: "<p>Ogni notte, sveglia il Courtier. Il Courtier o scuote la testa per dire no oppure indica un’icona personaggio qualsiasi sulla sua scheda dei personaggi. Rimetti a dormire il Courtier.</p><p>Se il Courtier ha scelto un’icona personaggio e quel personaggio è in gioco, il giocatore del personaggio scelto diventa <strong>drunk</strong> per tre notti e tre giorni. Stanotte, contrassegnalo con il promemoria <strong>DRUNK 1</strong> del Courtier. La notte successiva, sostituisci il promemoria <strong>DRUNK 1</strong> con il promemoria <strong>DRUNK 2</strong>. La notte successiva ancora, sostituisci il promemoria <strong>DRUNK 2</strong> con il promemoria <strong>DRUNK 3</strong>. Al tramonto della notte seguente, rimuovi il promemoria <strong>DRUNK 3</strong> e <strong>il Courtier perde la sua abilità</strong> — contrassegnalo con il promemoria <strong>NO ABILITY</strong> e rimuovi il suo token notturno dal foglio della notte.</p><p>Dopo che il Courtier ha scelto un personaggio da rendere drunk, non svegliare più il Courtier per il resto della partita.</p><p class=\"modal__callout-box\">In altre edizioni, possono esserci più copie dello stesso personaggio in gioco. Il Courtier rende drunk solo una di esse.</p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Professor",
        id: "professor",	
        description: "Il Professor può riportare qualcuno dalla morte.",
        intro: "<ul><li>Una volta per partita, il Professor può scegliere un giocatore morto. Se quel giocatore è un Townsfolk, viene resuscitato, tornando in vita.</li><li>Se il Professor sceglie un Outsider, un Minion o il Demone, non succede nulla e l’abilità del Professor è persa.</li><li>Il giocatore resuscitato recupera la propria abilità, anche un’abilità \"una volta per partita\" già usata.</li><li>I Townsfolk resuscitati possono o meno agire nella notte della loro resurrezione, a seconda che agiscano prima o dopo il Professor. Se avevano un’abilità \"solo la prima notte\" o \"inizi sapendo\", si svegliano immediatamente per usarla di nuovo, non appena il Professor torna a dormire.</li></ul>",
        ability: "Una volta per partita, di notte*, scegli un giocatore morto: se è un Townsfolk, viene resuscitato.",
        flavor: '"Il procedimento è semplice. Collegate il confabulatore idraulico all’amplificatore della matrice chi modificata, aggiungete 20 cc di pseudodorafina, mantenete i livelli Z sopra il 20% e vostro marito starà bene. Ora, tutto ciò che ci serve è un fulmine."',
        examples: "<p>Il Professor sceglie un giocatore morto che dichiara di essere la Tea Lady. Il giocatore è in realtà il Lunatic. Nessuno viene resuscitato.</p><p>Il Professor resuscita la Grandmother, che scopre il personaggio di un giocatore buono. All’alba, tutti i giocatori scoprono che la Grandmother è viva, ma non che quel giocatore è la Grandmother.</p><p>Il Professor drunk sceglie di resuscitare il Minstrel. All’insaputa del Professor, il Minstrel è stato rigurgitato dallo Shabaloth ed è ora vivo. Lo Storyteller scuote la testa, perché il Professor deve scegliere un giocatore morto. Il Professor sceglie invece il Fool morto. Non succede nulla perché il Professor è drunk e non può più usare la sua abilità.</p>",
        howToRun: "<p>Ogni notte tranne la prima, sveglia il Professor. Il Professor o scuote la testa per dire no oppure indica un giocatore morto. Rimetti a dormire il Professor.</p><p>Se il Professor ha scelto un Townsfolk morto, il giocatore scelto torna <strong>vivo</strong> — contrassegnalo con il promemoria \"Alive\" del Professor e rimuovi il sudario. <i>(Si sveglia più tardi stanotte se normalmente lo farebbe. Se si sveglia solo la prima notte, si sveglia ora per usare la sua abilità.)</i> All’alba, dopo aver dichiarato quali giocatori sono morti, dichiara quale giocatore è tornato in vita. <i>(Non dire perché.)</i> <strong>Il Professor perde la sua abilità</strong> — contrassegnalo con il promemoria <strong>NO ABILITY</strong> e rimuovi il suo token notturno dal foglio della notte.</p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Minstrel",
        id: "minstrel",	
        description: "Il Minstrel rende tutti drunk se muore un Minion.",
        intro: "<ul><li>Se un Minion viene giustiziato e muore, tutti i giocatori (tranne il Minstrel) diventano drunk immediatamente e rimangono drunk per tutta la notte e per tutto il giorno successivo. Townsfolk, Outsider, Minion e perfino Demone diventano drunk, ma non i Traveller. Questo non accade se un Minion muore di notte.</li><li>Se un Minion morto viene giustiziato, l’abilità del Minstrel non si attiva — un personaggio morto non può morire di nuovo! Se un Minion viene giustiziato ma non muore, l’abilità del Minstrel non si attiva. Se il Minstrel è drunk o avvelenato quando un Minion muore per esecuzione, l’abilità del Minstrel non si attiva.</li></ul>",
        ability: "Quando un Minion muore per esecuzione, tutti gli altri giocatori (tranne i Traveller) sono drunk fino al tramonto di domani.",
        flavor: '"E io ascolterò, sebbene tu cammini lieve sopra di me... E tutti i miei sogni saranno più caldi e più dolci... Se non mancherai di dirmi che mi ami... Io semplicemente dormo in pace finché non vieni da me."',
        examples: "<p>Durante il primo giorno, il Pacifist muore. Quella notte, i giocatori agiscono normalmente, perché il Pacifist non è un Minion. Durante il secondo giorno, il Judge giustizia il Godfather. Quella notte, tutti sono drunk, incluso il Demone, quindi non muore nessuno. Durante il terzo giorno, un Minion protetto dal Devil's Advocate viene giustiziato e muore, perché il Devil's Advocate è drunk. Di nuovo, poiché un Minion è morto durante il giorno, il Minstrel rende tutti drunk.</p><p>L’Assassin viene giustiziato, quindi il Minstrel rende tutti drunk. Il giorno successivo, il Godfather viene giustiziato, quindi il Minstrel rende tutti drunk di nuovo. Il Demone non ha potuto uccidere in nessuna delle due notti. Il giorno successivo, l’Apprentice Mastermind viene esiliato, quindi quella notte tutti tornano sobri, perché l’abilità del Minstrel non si attiva quando un Traveller viene esiliato.</p><p>Durante il giorno, l’Assassin muore, quindi il Minstrel rende tutti drunk. Il giorno seguente, lo Zombuul viene giustiziato e muore per la prima volta. I buoni vincono, perché lo Zombuul è drunk e quindi non ha alcuna abilità.</p>",
        howToRun: "<p>Durante il giorno, se un Minion muore per esecuzione, tutti gli altri giocatori tranne i Traveller diventano <strong>drunk</strong> — metti il promemoria <strong>EVERYONE IS DRUNK</strong> del Minstrel al centro del lato sinistro del Grimorio. Al tramonto di domani, tutti i giocatori resi drunk dal Minstrel tornano <strong>sobri</strong> — rimuovi il promemoria <strong>EVERYONE IS DRUNK</strong>.</p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Tea Lady",
        id: "tealady",	
        description: "La Tea Lady protegge i suoi vicini dalla morte… purché siano buoni.",
        intro: "<ul><li>Se entrambi i vicini vivi della Tea Lady sono attualmente buoni, quei vicini non possono morire. Il Demone non può ucciderli, né il Godfather, né il Gossip. Se vengono giustiziati, non muoiono. L’unica eccezione è l’Assassin, che può uccidere qualcuno protetto dalla morte.</li><li>I vicini vivi della Tea Lady sono i due giocatori vivi più vicini alla Tea Lady — uno in senso orario e uno in senso antiorario. Salta eventuali vicini morti.</li><li>Tuttavia, se uno dei due vicini vivi è malvagio, o lo sono entrambi, allora la Tea Lady non protegge i suoi vicini vivi. Se un giocatore malvagio muore e la Tea Lady ora confina con due giocatori buoni, allora nessuno dei due può morire.</li></ul>",
        ability: "Se entrambi i tuoi vicini vivi sono buoni, non possono morire.",
        flavor: '"Se hai freddo, il tè ti scalderà. Se sei troppo accalorato, il tè ti rinfrescherà. Se sei depresso, il tè ti rallegrerà. Se sei eccitato, il tè ti calmerà."',
        examples: "<p>La Tea Lady inizia la partita con come vicini il Mastermind e il Goon buono. Il Mastermind viene giustiziato e muore. Ora i vicini vivi della Tea Lady sono il Goon buono e il Courtier. Il Demone attacca il Courtier, ma il Courtier rimane vivo. Più tardi, il Goon diventa malvagio e il Demone attacca di nuovo il Courtier. Questa volta, il Courtier muore.</p><p>I vicini vivi della Tea Lady sono una Matron buona e un Judge buono. La Matron viene esiliata ma rimane viva.</p>",
        howToRun: "<p>Se entrambi i vicini vivi della Tea Lady sono buoni, contrassegna i token personaggio di quei vicini con i promemoria <strong>CANNOT DIE</strong> della Tea Lady. Se uno dei vicini vivi della Tea Lady è malvagio, rimuovi questi promemoria. Aggiorna questi promemoria immediatamente in base a questa condizione per tutta la partita <i>(ad esempio se l’allineamento di un giocatore cambia)</i>.</p><p>Se un giocatore contrassegnato <strong>CANNOT DIE</strong> dovrebbe morire, rimane vivo. Se un giocatore contrassegnato <strong>CANNOT DIE</strong> viene giustiziato, dichiara che il giocatore contrassegnato è stato giustiziato ma rimane vivo. <i>(Non dire perché.)</i></p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Pacifist",
        id: "pacifist",	
        description: "Il Pacifist impedisce ai giocatori buoni di morire per esecuzione.",
        intro: "<ul><li>Quando un giocatore buono viene giustiziato, lo Storyteller sceglie se muore oppure resta in vita.</li><li>Come sempre, quando abilità di questo tipo funzionano in modo evidente, al gruppo non viene detto il motivo per cui qualcosa è accaduto, ma solo cosa è accaduto. Il gruppo scopre che un’esecuzione è avvenuta, ma che il giocatore giustiziato non è morto — questo è tutto.</li><li>Se un giocatore viene giustiziato e rimane vivo, questo conta comunque come l’esecuzione di oggi. Non possono avvenire altre nomine.</li></ul>",
        ability: "I giocatori buoni giustiziati potrebbero non morire.",
        flavor: '"Diffida di tutti coloro nei quali l’impulso di punire è potente."',
        examples: "<p>L’Innkeeper viene giustiziato ma rimane vivo grazie al Pacifist.</p><p>Il Pacifist è in gioco. I buoni stanno vincendo. Anche dopo sette giorni e cinque giocatori buoni giustiziati, l’abilità del Pacifist non ha salvato nessuno.</p><p>Il Pacifist è in gioco. I malvagi stanno vincendo. Il Lunatic viene giustiziato ma rimane vivo. Il giorno successivo, il Professor buono viene giustiziato e muore, perché il Pacifist è drunk. Il giorno seguente, un Bishop buono viene esiliato e muore, perché il Pacifist salva i giocatori dall’esecuzione, non dall’esilio. Il giorno dopo ancora, il Pacifist viene giustiziato ma rimane vivo grazie al Pacifist.</p>",
        howToRun: "<p>Se un personaggio buono viene giustiziato, dichiara che <strong>muore</strong> oppure che rimane vivo. <i>(Non dire perché.)</i> Poi inizia la fase notturna. <i>(Che il giocatore sia rimasto vivo o sia morto, questa è stata comunque l’unica esecuzione della giornata.)</i></p><p class=\"modal__callout-box\">Attivare l’abilità del Pacifist una volta per partita di solito è la scelta giusta. Puoi attivarla più spesso se ritieni che sia appropriato. In rare occasioni, per rendere il Pacifist sospetto, puoi anche non attivarla mai.</p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Fool",
        id: "fool",	
        description: "Il Fool sfugge alla morte… una volta.",
        intro: "<ul><li>La prima volta che il Fool muore per qualsiasi motivo, il Fool rimane vivo. Non scopre che la sua abilità gli ha salvato la vita.</li><li>Se l’abilità di un altro personaggio protegge il Fool dalla morte, il Fool non usa la propria abilità. L’abilità del Fool si attiva solo nel momento in cui il Fool dovrebbe davvero, realmente, senza alcun dubbio, essere morto.</li></ul>",
        ability: "La prima volta che muori, non muori.",
        flavor: '"...e il Re disse: \'Cosa?! Non ho mai nemmeno posseduto un paio di mutandoni di gomma, figuriamoci un cannone spara-custard!\' Ho-ho! Che giornata allegra!"',
        examples: "<p>Nel primo giorno, il Fool viene giustiziato ma rimane vivo. Nel quarto giorno, il Fool viene giustiziato di nuovo. Questa volta, muore.</p><p>Il Demone attacca il Fool, che rimane vivo. Nessuno muore quella notte. Il giorno successivo, il Fool viene giustiziato dal Judge e muore.</p><p>Il Demone attacca il Fool, che è protetto dalla Tea Lady. Il Fool rimane vivo e mantiene la sua abilità. Più tardi, dopo che la Tea Lady è morta, il Demone attacca il Fool, che ora è protetto dall’Innkeeper. Il Fool rimane vivo e mantiene la sua abilità. Più tardi ancora, dopo che l’Innkeeper è morto, il Demone attacca il Fool, che rimane di nuovo vivo ma usa la sua abilità, quindi la prossima volta morirà.</p>",
        howToRun: "<p>Se il Fool dovrebbe morire, rimane vivo. <i>(Ma muore se è drunk o avvelenato.)</i> Se il Fool è stato giustiziato, dichiara che il giocatore è stato giustiziato ma rimane vivo. <i>(Non dire perché.)</i></p><p>In ogni caso, il Fool perde la sua abilità — contrassegnalo con il promemoria <strong>NO ABILITY</strong>.</p>",
        group: "Townsfolk",
        script: "bmr"
    },
    {
        name: "Goon",
        id: "goon",	
        description: "Il Goon è immune alle abilità degli altri personaggi di notte, ma continua a cambiare allineamento.",
        intro: "<ul><li>Ogni notte, la prima volta che un giocatore si sveglia per usare la propria abilità e sceglie il Goon, quel giocatore diventa immediatamente drunk. La sua abilità non funziona questa notte né per tutto il giorno successivo.</li><li>Più tardi, nella stessa notte, se un altro giocatore si sveglia per usare la propria abilità e sceglie il Goon, la sua abilità funziona normalmente.</li><li>Il Goon non può rendere drunk un giocatore a meno che quel giocatore non abbia scelto il Goon. La scelta del Goon da parte dello Storyteller a causa di un’abilità, come quella della Grandmother, non conta.</li><li>Non appena il Goon rende drunk un giocatore, il Goon cambia allineamento per corrispondere al suo. Il Goon cambia comunque allineamento e rende drunk il giocatore anche se il giocatore che ha scelto il Goon era già drunk o avvelenato.</li><li>Se viene scelto dall’Assassin, il Goon muore ma diventa comunque malvagio.</li></ul>",
        ability: "Ogni notte, il primo giocatore che ti sceglie con la propria abilità è drunk fino al tramonto. Diventi del suo allineamento.",
        flavor: '"Sì capo. Ho spiegato le cose per bene a quel tizio. Non vuole che gliele spieghi di nuovo. No capo, non mi serve un dottore — è solo una ferita di coltello. Starò a posto per domattina."',
        examples: "<p>Il Courtier sceglie il Goon. Il Goon diventa buono e il Courtier diventa drunk.</p><p>Lo Shabaloth attacca il Goon, poi il Gossip. Poiché lo Shabaloth diventa drunk non appena sceglie il Goon, nessuno dei due giocatori muore quella notte e il Goon diventa malvagio. La notte successiva, lo Shabaloth attacca il Gambler, poi il Goon. Il Gambler muore, poi lo Shabaloth diventa di nuovo drunk. Il Goon è ancora vivo ed è ancora malvagio.</p><p>La Chambermaid sceglie il Goon e il Minstrel e scopre un \"1\" perché la Chambermaid è drunk.</p><p>La Tea Lady confina con il Goon buono e il Tinker. Il Tinker viene giustiziato ma non muore. Il giorno successivo, il Goon è malvagio. Il Tinker viene giustiziato di nuovo e muore.</p>",
        howToRun: "<p>Di notte, se un giocatore sceglie di usare la propria abilità sul Goon e nessuno è contrassegnato con il promemoria <strong>DRUNK</strong> del Goon, quel giocatore diventa immediatamente <strong>drunk</strong> — contrassegnalo con il promemoria <strong>DRUNK</strong>. Completa la risoluzione dell’abilità di questo giocatore e rimettilo a dormire. Se l’allineamento di questo giocatore è diverso da quello del Goon, ruota il token personaggio del Goon — diritto per buono, capovolto per malvagio — per farlo corrispondere all’allineamento di quel giocatore, poi sveglia il Goon, mostragli un pollice in su o in giù <i>(a indicare il suo nuovo allineamento)</i>, quindi rimetti a dormire il Goon.</p><p>Al tramonto successivo, il giocatore che il Goon ha reso drunk torna <strong>sobrio</strong> — rimuovi il promemoria <strong>DRUNK</strong> del Goon.</p>",
        group: "Outsider",
        script: "bmr"
    },
    {
        name: "Lunatic",
        id: "lunatic",	
        description: "Il Lunatic crede di essere il Demone.",
        intro: "<ul><li>Un po’ come il Drunk, il Lunatic non conosce il suo vero personaggio né il suo vero allineamento. Viene svegliato ogni notte per attaccare come se fosse il Demone in gioco, ma le sue scelte non hanno alcun effetto perché non possiede un’abilità da Demone.</li><li>Il Lunatic si sveglia durante la prima notte per scoprire tre bluff e il numero appropriato di Minion, ma queste informazioni possono essere sbagliate.</li><li>Il vero Demone scopre quali giocatori il Lunatic ha scelto di attaccare ogni notte.</li></ul>",
        ability: "Credi di essere un Demone, ma non lo sei. Il Demone sa chi sei e chi scegli di notte.",
        flavor: '"Io sono la notte… credo."',
        examples: "<p>Il Lunatic, credendo di essere lo Shabaloth, si sveglia ogni notte per scegliere due giocatori. I giocatori scelti non muoiono.</p><p>Il Lunatic, credendo di essere lo Zombuul, non si sveglia spesso di notte. Il vero Zombuul, che finge di essere un Minion del Lunatic, spesso attacca gli stessi giocatori scelti dal Lunatic, per mantenere l’illusione che il Lunatic sia il Demone.</p>",
        howToRun: "<p>Durante la preparazione della partita, metti nel sacchetto i token del Lunatic e del Demone. Una volta che tutti i token ti sono stati restituiti, scambia la posizione dei token del Lunatic e del Demone nel Grimorio.</p><p>Durante la prima notte, sveglia il Lunatic e comportati come se fosse il Demone. Mostragli il token informazione <strong>THESE ARE YOUR MINIONS</strong> e indica un numero di giocatori pari al numero di Minion in gioco. <i>(Possono essere qualsiasi giocatori, che siano Minion oppure no.)</i> Mostra tre token personaggio buoni come bluff. <i>(Possono anche essere personaggi effettivamente in gioco.)</i></p><p>Durante la prima notte, sveglia il Demone. Mostragli il token informazione <strong>YOU ARE</strong>, poi il suo token Demone. <i>(Questo gli indica che è il vero Demone.)</i> Mostragli il token informazione <strong>THIS PLAYER IS</strong>, poi il token del Lunatic, quindi indica il giocatore Lunatic.</p><p>Ogni notte, prima che il Demone si svegli per attaccare, sveglia il Lunatic affinché agisca come se fosse quel Demone. Metti un promemoria <strong>CHOSEN</strong> su ogni giocatore che ha scelto, poi rimettilo a dormire. Sveglia il vero Demone, indica il Lunatic, mostra il token del Lunatic al vero Demone e indica i giocatori scelti dal Lunatic. Poi il Demone agisce normalmente.</p><p class=\"modal__callout-box\">Puoi far credere al Lunatic di essere un Demone diverso da quello realmente in gioco mettendo invece due token Demone nel sacchetto, poi sostituendone uno con il token del Lunatic una volta che sono nel Grimorio.</p>",
        group: "Outsider",
        script: "bmr"
    },
    {
        name: "Tinker",
        id: "tinker",	
        description: "Il Tinker può morire in qualsiasi momento, senza motivo.",
        intro: "<ul><li>Lo Storyteller può uccidere il Tinker in qualsiasi momento.</li><li>Il Tinker non può morire a causa della propria abilità mentre è protetto dalla morte, come di norma.</li></ul>",
        ability: "Potresti morire in qualsiasi momento.",
        flavor: '"Credo di aver capito il problema. Per fortuna, ho un’idea! Questa catapulta tirerà il doppio della distanza con solo un piccolo aggiustamento..."',
        examples: "<p>È il terzo giorno. All’improvviso, il Tinker muore.</p><p>Durante la notte, il Tinker muore, anche se il Demone ha attaccato un altro giocatore.</p><p>La Tea Lady è seduta accanto al Tinker e a un altro giocatore buono, proteggendo il Tinker dalla morte. Il Tinker non può morire a causa della propria abilità.</p><p>Il Tinker viene attaccato dal Demone. Il Tinker non muore perché è protetto dall’Innkeeper. Più tardi quella notte, l’Innkeeper muore, quindi lo Storyteller sceglie di uccidere anche il Tinker.</p>",
        howToRun: "<p>In qualsiasi momento, puoi decidere che il Tinker <strong>muore</strong>. Se ciò avviene durante il giorno, dichiara immediatamente che il Tinker è morto. Se avviene durante la notte, contrassegna il Tinker con il promemoria <strong>DEAD</strong> e attendi l’alba per dichiarare quali giocatori sono morti durante la notte. <i>(Non dire come.)</i></p><p class=\"modal__callout-box\">Sebbene tu possa uccidere il Tinker all’improvviso durante il giorno, è più interessante se il Tinker muore di notte, perché i giocatori si chiederanno se il Tinker è morto a causa della propria abilità o per qualche altro motivo.</p><p class=\"modal__callout-box\">Puoi scegliere di non uccidere mai il Tinker. Questo rende il Tinker estremamente sospetto.</p><p class=\"modal__callout-box\">Consigliamo di non uccidere mai il Tinker se ciò porrebbe fine alla partita. I giocatori dovrebbero vincere o perdere per i propri meriti, non per decisione arbitraria dello Storyteller.</p>",
        group: "Outsider",
        script: "bmr"
    },
    {
        name: "Moonchild",
        id: "moonchild",	
        description: "La Moonchild maledice qualcuno alla propria morte, uccidendolo a sua volta.",
        intro: "<ul><li>La Moonchild deve scegliere un giocatore entro uno o due minuti da quando scopre di essere morta, sia per esecuzione sia all’alba quando lo Storyteller dichiara chi è morto durante la notte. La Moonchild può prendersi il suo tempo e chiedere consiglio al gruppo prima di prendere questa decisione.</li><li>Se la Moonchild sceglie un giocatore buono, quel giocatore muore questa notte. Se sceglie un giocatore malvagio, non succede nulla.</li><li>Come sempre, asseconda il gioco se un giocatore malvagio sta bluffando come Moonchild e finge di usare la sua abilità.</li><li>Non è responsabilità dello Storyteller ricordare alla Moonchild di scegliere un giocatore. La Moonchild deve farlo poco dopo aver scoperto di essere morta. Non farlo deliberatamente è considerato barare.</li><li>Se la Moonchild è sobria e sana di notte ma era drunk o avvelenata quando ha scelto un giocatore oggi, quel giocatore muore. Se la Moonchild è drunk o avvelenata di notte ma era sobria e sana quando ha scelto un giocatore oggi, quel giocatore non muore.</li><li>La Moonchild uccide il Goon se il Goon era buono quando la Moonchild lo ha scelto, indipendentemente dall’allineamento del Goon durante la notte.</li></ul>",
        ability: "Quando scopri di essere morto, scegli pubblicamente 1 giocatore vivo. Questa notte, se era un giocatore buono, muore.",
        flavor: '"Lo Scorpione guarda di traverso gli amanti, e tu hai una scelta da fare. Con una croce d’argento sul mio palmo, il tuo destino sarà rivelato. Con una croce d’acciaio sulla mia gola, e per le stelle te ne pentirai."',
        examples: "<p>Il Pukka uccide la Moonchild. La mattina seguente, la Moonchild sceglie un giocatore, che è l’Exorcist. Quella notte, l’Exorcist muore.</p><p>Il Pacifist è in gioco. La Moonchild viene giustiziata ma rimane viva. La Moonchild non sceglie alcun giocatore, perché la Moonchild non è morta.</p><p>Lo Shabaloth mangia la Moonchild. La Moonchild sceglie l’Assassin, che rimane vivo. Lo Shabaloth rigurgita la Moonchild. Qualche notte dopo, lo Shabaloth mangia di nuovo la Moonchild. Questa volta, la Moonchild sceglie il Gossip, che muore.</p>",
        howToRun: "<p>Quando dichiari che il giocatore della Moonchild è morto, la Moonchild sceglie qualsiasi giocatore vivo. Se il giocatore scelto è buono, contrassegna il suo token personaggio con il promemoria <strong>DEAD</strong>. Questa notte, il giocatore contrassegnato con il promemoria <strong>DEAD</strong> della Moonchild <strong>muore</strong>.</p><p class=\"modal__callout-box\">Se la Moonchild non si rende conto di dover scegliere un giocatore quando muore, ricordaglielo privatamente. I nuovi giocatori potrebbero non capire come funziona il loro personaggio.</p>",
        group: "Outsider",
        script: "bmr"
    },
    {
        name: "Godfather",
        id: "godfather",	
        description: "Il Godfather si vendica quando il villaggio uccide degli Outsider.",
        intro: "<ul><li>Ogni volta che un Outsider viene giustiziato e muore, il Godfather sceglie un giocatore che morirà quella notte.</li><li>Il Godfather uccide solo se un Outsider muore durante il giorno. Gli Outsider che muoiono di notte non contano.</li><li>Se il Godfather è in gioco, questo aggiunge o rimuove un Outsider dalla partita.</li><li>All’inizio della partita, il Godfather scopre quali Outsider sono in gioco.</li><li>Se oggi sono morti due Outsider, il Godfather uccide comunque un solo giocatore quella notte.</li></ul>",
        ability: "Inizi scoprendo quali Outsider sono in gioco. Se 1 è morto oggi, scegli un giocatore stanotte: muore. [-1 o +1 Outsider]",
        flavor: '"Normalmente, è solo lavoro. Ma quando insulti mia figlia, insulti me. E quando insulti me, insulti la mia famiglia. Dovresti davvero stare più attento — sarebbe un peccato se ti capitasse un incidente sfortunato."',
        examples: "<p>Il Godfather scopre che il Lunatic e la Moonchild sono in gioco, quindi il Godfather bluffa come Tinker. Durante il terzo giorno, il Lunatic muore per esecuzione. Quella notte, il Demone uccide il Minstrel e il Godfather uccide il Pacifist.</p><p>Il Tinker viene giustiziato ma rimane vivo perché era protetto dal Devil's Advocate. Il Godfather non agisce quella notte. Il giorno successivo, il Tinker muore a causa della propria abilità. Quella notte, il Demone uccide un giocatore e il Godfather uccide sé stesso per sembrare un giocatore buono.</p>",
        howToRun: "<p>Durante la preparazione della partita, prima di mettere i token personaggio nel sacchetto, rimuovi un Townsfolk e aggiungi un Outsider oppure rimuovi un Outsider e aggiungi un Townsfolk.</p><p>Durante la prima notte, sveglia il Godfather. Mostragli i token personaggio di tutti gli Outsider in gioco. Rimetti a dormire il Godfather.</p><p>Se un Outsider muore durante il giorno, contrassegnalo con il promemoria <strong>DIED TODAY</strong>. Quella notte, sveglia il Godfather. Indica qualsiasi giocatore. Rimetti a dormire il Godfather. Il giocatore scelto <strong>muore</strong> — contrassegnalo con il promemoria <strong>DEAD</strong>.</p>",
        group: "Minion",
        script: "bmr"
    },
    {
        name: "Devil's Advocate",
        id: "devilsadvocate",	
        description: "Il Devil's Advocate salva i giocatori dall’esecuzione.",
        intro: "<ul><li>Ogni notte, il Devil's Advocate sceglie un giocatore da proteggere dalla morte per esecuzione. Il giorno successivo, se quel giocatore viene giustiziato, l’esecuzione ha successo ma il giocatore rimane vivo.</li><li>Il Devil's Advocate non può scegliere lo stesso giocatore per due notti consecutive, indipendentemente dal fatto che quel giocatore sia stato salvato o meno dall’esecuzione oggi, e non può scegliere uno Zombuul che si registra come morto.</li></ul>",
        ability: "Ogni notte, scegli un giocatore vivo (diverso da quello della notte precedente): se viene giustiziato domani, non muore.",
        flavor: '"Il mio cliente, qualora l’obiezione venga respinta, si dichiara innocente in virtù della mancata osservanza da parte dell’accusa dello statuto 27.B — coniugazione errata o fuorviante di un verbo. Il fatto che nove membri della giuria siano morti la scorsa notte è semplicemente prima facie, il che, come stabilito dal precedente Wills contro Thule, è ulteriore motivo per l’assoluzione."',
        examples: "<p>Di notte, il Devil's Advocate protegge sé stesso. Il giorno successivo, il Devil's Advocate viene giustiziato ma rimane vivo.</p><p>Il Devil's Advocate protegge lo Zombuul. Lo Zombuul viene giustiziato ma rimane vivo, quindi il suo token vita non viene girato. Il giorno successivo, lo Zombuul viene giustiziato di nuovo e si registra come morto.</p><p>Il Devil's Advocate protegge la Grandmother. La Grandmother viene giustiziata ma rimane viva. Più tardi, il Devil's Advocate protegge il Tinker. Il Tinker viene giustiziato, ma lo Storyteller uccide comunque il Tinker a causa dell’abilità del Tinker. Più tardi ancora, il Devil's Advocate protegge la Moonchild e il Judge forza il successo dell’esecuzione — l’esecuzione ha successo, ma la Moonchild rimane viva.</p>",
        howToRun: "<p>Ogni notte, sveglia il Devil's Advocate. Indica qualsiasi giocatore. Rimetti a dormire il Devil's Advocate. Contrassegna il giocatore scelto con il promemoria <strong>SURVIVES EXECUTION</strong>.</p><p>Se un giocatore contrassegnato con <strong>SURVIVES EXECUTION</strong> viene giustiziato, dichiara che il giocatore è stato giustiziato ma rimane vivo. <i>(Non dire perché.)</i></p>",
        group: "Minion",
        script: "bmr"
    },
    {
        name: "Assassin",
        id: "assassin",	
        description: "L’Assassin uccide chi il Demone non può uccidere.",
        intro: "<ul><li>Una volta per partita, di notte, l’Assassin può uccidere un giocatore. Questo giocatore muore anche se è protetto dalla morte in qualsiasi modo, ad esempio da un’abilità.</li><li>L’abilità dell’Assassin è influenzata da drunkenness e avvelenamento, come di norma.</li><li>Se l’Assassin attacca il Goon, il Goon muore e diventa malvagio.</li></ul>",
        ability: "Una volta per partita, di notte*, scegli un giocatore: muore, anche se per qualche motivo non potrebbe.",
        flavor: '"..."',
        examples: "<p>Per le prime tre notti l’Assassin si sveglia, ma sceglie di non agire. Durante la quarta notte, sceglie di uccidere il Fool. Anche se il Fool ha ancora la sua abilità, il Fool muore e rimane morto.</p><p>La Tea Lady confina con due giocatori buoni. L’Assassin sceglie di uccidere uno dei vicini della Tea Lady, che muore anche se era protetto dalla Tea Lady.</p><p>Il Minstrel è in gioco. Il Mastermind muore per esecuzione. Quella notte, l’Assassin sceglie di uccidere la Moonchild, ma non muore, perché l’Assassin è drunk a causa del Minstrel.</p><p>L’Assassin, che era drunk a causa del Courtier, sceglie di uccidere il Goon. L’Assassin non ha alcuna abilità, quindi il Goon rimane vivo ma diventa malvagio.</p>",
        examples: "<p>Per le prime tre notti l’Assassin si sveglia, ma sceglie di non agire. Durante la quarta notte, sceglie di uccidere il Fool. Anche se il Fool ha ancora la sua abilità, il Fool muore e rimane morto.</p><p>La Tea Lady confina con due giocatori buoni. L’Assassin sceglie di uccidere uno dei vicini della Tea Lady, che muore anche se era protetto dalla Tea Lady.</p><p>Il Minstrel è in gioco. Il Mastermind muore per esecuzione. Quella notte, l’Assassin sceglie di uccidere la Moonchild, ma non muore, perché l’Assassin è drunk a causa del Minstrel.</p><p>L’Assassin, che era drunk a causa del Courtier, sceglie di uccidere il Goon. L’Assassin non ha alcuna abilità, quindi il Goon rimane vivo ma diventa malvagio.</p>",
        howToRun: "<p>Ogni notte tranne la prima, sveglia l’Assassin. Può scuotere la testa per dire di no oppure indicare qualsiasi giocatore. Rimetti a dormire l’Assassin.</p><p>Se l’Assassin ha scelto un giocatore, quel giocatore <strong>muore</strong> — contrassegnalo con il promemoria <strong>DEAD</strong>. Questo non può essere impedito in alcun modo <i>(tranne se l’Assassin non ha la propria abilità, ad esempio perché è drunk o avvelenato)</i>. <strong>L’Assassin perde la propria abilità</strong> — contrassegnalo con il promemoria <strong>NO ABILITY</strong> e rimuovi il suo token notte dal foglio notturno. <i>(L’Assassin non si sveglierà più.)</i></p>",
        group: "Minion",
        script: "bmr"
    },
    {
        name: "Mastermind",
        id: "mastermind",	
        description: "Il Mastermind può ancora vincere dopo che il Demone è morto.",
        intro: "<ul><li>Se il Demone muore per esecuzione, la partita continua. I giocatori non scoprono che il Demone è morto. Il giorno successivo, se un giocatore buono viene giustiziato — che muoia oppure no per l’esecuzione — allora i malvagi vincono. Se viene giustiziato un giocatore malvagio o nessuno viene giustiziato, allora la squadra dei buoni vince.</li><li>Un Demone morto non può attaccare. Perde la sua abilità, come di norma. Durante questa notte e questo giorno extra, le abilità degli altri personaggi funzionano normalmente.</li><li>Se il Demone muore e rimangono vivi solo due giocatori, la partita continua comunque per un altro giorno — i malvagi non vincono perché restano due giocatori vivi e i buoni non vincono per aver ucciso il Demone. L’abilità del Mastermind dice \"giocate per un altro giorno\" e le abilità prevalgono sulle regole standard della partita.</li></ul>",
        ability: "Se il Demone muore per esecuzione (terminando la partita), giocate per 1 giorno in più. Se poi un giocatore viene giustiziato, la sua squadra perde.",
        flavor: '"I tentacoli di quel mostro sono inchiodati alle porte della chiesa. Madri e bambini danzano per strada. Eccellente. Tutto sta procedendo esattamente come avevo pianificato."',
        examples: "<p>Lo Shabaloth muore. Il giorno successivo, il Professor viene giustiziato e muore. I malvagi vincono.</p><p>Il Po muore. Il giorno successivo, il Godfather viene giustiziato ma rimane vivo perché era protetto dal Devil's Advocate. Tuttavia, poiché è stato giustiziato un giocatore malvagio, i buoni vincono.</p><p>Lo Zombuul viene giustiziato e sembra morire. L’abilità del Mastermind non si attiva ancora, perché l’esecuzione dello Zombuul non ha fatto terminare la partita. Quando lo Zombuul viene giustiziato una seconda volta e muore davvero, l’abilità del Mastermind si attiva e la partita continua per un altro giorno.</p><p>Ci sono tre giocatori vivi. Il Demone muore. Il giorno successivo, con solo due giocatori vivi, i buoni decidono di non giustiziare. Quando cala la notte, restano vivi solo due giocatori ma il Demone è morto, quindi i buoni vincono.</p>",
        howToRun: "<p>Se il Demone viene giustiziato e muore, e la partita dovrebbe terminare, continuate a giocare. <i>(Aggiungi un sudario come di norma. Non dire che il Demone è morto.)</i></p><p>Domani, se un giocatore buono viene giustiziato, dichiara che la partita termina e i malvagi vincono; ma se viene giustiziato un giocatore malvagio o nessun giocatore viene giustiziato, dichiara che la partita termina e i buoni vincono.</p>",
        group: "Minion",
        script: "bmr"
    },
    {
        name: "Zombuul",
        id: "zombuul",	
        description: "Lo Zombuul rimane segretamente vivo mentre è nella tomba.",
        intro: "<ul><li>Quando lo Zombuul dovrebbe morire per qualsiasi motivo, in realtà non muore, ma lo Storyteller si comporta come se fosse morto. La seconda volta che lo Zombuul muore, muore davvero e i buoni vincono.</li><li>Lo Zombuul apparentemente morto conta come un giocatore morto quasi in ogni modo. Il token vita del giocatore nella Piazza del Villaggio viene girato per indicare la morte. La prossima volta che vota, perde il proprio token voto. Non può nominare, può votare con il Voudon, non è un vicino vivo per la Tea Lady, e così via. Le uniche differenze sono che la partita continua, lo Zombuul continua ad attaccare e la partita continua anche se restano vivi solo altri due giocatori.</li><li>Lo Zombuul si sveglia di notte per attaccare solo se nessuno è morto durante il giorno. Se un giocatore morto viene giustiziato, non può morire di nuovo, quindi lo Zombuul si sveglia comunque.</li><li>Se uno Zombuul drunk o avvelenato muore, i buoni vincono. Se uno Zombuul “morto” diventa drunk o avvelenato, non annunciare che il giocatore è vivo.</li></ul>",
        ability: "Ogni notte*, se oggi non è morto nessuno, scegli un giocatore: muore. La prima volta che muori, resti vivo ma ti registri come morto.",
        flavor: '"Io non. Capisco. Le vostre vie. Compagno umano. Mostrami. La terra. Dove il sacro. Giace. Dormendo. Anche io. Devo dormire. Presto."',
        examples: "<p>Lo Zombuul viene giustiziato e sembra morire. Non può attaccare questa notte. Qualche giorno dopo, solo due giocatori sembrano vivi nella Piazza del Villaggio. La squadra dei buoni è abbastanza certa che uno dei giocatori morti sia lo Zombuul e la partita continua finché non muore un altro giocatore.</p><p>Oggi non è morto nessuno. Quella notte, lo Zombuul attacca. Il giorno successivo, il Tinker muore. Quella notte, lo Zombuul non si sveglia.</p>",
        howToRun: "<p>La prima volta che lo Zombuul dovrebbe morire, rimane vivo. Dichiara che è morto, ma non aggiungere un sudario allo Zombuul. <i>(Gira il token vita nella Piazza del Villaggio, come di norma.)</i> Da questo momento in poi, lo Zombuul si registra come morto.</p><p>Ogni giorno, se un giocatore muore, contrassegnalo con il promemoria <strong>DIED TODAY</strong>. <i>(Se lo Zombuul “muore” per esecuzione, si registra come morto, quindi contrassegna lo Zombuul con il promemoria <strong>DIED TODAY</strong>.)</i></p><p>Ogni notte tranne la prima, se qualsiasi giocatore è contrassegnato con <strong>DIED TODAY</strong>, non svegliare lo Zombuul.</p><p>Ogni notte tranne la prima, se nessun giocatore è contrassegnato con <strong>DIED TODAY</strong>, sveglia lo Zombuul. Indica qualsiasi giocatore. Rimetti a dormire lo Zombuul. Il giocatore scelto muore — contrassegnalo con il promemoria <strong>DEAD</strong>.</p>",
        group: "Demon",
        script: "bmr"
    },
    {
        name: "Pukka",
        id: "pukka",	
        description: "Il Pukka avvelena le sue vittime, che muoiono in un momento successivo.",
        intro: "<ul><li>Quando il Pukka attacca, la sua vittima viene avvelenata immediatamente. Nella notte successiva, subito dopo che il Pukka attacca di nuovo, quel giocatore muore.</li><li>A differenza degli altri Demone, il Pukka agisce durante la prima notte.</li><li>L'Exorcist impedisce al Pukka di svegliarsi per avvelenare un giocatore. L'Innkeeper impedisce al Pukka di uccidere un giocatore avvelenato, e poi quel giocatore non è più avvelenato.</li><li>Se il Pukka è drunk e sceglie un giocatore, quel giocatore non viene avvelenato, quindi non muore la notte successiva.</li><li>Se il Pukka era sobrio quando ha scelto un giocatore la notte precedente, ma è drunk di notte, quel giocatore non muore. Ma quando il Pukka torna sobrio, il veleno riprende e uccide il giocatore di notte.</li></ul>",
        ability: "Ogni notte, scegli un giocatore: è avvelenato. Il giocatore avvelenato in precedenza muore e poi torna sano.",
        flavor: '"Sei stato davvero gentile ad accogliermi nella tua splendida casa. Mi dispiace tanto di averti graffiato per sbaglio. Una sciocchezza. Non importa. Ma per favore, prendi questo stuzzicadenti d’oro come umile pegno del mio rammarico."',
        examples: "<p>Il Pukka avvelena la Chambermaid. La Chambermaid riceve informazioni false. La notte successiva, la Chambermaid muore.</p><p>Il Pukka avvelena il Fool. Il giorno successivo, il Fool viene giustiziato e muore perché non ha alcuna abilità. La notte successiva, non muore nessuno e il Pukka avvelena il Gossip. La notte dopo, il Pukka è drunk e prova ad avvelenare il Tinker, ma non ci riesce. La notte successiva, il Gossip muore perché il Pukka è sobrio.</p><p>Il Pukka avvelena il Pacifist. La notte successiva, l'Exorcist sceglie il Pukka affinché non si svegli stanotte. Il Pacifist muore, ma il Pukka non si sveglia per attaccare stanotte.</p><p>La Moonchild viene giustiziata, muore e sceglie il Courtier. Quella notte, il Pukka sceglie la Moonchild. Il Courtier non muore, perché la Moonchild morta è avvelenata.</p>",
        howToRun: "<p>Ogni notte, sveglia il Pukka. Indica qualsiasi giocatore. Rimetti a dormire il Pukka. Il giocatore scelto è <strong>avvelenato</strong> — contrassegnalo con un promemoria <strong>POISONED</strong>.</p><p>Ogni notte tranne la prima, l’altro giocatore contrassegnato <strong>POISONED</strong> <strong>muore</strong> — contrassegnalo con un promemoria di morte, poi rimuovi il suo promemoria <strong>POISONED</strong>.</p><p class=\"modal__callout-box\">I giocatori che il Pukka uccide sono ancora avvelenati nel momento della loro morte. Se stai usando personaggi di altre edizioni, potrebbe essere necessario mantenere il promemoria <strong>POISONED</strong> accanto al promemoria <strong>DEAD</strong> finché la loro abilità alla morte non è risolta. Per esempio, se il Pukka uccide il Sage, il Sage potrebbe ricevere informazioni false perché è avvelenato dal Pukka.</p>",
        group: "Demon",
        script: "bmr"
    },
    {
        name: "Shabaloth",
        id: "shabaloth",	
        description: "Lo Shabaloth divora due giocatori per notte, ma potrebbe rigurgitarne uno la notte successiva.",
        intro: "<ul><li>A differenza della maggior parte dei Demone, lo Shabaloth attacca due volte per notte. La notte successiva all’attacco, lo Storyteller può decidere che uno dei giocatori attaccati dallo Shabaloth torni in vita.</li><li>Può trattarsi di un giocatore vivo che è stato ucciso, oppure di un giocatore già morto che è stato attaccato.</li><li>Il giocatore rigurgitato riottiene la propria abilità, anche un’abilità \"una volta per partita\" già utilizzata. Se aveva un’abilità \"solo la prima notte\" o \"inizi sapendo\", può usarla di nuovo.</li></ul>",
        ability: "Ogni notte*, scegli 2 giocatori: muoiono. Un giocatore morto che hai scelto la notte scorsa potrebbe essere rigurgitato.",
        flavor: "\"Blarg f'taag nm mataan! No sho gumtha m'sik na yuuu. Fluuuuuuuuurg h-sikkkh.\"",
        examples: "<p>Lo Shabaloth attacca il Gossip e poi il Gambler. Il Gossip muore, ma il Gambler, che era protetto dall’Innkeeper, rimane vivo.</p><p>Lo Shabaloth attacca il Courtier vivo e l’Exorcist morto. Il Courtier muore. La notte successiva, lo Storyteller decide che l’Exorcist torna in vita. L’Exorcist non agisce quella notte — normalmente agirebbe prima dello Shabaloth.</p><p>Lo Shabaloth attacca un vicino della Tea Lady e poi la Tea Lady. Il vicino della Tea Lady, che è protetto dalla Tea Lady, non muore, ma la Tea Lady sì.</p>",
        howToRun: "<p>Ogni notte tranne la prima, sveglia lo Shabaloth. Indica due giocatori qualsiasi, uno alla volta. Rimetti a dormire lo Shabaloth. Nell’ordine scelto, ciascun giocatore scelto <strong>muore</strong> — contrassegnalo con un promemoria <strong>DEAD</strong>.</p><p>In ogni notte successiva, appena prima di svegliare lo Shabaloth, puoi scegliere un personaggio contrassegnato con il promemoria <strong>DEAD</strong> dello Shabaloth, e quel giocatore torna in vita — sostituisci il promemoria <strong>DEAD</strong> con il promemoria <strong>ALIVE</strong> dello Shabaloth e rimuovi il sudario. Si sveglierà più tardi quella notte se normalmente dovrebbe farlo. Se si sveglia solo la prima notte, si sveglia ora per usare la sua abilità. All’alba, dopo aver dichiarato quali giocatori sono morti, dichiara quale giocatore è tornato in vita. <i>(Non dire perché.)</i></p><p class=\"modal__callout-box\">Dato che lo Shabaloth non può rigurgitare se stesso — non ha alcuna abilità quando è morto — è consigliabile far rigurgitare lo Shabaloth solo raramente. Una volta per partita, forse due, è generalmente sufficiente.</p>",
        group: "Demon",
        script: "bmr"
    },
    {
        name: "Po",
		id: "po",
        examples: "Il Po può scegliere di non attaccare nessuno di notte, ma la notte successiva si scatena.",
        intro: "<ul><li>Il Po attacca un giocatore per notte, come molti altri Demone. Tuttavia, se il Po sceglie di non attaccare nessuno, allora può attaccare tre giocatori la notte successiva.</li><li>Se il Po era drunk o avvelenato quando ha scelto di non attaccare nessuno la notte scorsa, sceglie comunque tre giocatori stanotte.</li><li>Un Po deve scegliere tre giocatori quando gli viene richiesto di farlo. Non può scegliere di non attaccare nessuno di nuovo.</li><li>Il Po ottiene tre attacchi solo se ha scelto di non attaccare nessuno. Il Po non ottiene tre attacchi se ha scelto di attaccare qualcuno la notte precedente ma quel giocatore non è morto.</li><li>Il Po non agisce la prima notte, ma questa notte non conta come una notte in cui il Po “ha scelto nessuno”.</li><li>Se l’Exorcist seleziona il Po, il Po non agisce, ma questa notte non conta come una notte in cui il Po “ha scelto nessuno”. Tuttavia, se il Po ha scelto nessuno la notte prima che l’Exorcist scegliesse il Po, il Po sceglie tre giocatori la notte dopo quella in cui l’Exorcist ha scelto il Po, perché la sua ultima scelta era stata nessuno.</li></ul>",
        ability: "Ogni notte*, puoi scegliere un giocatore: muore. Se la tua ultima scelta è stata nessuno, stanotte scegli 3 giocatori.",
        flavor: "\"Vorresti un fiore? Sono così solo.\"",
        examples: "<p>Nella seconda notte, il Po attacca un giocatore. Nella terza notte, il Po sceglie di non attaccare nessuno. Nella quarta notte, il Po attacca tre giocatori.</p><p>Il Po sceglie di non attaccare nessuno, ma è drunk. La notte successiva, il Po è avvelenato. Sceglie tre giocatori, ma nessuno di loro muore. La notte seguente, il Po è sobrio e sano e attacca un giocatore, che muore.</p><p>Il Po attacca la Moonchild, poi il Goon, poi la Grandmother. Muore solo la Moonchild, perché il Po è diventato drunk quando ha attaccato il Goon.</p>",
        howToRun: "<p>Ogni notte tranne la prima, sveglia il Po. Può scuotere la testa per dire di no oppure indicare qualsiasi giocatore. Rimetti a dormire il Po. Se ha scosso la testa per dire di no, contrassegna il Po con il promemoria <strong>3 ATTACKS</strong>. Se ha scelto un giocatore, quel giocatore <strong>muore</strong>—contrassegnalo con un promemoria <strong>DEAD</strong>.</p><p>Se il Po si sveglia per agire mentre è contrassegnato <strong>3 ATTACKS</strong>, indica tre giocatori qualsiasi, uno alla volta. Nell’ordine scelto, ciascun giocatore scelto <strong>muore</strong>—contrassegnalo con promemoria <strong>DEAD</strong>. Rimuovi il promemoria <strong>3 ATTACKS</strong>.</p>",
        group: "Demon",
        script: "bmr"
    },
    {
        name: "Clockmaker",
        id:"clockmaker",	
        description: `Il Clockmaker scopre la distanza tra il Demone e il suo Minion più vicino.`,
        intro: "<ul><li>Il Clockmaker scopre questo solo la prima notte.</li><li>La distanza è il numero di giocatori seduti, partendo dal giocatore accanto al Demone e terminando al Minion più vicino, in senso orario o antiorario.</li></ul>",
        ability: 'Inizi sapendo a quanti passi si trova il Minion più vicino dal Demone.',
        flavor: '"Non disturbarmi. Il ticchettio deve continuare, poiché il cerchio è un simbolo di vita e contiene ogni cosa - ogni risposta - nel suo meccanismo divino. Devo lavorare."',
        examples: `<p>Il Fang Gu è seduto accanto al Pit-Hag. Il Clockmaker scopre un "1".</p><p>In senso orario dal No Dashii siedono il Dreamer, lo Snake Charmer e poi l’Evil Twin. In senso antiorario dal No Dashii siedono il Mutant, lo Sweetheart, il Philosopher, il Sage e poi la Witch. Poiché la Witch si trova a cinque passi dal Demone, e l’Evil Twin si trova a tre passi dal Demone, il Clockmaker scopre un "3".</p><p>Il Fang Gu confina con due Travellers, uno buono e uno malvagio. Accanto a uno di questi Travellers si trova un Cerenovus. Durante la prima notte, il Clockmaker scopre un "2" perché i Travellers malvagi non sono Minion.</p>`,
        howToRun: `<p>Durante la prima notte, sveglia il Clockmaker. Mostra con le dita <i>(0, 1, 2 ecc.)</i> la distanza in giocatori dal Demone al Minion più vicino, partendo dal giocatore vicino al Demone in direzione di quel Minion. Rimetti a dormire il Clockmaker.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Dreamer",
        id:"dreamer",	
        description: "Il Dreamer scopre quale giocatore è quale personaggio, ma non ne è mai certo.",
        intro: "<ul><li>Ogni notte, il Dreamer sceglie un giocatore e scopre due personaggi—uno che il giocatore è, e uno che il giocatore non è.</li><li>Il segnalino del personaggio falso dipende dal vero tipo di personaggio del giocatore scelto. Se il Dreamer sceglie un giocatore che è un Townsfolk o Outsider, il segnalino del personaggio falso è un qualsiasi Minion o Demone. Se sceglie un giocatore che è un Minion o Demone, il segnalino del personaggio falso è un Townsfolk o Outsider.</li><li>Il Dreamer non può scegliere se stesso e non può scegliere un Traveller.</li></ul>",
        ability: "Ogni notte, scegli un giocatore (non te stesso o i Travellers): scopri 1 personaggio buono e 1 malvagio, di cui 1 è corretto.",
        flavor: "\"Ricordo il Clockmaker. Il cielo era rosso e piovevano triangoli frattali. C’era odore di violette e un suono gorgogliante. Una donna con occhi luminosi e una barba ispida sibilava contro il cielo. Poi mi sono svegliato.\"",
        examples: `<p>Il Dreamer sceglie un giocatore che è il Mutant. Il Dreamer scopre che questo giocatore è o il Mutant o il Cerenovus.</p><p>Il Dreamer sceglie un giocatore che è il Philosopher che ha ottenuto l’abilità della Flowergirl. Il Dreamer scopre che questo giocatore è o il Philosopher o il Vigormortis.</p><p>Oggi, sia l’Evil Twin che l’Artist hanno dichiarato di essere l’Artist. Quella notte, il Dreamer sceglie il giocatore che è l’Evil Twin. Se lo Storyteller volesse aiutare la squadra dei buoni, potrebbe mostrare al Dreamer i segnalini dell’Evil Twin e della Sweetheart. Ma lo Storyteller decide di aiutare i malvagi, quindi mostra al Dreamer i segnalini dell’Evil Twin e dell’Artist.</p><p>Il Dreamer sceglie un giocatore che è il Vortox. Le informazioni del Dreamer devono essere false perché il Vortox è in gioco, quindi il Dreamer scopre che questo giocatore è o l’Oracle o il No Dashii.</p>`,
        howToRun: `<p>Ogni notte, sveglia il Dreamer. Indica un qualsiasi giocatore. Se il personaggio del giocatore scelto è un Townsfolk o Outsider, mostra al Dreamer il suo segnalino personaggio e un qualsiasi segnalino Minion o Demone. Se il personaggio del giocatore scelto è un Minion o Demone, mostra al Dreamer il suo segnalino personaggio e un qualsiasi segnalino Townsfolk o Outsider. Poi rimetti a dormire il Dreamer.</p><p class="modal__callout-box">Se il Dreamer sceglie un giocatore malvagio, puoi aiutare la squadra dei malvagi se mostri al Dreamer il personaggio buono che questo giocatore malvagio sta bluffando, oppure se mostri un personaggio più segreto come lo Snake Charmer, il Sage, il Mutant o il Klutz.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Snake Charmer",
        id:"snakecharmer",	
        description: "Lo Snake Charmer scopre quali giocatori non sono il Demone… ma diventa il Demone se diventa troppo avido o troppo audace.",
        intro: "<ul><li>Ogni notte, sceglie un giocatore. Se quel giocatore non è il Demone, non succede nulla. Se è il Demone, lo Snake Charmer diventa quel Demone e diventa malvagio, e il Demone diventa buono ed è avvelenato permanentemente.</li><li>Se il Philosopher ha l’abilità dello Snake Charmer e diventa il Demone, il Demone diventa un Philosopher avvelenato.</li></ul>",
        ability: "Ogni notte, scegli un giocatore in vita: un Demone scelto scambia personaggio e allineamento con te ed è poi avvelenato.",
        flavor: "\"Effendi... non sono che un uomo umile, ma la mia pipa è d’oro e una sola melodia domerà il djinn più selvaggio, Inshallah. Dicono che l’avidità impicchi più uomini della corda. Ma non me, Effendi... non me.\"",
        examples: `<p>Lo Snake Charmer sceglie un giocatore che è il Pit-Hag, quindi non succede nulla. La notte successiva, lo Snake Charmer sceglie se stesso, quindi non succede nulla.</p><p>Lo Snake Charmer sceglie un giocatore che è il Vigormortis. Lo Snake Charmer diventa immediatamente il Vigormortis malvagio, e il Vigormortis diventa lo Snake Charmer buono ed è avvelenato.</p><p>Il Pit-Hag trasforma se stesso nello Snake Charmer. Poi, lo Snake Charmer—precedentemente il Pit-Hag—sceglie un giocatore che è il Fang Gu. Lo Snake Charmer diventa il Fang Gu, e il Fang Gu diventa lo Snake Charmer avvelenato. Entrambi rimangono malvagi.</p>`,
        howToRun: `<p>Ogni notte, sveglia lo Snake Charmer. Indica un qualsiasi giocatore.</p><p>Se quel giocatore non è il Demone, non succede nulla. Rimetti a dormire lo Snake Charmer.</p><p>Se quel giocatore è il Demone, il vecchio Snake Charmer si trasforma nel nuovo <i>(malvagio)</i> Demone, e il vecchio Demone si trasforma nel nuovo <i>(buono)</i> Snake Charmer—scambia il segnalino dello Snake Charmer e il segnalino del Demone. Il nuovo Snake Charmer è <strong>avvelenato</strong>—contrassegnalo con il promemoria <strong>POISONED</strong>. Sveglia il nuovo Demone e mostrargli il segnalino informativo <strong>YOU ARE</strong>, un pollice verso il basso, il segnalino <strong>YOU ARE</strong>, poi il segnalino del Demone. <i>(Questo mostra che ora è malvagio ed è il Demone.)</i> Rimetti a dormire il nuovo Demone. Sveglia il nuovo Snake Charmer e mostrargli il segnalino informativo <strong>YOU ARE</strong>, un pollice verso l’alto, il segnalino informativo <strong>YOU ARE</strong>, poi il segnalino dello Snake Charmer. <i>(Questo mostra che ora è buono ed è lo Snake Charmer.)</i> Rimetti a dormire il nuovo Snake Charmer.</p><p class="modal__callout-box">Nella strana situazione in cui lo Snake Charmer è malvagio, o il Demone è buono, scambia i loro allineamenti come appropriato.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Mathematician",
        id:"mathematician",	
        description: "Il Mathematician sa quante cose sono \"andate storte\" dall’alba di oggi.",
        intro: "<ul><li>Quando un’abilità non funziona nel modo previsto a causa dell’interferenza dell’abilità di un altro personaggio, il Mathematician scopre che è successo. Scopre che qualcosa è andato storto se un’informazione era falsa ma avrebbe dovuto essere vera, oppure se un’abilità avrebbe dovuto funzionare ma non lo ha fatto, a causa di un altro personaggio.</li><li>Il Mathematician non scopre a quali giocatori è successo, ma solo quante volte è successo.</li><li>Il Mathematician non rileva il fallimento della propria abilità.</li><li>Il Mathematician non rileva direttamente l’essere drunk o avvelenati, ma rileva quando le abilità di giocatori drunk o avvelenati non hanno funzionato come previsto. Il Recluse che risulta malvagio allo Chef, e il Soldier avvelenato che muore per l’attacco dell’Imp, verrebbero entrambi rilevati. L’Empath avvelenato che ottiene informazioni vere non verrebbe rilevato.</li></ul>",
        ability: "Ogni notte, scopri quante abilità dei giocatori hanno funzionato in modo anomalo (dall’alba) a causa dell’abilità di un altro personaggio.",
        flavor: "\"Ogni sistema formale coerente x, all’interno del quale possa essere svolta una certa quantità di aritmetica elementare, è incompleto; cioè, esistono enunciati del linguaggio di x che non possono né essere dimostrati né confutati in x. Ergo, sei drunk.\"",
        examples: `<p>L’Oracle avvelenato scopre che due giocatori morti sono malvagi, ma in realtà tre giocatori morti sono malvagi. Tutte le altre abilità hanno funzionato normalmente. Il Mathematician scopre un \"1\".</p><p>Lo Snake Charmer avvelenato sceglie un giocatore Townsfolk e non succede nulla. Il Juggler drunk ottiene informazioni corrette. Il Savant avvelenato scopre due informazioni vere. Più tardi quella notte, il Mathematician scopre un \"1\" perché le abilità dello Snake Charmer e del Juggler hanno funzionato normalmente, mentre uno dei fatti del Savant era vero quando avrebbe dovuto essere falso.</p><p>Un Vortox è in gioco. Cinque giocatori buoni ottengono informazioni false. La Witch è drunk e, quando il giocatore maledetto fa una nomination, non muore. Anche se sei abilità hanno funzionato in modo anomalo, il Mathematician scopre un \"3\" a causa dell’abilità del Vortox.</p>`,
        howToRun: `<p>Ogni volta che l’abilità di un personaggio funziona in modo anomalo a causa dell’abilità di un altro personaggio, contrassegnalo con un promemoria <strong>ABNORMAL</strong>.</p><p>Ogni notte, sveglia il Mathematician. Mostra con le dita <i>(0, 1, 2, ecc.)</i> il numero di personaggi con promemoria <strong>ABNORMAL</strong>. Rimetti a dormire il Mathematician. Rimuovi tutti i promemoria <strong>ABNORMAL</strong>.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Flowergirl",
        id:"flowergirl",	
        description: "La Flowergirl sa se il Demone ha votato oppure no.",
        intro: `<ul><li>Il voto di un Demone conta indipendentemente dal fatto che il nominato sia stato eseguito oppure no.</li><li>La Flowergirl non rileva se il Demone ha alzato la mano per altri motivi, come quando i giocatori “votano” su cosa ordinare per cena, o quando i giocatori alzano la mano per esiliare un Traveller.</li><li>Se il Demone cambia giocatore dopo che il Demone originale ha votato ma prima che la Flowergirl si svegli per scoprire la sua informazione, la Flowergirl rileva il Demone originale.</li><li>Se ci sono due (o più!) Demone, anche Demone morti, la Flowergirl rileva se uno qualsiasi di loro ha votato. Se anche solo un Demone ha votato, la Flowergirl scopre un "sì".</li></ul>`,
        ability: "Ogni notte*, scopri se oggi un Demone ha votato.",
        flavor: "\"Le violette di ieri sono appassite e morte, ma oggi i miei papaveri fioriscono.\"",
        examples: `<p>Oggi c’è stata una sola nomination. Molti giocatori hanno votato e il giocatore è stato eseguito, ma il Demone non ha votato. Quella notte, la Flowergirl scopre un "no".</p><p>Oggi ci sono state tre nomination. Il Demone ha votato durante la seconda nomination. Nessuno è stato eseguito. Quella notte, la Flowergirl scopre un "sì".</p><p>Oggi non ci sono state nomination. Un Traveller è stato esiliato e tutti i giocatori hanno alzato la mano per sostenere l’esilio. Quella notte, la Flowergirl scopre un "no" perché sostenere un esilio non è votare.</p>`,
        howToRun: `<p>Ad ogni alba, contrassegna la Flowergirl con il promemoria <strong>Demone NOT VOTED</strong> e rimuovi il promemoria <strong>Demone VOTED</strong>, se presente.</p><p>Ogni giorno, se il Demone vota per una qualsiasi esecuzione, sostituisci il promemoria <strong>Demone NOT VOTED</strong> con il promemoria <strong>Demone VOTED</strong>.</p><p>Ogni notte tranne la prima, sveglia la Flowergirl. Se la Flowergirl è contrassegnata <strong>Demone NOT VOTED</strong>, scuoti la testa per dire di no. Se la Flowergirl è contrassegnata <strong>Demone VOTED</strong>, annuisci per dire di sì. Poi rimetti a dormire la Flowergirl.</p><p class="modal__callout-box">Se ti dimentichi se il Demone ha votato oppure no, sveglia il Demone di notte e chiedilo mostrando il segnalino informativo <strong>DID YOU VOTE TODAY?</strong>. Deve rispondere onestamente, poi torna a dormire.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Town Crier",
        id:"towncrier",	
        description: `Il Town Crier sa quando i Minion fanno una nomination.`,
        intro: `<ul><li>Ogni notte, il Town Crier scopre un "sì" oppure un "no".</li><li>Non scopre quali giocatori sono Minion né quanti Minion hanno fatto nomination, solo se oggi almeno un Minion ha fatto una nomination.</li></ul>`,
        ability: "Ogni notte*, scopri se oggi un Minion ha fatto una nomination.",
        flavor: "\"Udite! Udite! Stregoneria nel labirinto! Genio savant rivela tutto! Città in pericolo! Udite!\"",
        examples: `<p>Oggi, un giocatore Townsfolk ha fatto una nomination. Quella notte, il Town Crier scopre un "no".</p><p>Oggi, quattro giocatori hanno fatto una nomination. Due di loro erano Minion. Molti giocatori hanno votato, ma non c’è stata alcuna esecuzione. Quella notte, il Town Crier scopre un "sì".</p><p>Un Minion ha esiliato un Traveller. Quella notte, il Town Crier scopre un "no" perché sostenere un esilio non è una nomination.</p>`,
        howToRun: `<p>Ad ogni alba, contrassegna il Town Crier con il promemoria <strong>MINIONS NOT NOMINATED</strong> e rimuovi il promemoria <strong>MINION NOMINATED</strong>, se presente.</p><p>Ogni giorno, se un qualsiasi Minion fa una nomination, sostituisci il promemoria <strong>MINIONS NOT NOMINATED</strong> con il promemoria <strong>MINION NOMINATED</strong>.</p><p>Ogni notte tranne la prima, sveglia il Town Crier. Se il Town Crier è contrassegnato <strong>MINIONS NOT NOMINATED</strong>, scuoti la testa per dire di no. Se il Town Crier è contrassegnato <strong>MINION NOMINATED</strong>, annuisci per dire di sì. Poi rimetti a dormire il Town Crier. Rimuovi il promemoria <strong>MINION NOMINATED</strong>, se presente.</p><p class="modal__callout-box">Se ti dimentichi se un Minion ha fatto una nomination oppure no, sveglia ogni Minion di notte e chiedilo mostrando il segnalino informativo <strong>DID YOU NOMINATE TODAY?</strong>. Devono rispondere onestamente, poi tornare a dormire.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Oracle",
        id:"oracle",	
        description: "L’Oracle sa quanti giocatori morti sono malvagi.",
        intro: "<ul><li>Poiché l’Oracle agisce dopo l’attacco del Demone ogni notte, le informazioni dell’Oracle si riferiscono ai giocatori che sono morti quando sorge l’alba e tutti i giocatori aprono gli occhi.</li><li>L’Oracle rileva Minion e Demone morti, ma anche qualsiasi altro giocatore che sia malvagio, come Travellers malvagi o Townsfolk o Outsider che sono stati resi malvagi.</li><li>Quando conti il numero di giocatori morti, ricorda di includere i token Townsfolk e Outsider che sono a faccia in giù, il che significa che il loro allineamento è l’opposto di quello stampato.</li></ul>",
        ability: "Ogni notte*, scopri quanti giocatori morti sono malvagi.",
        flavor: "\"Solo i prescelti possono guardare oltre il velo. I morti sono inquieti e indicano in silenzio verso il gelido nord.\"",
        examples: `<p>Durante il primo giorno, la Flowergirl viene giustiziata. Quella notte, il Demone uccide il Juggler. L’Oracle si sveglia e scopre “0” perché tutti i giocatori morti sono buoni.</p><p>A metà partita, sette giocatori sono morti. Cinque di loro sono buoni e due di loro sono malvagi. Durante il giorno, un Traveller malvagio viene esiliato. Quella notte, il Demone uccide uno dei suoi Minion. L’Oracle si sveglia e scopre “4” perché quattro giocatori morti sono malvagi.</p>`,
        howToRun: `<p>Ogni notte tranne la prima, sveglia l’Oracle. Mostra con le dita <i>(0, 1, 2, ecc.)</i> il numero di giocatori malvagi morti. Poi, rimetti a dormire l’Oracle.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Savant",
        id:"savant",	
        description: "Il Savant ottiene informazioni straordinarie che sono diverse ogni giorno e in ogni partita, ma metà di esse è falsa.",
        intro: "<ul><li>Ogni giorno, lo Storyteller sceglie due informazioni da fornire al Savant... quindi sii creativo! Una deve essere vera e una deve essere falsa, e il Savant non saprà quale sia quale.</li><li>Spetta al Savant parlare con lo Storyteller, non il contrario. Questa non è una conversazione pubblica, e il gruppo non può ascoltare. È privata.</li><li>Il Savant può scegliere di non visitare lo Storyteller se lo desidera.</li><li>Un Savant drunk o avvelenato potrebbe ricevere due informazioni vere o due informazioni false.</li></ul>",
        ability: "Ogni giorno, puoi visitare lo Storyteller per scoprire 2 cose in privato: 1 è vera e 1 è falsa.",
        flavor: "\"Settantadue fiammiferi sul pavimento... il sole tramonta presto ma la luna è immutata... un pezzo di stoffa strappato... malvagio nella casa padronale... tre per tre... colui di cui ci fidavamo non è ciò che sembra... luce verde significa magnesio... residui, ma lo schema è sbagliato... Settantadue fiammiferi sul pavimento...\"",
        examples: `<p>Il Savant scopre che "Tutti i giocatori che indossano occhiali sono buoni" e che "Un giocatore seduto sul divano nero è un Minion."</p><p>Il Savant scopre che "Uno Snake Charmer è in gioco" e che "Tutti hanno ricevuto informazioni vere la notte scorsa."</p><p>Il Savant scopre che "Il Demone è una donna" e che "Ben è malvagio."</p><p>Il Savant scopre che "Evin e Amy hanno lo stesso allineamento" e "C'è un Outsider in gioco."</p>`,
        howToRun: `<p>Una volta al giorno, se il Savant richiede una conversazione privata con te, portalo lontano dal cerchio in modo che non possiate essere ascoltati. Sussurra al Savant due informazioni, una vera e una falsa. <i>(Se non riesci a pensarne due subito, prenditi il tempo necessario oppure chiedigli di tornare tra qualche minuto.)</i></p><p class="modal__callout-box">Mantieni le informazioni che fornisci utili e collegate alla partita. Evita di dire esattamente chi sia il Demone, o la partita potrebbe essere molto breve. Se hai bisogno di aiuto per scegliere cosa dire, fornisci informazioni simili a quelle che le abilità dei Townsfolk fornirebbero.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Seamstress",
        id:"seamstress",	
        description: "La Seamstress scopre se due giocatori sono dello stesso allineamento.",
        intro: "<ul><li>Ottiene questa informazione solo una volta per partita, quindi farebbe meglio a scegliere con attenzione quando e chi.</li><li>Può scegliere giocatori vivi o morti o persino Travellers.</li></ul>",
        ability: "Una volta per partita, di notte, scegli 2 giocatori (non te stessa): scopri se hanno lo stesso allineamento.",
        flavor: "\"Hai sentito che quello straniero con il cappotto di cashmere ha fatto la proposta alla nostra giovane Belle? E lei ha detto di sì? Beh, non è niente in confronto a quello che Harry e quel giocoliere hanno combinato alla fiera! Le cose che potrei dire se fossi una pettegola... cielo, sì.\"",
        examples: `<p>Durante la prima notte, la Seamstress sceglie due giocatori, che sono il Barber e il Clockmaker. Poiché sono entrambi buoni, la Seamstress scopre un "sì".</p><p>Durante le prime tre notti, la Seamstress sceglie di non usare la sua abilità. Durante la quarta notte, sceglie due giocatori, che sono il Fang Gu e lo Sweetheart. La Seamstress scopre un "no".</p><p>Il Pit-Hag trasforma il Mathematician nella Witch, che rimane buona. Più tardi quella notte, la Seamstress sceglie due giocatori, che sono la Witch e il Town Crier. La Seamstress scopre un "sì" perché sono entrambi buoni.</p>`,
        howToRun: `<p>Ogni notte, sveglia la Seamstress. Può scuotere la testa per dire di no oppure indicare due giocatori qualsiasi eccetto sé stessa.</p><p>Se scuote la testa per dire di no, non succede nulla. Rimetti a dormire la Seamstress.</p><p>Se indica due giocatori, annuisci con la testa per dire di sì <i>(per indicare che questi giocatori hanno lo stesso allineamento)</i> oppure scuoti la testa per dire di no <i>(per indicare che questi giocatori non hanno lo stesso allineamento)</i>. Rimetti a dormire la Seamstress. <strong>La Seamstress perde la sua abilità</strong>—contrassegnala con il promemoria <strong>NO ABILITY</strong> e rimuovi il suo segnalino notturno dal foglio notturno.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Philosopher",
        id:"philosopher",	
        description: "Il Philosopher decide la propria abilità.",
        intro: "<ul><li>Può farlo una volta per partita. Quando lo fa, ottiene l’abilità di quel personaggio. Non diventa quel personaggio.</li><li>Potrebbe voler aspettare un po’ prima di scegliere. Se il Philosopher sceglie un personaggio che è già in gioco, il giocatore di quel personaggio diventa drunk. Se il Philosopher poi muore o diventa drunk o avvelenato, il giocatore che stava rendendo drunk torna sobrio.</li><li>Se il Philosopher ha scelto un personaggio che non era in gioco al momento ma lo è ora, quel personaggio è drunk.</li><li>Se il Philosopher ottiene un’abilità che funziona di notte, si sveglia quando quel personaggio normalmente si sveglierebbe. Se questa abilità viene usata solo la prima notte, la usa stanotte.</li><li>Se il Philosopher riottiene la propria abilità tramite il Bone Collector, o usa la propria abilità due volte tramite il Barista, il Philosopher può scegliere una nuova abilità oppure la stessa abilità di prima.</li><li>Se l’abilità del Philosopher funziona mentre è morto, come quella del Klutz, funziona se il Philosopher è morto.</li></ul>",
        ability: "Una volta per partita, di notte, scegli un personaggio buono: ottieni quella abilità. Se questo personaggio è in gioco, è drunk.",
        flavor: "\"Se qualcosa è reale, la birra è reale. Bevi, perché domani potremmo morire.\"",
        examples: `<p>Il Philosopher sceglie di ottenere l’abilità del Dreamer. Da ora in poi, agisce quando il Dreamer normalmente agisce.</p><p>Durante la terza notte, il Philosopher sceglie di ottenere l’abilità del Clockmaker. Quella notte, scopre la distanza tra il Demone e il Minion più vicino.</p><p>Il Philosopher sceglie di ottenere l’abilità dell’Artist, ma c’è già un Artist in gioco. Il giocatore dell’Artist diventa drunk. Più tardi, il Philosopher muore, quindi il giocatore dell’Artist torna sobrio. <i>(Tornerebbe sobrio anche se il Philosopher diventasse drunk o si trasformasse in un personaggio diverso.)</i></p>`,
        howToRun: `<p>Ogni notte, sveglia il Philosopher. Può scuotere la testa per dire di no oppure indicare qualsiasi icona Townsfolk o qualsiasi icona Outsider sulla sua scheda personaggio. Rimetti a dormire il Philosopher.</p><p>Se ha indicato l’icona di un personaggio non in gioco, scambia il segnalino del Philosopher con quello del personaggio scelto e contrassegnalo con il promemoria <strong>IS THE PHILOSOPHER</strong>.</p><p>Se ha indicato l’icona di un personaggio in gioco, il giocatore del personaggio scelto diventa <strong>drunk</strong>—contrassegnalo con il promemoria <strong>DRUNK</strong>. <i>(Ora puoi usare i promemoria del personaggio duplicato per il Philosopher)</i>. Se il Philosopher muore, il giocatore reso drunk dal Philosopher torna <strong>sober</strong>—rimuovi il promemoria <strong>DRUNK</strong>.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Artist",
        id:"artist",	
        description: "L’Artist può porre una qualsiasi domanda allo Storyteller.",
        intro: `<ul><li>La domanda può riguardare qualsiasi cosa, formulata in qualunque modo desideri. Lo Storyteller risponde onestamente \"sì\", \"no\" oppure \"non lo so\".</li><li>Spetta all’Artist parlare con lo Storyteller, non il contrario. Questa non è una conversazione pubblica, e il gruppo non può ascoltare. È privata.</li></ul>`,
        ability: "Una volta per partita, durante il giorno, fai privatamente allo Storyteller una domanda qualsiasi con risposta sì/no.",
        flavor: "\"Mon Dieu! C’est lumineux! My work, she is... how you say... Magnifique! Dieu est révélé! Oui.\"",
        examples: `<p>L’Artist chiede: "Il Demone è seduto su una sedia marrone?" Lo Storyteller risponde: "No", perché il Demone è su una sedia nera.</p><p>L’Artist chiede: "David è l’Evil Twin?" e lo Storyteller risponde: "Sì", perché David lo è.</p><p>L’Artist chiede: "Quanti Minion sono vivi?" e lo Storyteller dice: "Per favore fai un’altra domanda. Non posso rispondere con sì, no o non lo so."</p><p>L’Artist chiede: "Stiamo vincendo?" e lo Storyteller risponde: "Non lo so", perché anche se tutti i Minion sono morti, molti giocatori buoni si fidano del Demone.</p>`,
        howToRun: `<p>Durante qualsiasi giorno, l’Artist può richiedere una conversazione privata con te. Portalo lontano dal cerchio in modo che non possiate essere ascoltati. Ti farà una domanda. Sussurra "Sì", "No" oppure "Non lo so", oppure, se non puoi rispondere in uno di questi modi, invita l’Artist a porre di nuovo la domanda in un modo diverso. <strong>L’Artist perde la sua abilità</strong>—contrassegnalo con il promemoria <strong>NO ABILITY</strong>.</p><p class="modal__callout-box">Come per il Savant, i giocatori malvagi che bluffano come Artist possono richiedere una conversazione privata con te e fingere di fare una domanda. Per aiutarli a bluffare, puoi fingere di dare una risposta annuendo o scuotendo la testa.</p>`,
        group: "Townsfolk",
        script: "sv"
    },  
    {
        name: "Juggler",
        id:"juggler",	
        description: "Il Juggler si assume il rischio di convincere le persone a rivelare i loro personaggi durante il primo giorno, nella speranza di indovinarne il maggior numero possibile che stiano dicendo la verità.",
        intro: "<ul><li>Nel primo giorno, può indovinare quali giocatori sono quali personaggi. Quella notte, il Juggler scopre quante ipotesi erano corrette… se non viene ucciso prima.</li><li>Deve fare le sue ipotesi pubblicamente, così che tutti sentano cosa viene indovinato. Può indovinare zero personaggi, oppure fino a cinque personaggi, e questi personaggi e giocatori possono essere diversi o uguali.</li><li>Se il Juggler ha fatto le sue ipotesi mentre era drunk o avvelenato, ma è sobrio e sano quando la sua abilità si attiva quella notte, allora lo Storyteller gli fornisce comunque informazioni vere.</li></ul>",
        ability: "Nel tuo 1° giorno, indovina pubblicamente fino a 5 personaggi dei giocatori. Quella notte, scopri quanti erano corretti.",
        flavor: "\"Per il mio prossimo trucco, come richiesto, avrò bisogno di un fiore, un sacco di fagioli, un serpente giocattolo, un pennello e un dispositivo motorizzato a benzina per tagliare le siepi. Vi avverto, questo trucco potrebbe essere il mio ultimo. Oh cielo.\"",
        examples: `<p>Durante il primo giorno, il Juggler indovina che Marianna è il Town Crier, Lachlan è il No Dashii e Abdallah è il Sage. Quella notte, il Juggler scopre un "2", il che significa che due di quelle ipotesi erano corrette.</p><p>Durante la quarta notte, il Savant viene trasformato nel Juggler. Il giorno successivo, il nuovo Juggler indovina che Ben è il Pit-Hag, che Ben è la Witch e che Amy è il Pit-Hag. Quella notte, il Juggler scopre un "1".</p>`,
        howToRun: `<p>Durante il primo giorno, se il Juggler dichiara che sta usando la sua abilità, allora entri nel cerchio tenendo il Grimorio. Il Juggler può fare fino a cinque ipotesi, ciascuna su un qualsiasi giocatore e un qualsiasi personaggio. Per ogni ipotesi corretta, contrassegna il Juggler con un promemoria <strong>CORRECT</strong>. (Assicurati che i giocatori non vedano quanti promemoria stai posizionando.)</p><p>Quella notte, sveglia il Juggler. Mostragli con le dita <i>(0, 1, 2, ecc.)</i> il numero di promemoria <strong>CORRECT</strong>. Rimetti a dormire il Juggler. Rimuovi i promemoria <strong>CORRECT</strong> e il segnalino notturno del Juggler quando è comodo.</p><p class="modal__callout-box">Se il Juggler sta facendo ipotesi troppo velocemente, invitalo a rallentare.</p><p class="modal__callout-box">Se un giocatore malvagio bluffa come Juggler, può aiutare il suo bluff se fingi di spostare segnalini nel Grimorio mentre fa le sue ipotesi false.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Sage",
        id:"sage",	
        description: "Il Sage non sa nulla mentre è in vita, ma se il Demone lo uccide, scopre chi è.",
        intro: "<ul><li>Il Sage ottiene questa informazione solo se viene ucciso da un attacco del Demone. Essere giustiziato non conta.</li></ul>",
        ability: "Se il Demone ti uccide, scopri che è 1 di 2 giocatori.",
        flavor: "\"Questi tomi montuosi custodiscono il segreto, ne sono certo! Tra una parola e l’altra, resta in agguato. Più candele, ragazzo! Più inchiostro! Questi appunti possono sembrare arcani, ma l’enigma infernale si sta rivelando.\"",
        examples: `<p>Durante la seconda notte, il Demone uccide il Sage. Lo Storyteller indica due giocatori, uno dei quali è il Demone.</p><p>Durante la notte finale, il Demone uccide il Sage, che è drunk. Lo Storyteller indica un giocatore morto e uno dei tre giocatori ancora in vita. Questa informazione è errata.</p><p>Il Pit-Hag crea un Demone. A causa di ciò, lo Storyteller può uccidere arbitrariamente dei personaggi stanotte, quindi decide che il vecchio Demone muore e che muore anche il Sage. Poiché il Sage è morto a causa del Pit-Hag, e non del Demone, il Sage non si sveglia per scoprire nulla stanotte.</p>`,
        howToRun: `<p>Se il Sage è stato ucciso dal Demone, sveglia il Sage. Indica due giocatori, uno dei quali è il Demone che ha ucciso il Sage. Rimetti a dormire il Sage.</p><p class="modal__callout-box">Se il Sage muore presto, probabilmente vorrai mostrare al Sage due giocatori vivi, permettendo comunque alla squadra malvagia di avere una piccola possibilità di vincere. Se il Sage muore nella notte finale, sentiti libero di mostrare un giocatore vivo e uno morto.</p>`,
        group: "Townsfolk",
        script: "sv"
    },
    {
        name: "Mutant",
        id:"mutant",	
        description: "Il Mutant viene giustiziato se cerca di rivelare chi è.",
        intro: `<ul><li>"Madness" è un termine che significa "stai cercando di convincere il gruppo di qualcosa". Quindi, se il giocatore Mutant è mad riguardo al fatto di essere il Mutant, significa che sta cercando di convincere le persone di essere il Mutant. Se è mad riguardo al fatto di essere un Outsider, significa che sta cercando di convincere le persone di essere un Outsider.</li><li>Questo può avvenire accennando verbalmente a chi è, oppure tramite il silenzio quando viene interrogato. Spetta sempre allo Storyteller decidere cosa stia facendo il Mutant. Se ritieni che stia cercando di convincere il gruppo di essere un Outsider in qualsiasi modo, puoi giustiziarlo—anche al di fuori della fase di nomination, o di notte. Se lo fai, non possono avvenire altre esecuzioni oggi tramite mezzi normali, poiché è consentita una sola esecuzione al giorno.</li><li>Se il Mutant accenna di essere il Mutant di notte, puoi giustiziarlo quella notte. Dichiara che è morto e continua la fase notturna normalmente. Un’esecuzione può comunque avvenire il giorno successivo.</li></ul>`,
        ability: "Se sei \"mad\" riguardo al fatto di essere un Outsider, potresti essere giustiziato.",
        flavor: "\"Non sono un mostro! Sono un essere umano! Abbiate pietà!\"",
        examples: `<p>Dieci secondi dopo l’inizio del primo giorno, il Mutant dice al gruppo di essere il Mutant. Lo Storyteller dichiara che il Mutant viene immediatamente giustiziato. Oggi non c’è alcuna nomination per un’esecuzione, poiché il massimo è una esecuzione al giorno.</p><p>Una Witch parla privatamente con lo Storyteller e dice che Evin, che interpreta il Mutant, le ha detto di essere il Klutz. Lo Storyteller sceglie di giustiziare immediatamente il Mutant.</p><p>Il Mutant dice al gruppo di essere un Townsfolk, ma non dice quale. Quando gli viene chiesto se è il Mutant, rimane in silenzio. Dopo circa un minuto di silenzio, lo Storyteller giustizia il Mutant.</p><p>Il Mutant dice di essere l’Oracle, fornisce alcune false informazioni da Oracle, poi dice "A proposito, non sono assolutamente il Mutant" mentre fa un sottile occhiolino. Lo Storyteller sceglie di giustiziare immediatamente il Mutant.</p>`,
        howToRun: `<p>In qualsiasi momento <i>(anche di notte)</i>, se ritieni che il Mutant sia mad riguardo al fatto di essere un Outsider, puoi decidere di giustiziare il Mutant. Dichiara questa decisione al gruppo. <strong>Muore</strong>—contrassegnalo con un sudario.</p><p>Se lo giustizi durante il giorno prima che avvenga la normale esecuzione, passa alla fase notturna. <i>(È consentita una sola esecuzione al giorno.)</i></p>`,
        group: "Outsider",
        script: "sv"
    },
    {
        name: "Barber",
        id:"barber",	
        description: "Il Barber permette al Demone di scambiare due personaggi.",
        intro: `<ul><li>Gli allineamenti dei giocatori restano gli stessi quando scambiano personaggio. Ogni giocatore scopre quale personaggio diventa.</li><li>Il Demone può scegliere di non scambiare i giocatori.</li><li>Se un giocatore diventa un nuovo personaggio, ottiene la nuova abilità, anche se si trattava di un’abilità \"inizi sapendo\" o di un’abilità \"una volta per partita\" che il personaggio originale aveva già usato.</li><li>Se c’è più di un Demone in vita, lo Storyteller sceglie quale Demone effettua lo scambio.</li><li>Il Demone può scegliere sé stesso per lo scambio.</li><li>Il Demone non può scegliere di scambiare un altro giocatore Demone.</li><li>Se un giocatore muore e poi diventa il Barber, il Demone non può scambiare i personaggi di due giocatori stanotte.</li></ul>`,
        ability: "Se sei morto oggi o stanotte, il Demone può scegliere 2 giocatori (non un altro Demone) per scambiare i personaggi.",
        flavor: "\"Lo sapevi che il mestiere del barbiere e quello del chirurgo una volta erano la stessa professione? No? Beh, ora lo sai.\"",
        examples: `<p>Il Barber muore. Il Demone prende in considerazione di scambiare lo Clockmaker e il Juggler, ma poi non fa nulla.</p><p>Il Barber muore. Il Demone scambia l’Oracle vivo con il Barber morto. Ora c’è un Barber vivo e un Oracle morto.</p><p>Il Barber muore. Il Vortox scambia sé stesso con una Witch viva.</p><p>Il Barber muore. Il Vigormortis scambia sé stesso con uno Sweetheart morto. Il vecchio Vigormortis è ora lo Sweetheart malvagio. Poiché il Pit-Hag ha creato un Demone buono la notte precedente, la partita continua.</p>`,
        howToRun: `<p>Se il Barber muore, contrassegnalo con il promemoria <strong>HAIRCUTS TONIGHT</strong>.</p><p>Durante quella notte, sveglia il Demone. Mostragli il segnalino informativo <strong>THIS CHARACTER SELECTED YOU</strong>, poi il segnalino del Barber. Il Demone può scuotere la testa per dire di no oppure indicare due giocatori. Rimetti a dormire il Demone. Rimuovi il promemoria <strong>HAIRCUTS TONIGHT</strong>.</p><p>Se il Demone ha indicato due giocatori, scambia i segnalini personaggio dei giocatori scelti. Uno alla volta, sveglia ciascun giocatore scambiato, mostrargli il segnalino informativo <strong>YOU ARE</strong> e il suo nuovo segnalino personaggio, poi rimettilo a dormire. Se l’allineamento di un giocatore non corrisponde al colore del suo segnalino personaggio, giralo a faccia in giù.</p><p class="modal__callout-box">Se un giocatore buono diventa un Minion o un Demone, oppure un giocatore malvagio diventa un Townsfolk o un Outsider, potresti voler ricordargli che il suo allineamento non è cambiato.</p>`,
        group: "Outsider",
        script: "sv"
    },
    {
        name: "Sweetheart",
        debugger: "Lo Sweetheart, quando muore, rende qualcuno drunk per il resto della partita.",
        id:"sweetheart",	
        description: "<ul><li>Lo Storyteller sceglie quale giocatore diventa drunk.</li><li>Questa abilità funziona mentre lo Sweetheart è morto.</li></ul>",
        intro: "Lo Sweetheart, quando muore, fa sì che qualcuno sia drunk per il resto della partita.",
        ability: "Quando muori, 1 giocatore è drunk da ora in poi.",
        flavor: "\"Non la dimenticherò mai. Mai.\"",
        examples: `<p>Lo Sweetheart muore. Il Mathematician ora è drunk e potrebbe ricevere informazioni false di notte.</p><p>Lo Sweetheart muore. Il Mutant ora è drunk. Il Mutant può dire tranquillamente di essere il Mutant, ma non lo sa.</p><p>Lo Sweetheart muore. Il Demone ora è drunk, quindi il suo attacco notturno non ucciderà nessuno.</p>`,
        howToRun: `<p>Se lo Sweetheart muore, scegli un qualsiasi giocatore che diventi <strong>drunk</strong>—contrassegna questo giocatore con il promemoria <strong>DRUNK</strong>. Lo Sweetheart non perde questa abilità da morto.</p><p class="modal__callout-box">Quasi sempre vorrai rendere drunk un Townsfolk, il che danneggerà la squadra buona, ma se i malvagi stanno vincendo in modo piuttosto convincente, puoi rendere drunk un Outsider, un Minion, o persino il Demone.</p>`,
        group: "Outsider",
        script: "sv"
    },
    {
        name: "Klutz",
        id:"klutz",	
        description: "Il Klutz potrebbe far perdere accidentalmente la partita alla propria squadra, a meno che non sia astuto.",
        intro: "<ul><li>Quando il Klutz muore, deve dichiarare un giocatore. Può prendersi qualche minuto per farlo—dopotutto è una decisione importante, e altri giocatori possono dare consigli su chi scegliere, ma la decisione finale spetta sempre al Klutz. Se sceglie un giocatore malvagio, la partita termina immediatamente e la squadra buona perde. Se sceglie un giocatore buono, non succede nulla e la partita continua.</li><li>Non è responsabilità dello Storyteller sollecitare il Klutz a dichiarare di essere il Klutz e a scegliere un giocatore. Il Klutz deve farlo poco dopo aver scoperto di essere morto. Non farlo deliberatamente è considerato barare.</li></ul>",
        ability: "Quando scopri di essere morto, scegli pubblicamente 1 giocatore vivo: se è malvagio, la tua squadra perde.",
        flavor: "\"Ops.\"",
        examples: `<p>Il Klutz muore per esecuzione. Dopo molte urla e confusione, il Klutz sceglie un giocatore, che è la Seamstress. Cala la notte e la partita continua.</p><p>Il Demone uccide Lewis, il Klutz. Al mattino, quando lo Storyteller informa il gruppo che Lewis è morto, Lewis dice \"Ok tutti, ero il Klutz\", e dopo qualche minuto di discussione, Lewis sceglie pubblicamente il giocatore che è il Demone. La partita termina immediatamente e i malvagi esultano.</p>`,
        howToRun: `<p>Quando il giocatore Klutz viene dichiarato morto, deve dichiarare di essere il Klutz e poi indicare un qualsiasi giocatore. <i>(Concedigli tempo.)</i> Se sceglie un giocatore malvagio, la partita termina e la squadra malvagia vince. Se sceglie un giocatore buono, la partita continua.</p><p>Nella strana situazione in cui il Klutz è malvagio e sceglie un giocatore malvagio, la partita termina e vince invece la squadra buona.</p><p class="modal__callout-box">Se il giocatore Klutz non si rende conto di dover scegliere un giocatore quando muore, ricordaglielo privatamente. I nuovi giocatori potrebbero non comprendere come funziona il loro personaggio.</p>`,
        group: "Outsider",
        script: "sv"
    },
    {
        name: "Witch",
        id:"witch",	
        description: "La Witch maledice i giocatori, così che muoiono se fanno una nomination.",
        intro: "<ul><li>Ogni notte, la Witch sceglie un giocatore da maledire. Quel giocatore muore se il giorno successivo fa una nomination, anche se la sua nomination conta comunque.</li><li>La maledizione della Witch dura solo un giorno, ma la Witch può maledire lo stesso giocatore notte dopo notte.</li><li>Non appena restano in vita solo tre giocatori, la maledizione della Witch viene rimossa immediatamente e la Witch non agisce più.</li></ul>",
        ability: "Ogni notte, scegli un giocatore: se domani fa una nomination, muore. Se sono vivi solo 3 giocatori, perdi questa abilità.",
        flavor: "\"Tre gocce di sangue di capra. Una ciocca di capelli, strappata con rabbia. Il nome viene pronunciato, l’ombra proiettata. Cammina lungo quel sentiero pieno di rovi iniziando col piede sinistro e non voltarti.\"",
        examples: `<p>Di notte, la Witch maledice il Sage. Durante il giorno successivo, il Sage fa una nomination sul Dreamer. Lo Storyteller dichiara immediatamente che il giocatore Sage <strong>muore</strong>. I giocatori votano comunque per giustiziare il Dreamer, che muore anche lui.</p><p>La Witch maledice sé stessa. Durante il giorno successivo, la Witch fa una nomination sul Demone e muore. I giocatori votano se giustiziare o meno il Demone, ma non ci sono abbastanza voti, quindi le nomination continuano.</p><p>La Witch maledice il Klutz. Il Fang Gu attacca il Klutz, quindi il Klutz diventa il Fang Gu. Il nuovo Fang Gu ora è maledetto dalla Witch e fa una nomination. Il nuovo Fang Gu muore e i buoni vincono.</p><p>La Witch maledice il Savant. Più tardi quella notte, dopo che il Demone uccide un giocatore, restano in vita solo tre giocatori, quindi la maledizione viene rimossa. Il Savant può fare una nomination in sicurezza.</p><p>La Witch maledice il Juggler. Durante il giorno successivo, il Juggler chiede l’esilio di un Traveller. Il Juggler resta in vita e può fare una nomination di nuovo, perché le abilità non influenzano gli esili.</p>`,
        howToRun: `<p>Ogni notte, sveglia la Witch. Indica un qualsiasi giocatore. Rimetti a dormire la Witch. Contrassegna il giocatore scelto con il promemoria <strong>CURSED</strong>.</p><p>Il giorno successivo, se il giocatore contrassegnato <strong>CURSED</strong> fa una nomination, dichiara immediatamente che <strong>muore</strong>. <i>(Le nomination continuano normalmente.)</i></p>`,
        group: "Minion",
        script: "sv"
    },
    {
        name: "Cerenovus",
        id:"cerenovus",	
        description: `Il Cerenovus incoraggia i giocatori a fingere di essere personaggi diversi da quelli che sono realmente.`,
        intro: `<ul><li>Il Cerenovus sceglie dei Townsfolk o Outsider riguardo ai quali i giocatori sono mad. Devono cercare di convincere il gruppo che domani sono realmente quel personaggio, altrimenti muoiono.</li><li>Accennare semplicemente non è sufficiente per evitare la morte. Il giocatore deve fare uno sforzo concreto per convincere il gruppo. I giocatori mad non sono mai letteralmente costretti a dire cose che non vogliono—ma se lo Storyteller non li sente fare uno sforzo, ne pagano il prezzo.</li><li>I giocatori malvagi mad potrebbero essere giustiziati in questo modo, ma "potrebbero" significa che puoi scegliere di non farlo, per evitare che i malvagi vincano tramite questa strategia.</li><li>Come per il Mutant, una penalità di esecuzione conta come l’unica esecuzione consentita al giorno.</li></ul>`,
        ability: "Ogni notte, scegli un giocatore e un personaggio buono: domani è \"mad\" di essere quel personaggio, oppure potrebbe essere giustiziato.",
        flavor: "\"La realtà è soltanto un’opinione. In particolare, la mia opinione.\"",
        examples: `<p>Il Cerenovus rende il Barber mad di essere il Savant. Il giorno successivo, il Barber afferma di essere il Savant, parla con lo Storyteller e dice al gruppo due fatti che ha inventato. Quando gli viene chiesto se è mad, il Barber risponde con decisione "no", evitando così l’esecuzione.</p><p>L’Artist morto viene reso mad di essere il Sage. Il giorno successivo, non dice nulla riguardo all’essere il Sage. L’Artist viene giustiziato.</p><p>Il Cerenovus rende la Flowergirl mad di essere lo Clockmaker. La Flowergirl dice al gruppo di essere lo Clockmaker e di aver scoperto che il Demone si trova a due posti di distanza dal Minion più vicino, ma accenna privatamente ad altri giocatori di essere mad. Lo Storyteller lo sente e giustizia la Flowergirl.</p>`,
        howToRun: `<p>Ogni notte, sveglia il Cerenovus. Indica un qualsiasi giocatore e una qualsiasi icona Townsfolk o Outsider sulla sua scheda personaggio. Rimetti a dormire il Cerenovus. Contrassegna il giocatore scelto con il promemoria <strong>MAD</strong>. Sveglia questo giocatore, mostrargli il segnalino informativo <strong>THIS PLAYER SELECTED YOU</strong>, poi il segnalino del Cerenovus, poi il segnalino del personaggio di cui è mad di essere. Rimetti a dormire quel giocatore.</p><p>Durante il giorno o la notte successivi, se ritieni che il giocatore mad non abbia fatto del suo meglio per convincere il gruppo di essere quel personaggio, puoi decidere di giustiziarlo. Dichiara questa decisione al gruppo. <strong>Muore</strong>. Se lo giustizi durante il giorno prima che avvenga la normale esecuzione, passa alla fase notturna. <i>(È consentita una sola esecuzione al giorno.)</i></p>`,
        group: "Minion",
        script: "sv"
    },
    {
        name: "Pit-Hag",
        id:"pithag",	
        description: "Il Pit-Hag trasforma i giocatori in personaggi diversi.",
        intro: "<ul><li>Ogni notte, il Pit-Hag sceglie un giocatore e un personaggio in cui trasformare quel giocatore.</li><li>Non può creare duplicati di personaggi. Se il personaggio è già in gioco, non succede nulla.</li></ul>",
        ability: "Ogni notte*, scegli un giocatore e un personaggio che diventa (se non è in gioco). Se viene creato un Demone, le morti stanotte sono arbitrarie.",
        flavor: "\"Gira intorno al calderone; getta nelle viscere avvelenate; rospo, che sotto fredda pietra; giorni e notti ne ha trentuno; sudò veleno, dormendo ne ottenne; bolli tu per primo nel vaso incantato.\"",
        examples: `<p>Il Pit-Hag cerca di trasformare il Savant nel Sage, ma non succede nulla perché un Sage è già in gioco.</p><p>Il Pit-Hag trasforma la Flowergirl nell’Evil Twin. Ora c’è un Evil Twin buono, quindi l’Evil Twin e un giocatore malvagio vengono svegliati per scoprire il personaggio l’uno dell’altro.</p><p>Durante la notte finale, il Pit-Hag trasforma l’Oracle in un No Dashii buono. Lo Storyteller uccide solo il Demone malvagio, così che durante il giorno finale sia in vita un solo Demone.</p>`,
        howToRun: `<p>Ogni notte tranne la prima, sveglia il Pit-Hag. Indica un qualsiasi giocatore e una qualsiasi icona personaggio sulla sua scheda personaggio. Rimetti a dormire il Pit-Hag.</p><p>Se il personaggio scelto è in gioco, non succede nulla.</p><p>Se il personaggio scelto non è in gioco, sveglia il giocatore scelto. Mostragli il segnalino informativo <strong>YOU ARE</strong>, poi il suo nuovo segnalino personaggio, poi rimettilo a dormire. Sostituisci il suo vecchio segnalino personaggio con il nuovo segnalino personaggio. <i>(Potresti dover girare alcuni segnalini personaggio a faccia in giù per ricordarti che l’allineamento di un giocatore è opposto al colore del segnalino. Potresti dover ricordare al giocatore che il suo allineamento non è cambiato, facendo un pollice su o pollice giù.)</i></p><p>Se viene creato un Demone, puoi scegliere quali giocatori uccidere o proteggere durante la notte per bilanciare la partita. Le morti aggiuntive sono considerate attacchi del Pit-Hag.</p><p class="modal__callout-box">Se il Pit-Hag trasforma un Demone in un nuovo Demone, è meglio non far avvenire alcuna morte stanotte, così la squadra buona ottiene un indizio che il Demone è cambiato. Puoi anche svegliare il Demone, vedere chi sceglie di attaccare e decidere che nessuno muore. Se il Pit-Hag crea un nuovo Demone malvagio, è meglio uccidere il vecchio Demone e qualche altro giocatore, per segnalare alla squadra buona che il Demone è cambiato. Se il Pit-Hag crea un Demone buono, è meglio uccidere uno dei due Demone (se è la notte finale) oppure lasciare semplicemente che due Demone scatenino il caos (se non è la notte finale)—ma poiché tutti i Demone devono morire perché i buoni vincano, usa cautela.</p>`,
        group: "Minion",
        script: "sv"
    },
    {
        name: "Evil Twin",
        id:"eviltwin",	
        description: `L’Evil Twin rispecchia un personaggio buono, e i giocatori non sanno quale gemello è buono e quale è malvagio.`,
        intro: "<ul><li>L’Evil Twin è abbinato a un giocatore buono, scelto dallo Storyteller, chiamato Good Twin.</li><li>Nella prima notte, l’Evil Twin e il Good Twin si svegliano entrambi, si guardano negli occhi e scoprono il personaggio l’uno dell’altro.</li><li>Se il Good Twin viene giustiziato, i malvagi vincono. Se l’Evil Twin viene giustiziato, la partita continua. Un Evil Twin morto non ha abilità, quindi i malvagi non vincono se il Good Twin viene giustiziato successivamente.</li><li>I buoni non possono vincere mentre entrambi i gemelli sono in vita. Anche se il Demone viene ucciso, la partita continua. I buoni dovranno uccidere l’Evil Twin oltre al Demone per vincere.</li><li>Se un giocatore buono viene trasformato in un Evil Twin, rimane comunque un giocatore buono, con un giocatore malvagio che diventa il suo gemello. Non importa quale gemello sia quale personaggio: ciò che conta è il loro <i>allineamento</i>—la squadra buona può giustiziare in sicurezza il <i>giocatore</i> malvagio, ma se giustizia il <i>giocatore</i> buono, i malvagi vincono.</li><li>Se entrambi i Twin hanno lo stesso allineamento, lo Storyteller sceglie un nuovo Twin.</li></ul>",
        ability: "Tu e un giocatore avversario vi conoscete. Se il giocatore buono viene giustiziato, i malvagi vincono. I buoni non possono vincere se siete entrambi in vita.",
        flavor: "\"Non sono Sara! Sono Clara! LEI è Sara! Sara è quella malvagia! Non io!\"",
        examples: `<p>Entrambi i gemelli affermano di essere l’Oracle. L’Evil Twin viene giustiziato. La partita continua.</p><p>Il Demone muore. La partita continua, senza più morti notturne da questo momento. Due giorni dopo, l’Evil Twin muore. I buoni vincono.</p><p>Il Pit-Hag trasforma il Sage buono nell’Evil Twin. Il suo gemello è una Witch malvagia. L’Evil Twin buono viene giustiziato. I malvagi vincono.</p>`,
        howToRun: `<p>Durante la preparazione della partita, scegli un Good Twin contrassegnando un qualsiasi personaggio buono con il promemoria <strong>TWIN</strong>.</p><p>Durante la prima notte, sveglia entrambi i Twin. Permetti loro di guardarsi negli occhi. Indica l’Evil Twin, poi mostra il segnalino Evil Twin al Good Twin. Indica il Good Twin, poi mostra il segnalino personaggio del Good Twin all’Evil Twin. Rimetti entrambi a dormire.</p><p>Finché entrambi i Twin sono in vita, la squadra buona non può vincere. Se un Twin con allineamento buono viene giustiziato, la squadra malvagia vince.</p><p class="modal__callout-box">Se il Pit-Hag crea un Evil Twin durante la notte finale, rendi l’altro Twin il giocatore Demone oppure un giocatore morto, così che la squadra buona possa ancora vincere.</p><p class="modal__callout-box">È raramente una buona idea scegliere un Traveller come Twin.</p>`,
        group: "Minion",
        script: "sv"
    },
    {
        name: "Fang Gu",
        id:"fanggu",	
        description: "Il Fang Gu possiede gli Outsider.",
        intro: "<ul><li>La prima volta che un Fang Gu attacca e uccide un Outsider, il Fang Gu muore, e l’Outsider diventa un Fang Gu e diventa malvagio.</li><li>Questo può accadere solo una volta per partita. Se il nuovo Fang Gu attacca un Outsider, l’Outsider muore normalmente.</li><li>Il nuovo Fang Gu conta come il Demone, e i buoni vincono se muore. Non scopre quali giocatori sono Minion.</li><li>C’è un Outsider extra in gioco.</li><li>Se il Fang Gu attacca un Outsider ma quell’Outsider non muore, quell’Outsider non diventa un Fang Gu malvagio e il Fang Gu non muore.</li></ul>",
        ability: "Ogni notte*, scegli un giocatore: muore. Il 1° Outsider che questo uccide diventa un Fang Gu malvagio e muori tu al suo posto. [+1 Outsider]",
        flavor: "\"Le tue mura e le tue armi non sono che fumo nei sogni.\"",
        examples: `<p>Il Fang Gu attacca l’Artist, che muore. La notte successiva, il Fang Gu attacca lo Sweetheart, che diventa il Fang Gu mentre il vecchio Fang Gu muore. Lo Sweetheart non rende drunk un giocatore, perché non è morto. La notte successiva, il nuovo Fang Gu attacca il Klutz, che muore.</p><p>Il Fang Gu attacca il Klutz morto. Poiché il Klutz è morto, non può morire di nuovo, quindi il Fang Gu non muore al suo posto. Il Klutz rimane buono e stanotte non avvengono morti.</p>`,
        howToRun: `<p>Durante la preparazione della partita, prima di mettere i segnalini personaggio nel sacchetto, aggiungi un segnalino personaggio Outsider extra e rimuovi un segnalino personaggio Townsfolk.</p><p>Ogni notte tranne la prima, sveglia il Fang Gu. Indica un qualsiasi giocatore. Rimetti a dormire il Fang Gu.</p><p>Se il giocatore scelto non è un Outsider, quel giocatore <strong>muore</strong>—contrassegnalo con il promemoria <strong>DEAD</strong>.</p><p>Se il giocatore scelto è un Outsider e il promemoria <strong>ONCE</strong> è al centro del Grimorio, quel giocatore <strong>muore</strong>—contrassegnalo con il promemoria <strong>dies</strong>.</p><p>Se il giocatore scelto è un Outsider e il promemoria <strong>ONCE</strong> non è al centro del Grimorio, il Fang Gu <strong>muore</strong>—contrassegnalo con il promemoria <strong>DEAD</strong>. Sveglia l’Outsider scelto. Mostragli il segnalino informativo <strong>YOU ARE</strong>, poi il segnalino Fang Gu, poi il segnalino informativo <strong>YOU ARE</strong>, poi un pollice verso. Cambia il suo personaggio in un Fang Gu—scambia il suo segnalino personaggio con il segnalino Fang Gu di riserva. Diventa <strong>malvagio</strong>. Rimetti a dormire il nuovo Fang Gu. Metti il promemoria <strong>ONCE</strong> al centro del Grimorio. <i>(A differenza delle abilità "Una volta per partita", questo promemoria resta lì per il resto della partita. Non rimuoverlo, anche se il Fang Gu muore o cambia personaggio.)</i></p>`,
        group: "Demon",
        script: "sv"
    },
    {
        name: "Vigormortis",
        id:"vigormortis",	
        description: "Il Vigormortis uccide i propri Minion, che mantengono la loro abilità.",
        intro: "<ul><li>Ogni volta che il Vigormortis uccide un Minion, questo muore ma mantiene la propria abilità finché il Vigormortis resta in vita. La Witch, il Cerenovus e il Pit-Hag continuano ad agire ogni notte.</li><li>In modo simile al No Dashii, il Townsfolk più vicino in senso orario o antiorario al Minion morto diventa avvelenato, anche se è morto. Se il Vigormortis muore o perde in altro modo la propria abilità, questi giocatori tornano sani. Un Townsfolk per Minion sarà sempre avvelenato in questo modo, poiché Outsider, Minion o Traveller adiacenti vengono ignorati. Lo Storyteller sceglie quale dei due Townsfolk viene avvelenato.</li><li>Tutti i Minion uccisi dal Vigormortis mantengono la loro abilità e avvelenano un Townsfolk, non solo il più recente.</li><li>Se un Minion morto diventa un personaggio non Minion, non avvelena più un Townsfolk e non ha alcuna abilità. Se un Minion morto diventa drunk o avvelenato, perde la propria abilità finché non torna sobrio e sano.</li></ul>",
        ability: "Ogni notte*, scegli un giocatore: muore. I Minion che uccidi mantengono la loro abilità e avvelenano 1 Townsfolk adiacente. [-1 Outsider]",
        flavor: "\"Tutte le porte sono una porta. Tutte le chiavi sono una chiave. Tutte le coppe sono una coppa, ma chiunque beva dell’acqua che io gli darò non avrà mai più sete, perché quell’acqua sarà in lui una fonte che sgorga per la vita eterna.\"",
        examples: `<p>Il Vigormortis uccide la Witch. Il giorno successivo, il giocatore maledetto dalla Witch fa una nomination e muore.</p><p>Il Vigormortis uccide l’Evil Twin. L’Evil Twin è adiacente a un Klutz e a una Flowergirl. Il Sage è il vicino successivo al Klutz. Lo Storyteller sceglie che il Sage venga avvelenato. Il giorno successivo, il Good Twin viene giustiziato e i malvagi vincono.</p><p>Il Vigormortis uccide il Pit-Hag. Il Pit-Hag trasforma un Savant in una Witch. Il Vigormortis uccide la Witch, che maledice e uccide un giocatore. Il Pit-Hag trasforma la Witch morta nell’Oracle, che ora non ha alcuna abilità. Il Pit-Hag trasforma il Vigormortis in un Vortox. Il Pit-Hag ora non ha alcuna abilità.</p>`,
        howToRun: `<p>Durante la preparazione della partita, prima di mettere i segnalini personaggio nel sacchetto, rimuovi un segnalino personaggio Outsider e aggiungi un segnalino personaggio Townsfolk. <i>(Se non ci sono segnalini Outsider da rimuovere, non aggiungere un segnalino Townsfolk.)</i></p><p>Ogni notte tranne la prima, sveglia il Vigormortis. Indica un qualsiasi giocatore. Rimetti a dormire il Vigormortis. Se il giocatore scelto non è un Minion, quel giocatore <strong>muore</strong>—contrassegnalo con un promemoria <strong>DEAD</strong>.</p><p>Se il giocatore scelto è un Minion, quel giocatore <strong>muore</strong>—contrassegnalo con un promemoria <strong>DEAD</strong> e un promemoria <strong>HAS ABILITY</strong>. Il Townsfolk più vicino in senso orario o antiorario al Minion diventa <strong>avvelenato</strong>—contrassegnalo con un promemoria <strong>POISONED</strong>.</p>`,
        group: "Demon",
        script: "sv"
    },
    {
        name: "No Dashii",
        id:"nodashii",	
        description: "Il No Dashii avvelena i Townsfolk adiacenti.",
        intro: "<ul><li>I Townsfolk adiacenti più vicini in senso orario e antiorario al No Dashii sono avvelenati, indipendentemente dal fatto che siano vivi o morti. Se il No Dashii muore o perde in altro modo la propria abilità, quei due giocatori tornano sani. Due giocatori Townsfolk saranno sempre avvelenati in questo modo, poiché Outsider, Minion o Traveller adiacenti vengono ignorati.</li><li>Se un nuovo giocatore diventa il No Dashii, oppure un Townsfolk avvelenato si trasforma in un personaggio non Townsfolk, i giocatori avvelenati possono cambiare immediatamente in base a chi sono i vicini del No Dashii.</li></ul>",
        ability: "Ogni notte*, scegli un giocatore: muore. I tuoi 2 Townsfolk adiacenti sono avvelenati.",
        flavor: "\"Per i peccati di Arnoch, avverto il tuo fetore greve. Per il sole maledetto e la sua lurida legione di minuscoli dèi sorridenti, ti corrompo. Per la notte benedetta e gli abissi nascosti del mare orrendo e empio, pongo fine alla tua miserabile vita su questo piano.\"",
        examples: `<p>All’inizio della partita, il No Dashii ha come vicini un Town Crier e uno Snake Charmer. Sono entrambi avvelenati. Qualche giorno dopo, sono entrambi morti, e i vicini vivi più vicini al No Dashii sono uno Clockmaker e un Barber, ma non vengono avvelenati dal No Dashii.</p><p>In senso orario dal No Dashii siedono un Philosopher, un Mathematician e poi un Sage. In senso antiorario dal No Dashii siedono una Witch, un Mutant e poi una Seamstress. Il Philosopher e la Seamstress sono avvelenati.</p><p>Il Pit-Hag trasforma il No Dashii morto nella Flowergirl. La notte successiva, il Pit-Hag trasforma il Fang Gu vivo nel No Dashii. Questo nuovo No Dashii vivo ora avvelena i suoi due Townsfolk adiacenti.</p>`,
        howToRun: `<p>Durante la preparazione della prima notte, i due Townsfolk adiacenti al No Dashii diventano <strong>avvelenati</strong>—contrassegnali con promemoria <strong>POISONED</strong>.</p><p>Se un Townsfolk avvelenato dal No Dashii diventa un personaggio non Townsfolk, o il No Dashii si trasforma in un personaggio diverso, oppure un nuovo giocatore diventa il No Dashii, i nuovi vicini del No Dashii diventano <strong>avvelenati</strong> e i vecchi vicini tornano <strong>sani</strong>—sposta immediatamente i promemoria <strong>POISONED</strong> del No Dashii se necessario.</p><p>Ogni notte tranne la prima, sveglia il No Dashii. Indica un qualsiasi giocatore. Quel giocatore <strong>muore</strong>—contrassegnalo con il promemoria <strong>DEAD</strong>. Rimetti a dormire il No Dashii.</p>`,
        group: "Demon",
        script: "sv"
    },
    {
        name: "Vortox",
        id:"vortox",	
        description: "Il Vortox rende false tutte le informazioni.",
        intro: "<ul><li>Ogni volta che un Townsfolk ottiene informazioni dalla propria abilità, riceve informazioni false. Anche se è drunk o avvelenato, devono comunque essere false.</li><li>Il Vortox non influenza le informazioni ottenute tramite altri mezzi, come quando lo Storyteller spiega le regole, oppure quando il personaggio o l’allineamento di un giocatore cambia.</li><li>Quando cala la notte, se oggi nessuno è stato giustiziato, i malvagi vincono. L’esilio di un Traveller non conta.</li></ul>",
        ability: "Ogni notte*, scegli un giocatore: muore. Le abilità dei Townsfolk forniscono informazioni false. Ogni giorno, se nessuno viene giustiziato, i malvagi vincono.",
        flavor: "\"Il nero è bianco. Il giusto è sbagliato. La sinistra è destra. L’alto è lungo. Il basso è vista. Il corto è cieco. Seguimi. Le risposte si trovano.\"",
        examples: `<p>Il Vortox uccide il Sage. Il Sage scopre due giocatori, nessuno dei quali è un Demone.</p><p>Oggi nessuno ha votato o fatto nomination. Quella notte, sia la Flowergirl sia il Town Crier scoprono un "sì".</p><p>Durante il giorno, il Savant scopre due informazioni. Entrambe sono false. Quella notte, il Dreamer sceglie un giocatore che è il Savant e scopre che questo giocatore è o il Philosopher o il No Dashii.</p><p>Il Pit-Hag trasforma il Juggler nella Witch. Il Juggler scopre di essere ora una Witch buona, perché questa informazione proviene dall’abilità del Pit-Hag, non da un’abilità Townsfolk.</p><p>Oggi, un giocatore è morto per effetto della Witch, due Traveller sono stati esiliati, sono avvenute cinque nomination, ma nessuno è stato giustiziato. I malvagi vincono.</p>`,
        howToRun: `<p>Finché il Vortox è in vita, devi fornire informazioni false ogni volta che un’abilità Townsfolk ti chiede di dare informazioni.</p><p>Ogni notte tranne la prima, sveglia il Vortox. Indica un qualsiasi giocatore. Quel giocatore <strong>muore</strong>—contrassegnalo con il promemoria <strong>DEAD</strong>. Rimetti a dormire il Vortox.</p><p>Ogni crepuscolo, se oggi nessun giocatore è stato giustiziato, la partita termina e la squadra malvagia vince.</p>`,
        group: "Demon",
        script: "sv"
    },
    {
        name: "Acrobat",
        id:"acrobat",	
        description: `L’Acrobat muore quando trova un giocatore drunk o avvelenato.`,
        intro: "<ul><li>Ogni notte tranne la prima, l’Acrobat sceglie un giocatore. Se il giocatore scelto è sobrio e sano, non succede nulla. Se il giocatore è drunk o avvelenato, l’Acrobat muore.</li><li>Se l’Acrobat è drunk o avvelenato, non può morire per effetto della propria abilità.</li><li>L’Acrobat può scegliere qualsiasi giocatore, morto o vivo, anche sé stesso.</li><li>Se il giocatore scelto è sobrio e sano nel momento in cui l’Acrobat lo sceglie, ma diventa drunk o avvelenato più tardi nella notte, l’Acrobat muore.</li><li>L’Acrobat non scopre se il giocatore selezionato era drunk, avvelenato, o entrambi.</li></ul>",
        ability: "Ogni notte*, scegli un giocatore: se è o diventa drunk o avvelenato stanotte, muori.",
        flavor: "\"Signore e signori, tenetevi stretti i cappelli, perché sfiderò le stesse leggi della gravità e danzerò nell’aria, una meraviglia di agilità e audacia, tutto per il vostro diletto e stupore!\"",
        examples: `<p>Il Sailor sceglie l’Assassin e lo Storyteller rende drunk il Sailor. L’Acrobat sceglie il Sailor e muore perché il Sailor è drunk.</p><p>L’Acrobat sceglie il Tinker, che è sobrio e sano. Non succede nulla.</p><p>L’Acrobat sceglie il Preacher. Più tardi quella notte, il Pukka avvelena il Preacher. L’Acrobat muore, perché il Preacher non è più sano.</p>`,
        howToRun: "<p>Ogni notte tranne la prima, sveglia l’Acrobat. Indica un giocatore. Rimetti a dormire l’Acrobat.</p><p>Se il giocatore indicato dall’Acrobat è drunk o avvelenato, oppure diventa drunk o avvelenato in qualsiasi momento stanotte, l’Acrobat <strong>muore</strong>.</p>",
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Alchemist",
        id:"alchemist",	
        description: "L’Alchemist ha un’abilità da Minion.",
        intro: "<ul><li>L’abilità dell’Alchemist deve essere quella di un Minion non in gioco. Non può duplicare l’abilità di un Minion in gioco.</li><li>L’Alchemist scopre quale sia questa abilità nella prima notte.</li><li>Rimane comunque un Townsfolk buono. Vince quando vincono i buoni e perde quando perdono i buoni. Risulta buono e risulta come l’Alchemist.</li><li>L’Alchemist non si sveglia per scoprire chi siano gli altri Minion o chi sia il Demone, come fanno i Minion.</li><li>Se l’abilità da Minion dell’Alchemist aggiunge o rimuove personaggi durante la preparazione, questo avviene comunque durante la preparazione.</li></ul>",
        ability: "Hai un’abilità da Minion. Quando la usi, lo Storyteller può invitarti a scegliere diversamente.",
        flavor: "\"Visita l’interno della Terra. Mediante rettificazione troverai la pietra nascosta. Sopra l’oro giace il rosso. Kether in Malkuth.\"",
        examples: `<p>L’Alchemist ha l’abilità del Poisoner. Ogni notte, l’Alchemist si sveglia e sceglie un giocatore da avvelenare.</p><p>L’Alchemist ha l’abilità della Scarlet Woman. L’Imp si uccide di notte, e l’Alchemist diventa l’Imp buono.</p><p>L’Alchemist ha l’abilità dell’Assassin. Il Dreamer sceglie l’Alchemist. L’Alchemist risulta come l’Alchemist, quindi il Dreamer scopre che è o l’Alchemist o l’Assassin.</p>`,
        howToRun: `<p>Durante la prima notte, sveglia l’Alchemist. Mostragli il segnalino informativo <strong>YOU ARE</strong> e poi il segnalino personaggio di un Minion non in gioco. Rimetti a dormire l’Alchemist. Contrassegna l’Alchemist con il promemoria <strong>IS THE ALCHEMIST</strong>. Scambia il segnalino dell’Alchemist con questo segnalino Minion. Gira il segnalino Minion a faccia in giù. <i>(Questo mostra che è ancora buono.)</i></p><p>L’Alchemist ha questa abilità da Minion. La usa come se fosse un Minion e si sveglia di notte quando quel Minion normalmente si sveglierebbe per usare la propria abilità.</p><p class="modal__callout-box">Pensa con attenzione a quale abilità da Minion vuoi dare all’Alchemist. Questa decisione può influenzare drasticamente la partita.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Alsaahir",
        id:"alsaahir",	
        description: "L’Alsaahir indovina l’intera squadra malvagia.",
        intro: "<ul><li>Le ipotesi dell’Alsaahir devono essere pubbliche e fatte durante il giorno. Non è obbligato a fare un’ipotesi ogni giorno.</li><li>Altri giocatori possono fingere di essere l’Alsaahir e fare un’ipotesi. Come per il Juggler o il Gossip, lo Storyteller fingerà brevemente che quel giocatore sia l’Alsaahir.</li><li>Se l’Alsaahir indovina il giocatore Demone come Demone e i giocatori Minion come Minion, la partita termina immediatamente. L’Alsaahir deve indovinare tutti i giocatori Demone e Minion.</li><li>L’Alsaahir non deve indovinare i personaggi specifici dei Minion né quelli dei Demone.</li><li>Se c’è più di un Demone in gioco, tutti i Demone devono essere indovinati.</li><li>Se un giocatore è sia Minion sia Demone, come Legion, l’Alsaahir deve indovinare quel giocatore come Demone.</li><li>Una volta fatta un’ipotesi, l’Alsaahir non può cambiare idea più tardi nello stesso giorno e fare un’altra ipotesi.</li><li>L’Alsaahir deve indovinare Minion e Demone anche se sono buoni, ma non deve indovinare quali Traveller siano malvagi.</li><li>Se la squadra malvagia è cambiata durante la partita, l’Alsaahir deve indovinare la squadra malvagia attuale, non quella iniziale.</li></ul>",
        ability: "Una volta al giorno, se indovini pubblicamente quali giocatori sono Minion e quali sono Demone, i buoni vincono.",
        flavor: "\"Sono qui per causa tua, e tu sei qui per causa mia.\"",
        examples: `<p>L’Alsaahir indovina quattro giocatori buoni. Non succede nulla.</p><p>L’Alsaahir indovina che Doug è il Demone e che Ben e Sarah sono Minion. Doug è il Demone e Ben e Sarah sono Minion. I buoni vincono immediatamente.</p><p>L’Alsaahir drunk indovina che Doug è il Demone e che Ben e Sarah sono Minion. Doug è il Demone e Ben e Sarah sono Minion. Non succede nulla e la partita continua. Il giorno successivo, l’Alsaahir sobrio indovina che Ben è il Demone e che Doug e Sarah sono Minion. Non succede nulla e la partita continua.</p>`,
        howToRun: `<p>Ogni giorno, una sola volta, se l’Alsaahir dichiara di voler usare la propria abilità, invitalo a indovinare quale giocatore è il Demone e quali giocatori sono Minion. Se l’ipotesi è errata, non succede nulla e la partita continua. Se è corretta, dichiara che i buoni vincono.</p><p class="modal__callout-box">Regola opzionale: come per il Juggler e il Gossip, lo Storyteller può limitare a tre giocatori al giorno il numero di giocatori che fanno un’ipotesi da Alsaahir. Usa questa regola opzionale solo se così tanti giocatori bluffano come Alsaahir da rallentare la partita e farle perdere divertimento.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Amnesiac",
        id:"amnesiac",	
        description: "L’Amnesiac non sa quale sia la propria abilità.",
        intro: `<ul><li>Lo Storyteller decide quale sia l’abilità dell’Amnesiac. Può essere la stessa abilità di un altro personaggio di <i>Blood On The Clocktower</i>, qualcosa di simile, oppure qualcosa di originale.</li><li>L’Amnesiac può svegliarsi in qualsiasi momento durante la notte per scoprire informazioni o per scegliere un giocatore, oppure la sua abilità può essere passiva—non richiedendo azioni da parte del giocatore Amnesiac.</li><li>Ogni giorno, l’Amnesiac parla privatamente con lo Storyteller e fa un’ipotesi su quale sia la sua abilità. Lo Storyteller risponde \"freddo\" se l’ipotesi è molto sbagliata, \"tiepido\" se l’ipotesi è sulla strada giusta, \"caldo\" se l’ipotesi è molto vicina, e \"bingo\" se l’ipotesi è esatta.</li><li>La sua ipotesi può essere specifica, come \"Sto scoprendo due giocatori ogni notte che hanno lo stesso allineamento?\", oppure vaga, come \"La mia abilità ha a che fare con i giocatori morti?\"</li></ul>`,
        ability: "Non sai quale sia la tua abilità. Ogni giorno, indovina privatamente quale sia: scopri quanto sei accurato.",
        flavor: "\"Aspetta. Cosa. Chi? Ah, ok. Aspetta. Cosa?\"",
        examples: `<p>Ogni notte, l’Amnesiac si sveglia e lo Storyteller lo invita a indicare due giocatori. Nella prima notte, lo Storyteller scuote la testa. Nella seconda notte, lo Storyteller annuisce. L’Amnesiac indovina \"Sto scoprendo se entrambi i giocatori sono Minion?\" Lo Storyteller dice \"Caldo\" perché la sua abilità è rilevare se uno dei due giocatori è un Minion.</p><p>Ogni notte, l’Amnesiac scopre un numero. L’Amnesiac sta scoprendo quanti dei suoi vicini vivi sono Townsfolk.</p>`,
        howToRun: `<p>Durante la preparazione della partita, decidi quale abilità ha il giocatore Amnesiac. Durante la partita, tratta quel giocatore come se avesse quell’abilità, svegliandolo quando necessario, invitandolo a scegliere giocatori quando necessario, o qualunque altra cosa sia appropriata. Usa i promemoria <strong>?</strong> dell’Amnesiac se ti servono.</p><p>Ogni giorno, l’Amnesiac fa un’ipotesi sulla propria abilità in privato. Rispondi \"Freddo\", \"Tiepido\", \"Caldo\" oppure \"Bingo\".</p><p class="modal__callout-box">Rendi l’abilità dell’Amnesiac indovinabile, così che l’Amnesiac possa capire nel tempo quale sia la propria abilità. scoprire un’informazione ogni notte, oppure un potere che influenza la partita in un modo che l’Amnesiac nota, sono entrambe buone idee.</p><p class="modal__callout-box">Se l’Amnesiac indovina la propria abilità, ma la formulazione è diversa, digli comunque che ha indovinato correttamente.</p><p class="modal__callout-box">Puoi rendere l’abilità dell’Amnesiac leggermente migliore di quella di un normale Townsfolk. Non sapendo quale sia, il giocatore dovrà impegnarsi di più per ottenerne il pieno beneficio.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Atheist",
        id:"atheist",	
        description: "L’Atheist sa che tutti i giocatori sono buoni e che i Demone non esistono.",
        intro: "<ul><li>Con l’Atheist in gioco, non ci sono giocatori malvagi—niente Minion e niente Demone.</li><li>I buoni vincono se lo Storyteller viene giustiziato. Qualsiasi giocatore vivo può nominare lo Storyteller, e lo Storyteller viene giustiziato se il 50% o più dei giocatori vivi vota.</li><li>Se l’Atheist non è in gioco e lo Storyteller viene giustiziato, i malvagi vincono.</li><li>I buoni perdono se restano in vita solo due giocatori.</li><li>Lo Storyteller può infrangere qualsiasi regola del gioco. Può uccidere un giocatore che ha fatto una nomination per simulare una maledizione della Witch, uccidere giocatori di notte per simulare l’attacco di un Demone, fornire informazioni false per simulare l’essere drunk, cambiare personaggi di notte per simulare un Pit-Hag, o persino avere un numero errato di Outsider in gioco.</li></ul>",
        ability: "Lo Storyteller può infrangere le regole del gioco e, se viene giustiziato, i buoni vincono, anche se sei morto. [Nessun personaggio malvagio]",
        flavor: "\"Liberiamoci di congetture inutili e di sciocca paranoia. Esiste una spiegazione perfettamente razionale per ogni cosa. Sì, una tazza da tè potrebbe effettivamente orbitare attorno al pianeta, troppo piccola per essere vista, ma io berrò il mio tè dalla porcellana molto reale nelle mie mani molto reali.\"",
        examples: `<p>L’Investigator scopre che o la Grandmother o la Seamstress è il Boomdandy. L’Investigator fa una nomination e muore, anche se non c’è alcuna Witch in gioco. Lo Slayer usa la propria abilità sul Gossip, che muore.</p><p>Ci sono tre Outsider in gioco, quando dovrebbero essercene due. I giocatori giustiziano lo Storyteller. I buoni vincono.</p>`,
        howToRun: `<p>Durante la preparazione della partita, prima di consegnare il sacchetto ai giocatori, rimuovi tutti i segnalini personaggio malvagi e aggiungi segnalini personaggio Townsfolk o Outsider per eguagliare il numero di giocatori.</p><p>Infrangi qualsiasi regola del gioco, come ritieni opportuno. Usa i promemoria dei malvagi se necessario.</p><p class="modal__callout-box">L’Atheist è un personaggio complesso ed è consigliato a Storyteller esperti. Oltre alla conoscenza delle regole, richiede un buon senso del divertimento e dell’equità. Il tuo compito è creare una partita divertente per tutti i giocatori, quindi infrangi le regole del gioco solo per fornire informazioni false (quanto vuoi) o per simulare le azioni di personaggi malvagi che potrebbero essere in gioco, ma non lo sono. Se riesci a convincere i giocatori che non c’è alcun Atheist in gioco, o almeno a farli discutere della possibilità, hai fatto un buon lavoro.</p><p class="modal__callout-box">Evita di creare regole arbitrarie o di cambiare le condizioni di vittoria. Per divertirsi, i giocatori devono sapere come possono vincere la partita se l’Atheist è in gioco.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Balloonist",
        id:"balloonist",	
        description: "Il Balloonist conosce un Townsfolk, un Outsider, un Minion e un Demone, ma li confonde.",
        intro: "",
        ability: "Ogni notte, scopri un giocatore di un tipo di personaggio diverso rispetto alla notte precedente. [+0 o +1 Outsider]",
        flavor: "\"Più calore! Più in alto! Più in alto! Higher! Higher! Più alto! Ahhh... è così bello da quassù, non sei d’accordo? Riesci a vedere i bambini che pescano al fiume, sotto il salice? Riesci a vedere il luccichio del sole sui pali del tendone del circo? Cos’è quello? Un vecchio, da solo, svenuto nella vigna? Meno calore! Più in basso! Più in basso! Vai più in basso!\"",
        examples: `<p>Nella prima notte, il Balloonist scopre Lewis (cioè lo Storyteller indica Lewis). Nella seconda notte, il Balloonist scopre Doug. Nella terza notte, il Balloonist scopre Lachlan. Nella quarta notte, il Balloonist scopre Marianna.</p><p>Ben è il Balloonist. Nella prima notte, Ben scopre Sarah. Nella seconda notte, Ben scopre Abdallah. Nella terza notte, Ben muore, quindi non scopre altri giocatori. Sarah afferma di essere il Monk e Abdallah afferma di essere il Goblin. Ben presume di aver scoperto un Townsfolk e un Minion, ma si sbaglia: Sarah è il Lunatic e Abdallah è il Leviathan. Ben ha in realtà scoperto un Outsider e un Demone.</p>`,
        howToRun: `<p>Quando inserisci i segnalini personaggio nel sacchetto, rimuovi un Townsfolk e aggiungi invece un Outsider. Ogni notte, inclusa la prima, sveglia il Balloonist e indica un singolo giocatore (vivo o morto) e posiziona accanto a lui il corrispondente promemoria <strong>SEEN TOWNSFOLK / OUTSIDER / MINION / DEMONE</strong>, assicurandoti di non ripetere lo stesso tipo già usato in precedenza <i>(cioè non spostare i promemoria una volta posizionati)</i>. Non mostrargli un segnalino personaggio né indicare quale tipo specifico sia quel giocatore: mostrargli solo il giocatore.</p><p>Nelle notti successive, quindi, avrai meno tipi di personaggio da mostrare, poiché avrai solo i promemoria rimanenti da posizionare. È legittimo mostrare lo stesso giocatore al Balloonist più di una volta, se ha tipi di personaggio diversi quando viene mostrato oppure se risulta come avente un tipo di personaggio diverso. A meno che tu non abbia una forte ragione, di solito è consigliato non mostrare i Traveller presto, poiché equivale sostanzialmente a non fornire alcuna informazione al Balloonist quella notte, dato che tutti i giocatori sanno già chi sono i Traveller senza usare abilità.</p><p>Se non ci sono personaggi di un determinato tipo in gioco e hai già mostrato al Balloonist tutti gli altri tipi, smetti di svegliare il Balloonist. Nota che, anche se un personaggio di quel tipo mancante entra in gioco in una notte successiva dopo che hai smesso di svegliare il Balloonist, non svegliarlo di nuovo in una notte successiva per mostrargli quel giocatore: l’abilità del Balloonist era completata quando hai smesso di svegliarlo.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Banshee",
        id:"banshee",	
        description: "La Banshee diventa più potente quando è morta – può fare nomination e votare il doppio.",
        intro: "<ul><li>Quando è viva, la Banshee fa nomination e vota come un normale giocatore.</li><li>Quando è morta, può fare nomination due volte al giorno, anche se i giocatori morti <strong>normalmente</strong> non possono fare nomination.</li><li>Quando è morta, può votare per qualsiasi nomination desideri e non ha bisogno di un gettone voto per farlo. Può votare due volte per la stessa nomination.</li><li>La Banshee ottiene questi poteri solo se viene uccisa dal Demone. Morire per esecuzione o a causa di un’abilità non appartenente a un Demone non conta.</li><li>Per votare due volte, il giocatore della Banshee alza entrambe le mani quando vengono contati i voti. Se il giocatore non è in grado di farlo a causa di una disabilità fisica, lo Storyteller può contare il suo voto normale due volte.</li></ul>",
        ability: "Se il Demone ti uccide, tutti i giocatori lo scoprono. Da ora in poi, puoi fare nomination due volte al giorno e votare due volte per ogni nomination.",
        flavor: `"Dearg d'fhalt, is gorm do shùil, gheibh thu bàs ro na bha thu an dùil."`,
        examples: `<p>Il Kazali uccide la Banshee. Tutti i giocatori scoprono che la Banshee è morta. Il giorno successivo, la Banshee fa una nomination sul Village Idiot e vota due volte, poi fa una nomination sul Fearmonger e vota due volte, poi vota due volte quando viene nominato lo Shugenja. Il giorno seguente, la Banshee non fa alcuna nomination, ma vota due volte per il Kazali.</p><p>La Banshee è avvelenata. L’Ojo uccide la Banshee. Nessuno scopre che la Banshee è morta e, per il resto della partita, la Banshee non può fare nomination e ha un solo voto.</p><p>Il Lycanthrope uccide la Banshee. La Banshee non ottiene i suoi poteri aggiuntivi e la sua morte non viene annunciata.</p>`,
        howToRun: `<p>Se la Banshee viene uccisa dal Demone, posiziona il promemoria <strong>HAS ABILITY</strong> accanto alla Banshee e dichiara <strong>THE BANSHEE HAS AWOKEN</strong> o qualcosa di altrettanto drammatico. La Banshee può fare nomination due volte al giorno, ma è responsabilità del giocatore ricordare quante volte ha fatto nomination. La Banshee può alzare entrambe le mani quando vota. Nel conteggio dei voti, conta ciascuna mano come un voto.</p><p>Se la Banshee viene uccisa dal Demone ma in quel momento non ha la sua abilità (perché è drunk o avvelenata, ecc.) oppure viene uccisa da un’abilità non appartenente a un Demone, non dire al gruppo che l’abilità della Banshee è stata attivata. La Banshee non può fare nomination e ha bisogno di un gettone voto per votare, come un normale giocatore morto.</p><p class="modal__callout-box">Se tutti i giocatori buoni sono morti, la partita continua. I buoni possono comunque vincere grazie alla capacità della Banshee di fare nomination.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Bounty Hunter",
        id:"bountyhunter",	
        description: `Il Bounty Hunter scopre tutti i giocatori malvagi. Uno. Giocatore. Alla. Volta.`,
        intro: "",
        ability: "Inizi conoscendo 1 giocatore malvagio. Se il giocatore che conosci muore, stanotte scopri un altro giocatore malvagio. [1 Townsfolk è malvagio]",
        flavor: "\"Solo, percorro queste strade, lastricate dal fetore malsano della corruzione. Il suo spessore si insinua nelle mie narici, non invitato, bruciando di repulsione. E di anticipazione. La malattia di questo luogo miserabile cresce ogni notte. E io... io sono la cura.\"",
        examples: `<p>Nella prima notte, il Bounty Hunter scopre che Edd è malvagio. Edd è il King che è stato reso malvagio dal Bounty Hunter. Il giorno successivo, il King muore. La notte seguente, il Bounty Hunter scopre che Abdallah è malvagio. Abdallah è il Goblin.</p><p>Nella prima notte, il Bounty Hunter scopre che Evin è malvagio. Tre giorni dopo, Evin muore. Quella notte, il Bounty Hunter scopre che Marianna è malvagia. Marianna è un Minion. Tre notti dopo, il Demone uccide Marianna e il Bounty Hunter scopre che Alex è malvagio. Alex è il Demone. La Tea Lady, che è stata resa malvagia dal Bounty Hunter, è ancora viva.</p>`,
        howToRun: `<p>All’inizio della prima notte, sveglia un qualsiasi giocatore con un personaggio Townsfolk e mostrargli la carta <strong>YOU ARE</strong> e il gesto del pollice verso il basso per fargli sapere che è malvagio. Ruota il suo gettone di 180 gradi nel grimorio, contrassegnalo con un promemoria malvagio in clocktower.online o rendi il suo gettone rosso nell’app ufficiale per ricordarti che è malvagio. Non scopre nient’altro oltre al suo nuovo allineamento, non sa chi siano i Minion o il Demone e continua a risultare come Townsfolk alle abilità: è cambiato solo il suo allineamento.</p><p>Quando il Bounty Hunter si sveglia, indica un giocatore malvagio. Può essere un Minion, un Demone, un Traveller o il Townsfolk malvagio: chiunque sia malvagio o risulti come malvagio. Se quel giocatore muore, indipendentemente dal fatto che muoia di notte o di giorno, e indipendentemente dal fatto che sia malvagio o meno, sveglia il Bounty Hunter quella notte e mostrargli un nuovo giocatore malvagio.</p><p>Nota che il Bounty Hunter è piuttosto tardi nell’ordine notturno della prima notte. Questo è il momento di svegliarlo per mostrargli il giocatore che sta scoprendo essere malvagio. Il giocatore che inizia malvagio, tuttavia, dovrebbe essere informato immediatamente nella prima notte di essere malvagio e tu, come Storyteller, dovresti tenerlo presente anche quando fornisci le altre informazioni della prima notte: quel giocatore è già malvagio anche se il Bounty Hunter non si è ancora svegliato.</p><p>Se il Bounty Hunter è drunk o avvelenato o in una partita con Vortox in qualsiasi momento in cui dovrebbe scoprire informazioni, puoi (devi se Vortox) fornirgli informazioni errate e mostrargli un giocatore buono. Se in seguito torna sobrio, non scopre nuove informazioni, anche se continua a pensare che un giocatore buono sia malvagio. Quando il giocatore che ha visto muore, scopre un nuovo giocatore quella notte.</p><p>Se il giocatore malvagio “conosciuto” diventa buono in seguito, questo non influisce sul Bounty Hunter: quel giocatore deve comunque morire affinché il Bounty Hunter ottenga ulteriori informazioni.</p><p>Vale la pena notare che, se ritieni che il Bounty Hunter abbia già ottenuto molte informazioni, è possibile mostrargli un giocatore malvagio morto o uno che gli è già stato mostrato. Nel primo caso, se è morto non può morire di nuovo, quindi il Bounty Hunter non otterrà nuove informazioni a meno che quel giocatore non venga resuscitato e ucciso di nuovo.</p><p>Per i Traveller, sia l’andarsene in viaggio sia l’essere esiliati risultano nella loro morte: quindi, se un Bounty Hunter ha visto un Traveller, entrambe le situazioni faranno sì che il Bounty Hunter ottenga ulteriori informazioni quella notte.</p><p class="modal__callout-box">Poiché il Bounty Hunter aggiunge un giocatore malvagio extra, è necessario prestare estrema cautela quando lo si aggiunge a uno script con qualsiasi altro potenziale cambio di allineamento: non appena più di un giocatore può essere reso malvagio, è molto facile ottenere una maggioranza di voti malvagia e nemmeno i giocatori malvagi si divertono particolarmente. Lo script con Goon, Mezepheles, Fang Gu, Politician e Cult Leader è già stato creato e non è divertente...</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Cannibal",
        id:"cannibal",	
        description: "Il Cannibal mangia i personaggi giustiziati, ottenendo la loro abilità.",
        intro: `<ul><li>Se un giocatore buono muore per esecuzione, il Cannibal ottiene l’abilità di quel giocatore. Se un giocatore malvagio muore per esecuzione, il Cannibal pensa soltanto di ottenere un’abilità, poiché il Cannibal è avvelenato. Lo Storyteller potrebbe mentirgli.</li><li>Ogni volta che un giocatore muore per esecuzione, il Cannibal perde l’abilità del giocatore precedente.</li><li>Giustiziare un giocatore già morto non conferisce alcuna abilità al Cannibal. Giustiziare un giocatore vivo che non muore non conferisce alcuna abilità al Cannibal. Un giocatore deve essere giustiziato e morire affinché il Cannibal ottenga la sua abilità.</li><li>Al Cannibal non viene detto quale abilità ha ottenuto. Deve capirlo da solo.</li><li>Se il Cannibal possiede un’abilità “anche se morto”, come quella del Recluse, oppure un’abilità che implica che funzioni mentre è morto, come quelle del Ravenkeeper o dello Sweetheart, il Cannibal mantiene quell’abilità quando muore, ma perde la propria abilità da Cannibal.</li></ul>`,
        ability: "Hai l’abilità del giocatore giustiziato più recentemente. Se è malvagio, sei avvelenato finché un giocatore buono non muore per esecuzione.",
        flavor: "\"Non mi piacciono i clown. Hanno un sapore strano.\"",
        examples: `<p>Il Clockmaker viene giustiziato e muore. Quella notte, il Cannibal scopre un “2” perché il Demone e il Minion sono separati da due posti.</p><p>La Witch viene giustiziata. La Witch stava bluffando come l’Investigator. Quella notte, il Cannibal avvelenato scopre che o il Mayor o il Juggler è la Witch.</p><p>Il Soldier muore per esecuzione. Quella notte, l’Imp attacca il Cannibal, ma il Cannibal non muore. Il Monk muore per esecuzione. Quella notte, il Cannibal sceglie il Gossip, così come fa l’Imp. Il Gossip non muore. Il giorno successivo, nessuno viene giustiziato. Stanotte, il Cannibal ha di nuovo l’abilità del Monk.</p>`,
        howToRun: `<p>Se un giocatore buono muore per esecuzione, contrassegnalo con il promemoria <strong>DIED TODAY</strong> e rimuovi il promemoria <strong>POISONED</strong> dal Cannibal, se necessario. Il Cannibal ora possiede l’abilità di questo giocatore buono <i>(non dire quale)</i> e si sveglierà di notte quando questo personaggio buono normalmente si sveglierebbe.</p><p>Se un giocatore malvagio muore per esecuzione, contrassegnalo con il promemoria <strong>DIED TODAY</strong> e contrassegna il Cannibal con il promemoria <strong>POISONED</strong>. Il Cannibal è <strong>avvelenato</strong>. Puoi svegliarlo quando questo personaggio malvagio normalmente si sveglierebbe e fingere che abbia ottenuto una nuova abilità.</p><p class="modal__callout-box">Presta attenzione a quale personaggio ciascun giocatore malvagio sta bluffando. Se viene giustiziato, la sua abilità bluffata è la migliore da fingere come abilità ottenuta dal Cannibal.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Choirboy",
        id:"choirboy",	
        description: `Il Choirboy scopre chi è il Demone quando il King viene ucciso.`,
        intro: `<ul><li>Il King può essere in gioco senza il Choirboy. Durante la fase di preparazione, se il Choirboy è in gioco e il King non lo è, il King viene aggiunto. Se un King è già in gioco, il Choirboy non aggiunge un secondo King.</li><li>Se il Demone uccide il King usando la propria abilità, il Choirboy scopre quale giocatore è il Demone. Il fatto che il Demone nomini ed esegua il King non conta. Nemmeno i Minion che uccidono il King, come l’Assassin, contano.</li><li>Se il Demone attacca il King ma non lo uccide, il Choirboy non scopre chi è il Demone.</li><li>Il Choirboy scopre quale giocatore è il Demone, ma non quale personaggio.</li></ul>`,
        ability: "Se il Demone uccide il King, scopri quale giocatore è il Demone. [+il King]",
        flavor: "\"L’ho visto, sì. Ero nei banchi, a sistemare i libri degli inni, quando dall’organo a canne è partita una melodia terribile. L’organista aveva un lungo mantello e lunghe dita sui tasti. E un cappello che sembrava… proprio come… il tuo.”",
        examples: `<p>L’Imp attacca l’Empath. L’Empath muore. La notte successiva, l’Imp attacca il King, che è protetto dal Monk. Il King sopravvive. La notte seguente, l’Imp attacca il King, che non è protetto dal Monk. Il King muore. Il Choirboy scopre quale giocatore è il Demone.</p><p>Lo Shabaloth uccide il King. Il Choirboy drunk si sveglia e scopre che il giocatore Cannibal è il Demone.</p>`,
        howToRun: `<p>Durante la preparazione della partita, prima di mettere i gettoni personaggio nel sacchetto, se il King non è già in gioco, rimuovi un gettone personaggio Townsfolk e aggiungi il gettone personaggio del King.</p><p>Ogni notte tranne la prima, se il Demone uccide il King, rimetti a dormire il Demone poi sveglia il Choirboy. Indica il giocatore Demone e poi rimetti a dormire il Choirboy.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Cult Leader",
        id:"cultleader",	
        description: "Il Cult Leader convince gli altri a unirsi al suo culto per terminare la partita. Ma quale squadra vincerà?",
        intro: "",
        ability: "Ogni notte, diventi dell’allineamento di un vicino vivo. Se tutti i giocatori buoni scelgono di unirsi al tuo culto, la tua squadra vince.",
        flavor: "\"Credendosi saggi, sono diventati stolti.\"",
        examples: `<p>Il Cult Leader è vicino al Farmer e al Magician. Nella prima notte, il Cult Leader rimane buono. Il Magician viene giustiziato e muore, e i vicini vivi del Cult Leader sono ora il Farmer e il Marionette. Lo Storyteller decide di rendere il Cult Leader malvagio. La notte successiva, anche se i vicini vivi del Cult Leader sono ancora il Farmer e il Marionette, lo Storyteller decide di rendere di nuovo buono il Cult Leader.</p><p>Il Cult Leader è malvagio. Il Cult Leader chiede che tutti i giocatori si uniscano al suo culto. Tutti i giocatori malvagi alzano la mano per unirsi, ma solo metà dei giocatori buoni alza la mano. Non succede nulla. Quella notte, il Cult Leader diventa buono. Il giorno seguente, il Cult Leader chiede che tutti i giocatori si uniscano al suo culto. Nessun giocatore malvagio alza la mano, ma tutti i giocatori buoni la alzano. La partita termina e i buoni vincono, perché il Cult Leader è buono.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Engineer",
        id:"engineer",	
        description: "L’Engineer produce la minaccia che la città affronta.",
        intro: `<ul><li>L’Engineer può scegliere quali personaggi Minion sono in gioco, oppure quale Demone è in gioco, ma non entrambi.</li><li>Quando l’Engineer crea nuovi personaggi in gioco, il giocatore Demone rimane il Demone e i giocatori Minion rimangono Minion. Il numero di giocatori malvagi resta lo stesso.</li><li>Se l’Engineer tenta di creare un personaggio già in gioco, quel personaggio rimane allo stesso giocatore. L’Engineer non lo scopre e potrebbe non poter usare di nuovo la propria abilità.</li><li>Se crea i Minion, l’Engineer sceglie lo stesso numero di Minion che dovrebbe essere in gioco per il numero di giocatori <i>(vedi il foglio dei Traveller o il foglio di preparazione)</i>.</li><li>Se l’Engineer sceglie accidentalmente troppi o troppo pochi personaggi, lo Storyteller cambia il personaggio di tanti giocatori malvagi quanti è giusto e fattibile.</li><li>Possono essere scelti solo personaggi dallo script corrente.</li></ul>`,
        ability: "Una volta per partita, di notte, scegli quali Minion oppure quale Demone è in gioco.",
        flavor: "\"Se si piega, bene. Se si rompe, beh, probabilmente aveva comunque bisogno di essere aggiustato.\"",
        examples: `<p>Nella seconda notte, l’Engineer sceglie che il Demone sia un Lleech. Lewis, che era l’Imp, ora è il Lleech.</p><p>Nella prima notte, l’Engineer cambia il Baron nel Boomdandy. Ci sono ancora due Outsider extra in gioco.</p><p>Il Fearmonger e il Psychopath sono in gioco e stanno causando caos. L’Engineer sceglie che il Mezepheles e la Spy siano in gioco. Lo Storyteller sceglie di cambiare il Fearmonger nel Mezepheles e il Pyschopath nella Spy.</p><p>La Spy, l’Assassin e la Witch sono in gioco. L’Engineer sceglie che la Spy, l’Assassin e il Mezepheles siano in gioco. La Witch diventa il Mezepheles.</p>`,
        howToRun: `<p>Ogni notte, sveglia l’Engineer. Può scuotere la testa per dire di no oppure indicare personaggi malvagi sul foglio dei personaggi.</p><p>Se scuote la testa per dire di no, non succede nulla. Rimetti a dormire l’Engineer.</p><p>Se indica un Demone o dei Minion sul proprio foglio dei personaggi, rimettilo a dormire. Scambia tutti i gettoni personaggio appropriati con nuovi gettoni personaggio. Sveglia ciascun giocatore malvagio il cui personaggio è cambiato, mostra il gettone informazione <strong>YOU ARE</strong>, poi il suo nuovo gettone personaggio, poi rimettilo a dormire. <strong>L’Engineer perde la propria abilità</strong>—contrassegnalo con il promemoria <strong>NO ABILITY</strong> e rimuovi il suo gettone notturno dal foglio notturno.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Farmer",
        id:"farmer",	
        description: "Il Farmer crea altri Farmer.",
        intro: `<ul><li>Se un Farmer muore di notte, un altro giocatore diventa a sua volta un Farmer.</li><li>Solo i giocatori buoni possono diventare Farmer in questo modo.</li><li>Se anche questo nuovo Farmer muore di notte, viene creato un altro Farmer.</li><li>I Farmer che muoiono durante il giorno, ad esempio per esecuzione, non creano altri Farmer.</li><li>I Farmer che sono diventati malvagi, ad esempio a causa dell’abilità del Mezepheles, possono creare altri Farmer. Tuttavia, Townsfolk e Outsider che sono diventati malvagi non possono diventare un Farmer.</li><li>I Farmer non scoprono chi siano gli altri Farmer, ma ogni giocatore che diventa un Farmer scopre di esserlo ora.</li><li>Quando un giocatore diventa un Farmer, non è più il suo vecchio personaggio e non possiede più quella abilità. Qualsiasi effetto continuo della sua vecchia abilità termina immediatamente.</li></ul>`,
        ability: "Quando muori di notte, un giocatore buono vivo diventa un Farmer.",
        flavor: "“Anche i potenti hanno bisogno di cibo sulla tavola. Senza di noi, la città muore di fame.”",
        examples: `<p>Julian è il Farmer. Il Demone lo uccide di notte. Evin è il Fearmonger e Sarah è l’Alchemist. Sarah diventa il Farmer quella notte. Evin non poteva diventare il Farmer, perché è malvagio.</p><p>Nella seconda notte, il Farmer muore. Il Pixie diventa il Farmer. Nella terza notte, il nuovo Farmer muore e l’Heretic buono diventa un Farmer. Ora non ci sono più né un Heretic né un Pixie in gioco, e ci sono tre Farmer in gioco, due dei quali sono morti.</p><p>Il Farmer muore di notte. La Spy risulta come buona e diventa un Farmer, ma è ancora malvagia.</p>`,
        howToRun: `<p>Se il Farmer è morto stanotte, sveglia un giocatore buono vivo. Mostragli il gettone informazione <strong>YOU ARE</strong> e un gettone personaggio Farmer, poi rimettilo a dormire. Sostituisci il suo precedente gettone personaggio con un gettone personaggio Farmer.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Fisherman",
        id:"fisherman",	
        description: "Una volta per partita, durante il giorno, visita lo Storyteller per qualche consiglio che aiuti la tua squadra a vincere.",
        intro: "",
        ability: "Una volta per partita, durante il giorno, visita lo Storyteller per qualche consiglio che aiuti la tua squadra a vincere.",
        flavor: "\"Questa era la mia parte preferita del fiume… vedi come la luce del sole crea un arcobaleno dal monastero al mercato? Questo era il posto migliore per i pesci grossi. E più invecchio, più grandi erano.”",
        examples: `<p>Il Fisherman va dallo Storyteller e gli viene detto "di non fidarsi di Ben": non perché Ben sia malvagio, ma perché le sue informazioni da drunk stanno portando fuori strada la squadra dei buoni.</p><p>Nel terzo giorno, il Fisherman scopre "Tieni in vita i giocatori che dichiarano di essere Outsider". Questi giocatori sono segretamente il Klutz e il Fearmonger. Lo Storyteller ritiene che tenere in vita questi giocatori renda più probabile che i buoni finiscano per giustiziare il Demone.</p><p>È il terzo giorno, e il Fisherman visita lo Storyteller per chiedere un consiglio. Gli viene detto di "Giustiziare Jeremy" perché Jeremy è il Drunk, e l’Undertaker lo scoprirebbe se venisse giustiziato.</p><p>È l’ultimo giorno, e il Fisherman visita lo Storyteller per chiedere un consiglio. Gli viene detto "Non fare troppe domande a Kevin" perché Kevin è il Mutant, e l’attivazione del suo potere farebbe perdere la partita ai buoni.</p>`,
        howToRun: `<p>In qualsiasi momento durante il giorno, il Fisherman può avvicinarsi privatamente allo Storyteller per qualche consiglio che lo aiuti a vincere. I consigli dello Storyteller non sono “fatti”. Sono suggerimenti strategici che lo Storyteller ritiene aiuteranno il Fisherman a vincere se vengono seguiti.</p><p>In generale, i consigli del Fisherman dovrebbero poter essere strutturati come "dovresti" o "non dovresti". Non è necessario includere esplicitamente quelle parole, ma dovrebbe sempre seguire quel concetto di suggerimenti che possono essere seguiti, piuttosto che informazioni su com’è la situazione come quelle che otterrebbe un Savant. Quindi, ad esempio, "uccidi il giocatore X" o "scopri chi è il Drunk" o "dovresti riconsiderare a quali informazioni stai dando fiducia" o "fidati del giocatore Y" sono tutti ottimi consigli per il Fisherman.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "General",
        id:"general",	
        description: "Il General sa chi sta vincendo.",
        intro: `<ul><li>Se la squadra dei buoni sta vincendo, lo Storyteller mostra il pollice in su. Se la squadra dei malvagi sta vincendo, lo Storyteller mostra il pollice in giù. Se nessuna squadra sta vincendo, o lo Storyteller non ne è sicuro, lo Storyteller mostra il pollice di lato.</li><li>Lo Storyteller è il giudice di quale squadra stia vincendo. Possono essere considerati molti fattori, come quanti giocatori di ciascuna squadra sono ancora vivi, quante informazioni ha la squadra dei buoni, quanto sembrano efficaci i bluff della squadra dei malvagi, quali giocatori il gruppo vuole giustiziare dopo o quanto è esperto il giocatore Demone. Tutto questo, e altro ancora, influisce sul giudizio dello Storyteller.</li><li>Lo Storyteller decide chi sta vincendo nel momento in cui il General si sveglia. Eventi precedenti della notte possono influenzare la decisione.</li></ul>`,
        ability: "Ogni notte, scopri quale allineamento lo Storyteller ritiene stia vincendo: buono, malvagio o nessuno dei due.",
        flavor: '"Non ho tempo per le citazioni."',
        examples: `<p>Ci sono cinque giocatori buoni vivi e tre Minion vivi. Anche se il Demone è molto sospetto e probabilmente verrà giustiziato a breve, c’è una Scarlet Woman in gioco che è considerata affidabile. Lo Storyteller mostra il pollice in giù.</p><p>La squadra dei buoni ha molte informazioni e ritiene correttamente che le proprie informazioni false siano effettivamente false. L’unico Minion è morto. Lo Storyteller mostra il pollice in su.</p><p>Il Po è un giocatore molto esperto e si coordina bene con i Minion. Il Monk protegge con successo il Savant ogni notte e la squadra dei buoni ha identificato correttamente diversi giocatori buoni. Tuttavia, il Po probabilmente ucciderà tre volte la prossima notte, quindi è molto incerto chi vincerà. Lo Storyteller mostra il pollice di lato.</p>`,
        howToRun: `<p>Ogni notte, sveglia il General. Se ritieni che la squadra dei buoni stia vincendo, mostra il pollice in su. Se ritieni che la squadra dei malvagi stia vincendo, mostra il pollice in giù. Se non sai quale squadra stia vincendo, mostra il pollice di lato. Rimetti a dormire il General.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "High Priestess",
        id:"highpriestess",	
        description: "La High Priestess agisce seguendo l’intuizione.",
        intro: `<ul><li>Alla High Priestess può essere mostrato lo stesso giocatore più notti di fila, oppure un giocatore diverso ogni notte.</li><li>Il giocatore mostrato può essere vivo o morto.</li><li>Il giocatore mostrato può essere buono o malvagio.</li><li>Non esistono criteri ufficiali che determinino quale giocatore lo Storyteller debba mostrare alla High Priestess. Spetta al giudizio dello Storyteller decidere cosa ritiene possa avvantaggiare maggiormente la High Priestess e la squadra dei buoni in generale. Potrebbe essere perché quel giocatore possiede informazioni importanti che non sono ancora state rivelate. Oppure perché il giocatore è malvagio e ha un bluff che non ha senso. Oppure perché il giocatore è affidabile e ha bisogno di essere considerato più attendibile. Oppure perché il giocatore è buono ma sta seguendo una pista sbagliata e ha bisogno di essere corretto. Oppure qualcosa di completamente diverso.</li></ul>`,
        ability: "Ogni notte, scopri quale giocatore lo Storyteller ritiene che tu debba contattare di più.",
        flavor: "\"C’è una vita dietro la personalità che usa le personalità come maschere. Ci sono momenti in cui la vita posa la maschera e offre risposte profonde a domande profonde.\"",
        examples: `<p>Nella prima notte, la High Priestess scopre Julian. Julian è lo Chef e ha informazioni utili da condividere. Nella seconda notte, alla High Priestess viene mostrata Marianna. Marianna è il Goblin e lo Storyteller ritiene che la High Priestess trarrebbe il massimo beneficio dal parlare con Marianna per scoprirlo il prima possibile. Nella terza notte, alla High Priestess viene mostrato Doug. Doug è il Drunk, le cui informazioni sono errate e stanno danneggiando la squadra dei buoni.</p><p>Per tre notti di fila, la High Priestess scopre Sarah. Sarah è la Saint e la squadra dei buoni sta cercando di giustiziarla. Nell’ultima notte, la High Priestess scopre Lewis. Lewis è l’Imp e la sua storia è in contrasto con quella di diversi giocatori buoni.</p>`,
        howToRun: `<p>Ogni notte, sveglia la High Priestess. Indica un giocatore. Rimetti a dormire la High Priestess.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Huntsman",
        id:"huntsman",	
        description: "L’Huntsman salva la Damsel prima che i Minion la trovino... si spera.",
        intro: `<ul><li>La Damsel può essere in gioco senza l’Huntsman. Durante la fase di preparazione, se l’Huntsman è in gioco e la Damsel non lo è, la Damsel viene aggiunta. Se una Damsel è già in gioco, l’Huntsman non aggiunge una seconda Damsel.</li><li>Se l’Huntsman sceglie correttamente la Damsel di notte, la Damsel diventa immediatamente un Townsfolk non in gioco. Lo Storyteller sceglie quale personaggio Townsfolk, e la Damsel scopre quale sia.</li><li>Quando la Damsel diventa un Townsfolk, ottiene quell’abilità da Townsfolk e perde l’abilità da Damsel.</li><li>L’Huntsman ha un solo tentativo e lo fa di notte.</li><li>I Minion hanno un solo tentativo in totale e lo fanno pubblicamente durante il giorno. Se un Minion indovina chi è la Damsel, i malvagi vincono. Se un Minion indovina erroneamente chi è la Damsel, il tentativo viene consumato e gli altri Minion non possono vincere indovinando correttamente la Damsel.</li><li>Se la Damsel è drunk o avvelenata ma l’Huntsman è sobrio e sano, la Damsel può comunque diventare un Townsfolk.</li></ul>`,
        ability: "Una volta per partita, di notte, scegli un giocatore vivo: la Damsel, se scelta, diventa un Townsfolk non in gioco. [+la Damsel]",
        flavor: "\"La mia capanna è calda e robusta. La mia ascia vicino alla porta, i miei stivali che si asciugano accanto al fuoco e uno stufato d’alce che sobbolle… Ascolta! Un urlo riecheggia nella valle! La pioggia e il fango e il vento gelido, gelido mascherano l’odore dei lupi, ma io conosco il sentiero e il mio passo è saldo. Sto arrivando.\"",
        examples: `<p>L’Huntsman viene svegliato nella prima notte, ma non usa la propria abilità. Nella seconda notte, l’Huntsman sceglie il giocatore Damsel. La Damsel diventa il Noble e scopre tre giocatori <i>(uno dei quali è malvagio)</i> quella notte.</p><p>L’Huntsman sceglie Lachlan. Lachlan è il Choirboy, quindi non succede nulla. L’Huntsman non viene più svegliato di notte.</p>`,
        howToRun: `<p>Durante la preparazione della partita, prima di mettere i gettoni personaggio nel sacchetto, se la Damsel non è già in gioco, rimuovi un gettone personaggio Townsfolk e aggiungi il gettone personaggio della Damsel.</p><p>Ogni notte, sveglia l’Huntsman.</p><p>Se scuote la testa per dire di no, rimetti a dormire l’Huntsman.</p><p>Se indica un giocatore, rimetti a dormire l’Huntsman. <strong>L’Huntsman perde la propria abilità</strong>—contrassegnalo con il promemoria <strong>NO ABILITY</strong> e rimuovi il suo gettone notturno dal foglio notturno. Se ha scelto la Damsel, sveglia la Damsel, mostra il gettone informazione <strong>YOU ARE</strong>, poi un gettone Townsfolk non in gioco, poi rimetti a dormire la Damsel. La Damsel ora possiede questa abilità da Townsfolk, quindi sostituisci il gettone personaggio della Damsel con questo gettone personaggio Townsfolk.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "King",
        id:"king",	
        description: "Il King scopre quali personaggi sono ancora vivi.",
        intro: "<ul><li>Il King ottiene questa abilità solo dopo che sono passate alcune notti—quando i giocatori morti sono pari o più dei vivi.</li><li>All’inizio della partita, il Demone scopre chi è il King. Se un King viene creato a partita in corso, il Demone scopre chi è il King quella notte.</li><li>Il King potrebbe non sopravvivere abbastanza a lungo da usare la propria abilità. Una volta che il numero di giocatori morti è maggiore o uguale al numero di giocatori vivi, il King scopre un personaggio vivo ogni notte.</li><li>Il King può scoprire personaggi buoni o malvagi e può persino scoprire lo stesso personaggio più di una volta.</li><li>Potrebbe non esserci un Choirboy in gioco. Ma se c’è, ed è ancora vivo quando il Demone uccide il King, il Choirboy scopre chi è il Demone.</li></ul>",
        ability: "Ogni notte, se i morti sono pari o più dei vivi, scopri 1 personaggio vivo. Il Demone sa che sei il King.",
        flavor: "\"Fra gli ignoti affanni della contesa mortale<br>E la notte morbosa, dolce di mistero e di dolore<br>Giacciono gioie libere della lunga e variopinta vita del fato<br>Il cui giardino fiorisce mostrando ogni volto dipinto.\"",
        examples: `<p>Amy è il King. Ci sono dodici giocatori vivi e un giocatore morto. Nella seconda notte, non scopre nulla. Nella terza notte, non scopre nulla. Nel quarto giorno, ci sono sette giocatori morti e sei giocatori vivi. Nella quarta notte, Amy scopre che lo Snitch è vivo. Nella quinta notte, scopre che la Witch è ancora viva.</p><p>Il Demone sa che Abdallah è il King. Evin sostiene di essere il Choirboy, ma è il Butler. Il Demone rischia e uccide Abdallah. Se Evin fosse davvero il Choirboy, Evin avrebbe scoperto quale giocatore era il Demone.</p>`,
        howToRun: `<p>Durante la prima notte, sveglia il Demone. Mostragli il gettone informazione <strong>THIS PLAYER IS</strong>, poi il gettone del King, poi indica il giocatore King. Rimetti a dormire il Demone.</p><p>Quando il numero di giocatori morti è pari o supera il numero di giocatori vivi, aggiungi un gettone notturno alla voce del King sul foglio notturno.</p><p>Ogni notte, se il King ha un gettone notturno sul foglio notturno, sveglia il King. Mostra un gettone personaggio vivo. Rimetti a dormire il King.</p><p class="modal__callout-box">Pensa attentamente a quali gettoni personaggio mostrare al King. Non temere di fornire ottime informazioni. La maggior parte dei King morirà prima dell’ultimo giorno. Un King che arriva vivo all’ultimo giorno di solito vince, e va bene così.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Knight",
        id:"knight",	
        description: "Il Knight conosce giocatori che non sono il Demone.",
        intro: "<ul><li>Nella prima notte, il Knight scopre due giocatori che non sono il Demone.</li><li>Nelle notti successive, non scopre nient’altro.</li><li>Il Knight può scoprire Townsfolk, Outsider o persino Minion, ma non scopre di quale tipo di personaggio si tratti.</li></ul>",
        ability: "Inizi conoscendo 2 giocatori che non sono il Demone.",
        flavor: "\"Quando un uomo mente, uccide una parte del mondo.\"",
        examples: `<p>Lewis è l’Undertaker, Doug è l’Imp e Ben è il Fortune Teller. Il Knight scopre Lewis e Ben.</p><p>Marianna è il Vortox e Abdallah è l’Alchemist. Il Knight scopre Marianna e Abdallah. Il Knight deve scoprire Marianna e Abdallah perché le informazioni del Knight devono essere false a causa dell’abilità del Vortox e quindi includere il Demone.</p>`,
        howToRun: `<p>Durante la preparazione, contrassegna due giocatori non-Demone con i promemoria <strong>KNOW</strong> del Knight. Durante la prima notte, sveglia il Knight. Indica i due giocatori contrassegnati <strong>KNOW</strong>.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Lycanthrope",
        id:"lycanthrope",	
        description: "Il Lycanthrope vaga di notte, uccidendo gli innocenti, mentre il Demone si rintana al chiuso.",
        intro: `<ul><li>Il Lycanthrope deve scegliere un giocatore vivo ogni notte. Se il Lycanthrope sceglie un giocatore morto, lo Storyteller scuote la testa per dire di no e invita il Lycanthrope a scegliere un altro giocatore.</li><li>Se il giocatore scelto dal Lycanthrope è buono, quel giocatore muore e il Demone non può uccidere stanotte.</li><li>Se il giocatore attaccato dal Lycanthrope è malvagio, quel giocatore non muore e il Demone può comunque uccidere stanotte.</li><li>Se il Lycanthrope attacca un giocatore buono ma quel giocatore buono non muore, il Demone può comunque uccidere stanotte.</li><li>Un giocatore buono risulta come malvagio. Risulta come malvagio anche per il Lycanthrope, quindi non può essere ucciso dal Lycanthrope.</li></ul>`,
        ability: "Ogni notte*, scegli un giocatore vivo. Se è buono, muore e il Demone non uccide stanotte. Un giocatore buono risulta come malvagio.",
        flavor: '"Sotto la sottile patina della civiltà si cela una follia ululante."',
        examples: `<p>Il Lycanthrope attacca il General. Il General muore. Più tardi quella notte, l’Imp attacca l’Amnesiac. L’Amnesiac non muore, perché l’Imp non può uccidere stanotte.</p><p>Il Lycanthrope attacca il Farmer. Il Farmer muore e un altro giocatore buono diventa un Farmer. Il Magician era stato avvelenato dal Pukka la notte precedente ma non muore stanotte, perché il Pukka non può uccidere stanotte.</p><p>Il Lycanthrope attacca il Godfather. Il Godfather non muore, perché il Godfather è malvagio. Il Lycanthrope attacca lo Zealot, che risulta come malvagio a causa dell’abilità del Lycanthrope. Lo Zealot non muore. Il Demone attacca il Lycanthrope e il Lycanthrope muore.</p>`,
        howToRun: `<p>Durante la preparazione, contrassegna un giocatore buono con il promemoria <strong>FAUX PAW</strong> del Lycanthrope.</p><p>Ogni notte tranne la prima, sveglia il Lycanthrope. Indica un qualsiasi giocatore. Rimetti a dormire il Lycanthrope. Se il giocatore scelto è buono, quel giocatore <strong>muore</strong>—contrassegnalo con il promemoria <strong>DEAD</strong> del Lycanthrope. Più tardi quella notte, sveglia il Demone, come di consueto, ma il Demone non può uccidere. Se il giocatore scelto è malvagio, non succede nulla.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Magician",
        id:"magician",	
        description: "Il Magician confonde i giocatori malvagi su chi sia malvagio e chi no.",
        intro: `<ul><li>Nella prima notte, invece di scoprire quale giocatore sia il Demone, ai Minion viene detto che entrambi i giocatori—il Demone e il Magician—sono il Demone.</li><li>Nella prima notte, il Demone scopre che il giocatore Magician è uno dei suoi Minion.</li><li>Il Magician non si sveglia per scoprire nulla.</li><li>Lo Storyteller può indicare il Magician e i giocatori malvagi in qualsiasi ordine, così che i giocatori malvagi non sappiano quale giocatore sia il Magician.</li><li>Se il Poppy Grower muore e il Demone e i Minion scoprono chi sono gli uni e gli altri a partita in corso, l’abilità del Magician ha effetto quella notte, proprio come se fosse la prima notte.</li></ul>`,
        ability: "Il Demone pensa che tu sia un Minion. I Minion pensano che tu sia il Demone.",
        flavor: "\"1... 2... Abra... 3... 4... Cadabra... *poof!*<br>E, come potete vedere, signore e signori, la borsa d’oro del capitano Farnsworth è scomparsa! Sparita! Senza lasciare traccia! Grazie, e buonanotte!\"",
        examples: `<p>Julian è il Leviathan e Sarah è il Magician. I Minion si svegliano e scoprono che o Julian o Sarah è il Demone. Julian scopre che il giocatore Fearmonger, il giocatore Assassin e il giocatore Magician sono tutti Minion.</p>`,
        howToRun: `<p>Durante la prima notte, sveglia i Minion. Mostra il gettone informazione <strong>THIS IS THE DEMONE</strong>, poi indica il Demone e il Magician. Rimetti a dormire i Minion.</p><p>Durante la prima notte, sveglia il Demone. Mostra il gettone informazione <strong>THESE ARE YOUR MINIONS</strong>, poi indica tutti i Minion e il Magician. Mostra il gettone informazione <strong>THESE CHARACTERS ARE NOT IN PLAY</strong> e tre gettoni personaggio. Rimetti a dormire il Demone.</p><p>Esegui questa procedura al posto dei normali passaggi di informazioni dei Minion e del Demone.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Nightwatchman",
        id:"nightwatchman",	
        description: `Il Nightwatchman è conosciuto da un giocatore.`,
        intro: "",
        ability: "Una volta per partita, di notte, scegli un giocatore: scopre che sei il Nightwatchman.",
        flavor: "\"La notte è fredda e solitaria, ma ho la luna, le stelle, il vento pungente e il lieve tonfo degli stivali di cuoio sulla pietra lastricata a farmi compagnia. Laggiù, la luce di una candela tremola dietro una finestra torbida...\"",
        examples: `<p>Lachlan è il Nightwatchman. Sceglie Abdallah. Abdallah scopre che Lachlan è il Nightwatchman.</p><p>Marianna è il Nightwatchman drunk. Sceglie Amy. Amy non si sveglia e non scopre che Marianna è il Nightwatchman, perché il Nightwatchman non ha abilità.</p><p>Ben è il Nightwatchman e il Vortox è in gioco. Ben sceglie Sarah. Sarah scopre che Lewis è il Nightwatchman. Anche se il Nightwatchman possiede la propria abilità, l’informazione è falsa.</p>`,
        howToRun: `<p>Ogni notte, sveglia il Nightwatchman. Se scuote la testa per dire di no, rimettilo a dormire. Se indica un giocatore, rimetti a dormire il Nightwatchman, sveglia il giocatore scelto e mostrargli il gettone informazione <strong>THIS CHARACTER SELECTED YOU</strong> e il gettone Nightwatchman, poi indica il giocatore Nightwatchman prima di rimettere a dormire il giocatore scelto. Contrassegna il Nightwatchman con il promemoria <strong>NO ABILITY</strong>.</p><p>Se il Nightwatchman è drunk o avvelenato quando sceglie un giocatore, rimettilo a dormire, non svegliare il giocatore scelto e contrassegna che ha utilizzato la sua abilità una volta per partita.</p><p>Se il Vortox è in gioco, sveglia il giocatore scelto dal Nightwatchman, poi mostrargli i gettoni appropriati e indica un qualsiasi giocatore tranne il Nightwatchman.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Noble",
        id:"noble",	
        description: "Il Noble scopre che uno dei tre giocatori è malvagio.",
        intro: `<ul><li>Il Noble scopre le sue informazioni solo la prima notte.</li><li>Se un Noble viene creato a partita iniziata, il Noble scopre le sue informazioni nella sua prima notte.</li><li>Il Noble scopre due giocatori buoni e un giocatore malvagio. Non può scoprire un giocatore buono e due giocatori malvagi. Non può scoprire tre giocatori malvagi.</li></ul>`,
        ability: 'Inizi sapendo 3 giocatori, 1 e solo 1 dei quali è malvagio.',
        flavor: '"Il sarcasmo è in effetti la forma più bassa di arguzia. Ma, rispondendo alla vostra critica, signore, è pur sempre una forma di arguzia."',
        examples: `<p>Al Noble vengono mostrati Marianna, Alex e Abdallah. Marianna e Abdallah sono buoni, e Alex è malvagio.</p><p>Il Noble scopre Doug, Lachlan e Ben. Doug è l’Empath. Lachlan è lo Saint. Ben è il Recluse, che ha registrato come malvagio per il Noble.</p><p>Nella terza notte, il Pit-Hag trasforma Amy nel Noble. Amy scopre che Evin, Sarah o Julian è malvagio. Tuttavia, Sarah è la Spy malvagia e ha registrato come buona, e Julian è il Po, che è anch’esso malvagio.</p>`,
        howToRun: `<p>Durante la preparazione della prima notte, contrassegna i segnalini personaggio di due giocatori buoni con i promemoria <strong>KNOW</strong> del Noble. Contrassegna un qualsiasi segnalino personaggio malvagio con il terzo promemoria <strong>KNOW</strong>.</p><p>Durante la prima notte, sveglia il Noble. Indica tutti e tre i giocatori contrassegnati <strong>KNOW</strong>. Rimetti a dormire il Noble.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Pixie",
        id:"pixie",	
        description: "Il Pixie finge di essere lo stesso personaggio di qualcun altro.",
        intro: `<ul><li>Nella prima notte, il Pixie scopre un Townsfolk in gioco. Lo Storyteller sceglie quale Townsfolk sia. Il Pixie non scopre quale giocatore abbia questo personaggio.</li><li>Se il giocatore Pixie finge di essere questo Townsfolk, ottiene l’abilità di questo Townsfolk quando il Townsfolk muore. Può aver parlato apertamente di essere il personaggio per un giorno, oppure aver finto di essere il personaggio ogni giorno di questa partita, oppure aver accusato il Townsfolk di mentire—lo Storyteller giudica se il giocatore è stato convincente, nel “essere convinto di essere questo personaggio”.</li><li>Quando il giocatore Townsfolk muore, il Pixie non lo scopre e non gli viene detto di aver ottenuto una nuova abilità. Può scoprire che ciò è avvenuto se si sveglia di notte e inizia a ottenere informazioni, oppure se gli viene chiesto di scegliere giocatori.</li><li>Se il giocatore di cui il Pixie ha scoperto il ruolo cambia personaggio e poi muore, il Pixie diventa il Townsfolk che aveva scoperto, non il nuovo personaggio.</li></ul>`,
        ability: 'Inizi sapendo 1 Townsfolk in gioco. Se eri convinto di essere questo personaggio, ottieni la sua abilità quando muore.',
        flavor: '"Girotondo nel giardino, vai.<br>Le bambine corrono qua e là.<br>I bambini si arrampicano sull’albero.<br>Quale di questi dovrebbe essere il Pixie?<br>Le dame sorridono e vanno in città.<br>I lord con l’ascia abbattono la foresta.<br>What\'s yours is mine. What\'s mine, divine.<br>Sciocco piccolo Pixie, io."',
        examples: `<p>Amy è il Pixie e sa che il General è in gioco. Per tre giorni, Amy afferma che il giocatore General sta mentendo, perché lei è il General. Il General viene giustiziato. Quella notte, Amy ottiene l’abilità del General e da ora in poi ottiene informazioni ogni notte.</p><p>Doug è il Pixie drunk. scopre che il Lycanthrope è in gioco. Non c’è alcun Lycanthrope in gioco, ma il Fearmonger bluffa come Lycanthrope. Il Fearmonger muore. Lo Storyteller, fingendo che Doug abbia l’abilità del Lycanthrope, sveglia Doug e Doug sceglie un giocatore da “attaccare” ogni notte. Non muore nessuno perché Doug non ha l’abilità del Lycanthrope.</p><p>Nel primo giorno, il giocatore Pixie afferma di essere il Soldier. Anche il vero Soldier afferma di essere il Soldier. Il giocatore Pixie non lo contesta. Quando il Soldier muore, il giocatore Pixie non ottiene l’abilità del Soldier, poiché lo Storyteller ritiene che il Pixie non abbia finto in modo convincente di essere il Soldier.</p>`,
        howToRun: `<p>Durante la prima notte, contrassegna un segnalino personaggio Townsfolk con il promemoria <strong>MAD</strong> del Pixie. Sveglia il Pixie. Mostragli questo segnalino personaggio Townsfolk. Rimetti a dormire il Pixie.</p><p>Se il Townsfolk contrassegnato <strong>MAD</strong> muore e ritieni che il giocatore Pixie sia stato sufficientemente <strong>convinto</strong> di essere questo personaggio, sostituisci il promemoria <strong>MAD</strong> con il promemoria <strong>HAS ABILITY</strong>. Il Pixie ora ha l’abilità di questo Townsfolk e si sveglierà di notte quando questo Townsfolk normalmente si sveglierebbe.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Poppy Grower",
        id:"poppygrower",	
        description: "Il Poppy Grower impedisce ai giocatori malvagi di scoprire chi sono gli uni gli altri.",
        intro: `<ul><li>Il Demone scopre comunque tre personaggi non in gioco che sono sicuri da usare come bluff.</li><li>Se il Poppy Grower muore, il Demone e i Minion scoprono chi sono gli uni gli altri, come se fosse di nuovo la prima notte.</li><li>Se il Poppy Grower diventa drunk o avvelenato, i Demone e i Minion non scoprono improvvisamente chi sono gli uni gli altri. Se il Poppy Grower è drunk o avvelenato quando muore, i Demone e i Minion non scoprono chi sono gli uni gli altri, poiché il Poppy Grower non ha alcuna abilità quella notte.</li><li>Un Traveller malvagio scopre comunque quale giocatore è il Demone quando quel Traveller entra in gioco.</li></ul>`,
        ability: 'I Minion e i Demone non si conoscono tra loro. Se muori, scoprono chi sono gli uni gli altri quella notte.',
        flavor: '"Nei boschetti nascosti della foresta profonda dimora il papavero nero. Vedere la sua baldoria è restarne incantati. Sentirne l’aroma denso significa perdersi per sempre, schiavi degli dèi della luce e dell’oscurità."',
        examples: `<p>L’Imp, il Poisoner e la Witch sono in gioco. Nella prima notte, l’Imp si sveglia per scoprire tre personaggi non in gioco, ma non scopre quali giocatori sono Minion. Il Poisoner e la Witch non si svegliano per scoprire chi sono gli uni gli altri e non scoprono chi è il Demone.</p><p>Il Poppy Grower viene giustiziato e muore. Quella notte, lo Shabaloth scopre quali giocatori sono i Minion. Il Godfather morto e il Baron vivo si svegliano, si guardano negli occhi e scoprono quale giocatore è lo Shabaloth.</p><p>Il Poppy Grower è drunk. Nella prima notte, i giocatori malvagi scoprono chi sono gli uni gli altri, come di norma. Nella quarta notte, il Demone uccide il Poppy Grower. I Demone e i Minion non si svegliano per scoprire di nuovo chi sono gli uni gli altri, perché il Poppy Grower è drunk.</p>`,
        howToRun: `<p>Durante la prima notte, sveglia il Demone. Mostra il segnalino informazione <strong>THESE CHARACTERS ARE NOT IN PLAY</strong>, poi tre segnalini personaggio buoni qualsiasi che non sono in gioco. Poi rimetti a dormire il Demone. Non eseguire i passaggi Minion Info e Demone Info.</p><p>Se il Poppy Grower muore, contrassegnalo con il promemoria <strong>EVIL WAKES</strong>. Quella notte, sveglia i Minion e lascia che si guardino negli occhi. Mostra il segnalino informazione <strong>THIS IS THE DEMONE</strong>, poi indica il Demone. Rimetti a dormire i Minion. Sveglia il Demone. Mostra il segnalino informazione <strong>THESE ARE YOUR MINIONS</strong>, poi indica i Minion. Rimetti a dormire il Demone.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Preacher",
        id:"preacher",	
        description: `Il Preacher rimuove le abilità dei Minion dei giocatori selezionati.`,
        intro: "",
        ability: 'Ogni notte, scegli un giocatore: un Minion, se scelto, lo scopre. Tutti i Minion scelti non hanno abilità.',
        flavor: '"È meglio essere ricchi e sani che poveri e malati."',
        examples: `<p>Alex è il Preacher. Nella prima notte, il Preacher sceglie il Fearmonger. Il Fearmonger perde la sua abilità e scopre di essere stato scelto dal Preacher. Nella seconda notte, il Preacher sceglie lo Slayer. Non succede nulla perché lo Slayer non è un Minion. Nella terza notte, il Preacher sceglie il Po. Non succede nulla perché il Po non è un Minion. Nella quarta notte, il Preacher sceglie il Poisoner. Il Poisoner perde la sua abilità e scopre di essere stato scelto dal Preacher.</p><p>Il Preacher ha scelto in precedenza la Spy, lo Saint, il Drunk e il Goblin. La Spy e il Goblin non hanno abilità, quindi la Spy non vede il Grimorio ogni notte e il Goblin non può vincere venendo giustiziato. Il Preacher diventa drunk. La Spy e il Goblin riottengono le loro abilità. La Spy vede il Grimorio quella notte e il Goblin vincerà se viene giustiziato. Il Preacher torna sobrio, quindi di nuovo la Spy e il Goblin non hanno abilità. La Spy muore. Il Preacher muore. Il Goblin riottiene la sua abilità, ma la Spy no, perché la Spy è morta.</p>`,
        howToRun: `<p>Ogni notte, sveglia il Preacher e fagli scegliere un giocatore. Se sceglie un Minion, metti un segnalino promemoria <strong>PREACHED</strong> accanto a quel Minion. Rimetti a dormire il Preacher. Se applicabile, sveglia il Minion scelto dal Preacher stanotte, mostrargli la carta <strong>THIS CHARACTER SELECTED YOU</strong> e il segnalino del Preacher. Rimetti a dormire il Minion.</p><p>Da questo momento, quel Minion non ha abilità. Se normalmente si sveglierebbe di notte per fare una scelta, compiere un’azione o scoprire informazioni grazie alla sua abilità, non lo fa più. Se la sua abilità avrebbe altrimenti un effetto sul gioco mentre è contrassegnato dal segnalino <strong>PREACHED</strong>, tale effetto non si verifica.</p><p>Se il Preacher muore, rimuovi tutti i segnalini <strong>PREACHED</strong> dai Minion interessati. I Minion riottengono le loro abilità. I Minion con abilità una-volta-per-partita già usate non ottengono un altro utilizzo di quell’abilità. I Minion interessati non vengono informati che il Preacher è morto, ma potrebbero capirlo quando iniziano a svegliarsi di nuovo, ecc.</p><p>Se un Preacher diventa drunk o avvelenato, i Minion che hanno perso le loro abilità a causa del Preacher le riottengono, ma le perdono di nuovo quando il Preacher torna sano e sobrio.</p><p>Se un Minion scelto dal Preacher in seguito diventa un diverso tipo di personaggio (cioè non un Minion), non è più influenzato dall’abilità del Preacher. Rimuovi il relativo segnalino promemoria <strong>PREACHED</strong>. Inoltre, i giocatori malvagi non sono influenzati dall’abilità del Preacher solo perché sono malvagi: devono essere esplicitamente un personaggio Minion per essere influenzati.</p><p>In modo simile, un non-Minion che in seguito diventa un Minion non è influenzato dall’essere stato scelto dal Preacher prima di diventare un Minion. Se il Preacher lo sceglie dopo che è diventato un Minion, l’abilità del Preacher funziona normalmente.</p><p>Se un Minion predicato muore e viene resuscitato, non riottiene la sua abilità: rimane predicato finché il Preacher è ancora vivo.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Princess",
        id:"princess",	
        description: `La Princess decide quale giocatore muore per primo.`,
        intro: "<ul><li>Affinché l’abilità della Princess funzioni, il giocatore nominato dalla Princess deve essere quello giustiziato. I giocatori giustiziati ma nominati da altri non contano.</li><li>Il giocatore giustiziato non deve morire affinché l’abilità della Princess funzioni.</li><li>Gli esili non contano per l’abilità della Princess.</li><li>Se la Princess è drunk durante il giorno e poi sobria di notte, impedisce al Demone di uccidere. Se la Princess è sobria durante il giorno ma drunk di notte, non lo impedisce.</li><li>Di notte, le uccisioni non causate dal Demone avvengono normalmente.</li><li>Di notte, il Demone sceglie comunque un giocatore da uccidere, ma quel giocatore non muore. Altre parti dell’abilità del Demone, come avvelenare giocatori, fornire informazioni false, ecc., avvengono normalmente.</li><li>La Princess non è obbligata a nominare nel suo 1° giorno.</li><li>Se una Princess viene creata a partita iniziata e nel suo 1° giorno nomina e giustizia un giocatore, il Demone non uccide quella notte.</li></ul>",
        ability: 'Nel tuo 1° giorno, se hai nominato e fatto giustiziare un giocatore, il Demone non uccide stanotte.',
        flavor: '"Le nostre parole sono segugi, legati da fili di seta, miei cari lord. Che la gentilezza li intrecci saldi, affinché le redini non si disfino e non lacerino la nostra corte."',
        examples: `<p>La Princess nomina il Preacher. Il Preacher viene giustiziato e muore. Quella notte, il Vortox sceglie il Pixie, che non muore. Il Town Crier scopre che un Minion ha nominato oggi, che è un’informazione falsa a causa del Vortox.</p><p>Nella notte 4, il Pit-Hag trasforma il Dreamer nella Princess. Quel giorno, la Princess nomina lo Zealot, che viene giustiziato. Quella notte, il Kazali sceglie la Princess, che non muore.</p>`,
        howToRun: `<p>Se la Princess nomina e fa giustiziare un giocatore, contrassegna il Demone con il promemoria <strong>DOESN'T KILL</strong>.</p><p>Stanotte, se il Demone dovrebbe svegliarsi per scegliere un giocatore, sveglialo normalmente. Il Demone non uccide.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Shugenja",
        id:"shugenja",	
        description: `Lo Shugenja si fida dei giocatori alla sua sinistra o alla sua destra.`,
        intro: "<ul><li>Il giocatore malvagio più vicino è il giocatore con il minor numero di passi dallo Shugenja al giocatore malvagio.</li><li>Se i giocatori malvagi sono “equidistanti”, significa che il giocatore malvagio più vicino in senso orario è alla stessa distanza in passi del giocatore malvagio più vicino in senso antiorario.</li><li>Se i giocatori malvagi sono equidistanti, lo Storyteller fornisce informazioni “arbitrarie” allo Shugenja. Ciò significa che lo Storyteller sceglie se dire allo Shugenja che il giocatore malvagio più vicino è in senso orario o antiorario.</li><li>Lo Shugenja non sa se le informazioni ricevute sono arbitrarie o meno.</li><li>Lo Shugenja non scopre a quanti passi di distanza si trovi il giocatore malvagio.</li><li>Se uno Shugenja viene creato a partita iniziata, lo Shugenja si sveglia quella notte per ricevere le sue informazioni.</li><li>Lo Storyteller comunica con lo Shugenja indicando con un dito la direzione appropriata, ma può usare altri metodi se lo desidera.</li></ul>",
        ability: 'Inizi sapendo se il giocatore malvagio più vicino è in senso orario o antiorario. Se è equidistante, questa informazione è arbitraria.',
        flavor: `Questo è un sogno. Anche quello è un sogno. Tutto è un sogno.`,
        examples: `<p>L’Organ Grinder è a 2 passi di distanza dallo Shugenja in senso orario. Il Fearmonger è a 3 passi di distanza dallo Shugenja in senso antiorario. Lo Shugenja si sveglia e scopre che il giocatore malvagio più vicino è in senso orario.</p><p>Il Marionette è a 1 passo di distanza dallo Shugenja in senso orario. La Widow è a 1 passo di distanza dallo Shugenja in senso antiorario. Lo Shugenja si sveglia e lo Storyteller sceglie di dire allo Shugenja che il giocatore malvagio più vicino è in senso orario.</p>`,
        howToRun: `<p>Durante la prima notte, sveglia lo Shugenja. Se il giocatore malvagio più vicino è in senso orario, indica con il dito orizzontalmente in quella direzione. Se il giocatore malvagio più vicino è in senso antiorario, indica con il dito orizzontalmente in quella direzione. Se i due giocatori malvagi più vicini sono equidistanti, indica con il dito orizzontalmente in una delle due direzioni. Rimetti a dormire lo Shugenja.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Steward",
        id:"steward",	
        description: `Lo Steward conosce 1 giocatore buono.`,
        intro: "<ul><li>Lo Steward scopre un giocatore, ma non il suo personaggio.</li><li>Lo Steward scopre le sue informazioni nella prima notte della partita.</li><li>Se viene creato a partita iniziata, allora lo Steward scopre le sue informazioni quella notte.</li></ul>",
        ability: 'Inizi sapendo 1 giocatore buono.',
        flavor: `"Come OSATE accusare Sua Signoria di cattiva condotta? La conosco da tutta la vita! Tutti e nove gli anni!"`,
        examples: `<p>Lo Steward scopre che Alex è buono. Alex è l’Undertaker. Il Pit-Hag trasforma il Poppy Grower nello Steward. Quella notte, lo Steward scopre che Abdallah è buono. Abdallah è la Spy ed è registrata come buona.</p>`,
        howToRun: `<p>Durante la preparazione della prima notte, metti il promemoria <strong>KNOW</strong> accanto a un qualsiasi segnalino personaggio buono. Durante la prima notte, sveglia lo Steward. Indica il giocatore contrassegnato <strong>KNOW</strong>. Rimetti a dormire lo Steward.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Village Idiot",
        id:"villageidiot",	
        description: `I Village Idiot sono un gruppo che scopre l’allineamento dei giocatori.`,
        intro: "<ul><li>Il Village Idiot che è drunk viene scelto dallo Storyteller durante la preparazione della partita.</li><li>Possono esserci uno, due o tre Village Idiot in gioco, indipendentemente dal numero di giocatori.</li><li>Se c’è un solo Village Idiot in gioco, è sobrio.</li><li>Il Village Idiot drunk può ottenere informazioni vere.</li><li>Quando i Village Idiot vengono aggiunti alla partita durante la preparazione, sostituiscono altri Townsfolk.</li><li>Se un Village Idiot viene creato a partita iniziata, ne viene creato solo uno.</li><li>I Village Idiot agiscono uno alla volta, non tutti insieme.</li><li>Se tutti i Village Idiot sobri escono dal gioco, il Village Idiot drunk rimanente resta drunk.</li><li>Se un Village Idiot sobrio diventa drunk o avvelenato per altri motivi, il Village Idiot drunk resta drunk.</li></ul>",
        ability: 'Ogni notte, scegli un giocatore: scopri il suo allineamento. [+0 a +2 Village Idiot. 1 degli extra è drunk]',
        flavor: `"Le rose sono blu e le violette sono rosse, per favore inverti ciò che ho appena detto."`,
        examples: `<p>Doug, Lewis e Amy sono tutti Village Idiot. Doug è drunk. Di notte, tutti scelgono Evin, il Kazali. Doug scopre che Evin è buono. Lewis e Amy scoprono che Evin è malvagio.</p><p>Ben e Marianna sono Village Idiot. Marianna è drunk. Sarah è malvagia e bluffa come Village Idiot. Ben sceglie Sarah e scopre che è malvagia. Marianna sceglie il giocatore Heretic e scopre che è buono. Sarah afferma di aver scelto Ben e di aver scoperto che è malvagio.</p>`,
        howToRun: `<p>Durante la preparazione della partita, prima di mettere i segnalini personaggio nel sacchetto, sostituisci zero, uno o due segnalini Townsfolk con segnalini Village Idiot. Durante la preparazione della prima notte, contrassegna un Village Idiot con il promemoria <strong>DRUNK</strong>.</p><p>Durante ogni notte, sveglia un qualsiasi Village Idiot. Indica un giocatore. Mostra un pollice in su o un pollice in giù. Rimetti a dormire quel Village Idiot. Ripeti finché tutti i Village Idiot hanno agito.</p>`,
        group: "Townsfolk",
        script: "exp"
    },
    {
        name: "Damsel",
        id:"damsel",	
        description: "La Damsel deve evitare di essere scoperta dai Minion.",
        intro: `<ul><li>Se un Minion indovina che sei la Damsel e lo fa pubblicamente <i>(così che tutti i giocatori sappiano che è un Minion)</i>, i malvagi vincono.</li><li>Indipendentemente da quanti Minion siano in gioco, hanno una sola possibilità di indovinare, in totale. Se un Minion fa un tentativo ed è sbagliato, i tentativi futuri di questo Minion o di altri Minion non contano.</li><li>Se il Demone finge di essere un Minion e fa un tentativo, questo non conta come tentativo. I Minion possono comunque fare un tentativo e vincere.</li><li>I Minion possono fare un tentativo in qualsiasi momento.</li><li>Se la Damsel muore, non rischia più di essere indovinata da un Minion, poiché la Damsel perde la sua abilità quando è morta.</li><li>Potrebbe non esserci un Huntsman in gioco. Ma se c’è, e l’Huntsman sceglie la Damsel di notte, la Damsel diventa un Townsfolk non in gioco e non è più la Damsel. La Damsel scopre quale Townsfolk è diventata e da quel momento ha l’abilità di quel Townsfolk.</li></ul>`,
        ability: 'Tutti i Minion sanno che una Damsel è in gioco. Se un Minion ti indovina pubblicamente (una sola volta), la tua squadra perde.',
        flavor: 'Non toccare i capelli, tesoro."',
        examples: `<p>Marianna è la Damsel. Bluffa come il Lycanthrope. La Witch indovina che Marianna è la Damsel. I malvagi vincono.</p><p>Doug è la Damsel. Il Boomdandy indovina che Julian è la Damsel. Non succede nulla e la partita continua. Il Goblin indovina che Doug è la Damsel. Non succede nulla e la partita continua.</p>`,
        howToRun: `<p>Durante la prima notte, sveglia ogni Minion. Mostra il segnalino della Damsel. Rimetti a dormire ciascun Minion.</p><p>In qualsiasi momento durante la partita, se un Minion indovina pubblicamente quale giocatore è la Damsel ed è sbagliato, contrassegna la Damsel con il promemoria <strong>GUESS USED</strong>. I tentativi futuri dei giocatori Minion non hanno effetto.</p><p>In qualsiasi momento durante la partita, se un Minion indovina pubblicamente quale giocatore è la Damsel ed è corretto, la partita termina. Dichiara che la squadra malvagia vince.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Golem",
        id:"golem",	
        description: "Il Golem uccide il giocatore che nomina.",
        intro: `<ul><li>Quando il Golem nomina un giocatore, quel giocatore muore immediatamente. Il processo di nomina continua.</li><li>Se il Golem nomina il Demone, non succede nulla. Lo Storyteller non conferma né smentisce che il Golem abbia nominato e continua con il processo di voto come di norma. Lo Storyteller può dire “non succede nulla” se viene richiesta chiarezza.</li><li>Dopo che il Golem ha nominato una volta, che il nominato muoia o meno, il Golem non può più nominare per il resto della partita. È responsabilità del giocatore astenersi dal nominare, non dello Storyteller. Nominare deliberatamente quando non si dovrebbe è considerato barare.</li></ul>`,
        ability: 'Puoi nominare solo una volta per partita. Quando lo fai, se il nominato non è il Demone, muore.',
        flavor: '"Golem aiutare? Golem spaccare! Golem aiutare."',
        examples: `<p>Il Golem nomina il Poppy Grower. Il Poppy Grower muore. Il Golem non può più nominare per il resto della partita.</p><p>Il Golem nomina il Recluse. Lo Storyteller decide che il Recluse si registra come il Demone. Non succede nulla e lo Storyteller inizia a contare i voti per giustiziare il Recluse. Il Golem non può più nominare per il resto della partita.</p>`,
        howToRun: `<p>Se il Golem nomina un non-Demone, quel giocatore <strong>muore</strong>, poi il voto continua come di norma. Contrassegna il Golem con il promemoria <strong>MAY NOT NOMINATE</strong>.</p><p>Se il Golem nomina il Demone, il voto continua come di norma. <i>(Non dire perché.)</i> Contrassegna il Golem con il promemoria <strong>MAY NOT NOMINATE</strong>.</p><p class="modal__callout-box">Se il Golem nomina accidentalmente quando non dovrebbe, puoi scegliere se accettare o meno la nomina. È meglio non accettarla—purché tu ritenga che questo non confermi che un Golem è in gioco. Per mantenere l’equità, fai lo stesso anche per i giocatori che bluffano come Golem, ricordando loro che il Golem non può nominare più di una volta.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Hatter",
        id:"hatter",	
        description: "L’Hatter permette ai giocatori malvagi di cambiare personaggio.",
        intro: `<ul><li>Ogni giocatore malvagio può scegliere di diventare qualsiasi personaggio dello stesso tipo del proprio personaggio attuale.</li><li>Possono scegliere di non cambiare personaggio.</li><li>Se un giocatore diventa un nuovo personaggio, ottiene la nuova abilità, anche se era un’abilità “inizi sapendo” o un’abilità una-volta-per-partita che era già stata usata.</li><li>Una volta che un giocatore ha cambiato personaggio, l’abilità del personaggio precedente non ha più alcun effetto sulla partita.</li><li>Se un giocatore muore e poi diventa l’Hatter, i giocatori malvagi non cambiano personaggio quella notte.</li><li>Una volta che un personaggio è stato scelto, un secondo giocatore non può scegliere lo stesso personaggio. Se è già in gioco, il giocatore con quel personaggio deve scegliere un nuovo personaggio.</li></ul>`,
        ability: 'Se sei morto oggi o stanotte, i giocatori Minion e Demone possono scegliere di diventare nuovi personaggi Minion e Demone.',
        flavor: '"One Hat. Too Hat. Three Hat. Tea Hat. Fore Hat. Thrive Hat. Six Hat. Sticks Hat."',
        examples: `<p>L’Hatter muore. L’Ojo sceglie di diventare il No Dashii e il Devil's Advocate sceglie di diventare la Scarlet Woman.</p><p>Il Vigormortis ha ucciso il suo Pit-Hag, poi in seguito uccide l’Hatter. Entrambi i giocatori scelgono di rimanere gli stessi personaggi, così da non perdere gli effetti del Vigormortis.</p><p>L’Assassin uccide un giocatore. L’Hatter viene giustiziato. Quella notte, l’Assassin diventa il Mastermind e il Mastermind scuote la testa per dire di no per restare il Mastermind. Lo Storyteller scuote la testa per dire di no perché il personaggio Mastermind è già stato scelto e fa cenno al giocatore Mastermind di scegliere di nuovo, quindi sceglie Assassin. Il nuovo Assassin usa poi la sua nuova abilità per uccidere un giocatore.</p>`,
        howToRun: `<p>Se l’Hatter muore, contrassegnalo con il promemoria “Tea Party Tonight”.</p><p>Durante quella notte, sveglia i Minion e il Demone. Mostra loro il segnalino informazione “This Character Selected You”, poi il segnalino dell’Hatter. Ogni giocatore scuote la testa per dire di no oppure indica un altro personaggio dello stesso tipo del proprio personaggio attuale. Se un secondo giocatore finirebbe con lo stesso personaggio di un altro giocatore, scuoti la testa per dire di no e fagli cenno di scegliere di nuovo. Rimetti a dormire i giocatori. Rimuovi il promemoria “Tea Party Tonight”. Cambia ciascun giocatore nel personaggio che ha scelto.</p><p class="modal__callout-box">Regola opzionale: se l’Hatter muore, consenti al Demone di diventare un Minion e a un Minion di diventare un Demone. Questo può causare un po’ di caos tra la squadra malvagia mentre cercano di comunicare silenziosamente di notte su chi vuole essere il Demone.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Heretic",
        id:"heretic",	
        description: "L’Heretic trasforma una vittoria in una sconfitta e una sconfitta in una vittoria.",
        intro: `<ul><li>Se la partita termina perché la squadra dei buoni vince, allora tutti i giocatori buoni perdono e tutti i giocatori malvagi vincono.</li><li>Se la partita termina perché la squadra dei malvagi vince, allora tutti i giocatori malvagi perdono e tutti i giocatori buoni vincono.</li><li>L’abilità dell’Heretic si applica a tutte le condizioni di vittoria, inclusa la fine della partita dovuta al fatto che restano vivi solo due giocatori, alla morte del Demone o a un’abilità che termina la partita.</li><li>L’abilità dell’Heretic funziona anche quando l’Heretic è morto, ma non quando l’Heretic è drunk o avvelenato.</li></ul>`,
        ability: 'Chiunque vinca, perde e chiunque perda, vince, anche se sei morto.',
        flavor: '"Dopo che la grandine ha distrutto il tetto e frantumato il vetro delle finestre della Cattedrale, si scioglie di nuovo nella terra, come un agnello morente sotto il sole del deserto. Tale è la parabola del folle."',
        examples: `<p>Nel primo giorno, l’Heretic dichiara pubblicamente di essere l’Heretic. Quella notte, il Demone si uccide da solo. I malvagi vincono.</p><p>L’Heretic non rivela il proprio personaggio fino al giorno finale, quando tre giocatori sono vivi. L’Heretic convince la squadra dei buoni a giustiziare un giocatore buono, lasciando due giocatori vivi, uno dei quali è il Demone. I buoni vincono.</p><p>L’Heretic è morto. Lo Saint viene giustiziato. I buoni vincono.</p><p>L’Heretic è avvelenato. L’Assassin uccide il Demone. I buoni vincono.</p><p>Un Heretic è in gioco. Ci sono tre giocatori vivi. Il Demone viene giustiziato. I malvagi vincono.</p>`,
        howToRun: `<p>Se la partita termina e la squadra dei malvagi avrebbe vinto, dichiara che la squadra dei buoni vince e la squadra dei malvagi perde.</p><p>Se la partita termina e la squadra dei buoni avrebbe vinto, dichiara che la squadra dei malvagi vince e la squadra dei buoni perde.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Hermit",
        id:"hermit",	
        description: "L’Hermit in realtà non è davvero qui.",
        intro: `<ul><li>L’Hermit ha tutte le abilità di tutti gli altri Outsider presenti nello Script, tutte insieme. Non ha le abilità degli Outsider che non sono nello script.</li><li>Se uno script personalizzato ha più di 4 Outsider, l’Hermit ha tutte queste abilità Outsider.</li><li>Se una delle abilità Outsider continua dopo la morte, come quella del Recluse, l’Hermit mantiene quell’abilità quando muore, ma non mantiene le altre abilità Outsider.</li><li>Un Hermit con l’abilità del Drunk non sa di essere l’Hermit e le sue altre abilità Outsider funzionano normalmente. Un Hermit con l’abilità del Recluse può registrarsi come un personaggio diverso, ecc.</li><li>Se un Outsider ha una jinx, quella jinx si applica anche all’Hermit.</li><li>L’Hermit può essere rimosso dal gioco durante la preparazione, risultando in un Outsider in meno del normale. Se ciò accade, l’Hermit può comunque essere dato come bluff al Demone.</li></ul>`,
        ability: 'Hai tutte le abilità Outsider. [-0 o -1 Outsider]',
        flavor: '"Nei luoghi perduti e dimenticati della terra, la luce dell anima chiama."',
        examples: `<p>Marianna è l’Hermit e ha le abilità del Klutz, del Butler e del Recluse. Ogni notte sceglie un giocatore come suo padrone a causa dell’abilità del Butler. Il Ravenkeeper muore e scopre che lei è il Lord of Typhon, a causa dell’abilità del Recluse. Marianna viene giustiziata e sceglie un giocatore a causa dell’abilità del Klutz. Sceglie il Wizard. I buoni perdono.</p><p>Lewis è l’Hermit e ha le abilità del Drunk, del Mutant e del Sweetheart. Pensando di essere l’Exorcist, sceglie un giocatore ogni notte. Lewis dice di pensare di poter essere il Drunk, quindi lo Storyteller lo giustizia a causa dell’abilità del Mutant. A causa dell’abilità del Sweetheart, l’Alchemist ora è drunk.</p>`,
        howToRun: `<p>Durante la preparazione, puoi rimuovere un segnalino Outsider e aggiungere un segnalino Townsfolk.</p><p>Quando appropriato, tratta l’Hermit come se fosse gli altri Outsider, inclusi svegliarlo di notte e usare i segnalini promemoria degli altri Outsider. Se l’Hermit duplica un Outsider in gioco, usa invece i promemoria <strong>1</strong>, <strong>2</strong> e <strong>3</strong> dell’Hermit.</p><p class="modal__callout-box">Se le abilità Outsider entrano in conflitto, inventa una regola per risolvere il conflitto e comunicala al gruppo. Per esempio, per un Hermit-Butler-Zealot, puoi dichiarare che l’Hermit deve votare quando vota il suo padrone.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Ogre",
        id:"ogre",	
        description: "L’Ogre è il migliore amico di qualcuno.",
        intro: `<ul><li>Il giocatore scelto dall’Ogre non cambia, anche se l’Ogre è drunk o avvelenato quando lo sceglie.</li><li>L’Ogre diventa immediatamente dello stesso allineamento del giocatore scelto nella prima notte, anche se l’Ogre è drunk o avvelenato.</li><li>L’Ogre non viene informato del proprio allineamento all’inizio della partita.</li><li>Se l’Ogre cambia allineamento per altri motivi, l’Ogre scopre il suo nuovo allineamento, come di norma.</li><li>Se un Ogre viene creato a partita iniziata, l’Ogre sceglie un giocatore quella notte e diventa del suo allineamento.</li></ul>`,
        ability: "Nella tua 1ª notte, scegli un giocatore (non te stesso): diventi del suo allineamento (non sai quale), anche se sei drunk o avvelenato.",
        flavor: '"*grunt* *grin* *grunt*"',
        examples: `<p>Nella prima notte, l’Ogre sceglie il Summoner. L’Ogre diventa malvagio e rimane malvagio per il resto della partita.</p><p>Nella prima notte, l’Ogre sceglie la Banshee. L’Ogre rimane buono. Nella terza notte, il Mezepheles rende la Banshee malvagia. L’Ogre rimane buono.</p>`,
        howToRun: `<p>Durante la prima notte, sveglia l’Ogre. L’Ogre indica un giocatore. Rimetti a dormire l’Ogre. Se l’Ogre ha indicato un giocatore malvagio, gira il segnalino personaggio dell’Ogre a faccia in giù per rappresentare che l’Ogre è malvagio.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Plague Doctor",
        id:"plaguedoctor",	
        description: "Il Plague Doctor introduce in gioco un’abilità Minion aggiuntiva.",
        intro: `<ul><li>Lo Storyteller sceglie quale abilità Minion viene ottenuta.</li><li>Questa abilità rimane in vigore per il resto della partita.</li><li>Nulla cambia per il resto per lo Storyteller: non diventa malvagio, non diventa un giocatore, non è un bersaglio valido per altre abilità e non può votare né nominare.</li><li>Se tutte le abilità Minion sono già in gioco, lo Storyteller può ottenere un’abilità Minion già in gioco.</li><li>Se il Plague Doctor è drunk o avvelenato quando muore, lo Storyteller non ottiene un’abilità Minion, nemmeno quando il Plague Doctor torna sobrio e sano.</li></ul>`,
        ability: 'Quando muori, lo Storyteller ottiene un’abilità Minion.',
        flavor: '"Pleauze shtay shtill. Thinks nid tiime for hillink. Myrhh-myrhh."',
        examples: `<p>Il Plague Doctor muore. Lo Storyteller ottiene l’abilità del Poisoner e sceglie un giocatore da avvelenare ogni notte per il resto della partita.</p><p>Il Plague Doctor viene giustiziato e lo Storyteller ottiene l’abilità del Cerenovus. Quella notte, il Pit-Hag trasforma la Witch nel Cerenovus. Ora ci sono due abilità Cerenovus in gioco: quella dello Storyteller e quella del nuovo Cerenovus.</p><p>Il Plague Doctor è morto e lo Storyteller ha avuto l’abilità dell’Organ Grinder per due giorni. Il Plague Doctor viene reso drunk dal Minstrel. Lo Storyteller mantiene comunque l’abilità dell’Organ Grinder, poiché l’ha ottenuta quando il Plague Doctor è morto e il fatto che il Plague Doctor sia ora drunk non ha effetto su questo.</p>`,
        howToRun: `<p>Quando il Plague Doctor muore, posiziona un segnalino personaggio Minion non in gioco al centro del lato sinistro del Grimorio. Contrassegnalo con il promemoria <strong>STORYTELLER ABILITY</strong> del Plague Doctor. Se applicabile, aggiungi un segnalino notturno al foglio notturno.</p>Quando questo Minion normalmente agirebbe, le scelte pertinenti vengono effettuate dallo Storyteller.<p></p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Politician",
        id:"politician",	
        description: `Il Politician cambia squadra se sta perdendo.`,
        intro: "",
        ability: 'Se sei stato il giocatore maggiormente responsabile della sconfitta della tua squadra, cambi allineamento e vinci, anche se sei morto.',
        flavor: '"I\'m glad you asked that question. Truly, I am. But I think the REAL question here is…"',
        group: "Outsider",
        examples: `<p>Il Politician ha cercato di far giustiziare il Demone per tutta la partita, senza successo. Con solo tre giocatori vivi, il Politician convince il gruppo a non giustiziare, poiché qualcuno afferma di essere il Mayor. Non avviene alcuna esecuzione e i malvagi vincono perché un Minion stava bluffando come Mayor. Anche il Politician vince.</p><p>Nel giorno finale, il Politician vota contro l’Empath e dice al gruppo che l’Empath è malvagio. Viene invece giustiziato lo Saint. Lo Storyteller giudica che la squadra dei buoni abbia perso a causa delle proprie azioni collettive, non solo per i cattivi consigli del Politician. I buoni perdono e anche il Politician perde.</p><p>Il Politician, credendo che i malvagi stiano vincendo, bluffa come Atheist. Lo Storyteller viene giustiziato. I malvagi vincono e anche il Politician vince.</p><p>Nel giorno finale, il Politician pareggia il voto, forzando l’assenza di un'esecuzione. Quella notte, il Demone uccide un giocatore, facendo vincere i malvagi. Anche il Politician vince.</p>`,
        howToRun: `<p>Quando la partita termina, considera l’influenza che il Politician ha avuto sul risultato specifico di quale squadra ha vinto. Se il Politician è stato la forza principale dominante nel far vincere la squadra avversaria, cambia allineamento e vince con quella squadra. In tutte le altre situazioni, il Politician mantiene lo stesso allineamento e vince o perde di conseguenza.</p><p>Nota che il Politician cambia allineamento solo alla fine della partita, quindi anche se sta giocando per i malvagi, risulta comunque buono per qualsiasi abilità che controlla l’allineamento.</p><p>Se il Politician è drunk o avvelenato durante la partita non importa, tranne se la partita termina in quel momento. In tal caso, non può cambiare allineamento per vincere, indipendentemente da quanto siano stati significativi i suoi sforzi per la squadra avversaria.</p>`,
        script: "exp"
    },
    {
        name: "Puzzlemaster",
        id:"puzzlemaster",	
        description: "Il Puzzlemaster cerca di capire chi è drunk.",
        intro: "<ul><li>Un giocatore è drunk per l’intera partita. Nella maggior parte dei casi sarà un Townsfolk, ma può essere anche un Outsider. Questo giocatore non sa di essere drunk.</li><li>Una volta per partita, il Puzzlemaster può provare a indovinare quale giocatore è. Può farlo pubblicamente o privatamente. Qualunque sia il tentativo, lo Storyteller dice privatamente al Puzzlemaster il nome di un giocatore. Se il Puzzlemaster ha indovinato correttamente, scopre quale giocatore è il Demone. Se il Puzzlemaster ha sbagliato, scopre invece un giocatore diverso.</li><li>Il Puzzlemaster non viene informato se ha indovinato correttamente o meno.</li><li>Conta come tentativo riuscito solo il giocatore reso drunk dal Puzzlemaster. I giocatori resi drunk in altri modi non contano.</li><li>Se il Puzzlemaster muore, il giocatore drunk rimane drunk. Un Puzzlemaster morto non può fare un tentativo, poiché non ha più quella parte della sua abilità.</li></ul>",
        ability: '1 giocatore è drunk, anche se muori. Se indovini (una volta) chi è, scopri il giocatore Demone, ma se sbagli ottieni informazioni false.',
        flavor: '"Quando si inizia a pensare che una cosa sia semplicemente un’altra cosa, di solito si è sull’orlo di un errore. Pazienza, pazienza. Non confondere il giusto e il dovuto con l’essere e il non essere."',
        examples: `<p>Alex è il Demone. Sarah è l’Empath che è stata resa drunk dal Puzzlemaster e sta ottenendo informazioni false. Il Puzzlemaster dichiara pubblicamente che Sarah è la drunk e lo Storyteller gli dice privatamente “Alex è il Demone”.</p><p>Lewis è il Demone. Ben è morto ed è drunk a causa del Puzzlemaster. Marianna è viva ed è drunk a causa del Sailor. Il Puzzlemaster indovina privatamente Marianna e lo Storyteller gli dice privatamente “Abdallah è il Demone”.</p>`,
        howToRun: `<p>Durante la preparazione della prima notte, contrassegna un qualsiasi giocatore con il promemoria <strong>DRUNK</strong> del Puzzlemaster. Questo giocatore è <strong>drunk</strong>.</p><p>In qualsiasi momento della partita, il Puzzlemaster può tentare di indovinare un giocatore, pubblicamente oppure tramite una conversazione privata con te. Se il giocatore indovinato è contrassegnato dal promemoria <strong>DRUNK</strong> del Puzzlemaster, comunica privatamente al Puzzlemaster quale giocatore è il Demone. Se il giocatore indovinato non è contrassegnato dal promemoria <strong>DRUNK</strong> del Puzzlemaster, comunica privatamente al Puzzlemaster il nome di un giocatore non-Demone. <i>(Non dire se ha indovinato correttamente o meno.)</i> In entrambi i casi, contrassegna il Puzzlemaster con il promemoria <strong>GUESS USED</strong>.</p><p class="modal__callout-box">Anche se puoi rendere drunk un Minion o il Demone con l’abilità del Puzzlemaster, fallo solo se hai un’ottima ragione. È quasi sempre meglio selezionare un giocatore Townsfolk.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Snitch",
        id:"snitch",	
        description: "Lo Snitch fornisce informazioni alla squadra malvagia.",
        intro: `<ul><li>I Minion scoprono tre personaggi non in gioco all’inizio della partita, proprio come fa il Demone.</li><li>Questi personaggi possono essere gli stessi tre appresi dal Demone, oppure personaggi diversi.</li><li>Ciascun Minion può scoprire personaggi diversi dagli altri, oppure tutti possono scoprire gli stessi tre personaggi.</li></ul>`,
        ability: 'Ogni Minion ottiene 3 bluff.',
        flavor: '"È stato John."',
        examples: `<p>Nella prima notte, il Demone e i suoi due Minion scoprono tutti che l’Empath, l’Innkeeper e il Golem non sono in gioco.</p><p>Nella prima notte, il Demone scopre che il Fool, il Monk e lo Saint non sono in gioco. Il Mastermind scopre che il Fool, il Monk e lo Saint non sono in gioco. La Witch scopre che il Fool, la Flowergirl e il Barber non sono in gioco. Il Fearmonger scopre che il Noble, l’Insomniac e l’Heretic non sono in gioco.</p><p>Nella quarta notte, il Pit-Hag crea uno Snitch. Tutti i Minion scoprono tre personaggi non in gioco.</p>`,
        howToRun: `<p>Durante la prima notte, sveglia un Minion. Mostra il segnalino informazione <strong>THESE CHARACTERS ARE NOT IN PLAY</strong>, poi mostra tre segnalini personaggio non in gioco. Rimetti a dormire il Minion. Ripeti questo processo finché tutti i Minion non hanno scoperto tre personaggi non in gioco.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Zealot",
        id:"zealot",	
        description: "Lo Zealot vota.",
        intro: `<ul><li>Se ci sono 5 o più giocatori vivi, lo Zealot deve votare per ogni nomina. Se ci sono 4 o meno giocatori vivi, lo Zealot può scegliere se votare o meno.</li><li>I Traveller contano come giocatori vivi.</li><li>Lo Zealot può votare come un normale giocatore morto quando è morto.</li><li>Lo Zealot non deve votare per gli esili.</li><li>Uno Zealot deve votare anche se pensa di poter essere drunk o avvelenato.</li><li>Non è responsabilità dello Storyteller controllare lo Zealot. È responsabile del proprio voto. Non votare deliberatamente quando si dovrebbe è considerato barare.</li></ul>`,
        ability: 'Ogni giorno, se indovini pubblicamente quali giocatori sono Minion e quali sono Demone, i buoni vincono.',
        flavor: '"Mi piace parlare con te. La tua mente mi affascina. Assomiglia alla mia, con la differenza che tu sei pazzo."',
        examples: `<p>Ci sono 7 giocatori vivi. Lo Zealot vota per l’Alsaahir, il Summoner, l’Ogre e la Banshee. Il giorno successivo, ci sono 5 giocatori vivi. Lo Zealot vota per lo Yaggababble e per la High Priestess. Il giorno successivo, ci sono 3 giocatori vivi. Lo Zealot vota per lo Yaggababble, ma sceglie di non votare per la High Priestess.</p><p>Ci sono 9 giocatori vivi. Lo Zealot è morto. Lo Zealot non vota per 3 giorni e usa il suo gettone voto quando restano solo 3 giocatori vivi per votare il Farmer.</p>`,
        howToRun: `<p>Durante ogni nomina, se ci sono 5 o più giocatori vivi, lo Zealot deve alzare la mano per votare.</p><p class="modal__callout-box">Se lo Zealot dimentica accidentalmente di votare, non conteggiare il voto dello Zealot. Se lo conteggi, il totale sarà più alto di quanto dovrebbe essere e tutti i giocatori sapranno quale giocatore è lo Zealot, il che è ingiusto per la squadra malvagia. Gli errori capitano. Prosegui semplicemente la partita e parlane in privato più tardi.</p>`,
        group: "Outsider",
        script: "exp"
    },
    {
        name: "Boffin",
        id:"boffin",	
        description: "Il Boffin replica un’abilità buona.",
        intro: `<ul><li>Finché il Boffin è in vita, il Demone ha una singola abilità di un Townsfolk o di un Outsider.</li><li>Se il Demone è drunk o avvelenato, il Demone mantiene questa abilità buona. Se il Boffin è drunk o avvelenato, il Demone perde temporaneamente questa abilità buona.</li><li>Se il Demone muore e ha un’abilità che funziona mentre è morto, come la Sweetheart, il Demone mantiene questa abilità.</li><li>Se viene creato un nuovo Demone, ad esempio tramite una Scarlet Woman o un Barber, questo nuovo Demone ha un’abilità dal Boffin. Questa abilità può essere diversa da quella del Demone precedente.</li><li>Se ci sono più Demone in vita, solo un Demone in vita ha un’abilità dal Boffin.</li><li>Se il Demone ha un’abilità che modifica la preparazione, come un Choirboy, queste modifiche vengono applicate durante la preparazione, come di consueto.</li><li>Sia il Demone sia il Boffin scoprono quale abilità buona possiede il Demone. Lo Storyteller può svegliare questi giocatori separatamente o insieme.</li><li>Il personaggio non in gioco può essere 1 dei 3 bluff del Demone.</li><li>Il Demone si sveglia anche di notte nel momento in cui il personaggio <strong>buono</strong> normalmente si sveglierebbe.</li></ul>`,
        ability: "Il Demone (anche se drunk o avvelenato) ha l’abilità di un personaggio buono non in gioco. Entrambi sapete quale.",
        flavor: '"Idrogeno stellare, vasto, inerte; carbonio, ossigeno, gas di neon, tutto rovinato. Caos molecolare, entropia, genera nuovi fenomeni cosmici, rinascita dal caos atomico, materia densa che collassa. Tutto in una minuscola bottiglietta."',
        examples: `<p>L’Imp ha l’abilità della Virgin. L’Alsaahir nomina l’Imp e viene immediatamente giustiziato.</p><p>Il Lord of Typhon ha l’abilità della Chambermaid. Ogni notte, il Lord of Typhon si sveglia, sceglie due giocatori e scopre quanti si sono svegliati stanotte. Nella 4ª notte, il Boffin è drunk, quindi il Demone non ha l’abilità della Chambermaid e non si sveglia.</p><p>Il Kazali ha l’abilità della Banshee. Il Kazali muore di notte e la Scarlet Woman diventa il Kazali. Il Kazali morto può nominare e votare due volte al giorno.</p>`,
        howToRun: `<p>Durante la preparazione della partita, prima di inserire i segnalini personaggio nel sacchetto, applica tutte le modifiche indicate tra parentesi sulle due abilità del personaggio Demone. Successivamente, posiziona questo secondo segnalino personaggio accanto al segnalino del Demone.</p><p>Durante la 1ª notte, sveglia il Boffin e il Demone. Mostra il segnalino informazione <strong>THIS CHARACTER SELECTED YOU</strong>, poi il segnalino del Boffin, poi il segnalino del personaggio buono. Posiziona questo secondo segnalino personaggio accanto al segnalino del Demone.</p><p>Tratta il giocatore Demone come se avesse questa abilità di personaggio, oltre alla propria abilità da Demone.</p><p class="modal__callout-box">Le abilità buone che renderebbero drunk o avvelenerebbero se stesse, come il Sailor, rendono drunk o avvelenano solo l’abilità buona del Demone.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Boomdandy",
        id:"boomdandy",	
        description: "Il Boomdandy esplode quando viene giustiziato, uccidendo la maggior parte degli altri giocatori.",
        intro: `<ul><li>Se il Boomdandy viene giustiziato, lo Storyteller uccide altri giocatori, uno alla volta, finché ne restano solo tre in vita.</li><li>Il Demone sarà uno dei tre giocatori rimanenti <i>(altrimenti, la partita terminerebbe)</i>.</li><li>I giocatori hanno un breve conto alla rovescia per decidere chi uccidere dopo. Non ci sono ulteriori nomine o giustizie oggi. Invece, tutti i giocatori indicano il giocatore che vogliono far morire. Quando il conto alla rovescia termina, lo Storyteller conta il numero di dita puntate verso ciascun giocatore. Se c’è un pareggio, allora cala la notte <i>(e probabilmente i malvagi vincono a causa dell’uccisione del Demone quella notte)</i>.</li><li>Anche i giocatori morti che non hanno un gettone voto possono indicare.</li><li>I giocatori possono cambiare chi stanno indicando fino a quando il conto alla rovescia non è terminato, momento in cui la loro decisione è finale.</li><li>Il Boomdandy esplode solo a causa di un'esecuzione. Le morti per altri mezzi, come tramite un Golem o uno Psychopath, non contano. Se il Boomdandy viene giustiziato ma non muore <i>(a causa di un Devil's Advocate ecc.)</i>, esplode comunque.</li><li>Se un personaggio non può morire, come il Fool o il Sailor, lo Storyteller può stabilire che quattro giocatori rimangano in vita dopo l’esplosione del Boomdandy.</li></ul>`,
        ability: 'Se vieni giustiziato, tutti tranne 3 giocatori muoiono. Dopo un conto alla rovescia da 10 a 1, il giocatore verso cui il maggior numero di giocatori sta indicando, muore.',
        flavor: '"Tick... Tick... Tick... TOCK."',
        examples: `<p>Amy è il Boomdandy. Viene giustiziata. Esplode, uccidendo tutti i giocatori tranne il Po, la Witch e la Moonchild. Freneticamente, tutti i giocatori iniziano a indicarsi a vicenda e a discutere su chi dovrebbe essere indicato. Dopo il conto alla rovescia, lo Storyteller dice “Freeze” e la Witch ha il maggior numero di dita puntate contro di lei, e muore. I malvagi vincono.</p>`,
        howToRun: `<p>Se il Boomdandy viene giustiziato, dichiara che il Boomdandy è esploso. Entra nel cerchio, stendi la mano verso il Boomdandy e ruota attorno al cerchio. <i>(In modo simile a come si gestisce una votazione.)</i> Quando la tua mano raggiunge un giocatore in vita, di’ "Vivi" oppure di’ "Muori" mentre quel giocatore <strong>muore</strong>. Quando hai completato il giro, tre giocatori saranno in vita, incluso il Demone. Poi, inizia a contare alla rovescia da 10. Quando il conto alla rovescia termina, chiedi a tutti i giocatori di bloccarsi immediatamente <i>(di restare immobili)</i> mentre conti il numero di giocatori che stanno indicando ciascun giocatore. Il giocatore verso cui sono puntate più dita <strong>muore</strong>. Questo termina la partita, dato che restano in vita solo due giocatori, quindi dichiara quale squadra ha vinto.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Fearmonger",
        id:"fearmonger",	
        description: "Il Fearmonger crea paranoia su chi nomina chi.",
        intro: `<ul><li>Durante la prima notte, quando il Fearmonger sceglie un giocatore, tutti i giocatori lo scoprono.</li><li>Durante le altre notti, ogni volta che il Fearmonger sceglie un nuovo giocatore, tutti i giocatori lo scoprono. Se il Fearmonger sceglie lo stesso giocatore di prima, i giocatori non scoprono nulla.</li><li>I giocatori scoprono solo che il Fearmonger ha agito, non quale giocatore è stato scelto.</li><li>Se il Fearmonger nomina il giocatore scelto e quella nomina porta alla sua esecuzione, il giocatore scelto perde, la sua squadra perde e la partita termina.</li><li>Solo il giocatore attualmente scelto è vulnerabile all’abilità del Fearmonger. I giocatori scelti in precedenza non contano.</li><li>Se il giocatore scelto viene giustiziato ma non muore, la squadra del giocatore scelto perde comunque.</li></ul>`,
        ability: 'Ogni notte, scegli un giocatore: se lo nomini e lo giustizi, la sua squadra perde. Tutti i giocatori sanno se scegli un nuovo giocatore.',
        flavor: '"Guarda di non fissare troppo a lungo l’Abisso, perché l’Abisso potrebbe fissare anche te."',
        examples: `<p>Nella prima notte, il Fearmonger sceglie il Butler. Tutti i giocatori scoprono che il Fearmonger ha scelto un nuovo giocatore. Durante il giorno, il Fearmonger nomina il Butler e il Butler viene giustiziato. I malvagi vincono.</p><p>Di notte, il Fearmonger sceglie il Juggler. La Flowergirl nomina il Juggler e il Juggler viene giustiziato. La partita continua.</p><p>Il Fearmonger sceglie l’Empath. La notte successiva, il Fearmonger sceglie il Soldier. Il Fearmonger nomina e giustizia l’Empath. La partita continua perché il Fearmonger ha scelto il Soldier, non l’Empath.</p><p>Il Fearmonger sceglie accidentalmente il Baron, a causa del Poppy Grower in gioco. Il Fearmonger nomina e giustizia il Baron. I buoni vincono.</p>`,
        howToRun: `<p>Ogni notte, sveglia il Fearmonger. Indica un giocatore qualsiasi. Rimetti a dormire il Fearmonger. Contrassegna il giocatore scelto con il promemoria <strong>FEAR</strong>. Se il Fearmonger ha scelto un giocatore che non era già contrassegnato con il promemoria <strong>FEAR</strong>, annuncia che "Il Fearmonger ha scelto un giocatore." <i>(Questo informa il gruppo che il Fearmonger è in vita e ha scelto un nuovo giocatore.)</i></p><p>Se il Fearmonger nomina il giocatore contrassegnato <strong>FEAR</strong> e quella nomina porta alla sua esecuzione, dichiara che la partita è finita e quale squadra ha vinto.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Goblin",
        id:"goblin",	
        description: `Il Goblin si vendica se la città lo giustizia consapevolmente.`,
        intro: "<ul><li>Se il Goblin viene giustiziato, i malvagi vincono.</li><li>...ma perché ciò accada, il Goblin deve dire al gruppo che è il Goblin quando viene nominato, ma prima che avvenga la votazione, e farlo in modo che tutti lo sentano. I giocatori buoni devono conoscere il rischio.</li><li>Se il Goblin viene giustiziato senza aver detto al gruppo di essere il Goblin quando è stato nominato, il Goblin muore e la partita continua normalmente.</li><li>Il Goblin deve aver dichiarato di essere il Goblin oggi perché la sua abilità funzioni. Dirlo ieri, o perfino ogni giorno precedente, non conta.</li><li>Qualsiasi giocatore può dichiarare di essere il Goblin quando viene nominato.</li></ul>",
        ability: 'Se dichiari pubblicamente di essere il Goblin quando vieni nominato e vieni giustiziato quel giorno, la tua squadra vince.',
        flavor: '"Non vuoi insultare i goblin. Davvero, davvero non vuoi. A proposito di tutt’altro… posso avere un altro pezzo di torta?"',
        examples: `<p>Abdallah è il Goblin. Alex nomina Abdallah, e Abdallah dichiara di essere il Goblin. Si vota, e Abdallah sta per morire. Più tardi oggi avvengono altre nomine, ma Abdallah viene giustiziato. I malvagi vincono.</p><p>Lewis è l’Artist e dichiara di essere il Goblin quando viene nominato. Viene giustiziato, e la partita continua.</p><p>Doug è il Goblin. Ha dichiarato di essere il Goblin ieri e l’altro ieri, ma non oggi. Viene giustiziato. La partita continua.</p>`,
        howToRun: `<p>Se il Goblin dichiara di essere il Goblin quando viene nominato (e prima che inizi la votazione), dichiara che questo giocatore ha dichiarato di essere il Goblin, in modo che tutto il gruppo lo senta. Metti il promemoria <strong>CLAIMED</strong> accanto al segnalino del Goblin.</p><p>Se il Goblin viene giustiziato ed è contrassegnato <strong>CLAIMED</strong>, allora dichiara che i malvagi vincono.</p><p class="modal__callout-box">Se un giocatore non-Goblin dichiara di essere il Goblin quando viene nominato, comportati come se fosse il Goblin. Dichiara al gruppo che ha dichiarato di essere il Goblin e fingi di spostare un segnalino promemoria nel Grimoire.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Harpy",
        id:"harpy",	
        description: `La Harpy crea discordia e sfiducia tra i giocatori buoni.`,
        intro: "<ul><li>Di notte, la Harpy sceglie un giocatore alla volta, non due insieme.</li><li>Un giocatore scelto dalla Harpy è influenzato dall’abilità fino alla prossima scelta della Harpy.</li><li>Se lo Storyteller decide di uccidere i giocatori con l’abilità della Harpy, deve ucciderli entrambi. Lo Storyteller non può decidere di ucciderne solo uno.</li><li>La Harpy può scegliere un giocatore morto. In tal caso, lo Storyteller può uccidere solo il giocatore in vita, poiché i giocatori morti non possono morire di nuovo.</li><li>L’ordine delle morti dovute all’abilità della Harpy può essere scelto dallo Storyteller, qualora fosse importante.</li></ul>",
        ability: 'Ogni notte, scegli 2 giocatori: domani, il 1° giocatore è mad che il 2° è malvagio, oppure uno o entrambi potrebbero morire.',
        flavor: '"Un giorno così bello non l’ho mai visto, né una presenza così sinistra pendere su di me."',
        examples: `<p>La Harpy sceglie il Monk e l’Engineer. Il Monk dichiara di essere l’Investigator che ha visto l’Engineer e fa campagna perché venga giustiziato. Quando viene messo in discussione, è categorico nelle sue affermazioni che l’Engineer è molto probabilmente malvagio in base alle sue informazioni, e così evita la morte.</p><p>La Harpy sceglie l’Oracle e l’Alchemist morto. L’Oracle dichiara di fidarsi dell’Alchemist perché le sue informazioni da Oracle indicano che non era malvagio. Lo Storyteller dichiara che l’Oracle muore.</p><p>Il Farmer viene scelto dalla Harpy. Poiché non ha alcuna informazione propria da dichiarare per implicare che l’altro giocatore sia malvagio, si impegna a trovare informazioni che possano scagionare ciascuna delle altre persone in vita, lasciando il suo bersaglio come candidato Demone rimanente e quindi malvagio per implicazione.</p>`,
        howToRun: `<p>Ogni notte, sveglia la Harpy. La Harpy indica un giocatore, poi un altro giocatore. Contrassegna il primo giocatore con il promemoria <strong>MAD</strong> e il secondo giocatore con il promemoria <strong>2ND</strong>. Rimetti a dormire la Harpy. Sveglia il giocatore contrassegnato <strong>MAD</strong>. Mostra il segnalino informazione <strong>THIS CHARACTER SELECTED YOU</strong>, poi il segnalino della Harpy, poi indica il giocatore contrassegnato <strong>2ND</strong>. Rimetti a dormire il giocatore contrassegnato <strong>MAD</strong>.</p><p>Domani, se il giocatore contrassegnato <strong>MAD</strong> non è mad che il giocatore contrassegnato <strong>2ND</strong> è malvagio, puoi uccidere entrambi i giocatori.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Marionette",
        id:"marionette",	
        description: "La Marionette non sa di essere un Minion.",
        intro: `<ul><li>La Marionette pesca dal sacchetto un segnalino Townsfolk o Outsider, ma in segreto è la Marionette.</li><li>La Marionette è vicina di posto al Demone. Non ci sono giocatori seduti tra la Marionette e il Demone.</li><li>Il Demone sa quale giocatore è la Marionette.</li><li>Nella prima notte, la Marionette non si sveglia per scoprire gli altri giocatori malvagi, e gli altri Minion non scoprono la Marionette.</li><li>L’abilità buona che la Marionette crede di avere non funziona, ma lo Storyteller finge che funzioni. È proprio come se questo giocatore fosse il Drunk.</li><li>La Marionette risulta come malvagia e come Minion.</li></ul>`,
        ability: 'Credi di essere un personaggio buono, ma non lo sei. Il Demone sa chi sei. [Sei vicino di posto al Demone]',
        flavor: '"Parole, parole. È tutto ciò su cui possiamo contare."',
        examples: `<p>Marianna è la Marionette, ma crede di essere l’Undertaker. Si sveglia ogni notte per scoprire chi è morto quel giorno, ma le sue informazioni sono spesso sbagliate. A metà partita, il Demone le dice che è la Marionette.</p><p>Lachlan è il Demone. Dice a Sarah che è la Marionette. Lachlan sta mentendo. Non c’è alcuna Marionette.</p><p>Abdallah è il Demone. Abdallah dice a Ben che è la Marionette. Ben crede di essere il Fortune Teller, ma non lo è. Ben non crede ad Abdallah e lo giustizia. I buoni vincono.</p>`,
        howToRun: `<p>Durante la preparazione della partita, prima di inserire i segnalini nel sacchetto, rimuovi il segnalino della Marionette e aggiungi un segnalino Townsfolk qualsiasi.</p><p>Se ci sono tre Minion in gioco, rimuovi un altro segnalino Minion e aggiungi un altro segnalino Townsfolk. Durante la prima notte, scambia il segnalino personaggio di un giocatore buono con un segnalino personaggio Minion non in gioco. Sveglia questo giocatore, mostrargli il segnalino informazione <strong>YOU ARE</strong> poi il suo segnalino personaggio Minion, poi il segnalino informazione <strong>YOU ARE</strong> poi un pollice verso il basso, poi rimettilo a dormire. Questo giocatore ora è un Minion malvagio. <i>(Questo garantisce che nel sacchetto ci sia un solo segnalino Minion, così almeno un giocatore buono sarà vicino di posto al Demone.)</i></p><p>Durante la prima notte, contrassegna un giocatore buono vicino di posto al Demone con il promemoria <strong>IS THE MARIONETTE</strong>. Sveglia il Demone. Indica il giocatore contrassegnato <strong>IS THE MARIONETTE</strong> e mostra il segnalino personaggio della Marionette. Rimetti a dormire il Demone.</p><p></p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Mezepheles",
        id:"mezepheles",	
        description: "Il Mezepheles offre ai giocatori buoni una scelta: diventare malvagi o no.",
        intro: `<ul><li>Nella prima notte, il Mezepheles scopre dallo Storyteller una parola segreta.</li><li>Se un giocatore buono pronuncia questa parola, pubblicamente o privatamente, quella notte diventa malvagio. Lo Storyteller deve sentire questo giocatore pronunciare davvero la parola prima di renderlo malvagio.</li><li>Il Mezepheles non scopre se un giocatore diventa malvagio. Il giocatore buono scopre se diventa malvagio, ma non fino a quella notte.</li><li>Se il Mezepheles è sobrio e sano di notte, il giocatore buono diventa malvagio anche se il Mezepheles era drunk o avvelenato quando il giocatore buono ha pronunciato la parola segreta. Se il Mezepheles è drunk o avvelenato di notte quando un giocatore dovrebbe diventare malvagio, il giocatore resta buono—il Mezepheles ha “usato la sua abilità” e non può rendere malvagio un giocatore più avanti.</li></ul>`,
        ability: 'Inizi sapendo una parola segreta. Il 1° giocatore buono a pronunciare questa parola diventa malvagio quella notte.',
        flavor: '"Ciò che sgorga dal cuore soltanto, piegherà i cuori degli altri al tuo."',
        examples: `<p>Il Mezepheles dice al Barber che la parola segreta è "Rumplestiltskin". Il Barber dice pubblicamente: "Questo mi ricorda la fiaba in cui la figlia del mugnaio deve indovinare il nome di Rumplestiltskin." Il Barber diventa malvagio quella notte.</p><p>Il Mezepheles dice al Mayor la parola segreta. Il Mayor, volendo restare buono, dice al gruppo chi è il Mezepheles.</p><p>Il Mezepheles dice privatamente allo Snitch la parola segreta— "Constantinople". Lo Snitch va dallo Storyteller e dice "Constantinople" in privato. Quella notte, il Courtier rende il Mezepheles drunk. Lo Snitch resta buono.</p>`,
        howToRun: `<p>Durante la preparazione della partita, scrivi una singola parola su un foglio di carta o su un telefono o un altro dispositivo. Durante la prima notte, sveglia il Mezepheles, mostra la parola scritta, poi rimettilo a dormire.</p><p>La prima volta che senti un giocatore buono pronunciare la parola segreta, contrassegnalo con il promemoria <strong>TURNS EVIL</strong>.</p><p>Ogni notte, se un giocatore è contrassegnato con il promemoria <strong>TURNS EVIL</strong>, sveglialo. Mostra il segnalino informazione <strong>YOU ARE</strong> poi fai un pollice verso il basso. Rimettilo a dormire. Gira il suo segnalino personaggio a faccia in giù. <i>(Questo mostra che ora è malvagio.)</i> <strong>Il Mezepheles perde la sua abilità</strong>—contrassegnalo con il promemoria <strong>NO ABILITY</strong> e rimuovi il suo segnalino notturno dal foglio notturno.</p><p class="modal__callout-box">Scegli una parola insolita che non verrebbe mai pronunciata per caso. Puoi persino inventarne una. Il divertimento sta nel fatto che il Mezepheles si assuma un rischio per convincere segretamente un giocatore buono a diventare malvagio, non nel fatto che un giocatore buono cambi squadra inaspettatamente.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Organ Grinder",
        id:"organgrinder",	
        description: "L’Organ Grinder rende segreta la votazione.",
        intro: `<ul><li>Quando un giocatore viene nominato, i giocatori votano a occhi chiusi.</li><li>Lo Storyteller non conta i voti ad alta voce e non rivela quanti giocatori hanno votato una volta conclusa la votazione.</li><li>Lo Storyteller non rivela quale giocatore sta per “morire”.</li><li>Dopo che le nomine sono concluse, lo Storyteller rivela quale giocatore viene giustiziato, come di consueto.</li><li>I giocatori morti possono votare una volta se hanno un gettone voto. Il loro gettone voto viene rimosso alla fine del giorno invece che dopo la votazione.</li></ul>`,
        ability: 'Tutti i giocatori tengono gli occhi chiusi durante la votazione e il conteggio dei voti è segreto. Ogni notte, scegli se sei drunk o no.',
        flavor: '"Giro e rigiro vanno le manovelle. Più balli, meno sai."',
        examples: `<p>Ci sono 8 giocatori in vita. Il Noble viene nominato. Tutti i giocatori chiudono gli occhi per votare e il Noble ottiene 5 voti. L’Imp viene nominato. Tutti i giocatori chiudono gli occhi per votare e l’Imp ottiene 7 voti. Il Pixie viene nominato. Tutti i giocatori chiudono gli occhi per votare e il Pixie ottiene 4 voti. Dopo che le nomine si chiudono, lo Storyteller dichiara che Doug (l’Imp) viene giustiziato e muore, e che i buoni hanno vinto.</p>`,
        howToRun: `<p>Ogni notte, sveglia l’Organ Grinder. L’Organ Grinder annuisce con la testa per essere drunk, oppure scuote la testa per essere sobrio. Rimetti a dormire l’Organ Grinder.</p><p>Se annuisce, contrassegnalo con il promemoria <strong>DRUNK</strong>. Se scuote la testa, rimuovi il promemoria <strong>DRUNK</strong>.</p><p>Quando un giocatore viene nominato, se l’Organ Grinder è sobrio, chiedi a tutti i giocatori di chiudere gli occhi. Se chiedono perché, dì loro che un Organ Grinder è in gioco. Quando conti i voti, fallo in silenzio. Dopo, non rivelare quanti giocatori hanno votato, né se il nominato sta per “morire”. Se ci sono stati abbastanza voti per giustiziare il nominato, contrassegnalo con il promemoria <strong>ABOUT TO DIE</strong>. Chiedi ai giocatori di aprire gli occhi e se ci sono altre nomine.</p><p>Quando le nomine sono concluse, dichiara che il giocatore contrassegnato <strong>ABOUT TO DIE</strong> <strong>muore</strong>.</p><p class="modal__callout-box">Ai giocatori non è consentito usare altri metodi per determinare chi sta votando, come il tatto o il suono. È un segreto.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Psychopath",
        id:"psychopath",	
        description: "Lo Psychopath uccide in pieno giorno.",
        intro: `<ul><li>Durante il giorno, se lo Psychopath dichiara di essere lo Psychopath e sceglie pubblicamente un giocatore, quel giocatore muore. Questo può essere fatto solo una volta al giorno e solo prima che lo Storyteller chiami le nomine.</li><li>Lo Psychopath non è obbligato a usare questa abilità se non vuole.</li><li>Lo Psychopath può essere nominato e votato normalmente. Se lo Psychopath viene giustiziato, potrebbe non morire. Gioca a Roshambo <i>(Paper-Rock-Scissors)</i> con il giocatore che lo ha nominato. Il nominatore deve vincere perché lo Psychopath muoia. Un pareggio o una sconfitta significano che lo Psychopath resta in vita.</li><li>Se lo Psychopath viene giustiziato, questo conta comunque come l’unica esecuzione del giorno. Nessun altro giocatore può essere nominato o giustiziato oggi.</li><li>Se lo Psychopath muore per altri mezzi, ad esempio perché il Demone lo attacca, non gioca a Roshambo. Muore.</li></ul>`,
        ability: 'Ogni giorno, prima delle nomine, puoi scegliere pubblicamente un giocatore: muore. Se vieni giustiziato, muori solo se perdi a roshambo.',
        flavor: '"Sorpresa!"',
        examples: `<p>Nel primo giorno, Amy dichiara di essere lo Psychopath e che sceglie Evin. Evin muore.</p><p>Lo Psychopath sceglie di uccidere il Sailor. Il Sailor è sobrio, quindi non muore. Lo Psychopath non può usare di nuovo la sua abilità oggi.</p><p>Lo Psychopath è stato nominato dal Barber e viene giustiziato. A Roshambo, il Barber fa rock e lo Psychopath fa rock, quindi lo Psychopath resta in vita. Il giorno successivo, il Saint nomina e giustizia lo Psychopath. Il Saint fa paper e lo Psychopath fa scissors, quindi lo Psychopath resta in vita. Il giorno successivo, il Barber nomina e giustizia di nuovo lo Psychopath. Il Barber fa rock e lo Psychopath fa scissors, quindi lo Psychopath muore.</p>`,
        howToRun: `<p>Una volta al giorno, prima che tu abbia chiamato le nomine, lo Psychopath può scegliere pubblicamente un giocatore. Quel giocatore <strong>muore</strong>.</p><p>Se lo Psychopath viene giustiziato, lo Psychopath e il nominatore giocano una partita a Roshambo. Se lo Psychopath perde, <strong>muore</strong>. Se lo Psychopath pareggia o vince, resta in vita. In ogni caso, il giorno termina, dato che c’è una sola esecuzione al giorno.</p><p>Se lo Psychopath viene giustiziato a causa di un’auto-nomina, allora lo Psychopath gioca a Roshambo con te invece.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Summoner",
        id:"summoner",	
        description: "Il Summoner crea un Demone.",
        intro: `<ul><li>Il Summoner può scegliere qualsiasi giocatore perché diventi il Demone, anche se stesso.</li><li>Il nuovo Demone non scopre quali giocatori sono Minion, né viceversa. I giocatori malvagi dovranno parlare tra loro per capirlo.</li><li>Anche se non c’è alcun Demone in gioco per due giorni, la partita non termina. Tuttavia, se il Summoner diventa incapace di creare un Demone (perché muore, diventa drunk nella notte 3 ecc.), i buoni vincono.</li><li>Il Demone appena creato agisce nella stessa notte in cui viene creato.</li></ul>`,
        ability: 'Ottieni 3 bluff. Nella 3ª notte, scegli un giocatore: diventa un Demone malvagio a tua scelta. [Nessun Demone]',
        flavor: '"Salute ai guardiani del nord; per il mio intelletto, tu sei reciso. Salute ai guardiani dell’est; per la mia volontà, tu sei dominato. Salute ai guardiani del sud; per ciò che giace oltre, il mistero è rivelato. Salute ai guardiani dell’ovest; uno scudo nell’oscurità."',
        examples: `<p>Nella terza notte, il Summoner sceglie il giocatore Snitch e il Lleech. Lo Snitch diventa il Lleech malvagio e sceglie un giocatore da avvelenare e un giocatore da uccidere.</p><p>Nel primo giorno, il Summoner viene giustiziato. I buoni vincono.</p><p>Nella terza notte, il Summoner trasforma l’Alchemist nel Leviathan. All’alba, tutti i giocatori scoprono che il Leviathan è in gioco e che è il terzo giorno su cinque.</p>`,
        howToRun: `<p>Durante la fase di preparazione, rimuovi il Demone e aggiungi un Townsfolk.</p><p>Quando prepari la prima notte, metti il promemoria <strong>NIGHT 1</strong> del Summoner accanto al Summoner. Quando prepari la seconda notte, metti il promemoria <strong>NIGHT 2</strong> del Summoner accanto al Summoner.</p><p>Quando prepari la terza notte, metti il promemoria <strong>NIGHT 3</strong> del Summoner accanto al Summoner.</p><p>Durante la prima notte, mostra al Summoner 3 personaggi non in gioco come bluff.</p><p>Durante la notte, se il Summoner ha il promemoria <strong>NIGHT 3</strong>, sveglia il Summoner. Indica un giocatore e un’icona Demone sul foglio dei personaggi. Rimetti a dormire il Summoner. Sveglia il giocatore scelto. Mostra il segnalino informazione <strong>YOU ARE</strong>, poi il segnalino Demone. Mostra il segnalino informazione <strong>YOU ARE</strong>, poi fai un pollice verso il basso. Sostituisci il suo segnalino personaggio con il segnalino Demone e rimetti a dormire il nuovo Demone.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Vizier",
        id:"vizier",	
        description: `Il Vizier giustizia i giocatori senza il consenso della città.`,
        intro: "<ul><li>Nel primo giorno, tutti i giocatori scoprono che il Vizier è in gioco e quale giocatore lo è.</li><li>Durante il giorno, il Vizier non può morire in alcun modo.</li><li>Dopo che una votazione è stata conteggiata, se il Vizier sceglie di giustiziare il nominato (e almeno un giocatore buono ha votato), quel giocatore viene immediatamente giustiziato. Questo conta come l’unica esecuzione consentita ogni giorno.</li><li>Dopo che una votazione è stata conteggiata, se il Vizier sceglie di giustiziare il nominato (e nessun giocatore buono ha votato), non succede nulla.</li><li>Anche se il conteggio dei voti è inferiore al 50% dei giocatori in vita, il Vizier può comunque giustiziare. Anche se un altro giocatore ha più voti del giocatore corrente, il Vizier può comunque giustiziare.</li><li>Il Vizier non è obbligato a forzare un'esecuzione ogni giorno.</li></ul>",
        ability: 'Tutti i giocatori sanno che sei il Vizier. Non puoi morire durante il giorno. Se i buoni hanno votato, puoi scegliere di giustiziare immediatamente.',
        flavor: `"Un’ottima decisione, come sempre, sire. Un crimine così meschino come urtare il Bishop merita davvero la tua 'giustizia' e 'misericordia'. Fai una passeggiata nei giardini. Visita la galleria e osserva le sculture di Von Strauf. Rilassati, sire. Lascia tutto... a me."`,
        examples: `<p>Il King è stato nominato. Cinque persone votano, ma il Vizier non usa la sua abilità. Il Boomdandy viene nominato e otto persone votano. Il Vizier usa la sua abilità e il Boomdandy viene immediatamente giustiziato.</p><p>Il Demone ha sette voti contro di lui ed è "about to die". Il Vizier nomina Bill, il Barber. Due giocatori malvagi e un giocatore buono votano. Il Vizier dichiara che Bill viene giustiziato. Il Demone sopravvive oggi. La città nomina e giustizia il Vizier. Il Vizier non muore. Quella notte, il Demone uccide il Vizier.</p><p>La città nomina e giustizia il Vizier. Il Vizier non muore. Quella notte, il Demone uccide il Vizier.</p>`,
        howToRun: `<p>Quando la prima notte è terminata, annuncia che il Vizier è in gioco e quale giocatore lo è.</p><p>Se una votazione è appena stata conteggiata e uno o più giocatori buoni hanno votato, e il Vizier dichiara che il nominato viene giustiziato, quel giocatore viene giustiziato e muore. Oggi non avvengono altre nomine, votazioni o giustizie.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Widow",
        id:"widow",	
        description: `La Widow conosce tutti i personaggi e avvelena esattamente la persona che ritiene più utile.`,
        intro: "",
        ability: 'Nella tua prima notte, guarda il Grimoire e scegli un giocatore: è avvelenato. 1 giocatore buono sa che una Widow è in gioco.',
        flavor: '"Altro vino? Château d\'Ergot \'07 è un’annata davvero speciale. Oh sì, davvero molto speciale."',
        examples: `<p>La Widow guarda il Grimoire e indica il segnalino personaggio del Sailor. Il Sailor è avvelenato in questa partita. Il Sailor è sobrio, ma muore quando viene giustiziato.</p><p>Nella terza notte, la Pit Hag trasforma se stessa nella Widow. Quella notte, il buono Scapegoat scopre che una Widow è in gioco.</p><p>Nella prima notte la Widow guarda il Grimoire e avvelena se stessa. Il giocatore buono che avrebbe dovuto scoprire che una Widow è in gioco non lo scopre.</p>`,
        howToRun: `<p>Nella sua prima notte, sveglia la Widow e mostrale il Grimoire per tutto il tempo necessario. La Widow indica un segnalino personaggio nel Grimoire o un giocatore. Contrassegna quel giocatore con un promemoria <strong>POISONED</strong>. Rimetti a dormire la Widow. Sveglia un qualsiasi giocatore buono. Mostragli il segnalino personaggio della Widow. Rimetti a dormire quel giocatore buono.</p><p>Se la Widow muore o cambia personaggio, il suo avvelenamento termina. Allo stesso modo, il suo avvelenamento svanisce mentre la Widow è avvelenata/drunk. Quando una Widow avvelena un giocatore, la notte 1 è già iniziata, quindi non impedisce ad alcuna abilità di [setup] di avere effetto.</p><p>Se una Widow viene creata a metà partita, esegui il primo paragrafo del how to run proprio come faresti se fosse in gioco nella notte 1: per la sua abilità conta la prima notte della Widow, non quante notti sono passate nella partita.</p><p>Se la Widow sceglie di avvelenare se stessa, nessuno viene informato che una Widow è in gioco.</p><p>Solo il Preacher, il Sailor e il Poisoner possono impedire alla Widow di poter avvelenare nella notte 1 e, in tutti questi casi, a un giocatore buono verrebbe detto che la Widow è in gioco una volta che l’effetto di preaching/drunk/avvelenamento svanisce. Se il Sailor ha reso drunk o il Poisoner ha avvelenato, alla Widow può essere mostrato un finto grimoire. Inoltre, la sua scelta di avvelenamento non ha effetto per il resto della partita, anche se in seguito diventa sobria/sana. Se è stata preached, alla Widow viene semplicemente mostrato che il Preacher è in gioco e non vede il grimoire, anche se più avanti nella partita il Preacher è morto/avvelenato/drunk.</p><p>Se il giocatore buono che sa che la Widow è in gioco diventa malvagio mentre la Widow è in vita, sveglia un nuovo giocatore buono e mostragli il segnalino personaggio della Widow.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Wizard",
        id:"wizard",	
        description: `Il Wizard esprime un desiderio.`,
        intro: "<ul><li>Questo desiderio è limitato solo dall’immaginazione del giocatore. Può essere qualsiasi cosa. Il Wizard può scrivere il proprio desiderio sul telefono e svegliarsi di notte per mostrarlo allo Storyteller, oppure parlare con lo Storyteller in privato durante il giorno. Il Wizard può perfino esprimere un desiderio pubblicamente, se si sente sciocco.</li><li>Se lo Storyteller dice al gruppo che il Wizard ha espresso un desiderio, non è necessario che lo faccia immediatamente, e può farlo in qualsiasi momento successivo.</li><li>Molti desideri hanno un prezzo. Il prezzo cambia la partita in qualche modo, oppure cambia il desiderio in qualche modo. Può essere qualsiasi cosa ed è deciso dallo Storyteller. Lo Storyteller può o non può dire al Wizard quale sia il prezzo. Lo scopo del prezzo è riequilibrare un desiderio che, a livello meccanico, è ingiusto per la squadra dei buoni.</li><li>Molti desideri lasciano un indizio. L’indizio può essere qualsiasi cosa, è deciso dallo Storyteller e viene dichiarato pubblicamente. Lo scopo di un indizio è riequilibrare un desiderio che, a livello informativo, è ingiusto per la squadra dei buoni.</li><li>Quando il Wizard muore, il desiderio può o non può restare in effetto, a seconda della natura del desiderio e della natura del prezzo.</li><li>Se il Wizard esprime un desiderio che lo Storyteller non capisce, o ritiene che sarebbe impossibile da implementare, lo Storyteller può chiedere al Wizard di desiderare di nuovo, oppure annullare il desiderio.</li></ul>",
        ability: 'Una volta per partita, scegli di esprimere un desiderio. Se concesso, potrebbe avere un prezzo e lasciare un indizio sulla sua natura.',
        flavor: '"Ogni uomo e ogni donna è una stella. L’amore è la legge, amore sotto la volontà."',
        examples: `<p>Il Wizard desidera vedere il Grimoire. Lo Storyteller concede questo desiderio, e non c’è prezzo né indizio.</p><p>Il Wizard desidera che tutti i giocatori buoni siano drunk. Lo Storyteller concede il desiderio. Più tardi, annuncia che il Wizard ha espresso un desiderio e che "Qualcosa non va", ma non fornisce ulteriore contesto. Per il resto della partita, lo Storyteller rende false tutte le informazioni.</p><p>Il Wizard desidera di diventare un Demone. Lo Storyteller concede il desiderio. Più tardi, annuncia che il Wizard ha espresso un desiderio e che "L’allievo è diventato il maestro." Lo Storyteller uccide il Lord of Typhon e trasforma il Wizard nell’Ojo.</p><p>Il Wizard desidera di vincere la partita. Lo Storyteller concede il desiderio e dice al Wizard che la squadra dei malvagi vincerà la partita alla fine del giorno. Lo Storyteller annuncia che il Wizard ha espresso un desiderio e che Ben, Amy o Lewis è il Demone. Il gruppo giustizia Ben, che è il Demone, e i buoni vincono.</p><p>Il Wizard desidera che tutti i giocatori abbiano 5 vite e che tutti i segnalini promemoria dello script vengano aggiunti ai personaggi. Lo Storyteller giudica che questo desiderio è troppo macchinoso, confuso e noioso, rifiuta il desiderio e chiede al Wizard di desiderare di nuovo.</p>`,
        howToRun: `<p>Quando il Wizard esprime un desiderio, verbalmente o via testo, decidi se accettare o rifiutare il desiderio. Se il desiderio viene rifiutato, chiedi al Wizard di desiderare di nuovo, oppure digli che non ha più desideri.</p><p>Se il desiderio viene concesso, dì <strong>"Your wish is granted."</strong> o <strong>"Your wish is my command"</strong>, oppure annuisci, o segnala in altro modo che il suo desiderio è stato accettato. Ora o più tardi, puoi stabilire un prezzo: apporta tutte le modifiche meccaniche alla partita che ritieni necessarie perché il desiderio sia bilanciato. Ora o più tardi, puoi dichiarare pubblicamente che il Wizard ha espresso un desiderio, poi dare alla squadra dei buoni un indizio su ciò che è stato desiderato.</p><p class="modal__callout-box">Fare storytelling con il Wizard può essere difficile. Il Wizard è più divertente per tutti quando tutti i desideri vengono concessi, tutti i desideri lasciano un indizio e tutti i desideri hanno un prezzo. Tuttavia...<br><br>Se ritieni che concedendo un desiderio la squadra dei malvagi ne tragga un piccolo beneficio ma la squadra dei buoni abbia comunque tutto ciò che serve per capire chi è il Demone e vincere la partita, puoi non applicare alcun indizio e alcun prezzo. Puoi perfino evitare di dire alla squadra dei buoni che il Wizard ha espresso un desiderio, oppure dirglielo ma senza dare alcun indizio.<br><br>Se ritieni che concedendo il desiderio la squadra dei buoni sia in grave svantaggio in termini di bilanciamento - le regole della partita sono cambiate in modo tale che è impossibile per i buoni vincere anche se scoprono chi è il Demone - allora cambia le regole della partita o cambia il desiderio in modo che sia comunque equo per la squadra dei buoni.<br><br>Se ritieni che concedendo il desiderio la squadra dei buoni sia in grave svantaggio in termini di conoscenza - manca delle informazioni necessarie per vincere ragionevolmente la partita - allora dai loro un indizio utile per scoprire quale fosse il desiderio.<br><br>Se ritieni che il desiderio sia così estremo e contorto che non riesci a pensare a un indizio o un prezzo per bilanciarlo, o che renderebbe semplicemente la partita meno divertente, allora rifiuta completamente il desiderio.<br><br>Nel complesso, il desiderio dovrebbe spostare l’equilibrio a favore del Wizard, ma permettere comunque alla squadra dei buoni una ragionevole possibilità di vincere. Prenditi il tempo necessario per decidere come farlo.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Wraith",
        id:"wraith",	
        description: `La Wraith conosce e condivide ciò che accade di notte.`,
        intro: "<ul><li>La Wraith può aprire gli occhi in qualsiasi momento durante la notte, per tutto il tempo o per il poco tempo che desidera.</li><li>Può aprire completamente gli occhi oppure solo sbirciare.</li><li>Lo Storyteller sveglia la Wraith quando si svegliano anche altri giocatori malvagi, ad esempio quando il Demone uccide un giocatore, un Traveller malvagio usa la propria abilità o un Cult Leader scopre di essere malvagio.</li><li>Quando più giocatori hanno gli occhi aperti contemporaneamente, possono comunicare se lo desiderano.</li><li>Se un giocatore buono sorprende la Wraith con gli occhi aperti, non c’è alcun effetto meccanico.</li><li>Una Wraith morta non può aprire gli occhi di notte. Una Wraith drunk o avvelenata viene informata dallo Storyteller che non può aprire gli occhi quella notte.</li></ul>",
        ability: 'Puoi scegliere di aprire gli occhi di notte. Ti svegli quando si svegliano altri giocatori malvagi.',
        flavor: '"Ra\'āb ina pān ṣilli ša dāri. Rigim qallu ina šūri, šītu ša šunātīka iredde, u napšutka idlul ina pān maṣṣartī dāriti."',
        examples: `<p>Durante la prima notte la Wraith sbircia gli altri giocatori e nota quali giocatori buoni si svegliano e quali no. Durante la seconda notte, la Wraith apre maggiormente gli occhi e nota che Doug è stato svegliato e ha indicato due giocatori stanotte. Durante la 3ª notte, quando sia la Wraith sia il Demone si svegliano insieme, la Wraith usa il linguaggio del corpo e indica il foglio dei personaggi per comunicare al Demone di uccidere Doug, che la Wraith ritiene essere il Fortune Teller.</p>`,
        howToRun: `<p>Ogni volta che svegli un giocatore malvagio di notte, sveglia prima la Wraith. Quando rimetti a dormire quel giocatore malvagio, rimetti a dormire anche la Wraith.</p><p>Se la Wraith perde la sua abilità mentre è in vita, informa privatamente la Wraith che non può scegliere di aprire gli occhi stanotte e non svegliarla quando si svegliano altri giocatori malvagi.</p><p class="modal__callout-box">Regola opzionale: una volta per partita, un giocatore che è mad che tu sei la Wraith muore.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Xaan",
        id:"xaan",	
        description: `Lo Xaan avvelena tutti i Townsfolk.`,
        intro: "<ul><li>Lo Xaan avvelena tutti i giocatori Townsfolk per una notte e poi un giorno. La notte in cui ciò accade è pari al numero di Outsiders in gioco. Per esempio, se ci sono 2 Outsiders, lo Xaan avvelena nella notte 2.</li><li>In gioco può esserci qualsiasi numero di Outsiders, ma di solito da 1 a 4. Questo può essere il numero normale di Outsiders se lo Xaan non fosse in gioco, oppure un numero diverso. Questo sovrascrive altri personaggi che aggiungono o rimuovono Outsiders, come il Baron.</li><li>Se il numero di Outsiders cambia durante la partita, lo Xaan avvelena nella notte corrispondente al numero di Outsiders durante la preparazione.</li><li>Lo Xaan deve essere in vita per poter avvelenare.</li></ul>",
        ability: 'Nella notte X, tutti i Townsfolk sono avvelenati fino al tramonto. [X Outsiders]',
        flavor: '"E cadono. Uno dopo l’altro. A due, a tre, a cinque."',
        examples: `<p>Ci sono 3 Outsiders in gioco, a causa dello Xaan. Nella notte 3, l’Exorcist sceglie il Demone ma non succede nulla, l’Acrobat sceglie il Drunk ma non succede nulla e la Seamstress ottiene informazioni false.</p><p>C’è 1 Outsider in gioco. È una partita da 11 giocatori. Nella prima notte, lo Xaan avvelena tutti i 7 Townsfolk. Nella seconda notte, la Pit-Hag crea un Hatter. Anche se ci sono 2 Outsiders in gioco, stanotte tutti i giocatori sono sani.</p><p>Non ci sono Outsiders in gioco. Lo Xaan non avvelena mai nessuno. Lo Xaan bluffa come lo Zealot e la squadra dei buoni crede che tutti i Townsfolk siano avvelenati nella notte 1, ma non lo sono.</p>`,
        howToRun: `<p>Durante la preparazione della partita, prima di inserire i segnalini personaggio nel sacchetto, aggiungi o rimuovi qualsiasi numero di segnalini Outsider, incluso zero. Rimuovi eventuali promemoria Xaan non necessari.</p><p>Nella 1ª notte, aggiungi il promemoria <strong>NIGHT 1</strong> dello Xaan al Grimoire. Nella 2ª notte, aggiungi il promemoria <strong>NIGHT 2</strong> dello Xaan al Grimoire. Nella 3ª notte, aggiungi il promemoria <strong>NIGHT 3</strong> dello Xaan al Grimoire. Nella notte che corrisponde al numero di Outsiders in gioco quando la partita è iniziata, aggiungi il promemoria <strong>X</strong> al Grimoire e rimuovilo al tramonto successivo.</p><p>Quando il promemoria <strong>X</strong> è nel Grimoire, tutti i giocatori Townsfolk sono <strong>avvelenati</strong>.</p>`,
        group: "Minion",
        script: "exp"
    },
    {
        name: "Al-Hadikhia",
        id:"alhadikhia",	
        description: "L’Al-Hadikhia mette tre giocatori di fronte a un dilemma: chi sceglierà di morire, affinché gli altri possano vivere?",
        intro: "<ul><li>L’Al-Hadikhia sceglie tre giocatori per notte. Tutti scoprono quali tre sono stati scelti. Ogni giocatore fa la propria scelta prima che venga rivelato il giocatore successivo.</li><li>Tutti i giocatori devono rimanere in silenzio quando l’Al-Hadikhia agisce di notte. Questo periodo dura da quando lo Storyteller dichiara per la prima volta che un giocatore è stato scelto, fino a quando lo Storyteller dice che termina.</li><li>Di notte, lo Storyteller chiede ad alta voce ai giocatori se scelgono di vivere. Se annuiscono, vivono. Se scuotono la testa, muoiono. I giocatori possono essere riportati in vita in questo modo.</li><li>Se tutti i giocatori scelgono di vivere, allora muoiono tutti invece. Se un giocatore ha scelto di morire ma non è morto, conta come vivo per questo calcolo.</li></ul>",
        ability: "Ogni notte*, puoi scegliere 3 giocatori (tutti scoprono chi): ciascuno sceglie in silenzio se vivere o morire, ma se tutti vivono, muoiono tutti.",
        flavor: "\"Alsukut min dhahab.\"",
        examples: `<p>L’Al-Hadikhia sceglie Evin, Lachlan e Sarah. Evin sceglie di morire. Lachlan sceglie di morire. Sarah sceglie di vivere. Al mattino, Evin e Lachlan sono morti, e Sarah è viva.</p><p>L’Al-Hadikhia sceglie Alex, Lewis e Doug, che è morto. Alex sceglie la vita. Lewis sceglie la vita. Doug sceglie la vita, quindi ora è vivo. Poiché ora tutti i giocatori sono vivi, tutti e tre i giocatori muoiono.</p>`,
        howToRun: `<p>Ogni notte tranne la prima, sveglia l’Al-Hadikhia. Indica tre giocatori. Contrassegna questi giocatori con i promemoria <strong>1</strong>, <strong>2</strong> e <strong>3</strong>, nell’ordine scelto dall’Al-Hadikhia. Rimetti a dormire l’Al-Hadikhia. Sveglia il giocatore contrassegnato <strong>1</strong> e di’ "L’Al-Hadikhia ha scelto" seguito dal nome del giocatore, poi "Scegli di vivere?" Il giocatore annuisce oppure scuote la testa. Rimettilo a dormire. Se ha scelto di vivere, rimuovi il suo sudario (se presente), e se ha scelto di morire, aggiungi un sudario. Ripeti per i giocatori contrassegnati <strong>2</strong> e poi <strong>3</strong>. Se tutti e tre i giocatori sono vivi (nessuno di loro ha un sudario), allora aggiungi un sudario a tutti e tre. Essi <strong>muoiono</strong>. Dichiara che il periodo di silenzio è terminato.</p><p>Ogni alba, dichiara quali giocatori contrassegnati <strong>1</strong>, <strong>2</strong> e <strong>3</strong> sono vivi e quali sono morti. Fallo anche se lo stato di vivo o morto di un giocatore non è cambiato durante la notte.</p><p class="modal__callout-box">Potrebbe essere necessario ricordare a tutti i giocatori di rimanere in silenzio mentre l’Al-Hadikhia agisce. Questo include rumori non verbali. Ciò impedisce ai giocatori di segnalare agli altri se hanno scelto di vivere o di morire.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Kazali",
        id:"kazali",	
        description: `Il Kazali sceglie i propri Minions.`,
        intro: "<ul><li>Se un Kazali viene creato a partita iniziata, il Kazali non sceglie nuovi giocatori Minion.</li><li>Lo Storyteller può fornire al Demone come bluff i personaggi buoni originali dei Minions, poiché non sono in gioco.</li><li>Il Kazali agisce in un momento che è tecnicamente sia durante la preparazione sia durante la prima notte.</li><li>Lo Storyteller può tenere il Kazali sveglio, oppure farlo addormentare, mentre sveglia i Minions per dire loro quale Minion sono.</li><li>Possono essere scelti solo Minions presenti nello script. Non sono consentiti Minion duplicati.</li></ul>",
        ability: 'Ogni notte*, scegli un giocatore: muore. [Scegli quali giocatori sono quali Minions. Da -? a +? Outsiders]',
        flavor: '"Gon(z)a7les6. Take cau8tun. The mech4an4ion is iNvert10d. E99ors insy6tum. Reco{7}fig."',
        examples: `<p>Ci sono 15 giocatori e nessun Minion ancora in gioco. Il Kazali si sveglia e sceglie che Doug diventi il malvagio l’Organ Grinder, che Amy diventi il malvagio il Vizier e che Lewis diventi il malvagio il Goblin.</p>`,
        howToRun: `<p>Durante la preparazione della partita, rimuovi tutti i token Minion e aggiungi token Townsfolk o Outsider.</p><p>Durante la prima notte, sveglia il Kazali. Il Kazali indica un giocatore e un Minion sulla scheda dei personaggi. Sostituisci il suo vecchio token personaggio con il token Minion, mostrargli il token informativo “You Are” poi il token del personaggio Minion, e fai un gesto di pollice verso il basso. Ripeti finché esiste il numero normale di Minions. Rimetti a dormire il Kazali.</p><p>Ogni notte tranne la prima, sveglia il Kazali. Indica qualsiasi giocatore. Quel giocatore muore.</p><p class="modal__callout-box">A seconda dello script, aggiungere più di un Outsider può mettere la squadra buona in uno svantaggio significativo.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Legion",
        id:"legion",	
        description: "La Legion è composta da molti Demone.",
        intro: `<ul><li>Il numero consigliato di giocatori buoni e malvagi è l’inverso del normale. Per esempio, in una partita da dieci giocatori, ci sono circa sette Legion e tre giocatori buoni.</li><li>I giocatori che non sono Legion possono essere Townsfolk o Outsiders, in qualsiasi combinazione.</li><li>Se almeno un giocatore buono ha votato per la nomina, e quel giocatore sta per “morire”, allora l’esecuzione avviene normalmente. Se solo giocatori malvagi votano per una nomina, il conteggio dei voti per quel nominato è zero.</li><li>Ogni Legion conta come Minion oltre che come Demone.</li><li>Lo Storyteller sceglie quale giocatore muore di notte.</li><li>Se rimane in vita un solo giocatore buono, lo Storyteller può dichiarare che i malvagi vincono, poiché i buoni non possono vincere.</li><li>Lo Storyteller può decidere di non fornire bluff ai giocatori Legion.</li></ul>`,
        ability: 'Ogni notte*, un giocatore potrebbe morire. Le esecuzioni falliscono se ha votato solo il male. Risulti anche come Minion. [La maggior parte dei giocatori è Legion]',
        flavor: '"Siamo il vento gelido in un giorno d’inverno. Siamo l’ombra nella notte senza luna. Siamo il veleno nel tuo tè e il sussurro nel tuo orecchio. Siamo ovunque."',
        examples: `<p>Gli unici giocatori buoni sono la Fortune Teller e lo Slayer. Sei Legion e lo Slayer votano per eseguire la Fortune Teller. La Fortune Teller viene eseguita, e i malvagi vincono.</p><p>Quattro giocatori sono vivi. Tre Legion e nessun giocatore buono votano per eseguire Julian. Julian non viene eseguito. Alex, che ha due voti, uno dei quali proveniente da un giocatore buono, viene invece eseguito.</p>`,
        howToRun: `<p>Durante la prima notte, nella fase di informazioni del Demone, consenti a tutti i giocatori Legion di stabilire un contatto visivo. <i>(Potresti voler indicare i giocatori non Legion in modo che la Legion sappia chi sono.)</i></p><p>Ogni notte, puoi decidere che un giocatore <strong>muore</strong>.</p><p>Quando conti i voti, conta ad alta voce, come di consueto. Se il totale dei voti è sufficiente a far sì che un giocatore stia per “morire” ma hanno votato solo giocatori malvagi, dichiara che il totale dei voti è zero.</p><p class="modal__callout-box">Nella maggior parte delle notti, uccidi una Legion. Uccidere un giocatore buono è solitamente ingiusto. Il tuo obiettivo è arrivare a tre giocatori vivi—due giocatori buoni e un giocatore Legion. Nell’ultimo giorno, se i giocatori non eseguono nessuno, uccidi un giocatore buono quella notte in modo che i malvagi vincano.</p><p class="modal__callout-box">Se i giocatori cercano di costringere altri a votare per “testare se il conteggio dei voti è zero”, puoi invece dichiarare che un voto a conteggio zero ha successo ma tenere segretamente traccia di quale giocatore sta davvero per morire contrassegnandolo con il promemoria “About To Die” della Legion, quindi eseguirlo quando le nomine sono terminate. Questo mantiene le partite con Legion misteriose e impegnative.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Leviathan",
        id:"leviathan",	
        description: "Il Leviathan non uccide.",
        intro: `<ul><li>Tutti i giocatori sanno che il Leviathan è in gioco, anche se il Leviathan viene creato a partita iniziata.</li><li>Qualsiasi numero di giocatori malvagi può essere eseguito, ma se viene eseguito più di un giocatore buono, i malvagi vincono. Non importa quali personaggi siano stati eseguiti, conta solo l’allineamento del giocatore nel momento in cui è stato eseguito.</li><li>Quando il quinto giorno termina e inizia la notte, se il Leviathan è ancora in vita, i malvagi vincono.</li><li>Tutti i tipi di esecuzione contano, anche se il giocatore non muore. Un giocatore eseguito a causa della Virgin, o per aver rivelato di essere il Mutant, è comunque eseguito. Un giocatore eseguito che sopravvive grazie al Pacifist è comunque eseguito.</li></ul>`,
        ability: 'Se viene eseguito più di 1 giocatore buono, i malvagi vincono. Tutti i giocatori sanno che sei in gioco. Dopo il giorno 5, i malvagi vincono.',
        flavor: '"Fino all’ultimo, lotto con te. Dal cuore dell\'Inferno, ti colpisco. Per odio, ti sputo contro il mio ultimo respiro."',
        examples: `<p>Il Leviathan è in gioco. Nel primo giorno, il Monk nomina la Virgin, e viene eseguito. Nel secondo giorno, il Courtier viene eseguito. I malvagi vincono.</p><p>Il Leviathan è in gioco. Nel secondo giorno, la Scarlet Woman viene eseguita. Nel terzo giorno, il Poisoner viene eseguito. Nel quinto giorno, il Soldier viene eseguito. I malvagi vincono.</p>`,
        howToRun: `<p>Immediatamente dopo l’alba del primo giorno, dichiara che il Leviathan è in gioco. Contrassegna il Leviathan con il promemoria <strong>DAY 1</strong>. All’inizio di ciascun giorno successivo, contrassegna il Leviathan con i promemoria <strong>DAY 2</strong>, poi <strong>DAY 3</strong>, poi <strong>DAY 4</strong>, poi <strong>DAY 5</strong>. Se un giorno termina e il Leviathan è contrassegnato con il promemoria <strong>DAY 5</strong>, dichiara che i malvagi vincono.</p><p>Se un giocatore buono viene eseguito, contrassegnalo con il promemoria <strong>GOOD PLAYER EXECUTED</strong>.</p><p>Se un giocatore buono viene eseguito e un giocatore è già contrassegnato con il promemoria <strong>GOOD PLAYER EXECUTED</strong>, dichiara che i malvagi vincono.</p><p class="modal__callout-box">Per i nuovi giocatori, è utile dichiarare ogni giorno che il Leviathan è in gioco e dire che giorno è. Nel primo giorno, di’ "Il Leviathan è in gioco. È il primo giorno." Nel secondo giorno, di’ "Il Leviathan è in gioco. È il secondo giorno." ecc. Questo aiuta i giocatori a ricordare quale Demone stanno affrontando ed evitare di perdere accidentalmente dimenticando di contare i giorni.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Lil' Monsta",
        id:"lilmonsta",	
        description: `Lil' Monsta non è un giocatore, ed è invece accudito da un Minion.`,
        intro: "",
        ability: "Ogni notte, i Minions scelgono chi accudisce Lil' Monsta e \"è il Demone\". Ogni notte*, un giocatore potrebbe morire. [+1 Minion]",
        flavor: '"Fase 1: Essere carino. Fase 2: Dominazione mondiale. Fase 3: Colazzzione."',
        examples: `<p>Il Poisoner e la Widow si svegliano. Si indicano a vicenda, poi indicano se stessi, poi alla fine entrambi indicano la Widow, che riceve il token di Lil' Monsta. La notte successiva, entrambi scelgono che il Poisoner accudisca invece Lil' Monsta.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Lleech",
        id:"lleech",	
        description: "Il Lleech vive se il suo ospite vive, e muore se il suo ospite muore.",
        intro: `<ul><li>Nella prima notte, il Lleech sceglie un giocatore, che è avvelenato per il resto della partita.</li><li>Se questo giocatore è vivo, il Lleech non può morire. Se il Lleech viene eseguito, lo Storyteller dice al gruppo che il giocatore vive, ma non il perché.</li><li>Se il giocatore scelto dal Lleech muore, anche il Lleech muore. Se questo significa che rimangono in vita solo uno o due giocatori, i buoni vincono comunque, perché il Demone è morto.</li><li>Dalla seconda notte in poi, i giocatori che il Lleech attacca muoiono ma non vengono avvelenati.</li><li>Se un Lleech viene creato a partita iniziata, avvelena un giocatore quella notte. Deve scegliere un giocatore vivo.</li></ul>`,
        ability: 'Ogni notte*, scegli un giocatore: muore. Inizi scegliendo un giocatore: è avvelenato. Muori se e solo se è morto.',
        flavor: '"Buono, buono, buono, buono, buono, buono, buono, buono cervel- voglio dire torta! Sì. Buona torta. È questo che intendevo dire."',
        examples: `<p>Il Lleech avvelena il Noble. Il Noble scopre tre giocatori buoni invece di un giocatore malvagio e due buoni. Il Lleech viene eseguito, ma non muore. Il giorno successivo, il Noble viene eseguito. Il Noble e il Lleech muoiono. I buoni vincono.</p><p>Il Lleech avvelena il Farmer. Il Courtier avvelena il Lleech. Lo Psychopath uccide il Farmer, ma il Lleech non muore perché il Lleech non ha alcuna abilità. Il Lleech viene eseguito e muore.</p>`,
        howToRun: `<p>Durante la prima notte, sveglia il Lleech. Indica qualsiasi giocatore. Quel giocatore è <strong>avvelenato</strong>—contrassegnalo con il promemoria <strong>POISONED</strong>. Rimetti a dormire il Lleech.</p><p>Ogni notte tranne la prima, sveglia il Lleech. Indica qualsiasi giocatore. Quel giocatore <strong>muore</strong>—contrassegnalo con il promemoria <strong>DEAD</strong>. Rimetti a dormire il Lleech.</p><p>Se il Lleech dovrebbe morire ma il giocatore contrassegnato con il promemoria <strong>POISONED</strong> del Lleech è vivo, il Lleech non muore. Se il giocatore contrassegnato con il promemoria <strong>POISONED</strong> del Lleech <strong>è morto</strong>, il Lleech <strong>muore</strong> e la squadra dei buoni vince.</p><p class="modal__callout-box">Quando fornisci informazioni false a un giocatore buono avvelenato dal Lleech, assicurati che queste informazioni sembrino vere. Se il giocatore buono le ritiene false, si farà rapidamente eseguire e vincerà la partita.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Lord of Typhon",
        id:"lordoftyphon",	
        description: "Il Lord of Typhon è circondato da Minions.",
        intro: `<ul><li>Tutti i personaggi malvagi siedono uno accanto all’altro in una linea continua. Tutti i personaggi malvagi (inclusi i Travellers e i Townsfolk malvagi) devono essere nella linea durante la preparazione.</li><li>Se il Lord of Typhon è nello script, lo Storyteller decide dove siedono i Travellers, anche se il Lord of Typhon non è in gioco.</li><li>Il Lord of Typhon deve avere un personaggio malvagio su entrambi i lati. Non può sedere all’estremità della linea dei personaggi malvagi.</li><li>La squadra malvagia inizia con un Minion aggiuntivo.</li><li>Può esserci qualsiasi numero di Outsiders in gioco.</li><li>Come per il Marionette, lo Storyteller decide quali giocatori sono Minions durante la preparazione. Lo Storyteller decide anche quale giocatore è quale Minion.</li><li>Se un Lord of Typhon viene creato a partita iniziata, il Lord of Typhon non deve sedere in una linea con i personaggi malvagi.</li></ul>`,
        ability: 'Ogni notte*, scegli un giocatore: muore. [I personaggi malvagi sono in linea. Tu sei al centro. +1 Minion. Da -? a +? Outsiders]',
        flavor: '"Negli angoli oscuri e dimenticati del cosmo, dove le stelle sussurrano segreti al vuoto, si cela una verità così profonda che il più lieve scorcio di essa disfa la sanità delle menti mortali."',
        examples: `<p>Ci sono due Minions: l’Organ Grinder e il Mezepheles. Tra di loro, confinante con entrambi, siede il Lord of Typhon. Il numero di Outsiders è normale.</p><p>Il Vizier confina con l’Harpy, che confina con il Lord of Typhon, che confina con il Goblin. Ci sono dieci giocatori e due Outsiders in gioco, a causa dell’abilità del Lord of Typhon.</p><p>Il Fearmonger confina con il Boomdandy, che confina con il Lord of Typhon, che confina con il Poisoner, che confina con il Mastermind. Ci sono 15 giocatori, ma zero Outsiders in gioco, poiché il Lord of Typhon ha rimosso un Outsider e il Puzzlemaster è diventato il Boomdandy durante la prima notte.</p>`,
        howToRun: `<p>Durante la preparazione della partita, rimuovi tutti i token Minion e aggiungi token Townsfolk o Outsider.</p><p>Durante la prima notte, sveglia il numero appropriato di giocatori immediatamente in senso orario e antiorario rispetto al Lord of Typhon. Mostra a ciascuno di questi giocatori un token Minion unico e fai un gesto di pollice verso il basso. Sostituisci i token dei personaggi buoni di questi giocatori con questi token Minion e rimettili a dormire. Poi esegui normalmente le fasi di informazioni dei Minion e del Demone.</p><p>Ogni notte tranne la prima, sveglia il Lord of Typhon. Indica qualsiasi giocatore. Quel giocatore <strong>muore</strong> — contrassegnalo con il promemoria <strong>DEAD</strong>. Rimetti a dormire il Lord of Typhon.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Ojo",
        id:"ojo",	
        description: "L’Ojo sceglie specificamente quale personaggio muore.",
        intro: `<ul><li>A differenza di altri Demone, l’Ojo deve scegliere un personaggio, non un giocatore. Lo Storyteller potrebbe doverlo ricordare al giocatore. Consigliamo che tutti i giocatori abbiano la propria scheda personaggio a portata di mano durante la fase notturna.</li><li>L’Ojo può uccidere personaggi malvagi, se lo desidera.</li><li>Se ci sono più copie di uno stesso personaggio in gioco e l’Ojo sceglie quel personaggio per morire, muore solo uno di quei personaggi.</li><li>Se l’Ojo sceglie un personaggio che non è in gioco, lo Storyteller quasi sempre ucciderà un giocatore buono vivo. È possibile, ma raro, che lo Storyteller scelga di far morire un giocatore morto o un giocatore malvagio.</li></ul>`,
        ability: 'Ogni notte*, scegli un personaggio: muore. Se non è in gioco, lo Storyteller sceglie chi muore.',
        flavor: '"Come un falò in una notte senza luna… ti vedo, mortale."',
        examples: `<p>L’Ojo sceglie il Plague Doctor. Il Plague Doctor muore. La notte successiva, l’Ojo sceglie il Poppy Grower. Il Poppy Grower muore. La notte seguente, l’Ojo sceglie l’Empath. Non c’è alcun Empath in gioco, quindi lo Storyteller sceglie che muoia invece lo Shugenja.</p>`,
        howToRun: `<p>Ogni notte tranne la prima, sveglia l’Ojo. Il giocatore dell’Ojo indica un’icona personaggio sulla propria scheda personaggio. Se quel personaggio è in gioco, quel giocatore muore—contrassegnalo con il promemoria <strong>DEAD</strong>. Se quel personaggio non è in gioco, scegli un qualsiasi giocatore. Quel giocatore muore—contrassegnalo con il promemoria <strong>DEAD</strong>. Rimetti a dormire l’Ojo.</p><p class="modal__callout-box">Se l’Ojo è in uno script con un Demone che uccide più volte per notte, come lo Shabaloth, e l’Ojo sceglie un personaggio non in gioco, puoi scegliere di uccidere più di un giocatore quella notte. Questo aiuta il giocatore dell’Ojo a fingere che sia in gioco un Demone diverso.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Riot",
        id:"riot",	
        description: "Il Riot uccide tutti nel panico.",
        intro: `<ul><li>Ogni giocatore che viene nominato muore immediatamente. Anche se è morto, può nominare di nuovo oggi. Questo può accadere più volte al giorno.</li><li>Il giocatore che è stato nominato deve nominare di nuovo immediatamente o perdere la possibilità di farlo. Lo Storyteller conta ad alta voce \"3... 2... 1...\" per far sapere al giocatore quanto tempo ha per nominare, se lo desidera. Se non lo fa, non sono consentite altre nomine oggi.</li><li>La squadra dei buoni vince se tutti i giocatori Riot sono morti. Se l’ultimo Riot muore e restano in vita solo due giocatori, essi non nominano e la squadra dei buoni vince.</li><li>Nel terzo giorno, ogni giocatore nominato deve nominare di nuovo. Se non lo fa, lo Storyteller nominerà al suo posto, oppure dichiarerà che la squadra di quel giocatore perde.</li><li>Se sono in vita solo tre giocatori quando iniziano le nomine del terzo giorno, il gruppo sceglie quale giocatore nomina per primo. Se nessuno nomina, il giorno termina e i malvagi vincono.</li></ul>`,
        ability: 'Nel giorno 3, i Minions diventano Riot e i nominati muoiono ma nominano immediatamente un giocatore vivo. Questo deve accadere.',
        flavor: '"Larga vida a la revolución! Mi revolucion!"',
        examples: `<p>Alex nomina Lewis. Lewis muore e nomina Ben. Ben muore e nomina Marianna. Marianna muore e nomina Lachlan. Lachlan muore e non nomina. Quattro giocatori sono morti oggi.</p><p>Nel terzo giorno, un giocatore Riot viene nominato. Muore e nomina l’Amnesiac, che muore e nomina il Knight, che muore e nomina un giocatore Riot. La partita termina immediatamente, poiché tutti i giocatori Riot sono morti.</p>`,
        howToRun: `<p>Durante la preparazione della partita, prima di mettere i token personaggio nel sacchetto, sostituisci tutti i token Minion con token Riot. Durante la prima notte, salta la fase di informazioni dei Minion. Durante la fase di informazioni del Demone, sveglia tutti i giocatori Riot e consenti loro di stabilire un contatto visivo. Mostra a ciascun giocatore Riot tre bluff di personaggi, poi rimettili a dormire.</p><p>Ogni volta che un giocatore viene nominato, <strong>muore</strong>. Dichiara che è morto e aggiungi immediatamente un sudario. Digli che può nominare di nuovo. Conta pubblicamente \"3... 2... 1...\" e, se nomina prima che il tempo scada, ripeti questo processo per il nuovo nominato <i>(<strong>muore</strong>, può nominare, ecc.)</i>. Se non nomina prima che il tempo scada, il giorno termina.</p><p>Nel terzo giorno, i giocatori nominati <strong>muoiono</strong> e devono nominare di nuovo. Se il giorno termina con più di due giocatori vivi, i malvagi vincono.</p><p class="modal__callout-box">Regola opzionale: quando il Riot è in gioco, i morti non possono essere nominati. (Questo è più divertente ed è l’intento originale del Riot.)</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Yaggababble",
        id:"yaggababble",	
        description: "Lo Yaggababble uccide parlando.",
        intro: `<ul><li>La frase che lo Yaggababble dice può essere di qualsiasi lunghezza, ma di solito è lunga da 2 a 5 parole.</li><li>Se lo Yaggababble pronuncia questa frase, lo Storyteller può uccidere un giocatore in qualsiasi momento successivo, fino all’alba.</li><li>Lo Yaggababble può dire questa frase come frase autonoma o come parte di un’altra frase.</li><li>Lo Yaggababble può dire questa frase più volte al giorno. In tal caso, lo Storyteller può uccidere più giocatori.</li><li>Lo Storyteller sceglie quali giocatori muoiono.</li><li>Lo Storyteller può scegliere di uccidere meno giocatori rispetto al numero di volte in cui la frase è stata detta.</li><li>Se lo Yaggababble è drunk o avvelenato, i giocatori non possono morire, anche se lo Yaggababble era sobrio e sano quando ha detto la sua frase. Se lo Yaggababble è sobrio e sano, i giocatori potrebbero morire, anche se lo Yaggababble era drunk o avvelenato quando ha detto la sua frase.</li><li>È raro che lo Yaggababble uccida durante il giorno.</li></ul>`,
        ability: 'Inizi conoscendo una frase segreta. Per ogni volta che l’hai detta pubblicamente oggi, un giocatore potrebbe morire.',
        flavor: '"Omicidi in Rue Morgue? Notizie false! Segugi nella brughiera dei Baskerville? Notizie false! Morte durante la navigazione sul Nilo? Notizie false!"',
        examples: `<p>La frase dello Yaggababble è "that sounds fishy". Lo Yaggababble la dice una volta durante il primo giorno. Quella notte, un giocatore muore. Il giorno successivo, lo Yaggababble dice "that sounds fishy" tre volte. Quella notte, tre giocatori muoiono.</p><p>Lo Yaggababble ha detto la sua frase due volte oggi. Una Witch è in gioco. Quando l’Heretic nomina, l’Heretic muore, anche se non era maledetto dalla Witch. Il Golem nomina il Demone, e il Golem muore. Entrambi i giocatori sono morti a causa dell’abilità dello Yaggababble.</p>`,
        howToRun: `<p>Durante la preparazione, scrivi una frase su un pezzo di carta o su un telefono.</p><p>Durante la prima notte, sveglia il Demone. Mostra questa frase, poi rimettilo a dormire.</p><p>Ogni volta che il Demone dice la frase segreta, metti un promemoria <strong>DEAD</strong> al centro del lato sinistro del Grimorio, come promemoria per te stesso di piazzarlo stanotte.</p><p>Ogni notte, puoi contrassegnare i giocatori con questi promemoria <strong>DEAD</strong> e aggiungere un sudario a ciascun giocatore contrassegnato. Questi giocatori muoiono.</p>`,
        group: "Demon",
        script: "exp"
    },
    {
        name: "Thief",
        id:"thief",	
        description: "Il Thief ruba voti a un giocatore, facendo sì che il suo voto conti negativamente.",
        intro: `<ul><li>Quando un giocatore scelto dal Thief vota, il conteggio dei voti diminuisce di uno invece di aumentare di uno. Questo accade ogni volta che quel giocatore vota quel giorno.</li><li>Il giocatore con il voto negativo torna immediatamente ad avere un voto positivo se il Thief muore, incluso se il Thief viene esiliato, perché il Thief perde la sua abilità.</li><li>Gli esili non sono mai influenzati dalle abilità, quindi il giocatore con il voto negativo può sostenere gli esili senza essere influenzato dall’abilità del Thief.</li><li>Poiché lo Storyteller conta il numero di voti ad alta voce mentre muove la mano intorno al cerchio, tutti i giocatori sapranno quale giocatore ha scelto il Thief.</li></ul>`,
        ability: 'Ogni notte, scegli un giocatore (non te stesso): il suo voto conta negativamente domani.',
        flavor: '"I aint done nuffink. I weren\'t even in dat alley last night! It weren\'t me what stole Mayor Bruno\'s briefcase wiv all dem fancy dockoments innit. Besides, it was too \'eavy to carry far."',
        examples: `<p>Il Thief sceglie Marianna. Il giorno successivo, mentre conta il primo voto, lo Storyteller conta "1... 2... 3... 2... 3... 4... 5." Il giocatore nominato ora ha cinque voti per la sua esecuzione, e il processo di nomina continua.</p><p>Il Thief sceglie Abdallah. Abdallah vota per un’esecuzione, quindi il conteggio dei voti è quattro, invece di sei se Abdallah non fosse stato influenzato dal Thief. Poiché dieci giocatori sono vivi, il nominato non viene eseguito oggi. Più tardi quel giorno, i giocatori stanno valutando se esiliare il Gunslinger. Abdallah alza la mano per sostenere l’esilio, che conta positivamente.</p><p>Il Thief sceglie Marianna. Il Bureaucrat sceglie anch’egli Marianna. Il giorno successivo, il voto di Marianna conta come meno tre voti.</p>`,
        howToRun: `<p>Ogni notte, sveglia il Thief. Indica qualsiasi giocatore. Contrassegna il giocatore scelto con il promemoria <strong>NEGATIVE VOTE</strong> del Thief. Rimetti a dormire il Thief.</p><p>Ogni volta che conteggi il voto di un giocatore contrassegnato <strong>NEGATIVE VOTE</strong>, consideralo come la sottrazione di un voto invece dell’aggiunta di un voto. <i>(Contalo ad alta voce, come di consueto.)</i></p>`,
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Bureaucrat",
        id:"bureaucrat",	
        description: "Il Bureaucrat assegna voti extra a un giocatore a sua scelta.",
        intro: `<ul><li>Quando un giocatore scelto dal Bureaucrat vota, quel voto conta come tre voti. Questo accade ogni volta che quel giocatore vota quel giorno.</li><li>Il giocatore con il voto triplo lo perde immediatamente se il Bureaucrat muore, incluso se il Bureaucrat viene esiliato, perché il Bureaucrat perde la sua abilità.</li><li>Gli esili non sono mai influenzati dalle abilità, quindi il giocatore con il voto triplo può sostenere un esilio solo una volta, non tre volte.</li><li>Poiché lo Storyteller conta il numero di voti ad alta voce mentre muove la mano intorno al cerchio, tutti i giocatori sapranno quale giocatore ha scelto il Bureaucrat.</ul>`,
        ability: 'Ogni notte, scegli un giocatore (non te stesso): il suo voto conta come 3 voti domani.',
        flavor: '"Firmi qui per favore. E qui. E qui. Eeeeeee qui. Tutto dovrebbe essere sistemato e conteggiato entro la fine della giornata, ammesso che le firme siano leggibili. Non abbiamo avuto pasticci con la documentazione da secoli. Ieri a mezzogiorno, se la memoria non mi inganna..."',
        examples: `<p>Il Bureaucrat sceglie Evin. Il giorno successivo, quando viene conteggiato il primo voto, lo Storyteller conta "1... 2... 3... 4-5-6... 7." Il giocatore nominato ora ha sette voti per la sua esecuzione, e il processo di nomina continua.</p><p>Il Bureaucrat sceglie Alex. Il giorno successivo, Alex ha un voto triplo, che utilizza durante quattro nomine.</p><p>Il Bureaucrat sceglie Doug, che è morto. Il giorno successivo, Doug usa il suo gettone voto per votare, e il suo voto conta come triplo.</p>`,
        howToRun: `<p>Ogni notte, sveglia il Bureaucrat. Indica qualsiasi giocatore.
            Contrassegna il giocatore scelto con il promemoria <strong>3 VOTES</strong> del Bureaucrat. Rimetti a dormire il Bureaucrat.</p><p>Ogni volta che conteggi il voto di un giocatore contrassegnato <strong>3 VOTES</strong>, consideralo come tre voti invece di uno. <i>(Contalo ad alta voce, come di consueto.)</i></p>`,
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Gunslinger",
        id:"gunslinger",	
        description: "Il Gunslinger uccide i giocatori che votano.",
        intro: `<ul><li>Ogni giorno, dopo che il primo voto per l’esecuzione è stato conteggiato,
            il Gunslinger può scegliere pubblicamente un giocatore che ha appena votato
            affinché muoia immediatamente. Il Gunslinger non è obbligato a uccidere un
            giocatore—dipende interamente da lui. Che usi la sua abilità
            o meno, il Gunslinger non può uccidere altri giocatori quel giorno.</li><li>È responsabilità del Gunslinger farsi avanti e far sapere allo Storyteller che desidera usare la sua abilità.</li><li>Poiché gli esili non sono influenzati in alcun modo dalle abilità dei personaggi, il Gunslinger non può usare la sua abilità per uccidere un giocatore che sostiene un esilio.</li></ul>`,
        ability: 'Ogni giorno, dopo che il 1° voto è stato conteggiato, puoi scegliere un giocatore che ha votato: muore.',
        flavor: '"È ora che qualcuno prenda la situazione in mano. Quel qualcuno... sono io."',
        examples: `<p>L’Imp è stato nominato. Ci sono dieci giocatori vivi
            e cinque voti per l’Imp, quindi l’Imp sta per morire.
            Il Gunslinger sceglie un giocatore che ha votato affinché muoia. Quel giocatore muore
            ma il giorno continua, con l’Imp ancora sul punto di morire.</p><p>I giocatori esiliano lo Scapegoat. Poi il Butler viene nominato per l’esecuzione e ottiene un voto. Questa è la prima nomina per l’esecuzione, poiché l’esilio dello Scapegoat non conta. Il Gunslinger sceglie di uccidere l’unico giocatore che ha votato. Più tardi quello
            stesso giorno, il Saint viene nominato e sei giocatori votano. Il Gunslinger non può usare la sua abilità ora perché questo non è il primo voto per l’esecuzione oggi.</p><p>L’Empath ha votato e il suo voto contava negativamente a causa del Thief. Il Gunslinger uccide l’Empath.</p>`,
        howToRun: `<p>Ogni giorno, immediatamente dopo che il primo voto per l’esecuzione è stato conteggiato, il Gunslinger può dichiarare che desidera usare la sua abilità. In tal caso, il Gunslinger indica qualsiasi giocatore che ha votato per questa
            esecuzione. Il giocatore scelto <strong>muore</strong>.</p><p class="modal__callout-box">Se il Gunslinger è un nuovo giocatore, potresti voler ricordargli che può usare la sua abilità.</p><p class="modal__callout-box">Quando il Gunslinger vuole usare la sua abilità, potresti dover chiedere a tutti i giocatori che hanno votato di alzare di nuovo la mano, così il Gunslinger non sceglie accidentalmente un giocatore che non ha votato.</p>`,
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Scapegoat",
        id:"scapegoat",	
        description: "Lo Scapegoat viene eseguito al posto di un alleato.",
        intro: `<ul><li>Se lo Scapegoat è malvagio, potrebbe morire al posto di un giocatore malvagio
            che sta per morire. Se lo Scapegoat è buono, potrebbe morire al posto di un giocatore buono che sta per morire. Quando esattamente ciò accade è a discrezione dello Storyteller. Questo può avvenire solo a causa di un’esecuzione, non per una morte dovuta ad altri mezzi come un Demone o lo Slayer.</li><li>L’uccisione dello Scapegoat conta comunque come un’esecuzione, quindi non avvengono altre nomine oggi.</li><li>Come sempre, i giocatori non scoprono l’allineamento dello Scapegoat quando muore.</li></ul>`,
        ability: 'Se un giocatore del tuo allineamento viene eseguito, potresti essere eseguito tu al suo posto.',
        flavor: '"Buonasera! Grazie per avermi invitato al ballo. Non sono di queste parti, ma sembrate proprio una compagnia amichevole, accidenti. Sono sicuro che andremo d’accordo a meraviglia. A cosa serve tutta quella corda?"',
        examples: `<p>La Fortune Teller sta per essere eseguita, ma lo Storyteller sceglie di eseguire invece lo Scapegoat buono. La Fortune Teller vive e lo Scapegoat muore. Quella notte, l’Undertaker scopre
            che uno Scapegoat è stato eseguito oggi.</p><p>Il Poisoner sta per essere eseguito, ma lo Storyteller sceglie di eseguire invece lo Scapegoat malvagio. Lo Storyteller avrebbe potuto lasciare che il Poisoner morisse normalmente, ma ha scelto di non farlo.</p><p>La Spy sta per essere eseguita. Lo Scapegoat buono muore invece, perché la Spy risulta come buono.</p>`,
        howToRun: `<p>Se un giocatore dello stesso allineamento dello Scapegoat sta per essere
            eseguito, puoi scegliere che venga eseguito invece lo Scapegoat. Lo Scapegoat <strong>muore</strong>.</p><p class="modal__callout-box">È meglio usare l’abilità dello Scapegoat prima dell’ultimo giorno, perché uno Scapegoat che rimane in vita nell’ultimo giorno verrà quasi certamente esiliato. Dovresti sempre usare l’abilità di uno Scapegoat malvagio per impedire che i malvagi perdano la partita.</p>`,
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Beggar",
        id:"beggar",	
        description: "Il Beggar non può votare a meno che qualcuno non gli dia un gettone voto.",
        intro: `<ul><li>Il Beggar non può alzare la mano per votare in alcun modo a meno che non
            abbia un gettone voto.</li><li>Quando vota, perde un gettone voto. Se ne ha più di uno, può usarne solo uno alla volta.</li><li>Solo un giocatore morto può dare il proprio gettone voto al Beggar, dopodiché quel giocatore morto non può più votare. Ogni giocatore morto decide autonomamente se dare il proprio gettone voto al Beggar. Nessuno, incluso il Beggar, può spostare il gettone voto di un giocatore al posto suo.</li><li>Quando un giocatore dà il proprio gettone voto al Beggar, il Beggar scopre se quel giocatore è buono o malvagio.</li><li>Il Beggar può comunque nominare liberamente e può comunque votare liberamente per un esilio, perché gli esili non sono influenzati dalle abilità.</li><li>Se il Beggar muore, ottiene un gettone voto da usare mentre è morto, proprio come qualsiasi altro personaggio. Tuttavia, il Beggar perde tutti i gettoni voto acquisiti in precedenza.</li><li>Se il Beggar dovesse diventare drunk o avvelenato, non lo diventa.</li><li>L’abilità di donare gettoni voto è unica dell’abilità del Beggar. I giocatori non possono dare il proprio gettone voto a un giocatore che
            non sia il Beggar, indipendentemente dal fatto che un Beggar sia in gioco o meno.</li></ul>`,
        ability: 'Devi usare un gettone voto per votare. Se un giocatore morto ti dà il suo, scopri il suo allineamento. Sei sobrio e sano.',
        flavor: '"L’elemosina per i poveri, buon signore? Una monetina, madama? Grazie. Dio vi benedica! Siete davvero un’anima gentile, senza dubbio! Stasera mangerò qualcosa di raffinato, sì!"',
        examples: `<p>Il Beggar non può votare. Nel quarto giorno, Sarah dà il suo gettone voto al Beggar. Il Beggar ora può votare una volta e scopre che Sarah è buona. Il Beggar è malvagio e dice al gruppo che
            Sarah è malvagia.</p><p>Il Beggar buono ha tre gettoni voto. Doug dà il suo gettone voto al Beggar, e il Beggar scopre che Doug è malvagio. Quel giorno, il Beggar muore e perde tutti i suoi gettoni voto tranne uno.</p>`,
        howToRun: `<p>Il Beggar non può votare a meno che non abbia un gettone voto. Perde
            un gettone voto ogni volta che vota.</p><p>Durante il giorno, un giocatore morto può dichiarare di dare il proprio gettone voto al Beggar. Trasferisci il gettone voto al Beggar e comunica privatamente al Beggar l’allineamento di quel giocatore.</p>`,
        group: "Traveller",
        script: "tb"
    },
    {
        name: "Apprentice",
        id:"apprentice",	
        description: "L’Apprentice ha un’abilità Townsfolk oppure Minion.",
        intro: `<ul><li>Un Apprentice buono ottiene un’abilità Townsfolk. Un Apprentice malvagio ottiene un’abilità Minion. Mantiene questa abilità fino a quando muore.</li><li>L’Apprentice scopre la propria abilità nella sua prima notte,
            e può agire quella notte se il personaggio di cui ottiene l’abilità lo farebbe.</li><li>Possono essere ottenute solo abilità elencate sulla scheda dei personaggi.</li><li>Se l’Apprentice ottiene un’abilità che normalmente funziona solo nella prima notte della partita, come quella della Grandmother, essa funziona invece nella prima notte dell’Apprentice.</li><li>L’Apprentice non diventa letteralmente il personaggio di cui ottiene l’abilità. Rimane l’Apprentice, un Traveller, quindi può essere esiliato ma non eseguito, e non conta nel numero di giocatori vivi per determinare se i malvagi vincono a causa del fatto che rimangano solo due giocatori in vita. Inoltre, le abilità di altri personaggi che rilevano personaggi rileveranno l’Apprentice come Apprentice.</li></ul>`,
        ability: 'Nella tua 1ª notte, ottieni un’abilità Townsfolk (se buono) o un’abilità Minion (se malvagio).',
        flavor: '"Per anni ho viaggiato, studiando le vie dell’Arte. Quale arte, chiedi? Semplicemente quella della gente semplice. Nulla di cui preoccuparsi. Non ancora."',
        examples: `<p>L’Apprentice malvagio ottiene l’abilità dell’Assassin. Quella notte, uccide il Fool.</p><p>L’Apprentice buono ottiene l’abilità del Fool. Viene esiliato e non muore. Sebbene il processo di esilio in sé non possa essere influenzato dalle abilità, il Traveller muore dopo che l’esilio è stato deciso. In questo caso il Fool morirebbe, ma rimane in vita.</p><p>L’Apprentice buono ottiene l’abilità della Chambermaid. Da quel momento in poi, scopre chi si sveglia di notte. In seguito, il Gambler indovina che l’Apprentice è la Chambermaid. Il Gambler muore, perché l’Apprentice non è la Chambermaid.</p>`,
        howToRun: `<p>Durante la prima notte dopo che l’Apprentice entra in gioco, sveglia l’Apprentice. Mostragli il token informativo <strong>YOU ARE</strong>, poi un token Townsfolk o Minion. Nel Grimorio, sostituisci
            il token Apprentice con quel token personaggio, e contrassegnalo con il promemoria <strong>IS THE APPRENTICE</strong>. Quel giocatore rimane l’Apprentice ma ottiene l’abilità del token personaggio.</p><p class="modal__callout-box">Quasi certamente vorrai scegliere l’abilità di un personaggio non in gioco, perché esiste un solo token per ciascun personaggio e l’Apprentice deve usare quel token.</p>`,
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Matron",
        id:"matron",	
        description: "La Matron sceglie dove siedono i giocatori.",
        intro: `<ul><li>La Matron può scambiare le posizioni a sedere di due giocatori, fino a tre volte al giorno. Il nuovo ordine dei posti è permanente, a meno che non venga modificato di nuovo dalla Matron.</li><li>Lo stesso giocatore può essere spostato più volte.</li><li>Alcuni giocatori potrebbero trovare difficile spostarsi a causa di una disabilità o di un impedimento fisico. In questi casi, sono immuni all’abilità della Matron e possono rimanere dove sono.</li><li>Con la Matron in gioco, i giocatori non possono parlare in privato se non con i loro vicini immediati mentre sono seduti.
            I giocatori non possono lasciare il proprio posto per sussurrare qualcosa a un altro giocatore, e non possono nemmeno parlare della partita tra loro andando in bagno, e così via. I giocatori dovrebbero autocontrollarsi.</li><li>Se la Matron scambia solo uno o due coppie di giocatori, non può scambiare un’altra coppia di giocatori più tardi nello stesso giorno.</li></ul>`,
        ability: 'Ogni giorno, puoi scegliere fino a 3 coppie di 2 giocatori per scambiare i posti. I giocatori non possono lasciare i loro posti per parlare in privato.',
        flavor: '"Miss Featherbottom, silenzio. Maestro Rutherford, una tazza da tè richiede solo quattro dita, per favore. So che siete padre di nove figli, ma l’età, o la sua mancanza a seconda dei casi, non è mai una scusa per le cattive maniere."',
        examples: `<p>La Matron buona scambia la posizione a sedere del giocatore che pensa sia il Demone, così che quel giocatore sia lontano dal giocatore che pensa sia il Minion. Ora non possono più sussurrare tra loro.</p><p>La Matron malvagia scambia il proprio posto con quello di un altro giocatore in modo da sedersi accanto alla Tea Lady. In questo modo, i due possono sussurrare tra loro e l’abilità della Tea Lady non funziona.</p>`,
        howToRun: `<p>I giocatori che lasciano il proprio posto non possono parlare della partita con altri
            giocatori finché non tornano.</p><p>Ogni giorno, la Matron può scegliere due giocatori e dichiarare che scambiano le loro posizioni a sedere. Chiedi loro di farlo. Scambia i loro token personaggio e qualsiasi promemoria che hanno nel Grimorio. La Matron può farlo fino a tre volte, ma tutti gli scambi avvengono uno dopo l’altro.</p>`,
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Judge",
        id:"judge",	
        description: "Il Judge può determinare se un’esecuzione ha successo oppure no, indipendentemente da chi ha votato.",
        intro: `<ul><li>Il Judge può decidere di graziare un giocatore che ritiene innocente, di condannare un giocatore che ritiene colpevole, o viceversa.</li><li>Se il nominato viene graziato, allora non viene eseguito oggi e nessuno dei voti per lui conta. Se il nominato viene condannato, allora viene eseguito immediatamente, indipendentemente da quanti voti ha ricevuto e indipendentemente dal fatto che un altro giocatore stesse per morire per esecuzione. Poi il giorno termina, perché normalmente può avvenire una sola esecuzione per giorno.</li><li>Il Judge può usare la propria abilità durante o dopo il conteggio dei voti. Tuttavia, una volta che un nuovo giocatore è stato nominato, il Judge può usare la propria abilità solo su questo nuovo nominato. Il Judge può usare la propria abilità una sola volta e solo se un altro giocatore ha effettuato una nomina.</li></ul>`,
        ability: 'Una volta per partita, se un altro giocatore ha nominato, puoi scegliere di forzare l’esecuzione attuale ad avere successo o a fallire.',
        flavor: '"Ritengo l’imputato colpevole dei crimini di omicidio, frode, incendio doloso, furto, impersonificazione di un ufficiale della legge, esercizio della medicina senza licenza, diffamazione, regicidio e abbandono di rifiuti."',
        examples: `<p>Lo Slayer stava per morire, ma il Po viene nominato e ogni giocatore vivo vota, quindi ora il Po sta per morire. Il Judge malvagio decide che l’esecuzione del Po fallisce. Quindi, come prima, lo Slayer
            sta per morire e il processo di nomina continua.</p><p>Il Judge buono nomina il Professor. Nessuno vota, ma il Judge non può usare la sua abilità. Più tardi, un Traveller viene considerato per l’esilio. Ancora una volta, il Judge non può usare la sua abilità perché le abilità non influenzano gli esili. La Grandmother nomina il
            Goon per l’esecuzione. Il Goon ottiene un solo voto, ma il Judge decide che il Goon viene eseguito immediatamente.</p>`,
        howToRun: `<p>In qualsiasi momento durante una nomina per l’esecuzione — dal momento in cui la nomina viene dichiarata fino al momento prima che un nuovo giocatore venga nominato per l’esecuzione — il Judge può dichiarare
            che questa esecuzione ha successo o fallisce. Se il Judge dichiara che ha successo, il giocatore nominato viene eseguito e puoi procedere alla fase notturna <i>(poiché può avvenire una sola esecuzione per giorno)</i>.
            Se il Judge dichiara che fallisce, il giocatore nominato non sta più per morire ed è trattato come se avesse ricevuto zero voti per l’esecuzione, e il processo di nomina continua. <strong>Il Judge perde la sua abilità</strong>—metti il promemoria <strong>NO ABILITY</strong> del Judge accanto al token del Judge.</p>`,
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Voudon",
        id:"voudon",	
        description: "Il Voudon permette ai morti di votare come se fossero vivi, ma impedisce ai giocatori vivi di votare.",
        intro: `<ul><li>I morti e il Voudon possono votare quante volte desiderano al giorno. Non hanno bisogno di un gettone voto per votare e non perdono il loro gettone voto quando lo fanno. I giocatori vivi non possono
            votare. Non è che possano alzare la mano ma i voti non contano—le loro mani devono rimanere abbassate durante le votazioni.</li><li>Il numero di voti necessari per eseguire un giocatore non è più la metà o più dei giocatori vivi. Il giocatore con il maggior numero di voti viene eseguito ogni giorno, ma anche un singolo voto è sufficiente per eseguire un giocatore se nessun altro giocatore ottiene più voti.</li><li>Il Voudon non altera chi può effettuare le nomine. Come di consueto, i giocatori vivi possono effettuare nomine e i giocatori morti no. Poiché i Travellers vengono esiliati, non eseguiti, tutti i giocatori, vivi o morti, possono sostenere l’esilio del Voudon o di altri Travellers.</li><li>Se un giocatore sta per morire e poi il Voudon viene esiliato, quel giocatore sta comunque per morire e le nomine continuano, ma i giocatori vivi votano normalmente. Se una nomina successiva ottiene più voti e raggiunge la metà o più dei giocatori vivi, allora quel nuovo giocatore sta per morire al suo posto.</li></ul>`,
        ability: 'Solo tu e i morti potete votare. Non avete bisogno di un gettone voto per farlo. Non è richiesta una maggioranza del 50%.',
        flavor: '"Bien venu. Sedetevi. Respirate profondamente. Entrate nella terra dei morti. Vedete con i loro occhi. Parlate con la loro voce. Yon sel lang se janm ase."',
        examples: `<p>Ci sono dodici giocatori vivi e tre morti. Un Innkeeper vivo nomina la Moonchild. Dei quattro giocatori che possono votare—il Voudon e i tre giocatori morti—tre votano. Tutti gli altri nominati oggi ottengono meno di tre voti, quindi la Moonchild muore.</p><p>È il primo giorno. Solo il Voudon può votare, ma non lo fa. I giocatori chiedono che il Voudon venga esiliato. Cinque giocatori sostengono l’esilio e sette si oppongono. Il Voudon rimane in vita.</p><p>Due giocatori morti votano per l’esecuzione del Mastermind. Poi il Voudon, il Fool morto e lo Zombuul apparentemente morto votano tutti per il Gossip. Il Gossip viene eseguito.</p>`,
        howToRun: `<p>Durante le votazioni per l’esecuzione, solo i giocatori morti e il Voudon possono alzare la mano per votare. I morti possono votare anche se non hanno alcun gettone voto e votare non consuma un gettone voto. Se un nominato
            ottiene almeno un voto, sta per morire per esecuzione finché un giocatore diverso non ottiene più voti.</p>`,
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Bishop",
        id:"bishop",	
        description: "Il Bishop impedisce ai giocatori di effettuare nomine. Al loro posto, è lo Storyteller a effettuare tutte le nomine.",
        intro: `<ul><li>Durante il processo di nomina, lo Storyteller effettua le nomine al posto dei giocatori e può nominare pochi o molti giocatori a sua discrezione. Per essere equo, deve nominare almeno un giocatore il cui allineamento sia opposto a quello del Bishop ogni giorno.</li><li>Il Bishop non altera chi può o non può votare. Ogni giocatore può votare normalmente.</li><li>Poiché i Travellers vengono esiliati e non eseguiti, qualsiasi giocatore può chiedere che il Bishop o un altro Traveller venga esiliato.</li></ul>`,
        ability: 'Solo lo Storyteller può effettuare nomine. Almeno 1 giocatore di allineamento opposto deve essere nominato ogni giorno.',
        flavor: '"In nomine Patris, et Filii, et Spiritus Sancti… Nos mos Dei. Deus vult de nobis."',
        examples: `<p>Il Bishop è buono. Nel primo giorno, lo Storyteller nomina il Demone, un Minion e due Townsfolk. Nel secondo giorno, lo Storyteller nomina un Minion e un Outsider.</p><p>Il Bishop è malvagio. Lo Storyteller non ha nominato nessuno. Tuttavia, lo Storyteller deve nominare almeno un giocatore buono oggi, quindi sceglie il Minstrel. Il giorno successivo, lo Storyteller nomina quattro giocatori buoni e il Demone. Il Bishop viene esiliato quel giorno e ora i giocatori possono continuare il processo di nomina normalmente.</p>`,
        howToRun: `<p>Ogni alba, contrassegna il Bishop buono con il promemoria <strong>NOMINATE EVIL</strong>
            oppure contrassegna il Bishop malvagio con il promemoria <strong>NOMINATE GOOD</strong>.</p><p>Durante il processo di nomina per l’esecuzione, i giocatori non possono effettuare nomine, ma tu sì. <i>(Le votazioni avvengono normalmente.)</i> Quando nomini un giocatore il cui allineamento è opposto a quello del Bishop, rimuovi il promemoria del Bishop. Non puoi terminare il processo di nomina se il Bishop è contrassegnato con il suo promemoria.</p><p class="modal__callout-box">Di solito vorrai nominare circa tre o cinque giocatori ogni giorno, con almeno uno di essi che sia malvagio. Non devi nominare il Demone ogni giorno, ma dovresti nominare tutti i giocatori vivi nell’ultimo giorno. Quali giocatori nominare dipende da te, ma è meglio nominare più giocatori malvagi se il Bishop è buono e nominare meno giocatori malvagi se il Bishop è malvagio.</p>`,
        group: "Traveller",
        script: "bmr"
    },
    {
        name: "Barista",
        id:"barista",	
        description: "Il Barista rende le persone sobrie e sane, oppure permette loro di agire il doppio delle volte.",
        intro: `<ul><li>Lo Storyteller sceglie ogni notte quale giocatore viene influenzato dal Barista e quale delle due abilità del Barista è attiva. Il Barista non sa chi o cosa lo Storyteller
            sceglie, ma il giocatore influenzato sì.</li><li>Se il giocatore influenzato agisce due volte, lo fa nel momento normale. Se normalmente si sveglierebbe di notte, agisce, torna a dormire, poi si sveglia per agire di nuovo. Se ha già usato un’abilità "una volta per partita", può usarla di nuovo. Se ha un’abilità "una volta per partita" ma non l’ha ancora usata, può usarla due volte prima del crepuscolo.</li><li>Se il Barista rende un giocatore sobrio e sano, la sua eventuale ubriachezza o avvelenamento viene rimosso, e non può diventare drunk o avvelenato fino al crepuscolo. Questo giocatore deve ricevere informazioni vere, anche se un Vortox è in gioco.</li></ul>`,
        ability: 'Ogni notte, fino al crepuscolo, 1) un giocatore diventa sobrio e sano e riceve informazioni vere, oppure 2) la sua abilità funziona due volte. scopre quale.',
        flavor: '"Davvero non c’è motivo di preoccuparsi perché, a ben pensarci, siamo tutti capaci e qualificati e abbastanza intelligenti da prendere il toro per le corna e sederci a risolvere la cosa come gli adulti ragionevoli che siamo, a proposito gradireste un’altra tazza perché è davvero la bevanda più incredibile dicono venga dall’est ma comunque dove eravamo ah sì andare a fare una corsetta e sbrogliare davvero questa faccenda del Demone che possiamo risolvere con solo un piccolo minuscolo potenziamento mentale e un po’ di pensiero logico per esempio il signor Hu qui è un cliente abituale e quindi piuttosto affidabile e qualcuno gradisce un’altra tazza?"',
        examples: `<p>Il Barista rende il Sage sobrio e sano.</p><p>Il Klutz agisce due volte. Muore e deve scegliere due giocatori. Se uno dei due è malvagio, i malvagi vincono. La notte successiva, il Barista fa agire la Witch due volte. Due giocatori vengono maledetti.</p>`,
        howToRun: `<p>Ogni notte, rimuovi i promemoria precedenti poi metti il promemoria <strong>SOBER AND HEALTHY</strong> del Barista oppure il promemoria <strong>ACTS TWICE</strong> accanto a qualsiasi token personaggio. Sveglia il giocatore di quel personaggio e mostrargli il token informativo <strong>THIS CHARACTER SELECTED YOU</strong>, il token del Barista, poi un dito <i>(per indicare che è sobrio e sano)</i> oppure due dita <i>(per indicare che agisce due volte)</i>. Rimetti a dormire quel giocatore.</p><p>Un giocatore contrassegnato <strong>SOBER AND HEALTHY</strong> è sobrio e sano <i>(anche se è anche contrassegnato <strong>DRUNK</strong> o <strong>POISONED</strong>)</i> e riceve sempre informazioni vere <i>(anche se un’abilità lo renderebbe drunk o avvelenato)</i>.</p><p>Un giocatore contrassegnato <strong>ACTS TWICE</strong> agisce due volte nel momento appropriato. <i>(Se l’abilità è opzionale, può usarla due volte. Se è obbligatoria, deve usarla due volte.)</i> Usa i promemoria <strong>?</strong> del Barista se necessario, come sostituti dei promemoria del personaggio.</p><p class="modal__callout-box">Alcuni personaggi traggono più beneficio dal sapere di essere sobri e sani, poiché non ottengono alcun vantaggio dall’agire due volte, come la Flowergirl, il Town Crier o l’Oracle.</p><p class="modal__callout-box">Il Barista garantisce che i giocatori ricevano informazioni vere anche se un’abilità causerebbe informazioni false, come nel caso di Fortune Teller, Spy o Recluse.</p>`,
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Harlot",
        id:"harlot",	
        description: "La Harlot scopre il personaggio di chi accetta di rivelarlo, ma con un grande rischio per entrambi.",
        intro: `<ul><li>Ogni notte, la Harlot sceglie un giocatore. Quel giocatore deve prendere una decisione: rivela il proprio personaggio alla Harlot? Se lo fa, lo Storyteller può decidere che sia quel giocatore sia
            la Harlot muoiano stanotte.</li><li>La Harlot scopre solo il personaggio del giocatore scelto, non il suo allineamento.</li><li>La Harlot può discutere durante il giorno quale personaggio vorrebbe scegliere di notte, e altri giocatori possono offrirsi di essere scelti, ma possono rimangiarsi la parola e scegliere diversamente quando arriva la notte.</li></ul>`,
        ability: 'Ogni notte*, scegli un giocatore vivo: se accetta, scopri il suo personaggio, ma potreste morire entrambi.',
        flavor: '"Enchanté, marinaio. Sembri avere bisogno di qualcuno che ascolti davvero i tuoi problemi. Io so ascoltare. Molto, molto bene."',
        examples: `<p>La Harlot buona si sveglia e sceglie il Philosopher, che sceglie di rivelare. La notte successiva, la Harlot sceglie il No Dashii, che sceglie di non rivelare. La notte seguente, la Harlot sceglie il
            Mutant, che sceglie di rivelare. Lo Storyteller decide che la Harlot e il Mutant muoiono stanotte.</p><p>La Harlot malvagia sceglie il Sage, che rivela. Il giorno successivo, la Harlot dice che il Sage è in realtà la Witch.</p>`,
        howToRun: `<p>Ogni notte, sveglia la Harlot. La Harlot indica qualsiasi giocatore. Rimetti a dormire la Harlot. Sveglia il giocatore scelto, mostrargli il token informativo <strong>THIS  CHARACTER SELECTED YOU</strong>, poi il token della Harlot. Quel giocatore annuisce per dire sì oppure scuote la testa per dire no. Rimetti a dormire quel giocatore.</p><p>Se ha scosso la testa per dire no, allora non accade nulla. Continua con la fase notturna.</p><p>Se ha annuito per dire sì, sveglia la Harlot e mostrargli il token personaggio del giocatore scelto. Rimetti a dormire la Harlot. Puoi decidere che entrambi i giocatori <strong>muoiono</strong>—contrassegnali con promemoria <strong>DEAD</strong>.</p><p class="modal__callout-box">Quando scegli se uccidere i giocatori, fai ciò che ritieni più
            interessante ed equilibrato. Se il Demone rivela alla Harlot, non dovresti terminare la partita uccidendolo.</p>`,
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Butcher",
        id:"butcher",	
        description: "Il Butcher permette che avvenga una seconda esecuzione ogni giorno.",
        intro: `<ul><li>Dopo che il primo giocatore eseguito è morto, il Butcher può nominare un secondo giocatore per l’esecuzione. Il Butcher può nominare un giocatore che è già stato nominato oggi e può effettuare una nomina anche se ha già nominato un giocatore in precedenza oggi.</li><li>Se un giocatore viene eseguito, anche se non muore, allora il Butcher può usare la propria abilità. I giocatori possono scegliere se votare o meno, quindi non c’è garanzia che questa nomina aggiuntiva causi un’esecuzione—deve comunque ottenere abbastanza voti—ma questa seconda nomina non deve superare il totale di voti delle nomine precedenti.</li><li>Se oggi non avviene alcuna esecuzione, allora il Butcher non può usare affatto la propria abilità oggi.</li></ul>`,
        ability: 'Ogni giorno, dopo la 1ª esecuzione, puoi nominare di nuovo.',
        flavor: '"Sa di pollo. Ancora, per favore."',
        examples: `<p>La Witch viene eseguita e muore. Il Butcher poi nomina il Sage, che ottiene abbastanza voti per essere eseguito. Anche il Sage muore.</p><p>Il Bone Collector viene esiliato e poi viene esiliata la Harlot.
            Oggi non avvengono esecuzioni. Il Butcher non può nominare di nuovo, perché gli esili non sono esecuzioni.</p><p>Il Butcher nomina il Town Crier, ma il Town Crier non viene eseguito. Il Mathematician ottiene più voti e viene eseguito oggi. La partita continua e il Butcher nomina di nuovo il Town Crier. Questa volta, vengono alzate abbastanza mani e il Town Crier viene eseguito.</p>`,
        howToRun: `<p>Ogni giorno, immediatamente dopo che un giocatore viene eseguito, il Butcher può nominare un giocatore per l’esecuzione. <i>(Ricordaglielo se necessario.)</i> Per avere successo, questa nomina deve ottenere un totale di voti pari ad almeno la metà dei giocatori vivi, come di consueto, ma non deve superare il numero di voti dell’esecuzione che ha attivato l’abilità del Butcher. Se questa seconda esecuzione ha successo, non consente al Butcher di nominare un terzo giocatore.</p>`,
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Deviant",
        id:"deviant",	
        description: "Il Deviant può evitare di essere esiliato, purché oggi sia stato divertente.",
        intro: `<ul><li>Il Deviant può divertire il gruppo in qualsiasi modo scelga. In genere, mezzi verbali come battute, storie divertenti o osservazioni argute sono sufficienti.</li><li>Lo Storyteller è il giudice che decide se il Deviant è stato divertente o meno.</li></ul>`,
        ability: 'Se oggi sei stato divertente, non puoi morire per esilio.',
        flavor: '"Era lo scherzo della dama, invero."',
        examples: `<p>Il Deviant malvagio fa qualche battuta e ottiene qualche risata, ma i giocatori decidono comunque di esiliarlo. Anche se ci sono abbastanza voti, lo Storyteller decide di mantenere il Deviant in vita.</p><p>Nel terzo giorno, il Deviant è stato leggermente divertente. I giocatori esiliano il Deviant, ma il Deviant non muore. Nel quarto giorno, il Deviant non è stato molto divertente, viene esiliato e muore.</p>`,
        howToRun: `<p>Se il Deviant sta per essere esiliato, puoi dichiarare che il Deviant
            rimane in vita.</p><p class="modal__callout-box">È meglio essere indulgenti e considerare divertente anche un Deviant solo leggermente divertente. Dopotutto, può essere difficile far ridere quando ci si aspetta che lo si faccia.</p><p class="modal__callout-box">Se il giocatore lo preferisce, puoi stabilire criteri diversi per determinare se il Deviant viene esiliato. Se essere “divertente” è difficile, puoi invece premiare un Deviant che “crea un clima positivo” o “è utile agli altri”. Il Deviant non è un personaggio serio ed è pensato per incoraggiare risate, leggerezza e divertimento, quindi adatta le regole del Deviant alle esigenze e ai talenti dei tuoi giocatori.</p>`,
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Bone Collector",
        id:"bonecollector",	
        description: "Il Bone Collector restituisce temporaneamente l’abilità ai giocatori morti.",
        intro: `<ul><li>Il Bone Collector deve scegliere un giocatore morto. Il giocatore scelto rimane morto, ma ottiene la possibilità di usare la propria abilità. Se la sua abilità era una abilità “inizi sapendo” o “una volta per partita”—come quelle della Virgin, dello Slayer, del Clockmaker, della Seamstress o del Juggler—può usarla di nuovo, anche se era già stata usata,
            fino al crepuscolo.</li><li>Quando il Bone Collector sceglie un giocatore, quel giocatore non scopre di essere stato selezionato dal Bone Collector, anche se lo scoprirà abbastanza presto quando verrà svegliato per usare la propria abilità.</li><li>Se il Bone Collector muore, quel giocatore non ha più l’abilità che aveva riottenuto grazie al Bone Collector.</li></ul>`,
        ability: 'Una volta per partita, di notte*, scegli un giocatore morto: riottiene la propria abilità fino al crepuscolo.',
        flavor: '"Colleziono molte cose. Capelli. Denti. Vestiti. Frammenti di poesie. I sogni di amanti perduti. Le mie arti segrete non sono per te, ma il mio compenso è una semplice inezie. Portami il sangue di una nobildonna morta di crepacuore sotto la luna piena, e avrai le tue risposte."',
        examples: `<p>Il Bone Collector restituisce l’abilità alla Flowergirl morta. Quella notte, la Flowergirl scopre che il Demone ha effettivamente votato oggi. La notte successiva, la Flowergirl non ha di nuovo alcuna abilità.</p><p>Il Bone Collector sceglie la Witch morta. La Witch si sveglia e maledice il Clockmaker. Il Clockmaker nomina il giorno successivo e muore.</p><p>Di notte, il Bone Collector sceglie il Butcher morto. Il giorno successivo, dopo che un giocatore viene eseguito, lo Storyteller dice che il Butcher può effettuare una nomina per l’esecuzione.</p><p>Durante il giorno, il Juggler morto indovina i personaggi di cinque giocatori. Quella notte, il Bone Collector restituisce l’abilità al Juggler. Il Juggler scopre un “3”.</p>`,
        howToRun: `<p>Ogni notte, sveglia il Bone Collector. Può scuotere la
            testa per dire di no oppure indicare qualsiasi giocatore morto. Rimetti il Bone Collector
            a dormire.</p><p>Se ha indicato un giocatore morto, <strong>il giocatore scelto riottiene la propria 
            abilità</strong>—contrassegna il suo token personaggio con il promemoria <strong>HAS 
            ABILITY</strong> del Bone Collector. <i>(Potrebbe essere necessario svegliarlo stanotte per usare la propria
            abilità.)</i> <strong>Il Bone Collector perde la propria abilità</strong>—contrassegnalo con
            il suo promemoria <strong>NO ABILITY</strong>. Al crepuscolo successivo, <strong>il giocatore scelto 
            perde la propria abilità</strong>—rimuovi il promemoria <strong>HAS ABILITY</strong>.</p>`,
        group: "Traveller",
        script: "sv"
    },
    {
        name: "Gangster",
        id:"gangster",	
        description: "Il Gangster incoraggia i suoi vicini a uccidersi a vicenda.",
        intro: `<ul><li>Il Gangster può uccidere uno dei suoi due vicini vivi. I vicini morti vengono saltati e non contano.</li><li>Per usare la propria abilità, il Gangster e uno dei suoi vicini vivi devono accordarsi per uccidere l’altro vicino vivo. Lo Storyteller deve sentire e confermare questo accordo. Il Gangster non può uccidere senza che lo Storyteller sia presente.</li><li>Ogni giorno, il Gangster può dire qualsiasi cosa voglia e offrire qualsiasi parola di incoraggiamento a uno dei due giocatori. Una volta raggiunto un accordo, il Gangster non può usare di nuovo la propria abilità oggi, anche se quel giocatore non è morto a causa di un’abilità che lo protegge.</li><li>I due vicini vivi del Gangster sono sempre uno in senso orario e uno in senso antiorario.</li><li>Se entrambi i vicini vivi vogliono uccidere l’altro, il Gangster decide chi muore.</li></ul>`,
        ability: 'Una volta al giorno, puoi scegliere di uccidere un vicino vivo, se l’altro tuo vicino vivo è d’accordo.',
        flavor: '"Mi piacciono le tue scarpe. Sarebbe davvero un peccato se avessi un piccolo incidente e si rovinassero. Ora che ci penso, mi piacciono anche i tuoi gemelli."',
        examples: `<p>Il Gangster confina con il Saint e il Baron. Il Gangster chiede al Baron se vuole uccidere il Saint. Il Baron è d’accordo e il Saint muore.</p><p>Il Gangster confina con la Chambermaid e il Poppy Grower, ma sono entrambi morti. I due vicini vivi del Gangster sono l’Amnesiac e il Po. Il Gangster parla con il Po e si offre di uccidere l’Amnesiac. Il Po rifiuta. Il Gangster parla con l’Amnesiac e l’Amnesiac chiede al Gangster di uccidere il Po. Il Gangster è d’accordo e il Po muore. I buoni vincono.</p><p>Il Gangster confina con il Fool e il Sage. Il Sage e il Gangster sono d’accordo di uccidere il Fool, ma il Fool non muore a causa dell’abilità del Fool. Il Gangster non può usare di nuovo la propria abilità oggi.</p>`,
        howToRun: `<p>Una volta al giorno, il Gangster può dichiarare di voler usare la propria abilità. In tal caso, chiedi se un vicino vivo è d’accordo. Se un vicino vivo è d’accordo, l’altro vicino vivo <strong>muore</strong>. Se entrambi i vicini vivi sono d’accordo, il Gangster sceglie quale vicino vivo <strong>muore</strong>. Se nessuno dei vicini vivi è d’accordo, il Gangster non può usare la propria abilità oggi.</p>`,
        group: "Traveller",
        script: "exp"
    },
    {
        name: "Gnome",
        id:"gnome",	
        description: "Lo Gnome protegge un giocatore della propria squadra.",
        intro: `<ul><li>Lo Gnome inizia con lo stesso allineamento di un altro giocatore, il suo “amigo”. Lo Storyteller annuncia pubblicamente quale giocatore è.</li><li>Quando il suo amigo viene nominato, è responsabilità dello Gnome intervenire. Lo Storyteller non può sollecitarlo a usare la propria abilità.</li><li>Se il suo amigo cambia allineamento, l’allineamento dello Gnome non cambia.</li><li>Lo Gnome può usare la propria abilità un numero qualsiasi di volte nel corso della partita, incluso zero. Il suo amigo può comunque essere nominato solo una volta al giorno.</li><li>Quando lo Gnome usa la propria abilità e lo Storyteller lo conferma, il nominatore muore immediatamente. Il voto per l’esecuzione avviene comunque.</li><li>Indipendentemente da ciò che desidera il gruppo, la decisione di nominare o meno spetta sempre al singolo giocatore, e la decisione di usare o meno l’abilità spetta sempre al giocatore dello Gnome. Se lo Storyteller ritiene che un giocatore venga spinto a nominare o a usare la propria abilità contro la sua volontà, lo Storyteller può non riconoscere quella nomina o quell’uso dell’abilità.</li></ul>`,
        ability: 'Tutti i giocatori iniziano sapendo un giocatore del tuo allineamento. Puoi scegliere di uccidere chiunque lo nomini.',
        flavor: '"Four the score or seven beers, no shows are goes for me and my. A prank to crack the cranks and planks o\' the floor foundation length, so incontravertabubbilly mini. The large essays down streams of joyce, no greater than is scene, not inherdt, Ha-urrumpho."',
        examples: `<p>Lo Gnome inizia la partita insieme al resto dei giocatori ed è buono. Amy è l’Alsaahir. Prima della prima notte, lo Storyteller annuncia che lo Gnome ha lo stesso allineamento di Amy. L’Engineer nomina Amy nel giorno 3. Lo Gnome non usa la propria abilità.</p><p>Lo Gnome entra in gioco nel 2° giorno ed è malvagio. Lewis è il Demone. In quel momento, lo Storyteller annuncia che lo Gnome ha lo stesso allineamento di Lewis. Nel 2° giorno, il Boffin nomina Lewis e viene ucciso dallo Gnome. Nel 3° giorno, lo Zealot nomina Lewis e viene ucciso dallo Gnome. Nel 4° giorno, il Village Idiot nomina Lewis e lo Gnome non usa la propria abilità.</p>`,
        howToRun: `<p>Durante il giorno, non appena lo Gnome entra in gioco, contrassegna un giocatore dello stesso allineamento con il promemoria <strong>AMIGO</strong>. Dichiara che questo giocatore ha lo stesso allineamento dello Gnome.</p><p>Se questo giocatore viene nominato, ma prima di iniziare il processo di voto, se il giocatore dello Gnome dichiara di voler usare la propria abilità, il nominatore <strong>muore</strong>.</p>`,
        group: "Traveller",
        script: "exp"
    },
    {
        name: "Doomsayer",
        id:"",	
        description: "Usa il Doomsayer per far durare meno le partite con molti giocatori.",
        intro: `<ul><li>Il Doomsayer permette ai giocatori di sacrificare i propri alleati per ottenere informazioni, accorciando la partita.</li><li>Solo i giocatori vivi possono usare l’abilità del Doomsayer, e ciascuno può farlo solo una volta per partita. È responsabilità del giocatore ricordarsi di non usarla di nuovo.</li><li>Se un giocatore dice qualcosa come “Uso l’abilità del Doomsayer”, allora lo Storyteller sceglie quale giocatore uccidere, ma deve uccidere un giocatore vivo dello stesso allineamento del giocatore che ha usato l’abilità del Doomsayer. Quindi, se un giocatore buono usa l’abilità, muore un giocatore buono. Se un giocatore malvagio usa l’abilità, muore un giocatore malvagio.</li><li>Una volta che rimangono solo tre giocatori vivi, l’abilità del Doomsayer non può più essere usata.</li></ul>`,
        ability: 'Se 4 o più giocatori sono vivi, ogni giocatore vivo può scegliere pubblicamente (una volta per partita) che un giocatore del proprio allineamento muoia.',
        flavor: '"And on the Seventh Day, there shall be a great flood and a pestilence upon the People of the Village of the Ravens! The dead shall rise and the living shall repent! O Woe! O Unholy day! Only by great sacrifice shall they prevail! So sayeth the Sages of Nostros and so sayeth I."',
        examples: `<p>Il Monk usa l’abilità del Doomsayer e la Washerwoman muore. Più tardi quel giorno, il Poisoner usa l’abilità del Doomsayer e il Baron muore.</p><p>Lo Thief malvagio usa l’abilità del Doomsayer e la Scarlet Woman muore. Più tardi, la Spy usa l’abilità del Doomsayer e il Gunslinger buono muore, perché la Spy sta registrando come buono. In seguito, il Demone usa l’abilità del Doomsayer e la Spy muore, perché la Spy sta registrando come malvagio.</p>`,
        howToRun: `<p>In qualsiasi momento, dichiara che il Doomsayer è in gioco. Aggiungi il token del Doomsayer al Grimorio.</p><p>In qualsiasi momento durante il giorno, se quattro o più giocatori sono vivi, un giocatore può dichiarare di voler usare l’abilità del Doomsayer. Quando ciò accade, scegli un giocatore dello stesso allineamento. Il giocatore scelto <strong>muore</strong>.</p><p class="modal__callout-box">Non vorrai uccidere il Demone in questo modo, a meno che la partita non possa continuare per qualche motivo, ad esempio se una Scarlet Woman è in gioco.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Toymaker",
        id:"",	
        description: "Usa il Toymaker per far durare di più le partite piccole.",
        intro: `<ul><li>Se hai creato una lista di personaggi usando l’opzione Teensyville nello Script Tool, potresti voler usare il Toymaker. Le partite ambientate a Teensyville hanno solo sei Townsfolk, due Outsiders, due Minions e un Demone nella lista, e sono pensate specificamente per cinque o sei giocatori.</li><li>Con il Toymaker in gioco, il Demone scopre tre personaggi non in gioco all’inizio della partita, e i Minion
            e il Demone scoprono chi sono gli uni e gli altri. Una volta per partita, il Demone deve scegliere volontariamente di non attaccare nessuno stanotte. Se il Demone sta per svegliarsi per attaccare un giocatore e questo porrebbe fine alla partita, ma il Demone non ha ancora scelto di non attaccare nessuno, allora lo Storyteller non sveglia il Demone—è costretto a non attaccare nessuno stanotte.</li><li>Puoi usare il Toymaker in partite di TROUBLE BREWING con cinque o sei giocatori, ma non è necessario.</li></ul>`,
        ability: 'Il Demone può scegliere di non attaccare e deve farlo almeno una volta per partita. I giocatori malvagi ottengono le normali informazioni iniziali.',
        flavor: '"Ronzia! Scende le scale! Ti tiene al caldo di notte! Sa di zucchero! I bambini lo adorano! Ecco a voi... il nuovissimo...Warm\'o-buzzy-wuzzy-walk\'a\'bot-thingy-contraption! Divertimento per tutte le età!"',
        examples: `<p>Nella seconda notte, quando cinque giocatori sono vivi, l’Imp sceglie di non attaccare, il che gli permette di agire durante la notte finale. Nella terza notte, quando quattro giocatori sono vivi, attacca un giocatore.</p><p>Nella seconda notte, l’Imp attacca un giocatore. Nella terza notte, quando restano solo tre giocatori vivi, l’Imp non può attaccare perché è la notte finale.</p>`,
        howToRun: `<p>All’inizio della partita, dichiara che il Toymaker è in gioco. Aggiungi il token del Toymaker al Grimorio e contrassegna il Demone con il promemoria <strong>FINAL NIGHT: NO ATTACK</strong> del Toymaker.</p><p>Nella prima notte, risolvi i passaggi “Minion info” e “Demone info” del foglio notturno anche se ci sono meno di sette giocatori.</p><p>Ogni notte in cui il Demone si sveglia, può scegliere di non attaccare
            scuotendo la testa per dire di no. Se sceglie di non attaccare, rimuovi il promemoria <strong>FINAL NIGHT: NO ATTACK</strong>.</p><p>Durante qualsiasi notte, se il Demone dovrebbe svegliarsi e il suo attacco potrebbe porre fine alla partita, ma il Demone è contrassegnato <strong>FINAL NIGHT: NO ATTACK</strong>, il Demone non si sveglia né agisce stanotte.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Angel",
        id:"",	
        description: "Usa l’Angel per aiutare i nuovi giocatori a divertirsi quando ci sono uno o due nuovi giocatori in un gruppo di veterani.",
        intro: `<ul><li>Essere l’unico nuovo giocatore in un gruppo può essere opprimente. Essere protetti dall’Angel incoraggia tutti i giocatori a mantenere in vita i nuovi giocatori il più a lungo possibile, il che significa che i nuovi giocatori si divertono di più e contribuiscono maggiormente alla partita.</li><li>Tutti i giocatori sanno chi è protetto dall’Angel, ma non
            il suo allineamento o personaggio. Il singolo giocatore maggiormente responsabile della morte di un giocatore protetto subisce una conseguenza. Per esempio, se il Demone uccide un giocatore protetto, il Demone subisce una penalità. Se un giocatore protetto viene eseguito, il giocatore che subisce una penalità sarà probabilmente colui che ha nominato il giocatore protetto.</li></ul>`,
        ability: 'Qualcosa di negativo potrebbe accadere a chiunque sia maggiormente responsabile della morte di un nuovo giocatore.',
        flavor: '"Lasciate che coloro che sono senza peccato osino alzare la mano contro il mio prescelto, poiché colpirò tali stolti con la furia e la rettitudine di mille tempeste."',
        examples: `<p>L’Angel protegge Sarah. Il Demone la attacca e la uccide. Come penalità, il Demone non può attaccare nella notte successiva.</p><p>Ben è il Demone ed è protetto dall’Angel. I giocatori non lo eseguono fino all’ultimo giorno, momento in cui possono eseguirlo senza penalità.</p>`,
        howToRun: `<p>All’inizio della partita, dichiara che l’Angel è in gioco. Dichiara quale giocatore o quali giocatori sta proteggendo, con il loro consenso. Aggiungi il token dell’Angel e i suoi promemoria al Grimorio,
            e contrassegna ogni giocatore protetto con il promemoria <strong>PROTECTED</strong>.</p><p>Se un giocatore contrassegnato <strong>PROTECTED</strong> muore, accade qualcosa di negativo al giocatore responsabile della morte. Potrebbe essere necessario contrassegnare il suo token personaggio con il promemoria <strong>SOMETHING BAD</strong>, per ricordarti
            che ora è avvelenato, o mad, o non può votare oggi, oppure semplicemente come promemoria per decidere cosa fare in seguito.</p><p>Rimuovi l’Angel in qualsiasi momento, dichiarandolo quando lo fai.</p><p class="modal__callout-box">L’Angel protegge un giocatore solo se quel giocatore lo desidera. Chiedi il suo consenso prima dell’inizio della partita.</p><p class="modal__callout-box">Il “qualcosa di negativo” che accade dipende da te. Tuttavia, è consigliato che la penalità consista nel far morire il giocatore, nel far perdere la sua abilità per un giorno, oppure nel non permettergli di votare per un giorno. Una penalità leggera funziona molto meglio di una severa.</p><p class="modal__callout-box">Rimuovi l’Angel nell’ultimo giorno, così che i giocatori si sentano liberi di eseguire i giocatori protetti dall’Angel.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Buddhist",
        id:"",	
        description: "Usa il Buddhist per aiutare i nuovi giocatori a divertirsi quando ci sono uno o due veterani in un gruppo di nuovi giocatori.",
        intro: `<ul><li>Quando giocatori esperti si trovano in una partita piena di principianti, i veterani spesso dominano la partita grazie al loro entusiasmo e alla loro conoscenza.</li><li>I giocatori influenzati dal Buddhist non possono parlare affatto per i primi due minuti di ogni giorno. Non possono sussurrare in privato e non possono parlare tra loro. Si limitano ad ascoltare.</li><li>Questa <i>non</i> è una punizione per essere loquaci. Essere loquaci è fantastico! BLOOD ON THE CLOCKTOWER è un gioco basato sulla conversazione, e più ce n’è, meglio è. Detto questo, costringere temporaneamente i veterani a rimanere in silenzio ogni giorno permette ai nuovi giocatori di trovare
            la propria voce, di elaborare le proprie teorie e di agire autonomamente. Si tratta di divertimento per tutti.</li><li>È comune che un giocatore dica “Sono un Buddhist” o che lo Storyteller gli dica “Sei un Buddhist”. Questo non significa che il loro personaggio sia il Buddhist. È una comoda
            abbreviazione per dire “Sei influenzato dall’abilità del Buddhist”. È simile a dire “Sei un Revolutionary”.</li></ul>`,
        ability: 'Per i primi 2 minuti di ogni giorno, i giocatori veterani non possono parlare.',
        flavor: '"Tu lanci spine. Cadendo nel mio silenzio, diventano fiori."',
        examples: `<p>Lachlan e Lewis sono veterani in una partita composta principalmente da nuovi giocatori. Per incoraggiare i nuovi giocatori a parlare, lo Storyteller mette il Buddhist in gioco. Lachlan e Lewis non possono parlare per i primi due minuti di ogni giorno, dopodiché possono parlare liberamente.</p><p>Evin è influenzato dal Buddhist. È un Minion e si limita ad ascoltare ciò che le persone dicono per i primi due minuti, permettendogli di bluffare come un personaggio non in gioco più avanti.</p>`,
        howToRun: `<p>All’inizio della partita, dichiara che il Buddhist è in gioco. Aggiungi il token del Buddhist al Grimorio. Dichiara quali giocatori sono Buddhist, con il loro consenso. Quei giocatori devono rimanere in silenzio
            per i primi due minuti di ogni giorno.</p><p>Rimuovi il Buddhist in qualsiasi momento, dichiarandolo quando lo fai.</p><p class="modal__callout-box">Se non è disponibile un dispositivo per impostare un timer di due minuti, usa il tuo miglior
            giudizio per stabilire cosa siano due minuti e informa i veterani quando ritieni che il tempo sia scaduto.</p><p class="modal__callout-box">Come per l’Angel e il Revolutionary, è opportuno chiedere il consenso di un giocatore prima di influenzarlo con il Buddhist. Una formulazione come questa è ideale: “Ti dispiace se ti rendo un Buddhist per questa partita? Sei molto bravo nel gioco e voglio dare ai nuovi giocatori la possibilità di capire le cose da soli. Va bene per te?”</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Revolutionary",
        id:"",	
        description: "Usa il Revolutionary per aiutare i giocatori svantaggiati a partecipare.",
        intro: `<ul><li>Se un giocatore ha una disabilità intellettiva, non è in grado di comprendere le regole del gioco, è cieco o sordo, oppure non è in grado di comunicare o partecipare normalmente, può comunque giocare
            facendo squadra con un giocatore di cui si fida.</li><li>Questi due giocatori hanno lo stesso allineamento e siedono uno accanto all’altro, così da potersi sussurrare o fare segnali per tutta la partita. Il giocatore esperto può aiutare il giocatore svantaggiato in qualsiasi modo sia necessario, parlando per lui o suggerendo cosa fare.</li><li>Il Revolutionary è utile anche per coppie o buoni amici che desiderano giocare ma non si sentono a proprio agio nel mentire o nel diffidare l’uno dell’altro, anche in un gioco.</li><li>Una volta per partita, lo Storyteller può far registrare uno dei due giocatori come un personaggio diverso, un allineamento diverso, o entrambi.</li><li>Lo Storyteller può svegliare entrambi i giocatori di notte, invece del solo giocatore che dovrebbe svegliarsi, se questo aiuta la comprensione.</li><li>Se un’abilità dovesse cambiare l’allineamento di un Revolutionary, questa abilità non ha effetto oppure cambia l’allineamento di entrambi i Revolutionary, a scelta dello Storyteller.</li></ul>`,
        ability: '2 giocatori vicini sono noti per avere lo stesso allineamento. Una volta per partita, 1 di essi registra falsamente.',
        flavor: '"United we feigned.<br>Divided, we stalled."',
        examples: `<p>Matt è sordo. Fa squadra con Julian tramite il Revolutionary. Matt pesca il Poisoner e a Julian viene dato l’Imp. Possono complottare in privato usando il linguaggio dei segni, così Matt può partecipare.</p><p>Hannah ha dodici anni. Ha voglia di giocare ma non comprende le complessità di come funzionano i personaggi. Ottiene il Monk e fa squadra con suo padre, che è l’Empath.</p>`,
        howToRun: `<p>Durante la preparazione della partita, prima di dare il sacchetto ai giocatori, dichiara che il Revolutionary è in gioco e quali due giocatori vicini sono Revolutionary. Aggiungi il token del Revolutionary al Grimorio. Contrassegna i Revolutionary con il promemoria <strong>REGISTER FALSELY?</strong> tra i loro token personaggio.</p><p>Dai il sacchetto a uno dei Revolutionary. Pesca un token. Guarda il suo token, scegli un token dello stesso allineamento dal sacchetto e dallo all’altro Revolutionary. Poi dai il sacchetto ai giocatori non-Revolutionary perché peschino.</p><p>Una volta per partita, puoi far sì che un giocatore contrassegnato <strong>REGISTER  FALSELY?</strong> registri come un personaggio e un allineamento diversi, poi rimuovi il promemoria <strong>REGISTER FALSELY?</strong>.</p><p></p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Hell's Librarian",
        id:"",	
        description: "Usa l’Hell's Librarian per aiutare uno Storyteller dalla voce pacata a partecipare.",
        intro: `<ul><li>Come Storyteller, troverai utile l’Hell's Librarian quando è difficile ottenere l’attenzione del gruppo. Forse devi spiegare una regola del gioco? O attirare l’attenzione per un cruciale
            voto dell’ultimo giorno? Può anche essere usato per impedire ai giocatori di parlare dei propri personaggi prima dell’inizio della partita o di narrare ciò che stanno facendo di notte. I giocatori tendono istintivamente a restare più silenziosi durante il periodo pre-partita e di notte, quindi potresti non averne mai bisogno.</li><li>È meglio dare ai giocatori un avvertimento equo prima di far calare il martello. Come per l’Angel, la minaccia di una penalità misteriosa è più importante della penalità effettiva. Lo scopo di questo personaggio è far scorrere la partita senza intoppi, non punire infrazioni minori.</li></ul>`,
        ability: 'Qualcosa di negativo potrebbe accadere a chiunque parli quando lo Storyteller ha chiesto silenzio.',
        flavor: '"Shhhhhh. Per favore, fate silenzio. È meglio non disturbare il Librarian. Ho sentito dire che ha un brutto carattere."',
        examples: `<p>Lo Storyteller sta cercando di spiegare le regole di voto ad alcuni nuovi giocatori. Il gruppo è rumoroso e non ascolta le richieste di silenzio dello Storyteller, quindi lo Storyteller dichiara che
            l’Hell's Librarian è in gioco. Due giocatori continuano a parlare ad alta voce, anche se conoscono la possibile penalità. Lo Storyteller decide che uno muore e l’altro perde il proprio voto per oggi. Tutti i giocatori rimangono in silenzio mentre le regole vengono spiegate.</p>`,
        howToRun: `<p>In qualsiasi momento, dichiara che l’Hell's Librarian è in gioco. Aggiungi il token dell’Hell's Librarian e il suo promemoria <strong>SOMETHING BAD</strong> al Grimorio.</p><p>In qualsiasi momento, puoi chiedere al gruppo di fare silenzio per un determinato periodo di tempo. Ricorda loro che l’Hell's Librarian è in gioco
            se necessario. Se un giocatore parla o interrompe in altro modo e rende difficile il tuo lavoro durante quel periodo, puoi comunicargli che accade qualcosa di negativo. Potrebbe essere necessario contrassegnare il suo token personaggio con il promemoria <strong>SOMETHING BAD</strong>, per ricordarti che ora è avvelenato, o mad, o non può votare oggi, oppure semplicemente come promemoria per decidere cosa fare in seguito.</p><p class="modal__callout-box">Come per l’Angel, il “qualcosa di negativo” che potrebbe accadere dipende da te. Tuttavia, è consigliato che la penalità consista nel far morire il giocatore, nel far perdere la sua abilità per un giorno, oppure nel non permettergli di votare per un giorno. Una penalità leggera funziona molto meglio di una severa.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Fiddler",
        id:"",	
        description: "Usa il Fiddler per decidere un vincitore se la partita deve terminare a causa di limiti di tempo o di una situazione di stallo.",
        intro: `<ul><li>A volte non c’è abbastanza tempo per concludere una partita. Forse il luogo in cui si gioca deve chiudere. Forse alcuni giocatori devono andarsene inaspettatamente e la partita non può continuare senza di loro. Forse i Townsfolk si rifiutano di eseguire e il Demone si rifiuta di uccidere.</li><li>Lo Storyteller può aggiungere e attivare il Fiddler in qualsiasi momento. Per farlo, tutti i giocatori chiudono gli occhi mentre il Demone sceglie un giocatore buono da sfidare a una gara di violino. Poi, dopo uno o due minuti, tutti i giocatori alzano la mano per votare quale di questi due giocatori vince. La partita termina e vince anche l’intera squadra del giocatore vincente.</li><li>Come per un esilio, questa decisione di gruppo su chi vince la partita non è influenzata dalle abilità, e i morti possono votare normalmente. Lo Thief non può rubare voti, il Voudon non ha effetto, e così via.</li><li>I giocatori non possono usare le proprie abilità una volta che il Fiddler è stato attivato. Lo Slayer non può scegliere di colpire un giocatore, l’Artist non può fare la sua domanda, e così via.</li><li>Se questa gara di violino termina in pareggio, vincono i malvagi.</li></ul>`,
        ability: 'Una volta per partita, il Demone sceglie segretamente un giocatore avversario: tutti i giocatori scelgono quale di questi 2 giocatori vince.',
        flavor: '"I\'ll wager mi lyef ye cannae best me in a fiddle contest, ye boss-eyed snook! We\'ll go out on the lash, get the pub jammers an\' have a right craic. I\'ll be layin\' ma boots into ya come mornin\' ye rumbly muppet."',
        examples: `<p>La partita deve terminare entro trenta minuti a causa di una tempesta di fulmini improvvisa che si avvicina al quartiere, quindi lo Storyteller aggiunge il Fiddler. Dopo venticinque minuti, il Fiddler viene attivato. I
            giocatori scelgono che vinca il giocatore buono, quindi vincono i buoni.</p><p>Restano solo quattro giocatori vivi. Ogni giorno, nessuno nomina. Ogni notte, il Demone sceglie un giocatore morto da uccidere. Poiché questo potrebbe continuare all’infinito, lo Storyteller aggiunge il Fiddler affinché la partita possa terminare.</p>`,
        howToRun: `<p>In qualsiasi momento, se prevedi di esaurire il tempo, dichiara che il Fiddler è in gioco e dichiara il momento in cui la partita terminerà. Aggiungi il token del Fiddler al Grimorio.</p><p>Quando la partita deve terminare, dichiara che stai usando l’abilità del Fiddler. Rimetti tutti i giocatori a dormire. Sveglia il Demone. Indica qualsiasi giocatore buono. <i>(Se il Demone è buono, deve invece scegliere un giocatore malvagio.)</i> Sveglia tutti i giocatori e dichiara che il giocatore Demone e il giocatore scelto sono in una gara di violino. <i>(Non dire quali sono i loro personaggi.)</i> Dopo uno o due minuti, svolgi una “votazione” per ciascun giocatore nella gara di violino. <i>(Questa non è una votazione per l’esecuzione.)</i> Tutti i giocatori possono votare. Il giocatore con il maggior numero di voti vince, vince la sua squadra e la partita termina. In caso di pareggio, vince la squadra malvagia.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Fibbin",
        id:"",	
        description: "Aggiungi il Fibbin se il tuo script ha troppe informazioni o nessuna possibilità di disinformazione.",
        intro: `<ul><li>Se crei una lista di personaggi e non include personaggi che causano drunkenness, avvelenamento o altri modi per rendere false le informazioni, potresti voler aggiungere il Fibbin. Anche se non è necessario, anche una minima possibilità che le informazioni di un giocatore buono siano errate può aiutare drasticamente i giocatori malvagi a bluffare.</li><li>Il Fibbin non fa fallire un’abilità come fanno drunkenness e avvelenamento. Influenza solo le abilità che forniscono informazioni tramite segnali notturni dello Storyteller a un giocatore o dicendo loro qualcosa.</li><li>Se la partita termina prima che tu abbia dato a un giocatore buono informazioni errate, va bene.</li><li>Alcuni personaggi ottengono informazioni false a causa della loro abilità. Il Fibbin può rendere queste informazioni vere.</li></ul>`,
        ability: 'Una volta per partita, 1 giocatore buono potrebbe ottenere informazioni errate.',
        flavor: '"Tee-hee-hee.<br><br>Tee. Hee. Hee."',
        examples: `<p>Nella prima notte, tutti i giocatori ottengono informazioni corrette. Nella seconda notte, l’Empath scopre di essere vicino a un giocatore malvagio, anche se entrambi i suoi vicini sono in realtà buoni, a causa del Fibbin. Per il resto della partita, tutti i giocatori buoni ottengono informazioni corrette.</p><p>La Virgin viene nominata da un Townsfolk. Questo Townsfolk viene eseguito immediatamente—il Fibbin non può influenzare l’abilità della Virgin poiché non fornisce informazioni. Più tardi, il Monk protegge un giocatore. Anche in questo caso, l’abilità del Monk non può fallire a causa dell’abilità del Fibbin. Più tardi, il Ravenkeeper muore di notte e ottiene informazioni false, perché le informazioni provenienti da un’abilità possono essere influenzate dall’abilità del Fibbin.</p><p>Lo Storyteller dice al Savant che Lachlan, Ben o Sarah è il Lunatic, e che tutti i giocatori che non hanno votato ieri sono
            buoni. Entrambe queste affermazioni sono vere, anche se il Savant dovrebbe ottenere un’informazione vera e una falsa. L’abilità del Fibbin ha reso le informazioni del Savant errate, ma anche vere.</p>`,
        howToRun: `<p>All’inizio della partita, dichiara che il Fibbin è in gioco. Aggiungi il token del Fibbin al Grimorio.</p><p>Una volta per partita, quando un giocatore buono ottiene informazioni da un’abilità, puoi fornirgli informazioni errate. <strong>Il Fibbin perde la sua abilità</strong>—metti il suo promemoria <strong>NO ABILITY</strong> accanto al suo token.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Duchess",
        id:"",	
        description: "Aggiungi la Duchess se il tuo script ha poche informazioni o troppa disinformazione.",
        intro: `<ul><li>A volte potresti voler creare una lista di personaggi usando lo Script Tool che abbia pochissimi personaggi buoni che ottengono informazioni direttamente. Anche se per alcuni giocatori un’abbondanza di abilità e una scarsità di informazioni può essere divertente, altri preferiscono qualcosa di più. La Duchess aggiunge informazioni regolari a questo tipo di partita.</li><li>Ogni giocatore che visita la Duchess scopre quanti visitatori sono malvagi, incluso sé stesso. Tuttavia, un visitatore a scelta dello Storyteller riceverà informazioni false.</li><li>I giocatori che visitano la Duchess possono comunque usare normalmente la loro abilità. La Duchess non fa sì che la loro abilità fornisca informazioni false.</li><li>I giocatori decidono tra loro quali saranno i tre giocatori a visitare. Se non si riesce a decidere esattamente tre visitatori, allora la Duchess non agisce stanotte.</li></ul>`,
        ability: 'Ogni giorno, 3 giocatori possono scegliere di visitarti. Di notte*, ogni visitatore scopre quanti visitatori sono malvagi, ma 1 riceve informazioni false.',
        flavor: '"Intratterremo tra le 6 e le 7 in punto. Tè alle 6:15. Scones alle 6:45. Non fate tardi. Abito formale richiesto, come sempre."',
        examples: `<p>Il Soldier, il Pacifist e il Sage visitano la Duchess. Il Soldier e il Pacifist scoprono uno "0". Il Sage scopre un "1".</p><p>Il Mutant, il Butler e il Po visitano la Duchess. Il Mutant scopre un "1", il Butler scopre un "2" e il Po scopre un "1".</p><p>Il Mastermind, l’Imp e il Minstrel visitano la Duchess. Il Mastermind scopre un "2", l’Imp scopre un "1" e il Minstrel scopre un "2".</p>`,
        howToRun: `<p>All’inizio della partita, dichiara che la Duchess è in gioco. Aggiungi il token della Duchess e i suoi promemoria al Grimorio.</p><p>Ogni giorno, qualsiasi giocatore può offrirsi volontario per visitare la Duchess stanotte.
            Se esattamente tre giocatori si offrono volontari per visitare la Duchess stanotte, contrassegna due di loro con un promemoria <strong>VISITOR</strong> e uno di loro con un promemoria <strong>FALSE INFO</strong>. Se più o meno di tre giocatori si offrono volontari per visitare, non aggiungere questi promemoria.</p><p>Di notte, sveglia ciascun giocatore contrassegnato <strong>VISITOR</strong> o <strong>FALSE INFO</strong> uno alla volta. Mostra al giocatore svegliato il token della Duchess. Se il giocatore svegliato è contrassegnato <strong>VISITOR</strong>, mostra delle dita <i>(0, 1, 2 o
            3)</i> pari al numero di giocatori malvagi che sono contrassegnati <strong>VISITOR</strong> o <strong>FALSE INFO</strong>. Se il giocatore svegliato è contrassegnato <strong>FALSE INFO</strong>, mostra qualsiasi numero di dita tranne quello corretto. Rimetti a dormire il giocatore svegliato.</p><p>Rimuovi la Duchess in qualsiasi momento, dichiarando quando lo fai.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Sentinel",
        id:"",	
        description: "Aggiungi il Sentinel al tuo script per mantenere misterioso il numero di Outsider in gioco.",
        intro: `<ul><li>Le liste ufficiali dei personaggi sono costruite con cura affinché il numero di Outsider non sia mai completamente noto, permettendo ai giocatori malvagi di bluffare tranquillamente come Outsider. Molte delle partite che crei usando lo Script Tool non avranno questo vantaggio. Se, per un motivo o per un altro, il numero di Outsider in una partita diventasse certo, lo Storyteller può aggiungere un Sentinel. Questo confonderà le acque e aiuterà la squadra malvagia a bluffare come Outsider o a rendere sospetti gli Outsider già esistenti.</li><li>Le partite con un Sentinel in gioco potrebbero avere un Outsider in più del normale. Potrebbero averne uno in meno. Potrebbero avere la quantità normale. Spetta allo Storyteller decidere.</li></ul>`,
        ability: 'Potrebbe esserci 1 Outsider in più o 1 Outsider in meno in gioco.',
        flavor: '"Nome, prego.<br>Documenti, prego.<br>Armi, prego."',
        examples: `<p>Ci sono sette giocatori in questa partita. Non ci sono personaggi nella lista che aggiungono Outsider. Il Demone bluffa come lo Saint. Un Sentinel è in gioco, quindi i giocatori buoni non sono sicuri se ci sia davvero uno Saint oppure no.</p><p>Ci sono nove giocatori in questa partita. Anche se un Baron è sulla lista dei personaggi, i giocatori buoni sanno che non c’è alcun Baron in gioco perché la Witch ha appena ucciso un giocatore, quindi dovrebbero esserci solo due Outsider in gioco. Tuttavia, gli Outsider non sono affidabili perché un Sentinel è in gioco. Infatti, in questa partita c’è un Outsider in meno del normale, e la Witch sta bluffando come il Butler.</p>`,
        howToRun: `<p>All’inizio della partita, dichiara che il Sentinel è in gioco. Aggiungi il token del Sentinel al Grimorio.</p><p>Durante la preparazione della partita, prima di mettere i token dei personaggi nel sacchetto, aggiungi un token Outsider e rimuovi un token Townsfolk, oppure rimuovi un token Outsider e aggiungi un token Townsfolk, oppure non fare nessuna delle due cose.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Spirit Of Ivory",
        id:"",	
        description: "Aggiungi lo Spirit of Ivory al tuo script per mantenere equo ed equilibrato il numero di giocatori malvagi.",
        intro: `<ul><li>Quando si creano liste di personaggi usando lo Script Tool, è una buona idea includere non più di un personaggio che aggiunge personaggi malvagi. Se due o più giocatori diventano malvagi, allora la squadra malvagia può vincere semplicemente rivelandosi e vincendo grazie alla maggioranza di voti. Aggiungere lo Spirit of Ivory impedisce che troppi giocatori diventino malvagi, creando una partita più divertente ed equa per i giocatori buoni.</li><li>Con uno Spirit of Ivory in gioco, può esserci al massimo un giocatore malvagio in più rispetto al normale. Se un secondo giocatore dovesse diventare malvagio, rimane invece buono.</li><li>Il numero normale di giocatori malvagi è indicato sulla scheda Traveller e sulla scheda di Setup.</li></ul>`,
        ability: 'Non possono esserci più di 1 giocatore malvagio extra.',
        flavor: '"La Desolazione chiama. Le ossa diventano carne, poi tornano polvere. Il grande spirito cresce. Il grande spirito osserva. Il grande spirito guida. L’umano ascolta, oppure l’umano non è più."',
        examples: `<p>Il Fang Gu attacca un Outsider e crea un giocatore malvagio. Più tardi, il Devil's Advocate sceglie il Goon di notte. Normalmente il Goon diventerebbe malvagio, ma il Goon rimane buono perché c’è già un personaggio malvagio in più rispetto al normale in gioco.</p><p>Il Goon è malvagio. Lo Snake Charmer sceglie il Demone. Il Demone malvagio diventa il Snake Charmer buono, e il Snake Charmer buono diventa il Demone malvagio. Poiché il numero di giocatori malvagi non aumenta, l’abilità dello Spirit of Ivory non si attiva.</p>`,
        howToRun: `<p>All’inizio della partita, dichiara che lo Spirit of Ivory è in gioco. Aggiungi il token dello Spirit of Ivory e il suo token promemoria al Grimorio.</p><p>In ogni momento, se c’è un personaggio malvagio extra in gioco, contrassegna lo Spirit of Ivory con il promemoria <strong>NO MORE EVIL</strong>. <i>(Se un personaggio diventa buono, rimuovi il promemoria.)</i></p><p>Se un giocatore dovesse diventare malvagio e lo Spirit of
            Ivory è contrassegnato <strong>NO MORE EVIL</strong>, quel giocatore rimane buono.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Storm Catcher",
        id:"",	
        description: "Usa lo Storm Catcher per concentrare la partita su uno specifico personaggio buono.",
        intro: `<ul><li>Se vuoi costruire uno script basato sulle azioni o sulle informazioni di un particolare personaggio buono, se vuoi avere questo personaggio in ogni partita <i>(o almeno avere un giocatore malvagio che bluffa come questo personaggio)</i>, puoi usare lo Storm Catcher. Il personaggio scelto avrà un ruolo centrale nella partita, sarà al centro di molte discussioni di gruppo e probabilmente vivrà fino all’ultimo giorno.</li><li>Lo Storyteller dichiara che un personaggio non può morire, se non per esecuzione. Questo personaggio può essere in gioco oppure no. Se è in gioco, questo giocatore buono vive finché i giocatori buoni lo desiderano, poiché i giocatori malvagi non possono ucciderlo. Se non è in gioco, tutti i giocatori malvagi lo scoprono, quindi qualsiasi giocatore malvagio può facilmente bluffare come questo personaggio. <i>(Non sono obbligati a farlo, ma possono.)</i></li></ul>`,
        ability: 'Nomina un personaggio buono. Se è in gioco, può morire solo per esecuzione, ma i giocatori malvagi scoprono quale giocatore è.',
        flavor: '"All’alba, la lunga ombra del tempio striscia fino alla fontana. Al crepuscolo, l’obelisco blocca il bagliore rosso, raffreddando l’acqua tiepida sotto l’arco. Tutte le linee convergono qui. Una tempesta sta arrivando, e questo, questo luogo sassoso e rigoglioso e sacro tra i meli, è l’occhio."',
        examples: `<p>Lo Storyteller ha costruito uno script basato sul General, quindi dichiara che “lo Storm Catcher favorisce il General”. Il General è in gioco. Di notte, l’Imp e il Godfather attaccano entrambi il General, che non muore. Dopo cinque giorni di informazioni e discussioni, la città decide di eseguire il General, che muore.</p><p>Lo Storyteller vuole una partita basata sulle informazioni dell’Empath, quindi dichiara che “lo Storm Catcher favorisce l’Empath”. Non c’è alcun Empath in gioco. Poiché i giocatori malvagi lo scoprono, il Poisoner sceglie di bluffare come Empath.</p>`,
        howToRun: `<p>All’inizio della partita, dichiara che lo Storm Catcher è in gioco. Aggiungi il token dello Storm Catcher al Grimorio. Dichiara quale personaggio buono è favorito dallo Storm Catcher. Se il personaggio favorito è in gioco, contrassegnalo con il promemoria <strong>SAFE</strong> dello Storm Catcher.</p><p>Durante la prima notte, sveglia ciascun giocatore malvagio a turno. Se un personaggio buono è contrassegnato con il promemoria <strong>SAFE</strong> dello Storm Catcher, mostra al giocatore malvagio il token informativo <strong>THIS PLAYER IS</strong>, il token del personaggio buono, indica il giocatore buono, poi rimetti a dormire il giocatore malvagio. Se nessuno è contrassegnato con il promemoria <strong>SAFE</strong> dello Storm Catcher, mostra al giocatore malvagio il token informativo <strong>THESE CHARACTERS ARE NOT IN PLAY</strong> e il token del personaggio buono, poi rimetti a dormire il giocatore malvagio.</p><p>Se il personaggio contrassegnato con il promemoria <strong>SAFE</strong> dello Storm Catcher viene eseguito, <strong>muore</strong>. Se dovesse morire in qualsiasi altro modo, rimane <strong>in vita</strong>.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Djinn",
        id:"",	
        description: "Aggiungi il Djinn a tutte le partite con un’icona jinx sullo script. Il Djinn risolve le jinx creando una regola unica.",
        intro: `<ul><li>Quando si crea una lista di personaggi usando lo Script Tool, alcune combinazioni di personaggi vengono contrassegnate come insolite. Questi due personaggi sono jinxed: hanno abilità che entrano in conflitto o si contraddicono in qualche modo. Il Djinn crea una regola speciale che permette a questi personaggi di funzionare bene insieme.
            Alcuni personaggi jinxed funzionano addirittura meglio con il Djinn in gioco!</li><li>La regola speciale del Djinn è descritta dallo Script Tool online ed è stampata automaticamente quando crei uno script con
            una combinazione di personaggi jinxed.</li><li>Esistono molte regole speciali diverse del Djinn. Ognuna è pensata appositamente per una specifica coppia di personaggi jinxed.</li><li>Se ci sono personaggi jinxed sulla scheda dei personaggi, anche se nessun personaggio jinxed è in gioco, lo Storyteller comunica a tutti i giocatori qual è la regola speciale del Djinn all’inizio della partita.</li><li>Il Djinn può avere più regole speciali contemporaneamente. Se ci sono più coppie di personaggi jinxed sulla scheda dei personaggi, i giocatori scoprono tutte le regole speciali del Djinn.</li></ul>`,
        ability: 'Usa la regola speciale del Djinn. Tutti i giocatori sanno qual è.',
        flavor: 'نحن لسنا هنا.<br>انت لست حقيقي<br>. كل شيء هو وهم.<br> أسئلتك هي جبل نار في يوم صافٍ.',
        examples: `<p>Il Pit-Hag e l’Heretic sono jinxed. All’inizio della partita, lo Storyteller legge ad alta voce la regola speciale del Djinn: "Un Pit-Hag non può creare un Heretic." Più avanti nella partita, il Pit-Hag tenta di
            creare un Heretic. Lo Storyteller scuote la testa e il Pit-Hag deve scegliere un altro personaggio da creare.</p><p>Lo Spy e il Magician sono jinxed. All’inizio della partita, lo Storyteller legge ad alta voce la regola speciale del Djinn: "Quando lo Spy vede il Grimorio, i token dei personaggi del Demone e del Magician
            vengono rimossi." Non c’è né uno Spy né un Magician in gioco, ma lo Storyteller lo legge comunque ad alta voce così che la squadra buona non sappia quale Minion è in gioco.</p>`,
        howToRun: `<p>All’inizio della partita, se ci sono personaggi jinxed sulla scheda dei personaggi, dichiara che il Djinn è in gioco e informa il gruppo di tutte le regole speciali del Djinn per questa partita. <i>(Fallo anche se non ci sono personaggi jinxed in gioco.)</i></p><p>Segui le istruzioni del Djinn come elencate nella stampa dello Script Tool.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Gardener",
        id:"",	
        description: "Usa il Gardener per assegnare personaggi a giocatori specifici.",
        intro: `<ul><li>Dopo che lo Storyteller ha messo il Gardener in gioco, può assegnare manualmente e modificare quali personaggi verranno dati a quali giocatori seduti, prima di distribuirli.</li><li>Se un giocatore ha un problema con un determinato personaggio, puoi usare il Gardener per influenzare la preparazione in modo che quel giocatore non peschi il token corrispondente.</li><li>Il Gardener può essere utile anche se un particolare giocatore ha pescato malvagio molte volte durante una singola sessione di Clocktower.</li><li>Il Gardener è progettato per essere usato solo nell’app ufficiale.</li></ul>`,
        ability: "Lo Storyteller assegna i personaggi di 1 o più giocatori.",
        flavor: '"Il testo di ambientazione verrà aggiunto in futuro..."',
        examples: `<p>Il Vizier è nello script e Ida non ama giocare come malvagio rivelato. Per assicurarsi che Ida non riceva il token del Vizier, lo Storyteller mette il Gardener in gioco e assegna direttamente Ida come il Poisoner.</p><p>Robin è stato malvagio in ogni partita di oggi. Lo Storyteller mette il Gardener in gioco e assegna direttamente Robin come lo Chef.</p>`,
        howToRun: `<p>All’inizio della partita, dichiara che il Gardener è in gioco.</p><p>Prima che i token dei personaggi vengano distribuiti ai giocatori, decidi quali personaggi avranno i giocatori influenzati dal Gardener. Assegna o scambia i giocatori interessati con i personaggi che hai deciso.</p><p>Poi, distribuisci i personaggi ai giocatori della partita.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Bootlegger",
        id:"",	
        description: "Aggiungi il Bootlegger per includere personaggi o regole homebrew.",
        intro: `<ul><li>Il Bootlegger consente agli Storyteller di usare personaggi creati da loro o da altri che non sono personaggi ufficiali, oppure di usare regole non standard nella partita.</li><li>Se ci sono personaggi homebrew sulla scheda dei personaggi, o se sono in vigore regole homebrew, lo Storyteller informa tutti i giocatori di quali siano prima che la partita inizi.</li><li>Il Bootlegger permette che più personaggi o regole siano attivi contemporaneamente.</li><li>Finché c’è almeno un personaggio homebrew nello script corrente, questo Fabled è in gioco e può essere rimosso solo passando a uno script che non contenga alcun personaggio homebrew.</li><li>Il Bootlegger è progettato per essere usato solo nell’app ufficiale.</li><li>Il Bootlegger, nonostante molte affermazioni contrarie, ha sconfitto Homebrewy McHomebrewface, “la scelta del popolo”, in un sondaggio molto combattuto per decidere il nome del Fabled.</li></ul>`,
        ability: 'Questo script contiene personaggi o regole homebrew.',
        flavor: '"I\'ve got the latest shipment from home, a brew I\'d like to call \'Barrowfog\'. Wanna try?"',
        examples: `<p>La scheda dei personaggi contiene il personaggio homebrew Peasant. Lo Storyteller annuncia che il Bootlegger è in gioco e poi spiega come funziona il Peasant.</p><p>Lo Storyteller ha una regola homebrew o una regola casalinga. Lo Storyteller annuncia che il Bootlegger è in gioco e spiega qual è la regola homebrew e come influenzerà la partita.</p>`,
        howToRun: `<p>All’inizio della partita, se ci sono personaggi homebrew sulla scheda dei personaggi o se stai usando regole homebrew, dichiara che il Bootlegger è in gioco e informa il gruppo di tutti i personaggi homebrew e/o delle regole che stai utilizzando in questa partita.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Deus Ex Fiasco",
        id:"",	
        description: "Usa il Deus ex Fiasco per neutralizzare gli errori e aumentare la tua sicurezza quando conduci uno script difficile.",
        intro: `<ul><li>Il Deus ex Fiasco deve essere annunciato all’inizio della partita. Non può mai essere aggiunto a partita iniziata. Ipoteticamente, se lo Storyteller commettesse un errore a partita in corso e aggiungesse il Deus ex Fiasco dopo, tutti i giocatori saprebbero che l’errore è reale e il Deus ex Fiasco non funzionerebbe.</li><li>Lo Storyteller deve commettere un errore. Può essere un errore accidentale o un errore deliberato. Ai giocatori non viene detto quale dei due.</li><li>Se lo Storyteller ha commesso un errore accidentale, non è obbligato a commetterne altri. Se la partita si avvicina all’ultimo giorno e lo Storyteller non ha commesso alcun errore accidentale, deve commettere un errore deliberato prima che la partita finisca.</li><li>Tutti gli errori, sia deliberati sia accidentali, devono essere corretti. Lo Storyteller potrebbe dover infrangere le regole per correggere un errore. In qualsiasi momento dopo che un errore è stato commesso, lo Storyteller deve informare il gruppo che un errore è stato fatto e corretto. La natura esatta dell’errore non viene rivelata al gruppo, ma potrebbe dover essere rivelata privatamente a un giocatore coinvolto.</li><li>I giocatori sono liberi di bluffare dicendo che lo Storyteller ha commesso un errore quando non è vero, o di bluffare dicendo che un errore è stato corretto quando non lo è stato.</li><li>Se necessario, lo Storyteller può commettere diversi errori accidentali, diversi errori deliberati o una combinazione dei due.</li></ul>`,
        ability: 'Almeno una volta per partita, lo Storyteller commetterà un errore, lo correggerà e lo ammetterà pubblicamente.',
        flavor: '"It\'s not a bug, it\'s a feature. It\'s not an error, it\'s a tweak. It\'s not broken, it\'s quirky."',
        examples: "<p>Durante il primo giorno, Doug parla privatamente con lo Storyteller e dice di aver pescato il token Drunk dal sacchetto. Lo Storyteller guarda nel Grimorio e nota che il token di Doug è il Drunk. Lo Storyteller dice a Doug che ora è il Mayor, sostituisce il token Drunk con il token Mayor nel Grimorio e segretamente rende il Ravenkeeper il Drunk. Più tardi quel giorno, lo Storyteller dichiara che è stato commesso un errore.</p><p>L’Empath è seduto accanto al Monk e al Recluse avvelenato. Lo Storyteller, dimenticando che il Recluse è avvelenato, dà accidentalmente all’Empath un \"1\". Più tardi quella notte, lo Storyteller sveglia di nuovo l’Empath e gli dà uno \"0\". Il giorno seguente, quando l’Empath chiede privatamente cosa sia successo, lo Storyteller spiega che il primo numero era un errore e che il secondo numero è corretto. Per evitare di rivelare troppo, lo Storyteller aspetta il giorno successivo per informare il gruppo che è stato commesso un errore.</p><p>L’Imp è stato eseguito oggi. Lo Storyteller sveglia l’Undertaker sobrio e sano e, deliberatamente (e in modo errato), mostra il token del Recluse. Più tardi quella notte, lo Storyteller sveglia di nuovo l’Undertaker e mostra il token dell’Imp. Al mattino, lo Storyteller dice al gruppo che durante la notte è stato commesso un errore, ma che è stato corretto.</p><p>Lo Yaggababble viene eseguito e muore. Lo Storyteller dichiara accidentalmente che la partita è finita e che i buoni hanno vinto. Tuttavia, la Scarlet Woman è ancora viva. Lo Storyteller dichiara che è stato commesso un errore e che la partita continua.</p><p>Ben è lo Shabaloth. Di notte, Ben uccide Amy e Doug. Al mattino, lo Storyteller dichiara deliberatamente che Ben e Lewis sono morti. Dopo circa 30 secondi, lo Storyteller dice \"Ops, avevo il Grimorio girato dalla parte sbagliata. Ben e Lewis non dovevano morire. Sono ancora vivi. Amy e Doug sono morti durante la notte. Scusate, errore mio.\"</p><p>Lo Storyteller ha dimenticato di svegliare il Poisoner la notte scorsa. Lo Storyteller parla privatamente con il Poisoner, glielo dice e gli dice che da ora in poi, ogni notte, può scegliere quanti giocatori vuole, e lo Storyteller sceglierà quali di questi giocatori sono avvelenati.</p><p>La Chambermaid si sveglia e sceglie un giocatore morto, anche se la Chambermaid deve scegliere solo giocatori vivi. Lo Storyteller se ne accorge, ma non corregge la Chambermaid. Invece, lo Storyteller fornisce deliberatamente informazioni false alla Chambermaid. Il giorno seguente, lo Storyteller chiede una conversazione privata con la Chambermaid, le dice che ha commesso un errore permettendole di scegliere un giocatore morto e le chiede di scegliere immediatamente due giocatori vivi. Questa volta, lo Storyteller fornisce informazioni corrette.</p>",
        howToRun: `<p>All’inizio della partita, dichiara che il Deus ex Fiasco è in gioco. Ignora eventuali lamenti e proteste dei giocatori.</p><p>In qualsiasi momento, se commetti un errore, correggilo nel miglior modo possibile, piegando le regole se necessario. In seguito, dichiara di aver commesso un errore. Aggiungi il promemoria <strong>WHOOPSIE</strong> al Grimorio.</p><p>In qualsiasi momento, puoi deliberatamente infrangere le regole e poi correggere l’errore. In seguito, dichiara di aver commesso un errore. Aggiungi il promemoria <strong>WHOOPSIE</strong> al Grimorio.</p><p class="modal__callout-box">Ricorda: i personaggi Fabled non sono progettati per aggiungere pepe alla partita. Sono personaggi il cui scopo è aiutarti, come Storyteller, a gestire partite fluide e inclusive.</p>`,
        group: "Fabled",
        script: "fabled"
    },
    {
        name: "Ferryman",
        id:"",	
        description: "Usa il Ferryman per creare un finale divertente e inclusivo anche se i nuovi giocatori hanno già usato i loro token voto.",
        intro: `<ul><li>Se stai conducendo una partita con giocatori alle prime armi che non hanno ancora compreso la strategia su quando usare i voti da morti, oppure li hanno usati dimenticandosi di essere morti, puoi aggiungere il Ferryman. Questo garantisce che tutti possano dire la loro nei voti critici dell’ultimo giorno.</li><li>Tutti i giocatori morti recuperano il proprio token voto nell’ultimo giorno, indipendentemente dall’allineamento o da quando hanno votato.</li><li>Se un giocatore morto possiede ancora il proprio token voto, non ne riceve un secondo dal Ferryman.</li><li>L’ultimo giorno è il giorno che lo Storyteller ritiene più probabile essere l’ultimo della partita — il giorno in cui, se il Demone non viene eseguito, i malvagi vinceranno. Questo di solito coincide con il giorno in cui restano solo 3 giocatori vivi.</li><li>Se i token voto vengono usati durante l’ultimo giorno, non vengono restituiti.</li></ul>`,
        ability: 'Nell’ultimo giorno, tutti i giocatori morti recuperano il loro token voto.',
        flavor: '"Quando arrivano i sogni giusti, hanno il peso della verità."',
        examples: `<p>La maggior parte del gruppo è composta da nuovi giocatori. Due giocatori, Amy e Doug, si sono dimenticati di essere morti nell’entusiasmo del voto. Lo Storyteller mette il Ferryman in gioco. Più tardi nella partita, quando restano tre giocatori vivi, lo Storyteller dichiara che è l’ultimo giorno. Amy e Doug recuperano i loro token voto.</p><p>È l’inizio dell’ultimo giorno. 17 giocatori sono morti e tre giocatori sono vivi. 10 giocatori morti hanno già usato i loro token voto. Per creare un ultimo giorno più divertente e coinvolgente, lo Storyteller aggiunge il Ferryman e quei giocatori morti recuperano i loro token voto. Dopo un ultimo giorno scatenato e memorabile, lo Storyteller viene celebrato per aver massimizzato il divertimento dei giocatori.</p>`,
        howToRun: `<p>Durante la partita, quando noti che sarebbe una buona idea aggiungerlo, dichiara che il Ferryman è in gioco. Aggiungi il token del Ferryman al Grimorio.</p><p>All’inizio dell’ultimo giorno, chiedi ai giocatori di restituire i token voto a tutti i giocatori morti che non ne hanno uno nella Piazza del Villaggio.</p>`,
        group: "Fabled",
        script: "fabled"
    }
];

let jinxes = [
    {
        character1: "Baron",
        character2: "Heretic",
        rule: "Il Baron può aggiungere solo 1 Outsider, non 2."
    },
    {
        character1: "Cerenovus",
        character2: "Goblin",
        rule: "Il Cerenovus può scegliere di rendere un giocatore pazzo come il Goblin."
    },
    {
        character1: "Godfather",
        character2: "Heretic",
        rule: "Solo 1 personaggio jinxed può essere in gioco."
    },
    {
        character1: "Organ Grinder",
        character2: "Flowergirl",
        rule: "Se l’Organ Grinder sta causando una votazione a occhi chiusi, la Flowergirl si sveglia stanotte per scegliere un giocatore: scopre se quel giocatore ha votato oggi. (invece della sua abilità normale)"
    },
    {
        character1: "Organ Grinder",
        character2: "Butler",
        rule: "Se durante una votazione gli occhi dei giocatori erano chiusi, il Butler può votare, ma il suo voto conta solo se ha votato anche il suo padrone."
    },
    {
        character1: "Vizier",
        character2: "Alchemist",
        rule: "Se l’Alchemist ha l’abilità del Vizier, può scegliere di eseguire immediatamente solo se hanno votato tre o più giocatori."
    },
    {
        character1: "Vizier",
        character2: "Courtier",
        rule: "Se il Vizier perde la sua abilità, lo scopre. Se il Vizier viene giustiziato quando ha la sua abilità, la sua squadra vince."
    },
    {
        character1: "Vizier",
        character2: "Investigator",
        rule: "Se l’Investigator scopre che il Vizier è in gioco, l’esistenza del Vizier non viene annunciata dallo Storyteller."
    },
    {
        character1: "Vizier",
        character2: "Magician",
        rule: "Se Vizier e Magician sono entrambi in gioco, il Demone non scopre i Minion."
    },
    {
        character1: "Vizier",
        character2: "Preacher",
        rule: "Se il Vizier perde la sua abilità, lo scopre. Se il Vizier viene giustiziato quando ha la sua abilità, la sua squadra vince."
    },
    {
        character1: "Vizier",
        character2: "Fearmonger",
        rule: "Il Vizier si sveglia insieme al Fearmonger, scopre chi ha scelto e non può scegliere di giustiziare quel giocatore."
    },
    {
        character1: "Pit-Hag",
        character2: "Cult Leader",
        rule: "Se il Pit-Hag trasforma un giocatore malvagio nel Cult Leader, non può diventare buono a causa della propria abilità."
    },
    {
        character1: "Pit-Hag",
        character2: "Damsel",
        rule: "Se il Pit-Hag crea una Damsel, lo Storyteller sceglie quale giocatore è."
    },
    {
        character1: "Pit-Hag",
        character2: "Goon",
        rule: "Se il Pit-Hag trasforma un giocatore malvagio nel Goon, non può diventare buono a causa della propria abilità."
    },
    {
        character1: "Pit-Hag",
        character2: "Heretic",
        rule: "Il Pit-Hag non può creare un Heretic."
    },
    {
        character1: "Pit-Hag",
        character2: "Politician",
        rule: "Se il Pit-Hag trasforma un giocatore malvagio nel Politician, non può diventare buono a causa della propria abilità."
    },
    {
        character1: "Pit-Hag",
        character2: "Ogre",
        rule: "Se il Pit-Hag trasforma un giocatore malvagio nell’Ogre, non può diventare buono a causa della propria abilità."
    },
    {
        character1: "Spy",
        character2: "Alchemist",
        rule: "L’Alchemist non può avere l’abilità della Spy."
    },
    {
        character1: "Spy",
        character2: "Magician",
        rule: "Quando la Spy vede il Grimorio, i segnalini Demone e Magician vengono rimossi."
    },
    {
        character1: "Spy",
        character2: "Poppy Grower",
        rule: "Se il Poppy Grower è in gioco, la Spy non vede il Grimorio finché il Poppy Grower non muore."
    },
    {
        character1: "Spy",
        character2: "Damsel",
        rule: "Se la Spy è (o è stata) in gioco, la Damsel è avvelenata."
    },
    {
        character1: "Spy",
        character2: "Heretic",
        rule: "Solo 1 personaggio jinxed può essere in gioco."
    },
    {
        character1: "Spy",
        character2: "Ogre",
        rule: "La Spy risulta come malvagia all’Ogre."
    },
    {
        character1: "Widow",
        character2: "Alchemist",
        rule: "L’Alchemist non può avere l’abilità della Widow."
    },
    {
        character1: "Widow",
        character2: "Magician",
        rule: "Quando la Widow vede il Grimorio, i segnalini Demone e Magician vengono rimossi."
    },
    {
        character1: "Widow",
        character2: "Poppy Grower",
        rule: "Se il Poppy Grower è in gioco, la Widow non vede il Grimorio finché il Poppy Grower non muore."
    },
    {
        character1: "Widow",
        character2: "Damsel",
        rule: "Se la Widow è (o è stata) in gioco, la Damsel è avvelenata."
    },
    {
        character1: "Widow",
        character2: "Heretic",
        rule: "Solo 1 personaggio jinxed può essere in gioco."
    },
    {
        character1: "Al-Hadikhia",
        character2: "Mastermind",
        rule: "Solo 1 personaggio jinxed può essere in gioco. I giocatori malvagi iniziano sapendo quale giocatore e personaggio è."
    },
    {
        character1: "Al-Hadikhia",
        character2: "Scarlet Woman",
        rule: "Se ci sono due Al-Hadikhia vivi, l’Al-Hadikhia Scarlet Woman torna a essere la Scarlet Woman."
    },
    {
        character1: "Fang Gu",
        character2: "Scarlet Woman",
        rule: "Se il Fang Gu sceglie un Outsier e muore, la Scarlet Woman non diventa il Fang Gu."
    },
    {
        character1: "Legion",
        character2: "Engineer",
        rule: "Legion e l’Engineer non possono essere entrambi in gioco all’inizio della partita. Se l’Engineer crea Legion, la maggior parte dei giocatori (inclusi tutti i malvagi) diventa Legion malvagio."
    },
    {
        character1: "Legion",
        character2: "Preacher",
        rule: "Solo 1 personaggio jinxed può essere in gioco."
    },
    {
        character1: "Leviathan",
        character2: "Exorcist",
        rule: "I malvagi non vincono quando più di 1 giocatore buono è stato giustiziato, se l’Exorcist è vivo e ha mai scelto con successo il Leviathan."
    },
    {
        character1: "Leviathan",
        character2: "Farmer",
        rule: "Ogni notte*, il Leviathan sceglie un giocatore buono vivo (diverso dalle notti precedenti): un Farmer scelto usa la propria abilità ma non muore."
    },
    {
        character1: "Leviathan",
        character2: "Grandmother",
        rule: "Se il Leviathan è in gioco e il Grandchild muore per esecuzione, i malvagi vincono."
    },
    {
        character1: "Leviathan",
        character2: "Innkeeper",
        rule: "Se il Leviathan è in gioco, i giocatori protetti dall’Innkeeper sono al sicuro da tutte le abilità malvagie."
    },
    {
        character1: "Leviathan",
        character2: "King",
        rule: "Se il Leviathan è in gioco e almeno 1 giocatore è morto, il King scopre un personaggio vivo ogni notte."
    },
    {
        character1: "Leviathan",
        character2: "Mayor",
        rule: "Se il Leviathan è in gioco e non avviene alcuna esecuzione nel giorno 5, i buoni vincono."
    },
    {
        character1: "Leviathan",
        character2: "Monk",
        rule: "Se il Leviathan è in gioco, il giocatore protetto dal Monk è al sicuro da tutte le abilità malvagie."
    },
    {
        character1: "Leviathan",
        character2: "Pit-Hag",
        rule: "Dopo il giorno 5, il Pit-Hag non può scegliere il Leviathan."
    },
    {
        character1: "Leviathan",
        character2: "Ravenkeeper",
        rule: "Ogni notte*, il Leviathan sceglie un giocatore vivo (diverso dalle notti precedenti): un Ravenkeeper scelto usa la propria abilità ma non muore."
    },
    {
        character1: "Leviathan",
        character2: "Sage",
        rule: "Ogni notte*, il Leviathan sceglie un giocatore buono vivo (diverso dalle notti precedenti): un Sage scelto usa la propria abilità ma non muore."
    },
    {
        character1: "Leviathan",
        character2: "Soldier",
        rule: "Se il Leviathan è in gioco, il Soldier è al sicuro da tutte le abilità malvagie."
    },
    {
        character1: "Lil' Monsta",
        character2: "Magician",
        rule: "Solo 1 personaggio jinxed può essere in gioco."
    },
    {
        character1: "Lil' Monsta",
        character2: "Poppy Grower",
        rule: "Se il Poppy Grower è in gioco, i Minion non si svegliano insieme. Vengono svegliati uno alla volta finché uno di loro sceglie di prendere il segnalino Lil' Monsta."
    },
    {
        character1: "Lil' Monsta",
        character2: "Scarlet Woman",
        rule: "Se ci sono 5 o più giocatori vivi e il giocatore che tiene il segnalino Lil' Monsta muore, alla Scarlet Woman viene dato il segnalino Lil' Monsta stanotte."
    },
    {
        character1: "Lil' Monsta",
        character2: "Vizier",
        rule: "Il Vizier può morire per esecuzione se sta facendo da babysitter a Lil' Monsta."
    },
    {
        character1: "Lleech",
        character2: "Slayer",
        rule: "Se lo Slayer uccide l’host del Lleech, l’host muore."
    },
    {
        character1: "Lleech",
        character2: "Heretic",
        rule: "Se il Lleech ha avvelenato l’Heretic e il Lleech muore, l’Heretic rimane avvelenato."
    },
    {
        character1: "Riot",
        character2: "Exorcist",
        rule: "Se l’Exorcist sceglie Riot nella 3ª notte, i Minion non diventano Riot."
    },
    {
        character1: "Riot",
        character2: "Farmer",
        rule: "Ogni notte*, Riot sceglie un giocatore buono vivo (diverso dalle notti precedenti): un Farmer scelto usa la propria abilità ma non muore."
    },
    {
        character1: "Riot",
        character2: "Grandmother",
        rule: "Se Riot è in gioco e il Grandchild muore durante il giorno, anche la Grandmother muore."
    },
    {
        character1: "Riot",
        character2: "Innkeeper",
        rule: "Se Riot è in gioco, il giocatore protetto dall’Innkeeper è al sicuro da tutte le abilità malvagie."
    },
    {
        character1: "Riot",
        character2: "King",
        rule: "Se Riot è in gioco e almeno 1 giocatore è morto, il King scopre un personaggio vivo ogni notte."
    },
    {
        character1: "Riot",
        character2: "Mayor",
        rule: "Il Mayor può scegliere di fermare le nomination. Se lo fa quando solo 1 Riot è vivo, i buoni vincono. Altrimenti, i malvagi vincono."
    },
    {
        character1: "Riot",
        character2: "Monk",
        rule: "Se Riot è in gioco, il giocatore protetto dal Monk è al sicuro da tutte le abilità malvagie."
    },
    {
        character1: "Riot",
        character2: "Ravenkeeper",
        rule: "Ogni notte*, Riot sceglie un giocatore buono vivo (diverso dalle notti precedenti): un Ravenkeeper scelto usa la propria abilità ma non muore."
    },
    {
        character1: "Riot",
        character2: "Sage",
        rule: "Ogni notte*, Riot sceglie un giocatore buono vivo (diverso dalle notti precedenti): un Sage scelto usa la propria abilità ma non muore."
    },
    {
        character1: "Riot",
        character2: "Soldier",
        rule: "Se Riot è in gioco, il Soldier è al sicuro da tutte le abilità malvagie."
    },
    {
        character1: "Cannibal",
        character2: "Butler",
        rule: "Se il Cannibal ottiene l’abilità del Butler, il Cannibal lo scopre."
    },
    {
        character1: "Cannibal",
        character2: "Juggler",
        rule: "Se lo Juggler fa ipotesi nel suo primo giorno e muore per esecuzione, stanotte il Cannibal vivo scopre quante ipotesi corrette ha fatto lo Juggler."
    },
    {
        character1: "Cannibal",
        character2: "Poppy Grower",
        rule: "Se il Cannibal mangia il Poppy Grower, poi muore o perde l’abilità del Poppy Grower, il Demone e i Minion si scoprono a vicenda quella notte."
    },
    {
        character1: "Mathematician",
        character2: "Chambermaid",
        rule: "La Chambermaid scopre se il Mathematician si sveglia stanotte oppure no, anche se la Chambermaid si sveglia per prima."
    },
    {
        character1: "Mathematician",
        character2: "Lunatic",
        rule: "Il Mathematician scopre se il Lunatic attacca un giocatore o giocatori diversi da quelli attaccati dal vero Demone."
    },
    {
        character1: "Plague Doctor",
        character2: "Baron",
        rule: "Se lo Storyteller ottiene l’abilità del Baron, fino a due giocatori diventano Outsider fuori dal gioco."
    },
    {
        character1: "Plague Doctor",
        character2: "Boomdandy",
        rule: "Se il Plague Doctor viene giustiziato e lo Storyteller dovrebbe ottenere l’abilità del Boomdandy, l’abilità del Boomdandy si attiva immediatamente."
    },
    {
        character1: "Plague Doctor",
        character2: "Evil Twin",
        rule: "Lo Storyteller non può ottenere l’abilità dell’Evil Twin se il Plague Doctor muore."
    },
    {
        character1: "Plague Doctor",
        character2: "Fearmonger",
        rule: "Se il Plague Doctor muore, un Minion vivo ottiene l’abilità del Fearmonger in aggiunta alla propria abilità, e lo scopre."
    },
    {
        character1: "Plague Doctor",
        character2: "Goblin",
        rule: "Se il Plague Doctor muore, un Minion vivo ottiene l’abilità del Goblin in aggiunta alla propria abilità, e lo scopre."
    },
    {
        character1: "Plague Doctor",
        character2: "Marionette",
        rule: "Se il Demone ha un vicino che è vivo ed è un Townsfolk o un Outsider quando il Plague Doctor muore, quel giocatore diventa una Marionette malvagia. Se esiste già un giocatore malvagio aggiuntivo, questo non accade."
    },
    {
        character1: "Plague Doctor",
        character2: "Scarlet Woman",
        rule: "Se il Plague Doctor muore, un Minion vivo ottiene l’abilità della Scarlet Woman in aggiunta alla propria abilità, e lo scopre."
    },
    {
        character1: "Plague Doctor",
        character2: "Spy",
        rule: "Se il Plague Doctor muore, un Minion vivo ottiene l’abilità della Spy in aggiunta alla propria abilità, e lo scopre."
    },
    {
        character1: "Hatter",
        character2: "Legion",
        rule: "Se l’Hatter muore e Legion è in gioco, non accade nulla. Se l’Hatter muore e un giocatore malvagio sceglie Legion, tutti i giocatori malvagi attuali diventano Legion."
    },
    {
        character1: "Hatter",
        character2: "Leviathan",
        rule: "Se l’Hatter muore nel giorno 5 o dopo, il Demone non può scegliere Leviathan."
    },
    {
        character1: "Hatter",
        character2: "Lil' Monsta",
        rule: "Se un Demone sceglie Lil' Monsta, sceglie anche un Minion che diventa e fa da babysitter a Lil' Monsta stanotte."
    },
    {
        character1: "Kazali",
        character2: "Bounty Hunter",
        rule: "Un Townsfolk malvagio viene creato solo se il Bounty Hunter è ancora in gioco dopo che il Kazali agisce."
    },
    {
        character1: "Kazali",
        character2: "Choirboy",
        rule: "Il Kazali non può scegliere il King per farlo diventare un Minion se il Choirboy è in gioco."
    },
    {
        character1: "Kazali",
        character2: "Goon",
        rule: "Il Kazali può scegliere che il giocatore Goon sia uno dei suoi Minion malvagi."
    },
    {
        character1: "Kazali",
        character2: "Damsel",
        rule: "Se il Kazali sceglie la Damsel per farla diventare un Minion, e un Huntsman è in gioco, un giocatore buono diventa la Damsel."
    },
    {
        character1: "Kazali",
        character2: "Marionette",
        rule: "Se il Kazali sceglie di creare una Marionette, deve scegliere uno dei suoi vicini."
    },
    {
        character1: "Village Idiot",
        character2: "Pit-Hag",
        rule: "Se c’è un segnalino inutilizzato, il Pit-Hag può creare un nuovo Village Idiot. Se lo fa, quello drunk potrebbe cambiare."
    },
    {
        character1: "Yaggababble",
        character2: "Exorcist",
        rule: "Se l’Exorcist sceglie lo Yaggababble, l’abilità dello Yaggababble non uccide stanotte."
    },
    {
        character1: "Summoner",
        character2: "Alchemist",
        rule: "Se un Alchemist-Summoner è in gioco, la partita inizia con un Demone in gioco, come normale. Se l’Alchemist-Summoner sceglie un giocatore, rende quel giocatore un Demone ma non ne cambia l’allineamento."
    },
    {
        character1: "Summoner",
        character2: "Clockmaker",
        rule: "Se il Summoner è in gioco, il Clockmaker non riceve la sua informazione finché non viene creato un Demone."
    },
    {
        character1: "Summoner",
        character2: "Legion",
        rule: "Se il Summoner crea Legion, la maggior parte dei giocatori (inclusi tutti i giocatori malvagi) diventa Legion malvagio."
    },
    {
        character1: "Summoner",
        character2: "Marionette",
        rule: "La Marionette è vicina al Summoner. Il Summoner sa chi è la Marionette."
    },
    {
        character1: "Summoner",
        character2: "Poppy Grower",
        rule: "Se il Poppy Grower è vivo quando il Summoner agisce, il Summoner sceglie quale Demone, ma lo Storyteller sceglie quale giocatore."
    },
    {
        character1: "Banshee",
        character2: "Leviathan",
        rule: "Ogni notte*, il Leviathan sceglie un giocatore buono vivo (diverso dalle notti precedenti): una Banshee scelta muore e ottiene la propria abilità."
    },
    {
        character1: "Banshee",
        character2: "Riot",
        rule: "Ogni notte*, Riot sceglie un giocatore buono vivo (diverso dalle notti precedenti): una Banshee scelta muore e ottiene la propria abilità."
    },
    {
        character1: "Banshee",
        character2: "Vortox",
        rule: "Se il Vortox è in gioco e il Demone uccide la Banshee, i giocatori scoprono comunque che la Banshee è morta."
    },
    {
        character1: "Summoner",
        character2: "Courtier",
        rule: "Se il Summoner è drunk nella 3ª notte, il Summoner sceglie quale Demone, ma lo Storyteller sceglie quale giocatore."
    },
    {
        character1: "Summoner",
        character2: "Engineer",
        rule: "Se l’Engineer rimuove un Summoner dal gioco prima che quel Summoner usi la propria abilità, il Summoner usa immediatamente la propria abilità."
    },
    {
        character1: "Summoner",
        character2: "Hatter",
        rule: "Il Summoner non può creare un Demone in gioco. Se il Summoner crea un Demone non in gioco, le morti stanotte sono arbitrarie."
    },
    {
        character1: "Summoner",
        character2: "Kazali",
        rule: "Il Summoner non può creare un Demone in gioco. Se il Summoner crea un Demone non in gioco, le morti stanotte sono arbitrarie."
    },
    {
        character1: "Summoner",
        character2: "Pit-Hag",
        rule: "Il Summoner non può creare un Demone in gioco. Se il Summoner crea un Demone non in gioco, le morti stanotte sono arbitrarie."
    },
    {
        character1: "Summoner",
        character2: "Pukka",
        rule: "Il Summoner può scegliere un giocatore che diventa il Pukka nella 2ª notte."
    },
    {
        character1: "Summoner",
        character2: "Zombuul",
        rule: "Se il Summoner trasforma un giocatore morto nello Zombuul, lo Storyteller tratta quel giocatore come uno Zombuul che è già morto una volta."
    },
    {
        character1: "Politician",
        character2: "Vizier",
        rule: "Il Politician potrebbe risultare come malvagio al Vizier."
    },
    {
        character1: "Ogre",
        character2: "Recluse",
        rule: "Se il Recluse risulta come malvagio all’Ogre, l’Ogre scopre di essere malvagio."
    },
    {
        character1: "Philosopher",
        character2: "Bounty Hunter",
        rule: "Se il Philosopher ottiene l’abilità del Bounty Hunter, un Townsfolk potrebbe diventare malvagio."
    },
    {
        character1: "Kazali",
        character2: "Soldier",
        rule: "Il Kazali può scegliere che il giocatore Soldier sia uno dei suoi Minion malvagi."
    },
    {
        character1: "Legion",
        character2: "Minstrel",
        rule: "Se Legion è morto per esecuzione oggi, Legion mantiene la propria abilità, ma il Minstrel potrebbe scoprire che è Legion."
    },
    {
        character1: "Summoner",
        character2: "Preacher",
        rule: "Se il Preacher ha scelto il Summoner entro o durante la 3ª notte, il Summoner sceglie quale Demone, ma lo Storyteller sceglie quale giocatore."
    },
    {
        character1: "Alsaahir",
        character2: "Vizier",
        rule: "Se il Vizier è in gioco, l’Alsaahir deve anche indovinare quali Demone sono in gioco."
    },
    {
        character1: "Zealot",
        character2: "Cannibal",
        rule: "Se il Cannibal ottiene l’abilità dello Zealot, il Cannibal lo scopre."
    },
    {
        character1: "Zealot",
        character2: "Vizier",
        rule: "Lo Zealot potrebbe risultare come malvagio al Vizier."
    },
    {
        character1: "Zealot",
        character2: "Legion",
        rule: "Lo Zealot potrebbe risultare come malvagio all’abilità di Legion."
    },
    {
        character1: "Lord of Typhon",
        character2: "Summoner",
        rule: "Se il Summoner crea un Lord of Typhon, il Lord of Typhon deve essere vicino a un Minion. L’altro vicino diventa un Minion malvagio non in gioco."
    },
    {
        character1: "Marionette",
        character2: "Balloonist",
        rule: "Se la Marionette crede di essere il Balloonist, potrebbe essere stato aggiunto +1 Outsider."
    },
    {
        character1: "Boffin",
        character2: "Alchemist",
        rule: "Se l’Alchemist ha l’abilità del Boffin, l’Alchemist non scopre quale abilità ha il Demone."
    },
    {
        character1: "Boffin",
        character2: "Cult Leader",
        rule: "Se il Demone ha l’abilità del Cult Leader, non può diventare buono a causa di questa abilità."
    },
    {
        character1: "Boffin",
        character2: "Drunk",
        rule: "Se il Demone dovrebbe avere l’abilità del Drunk, il Boffin sceglie invece un giocatore Townsfolk che abbia questa abilità."
    },
    {
        character1: "Boffin",
        character2: "Goon",
        rule: "Se il Demone ha l’abilità del Goon, non può diventare buono a causa di questa abilità."
    },
    {
        character1: "Boffin",
        character2: "Heretic",
        rule: "Il Demone non può avere l’abilità dell’Heretic."
    },
    {
        character1: "Boffin",
        character2: "Ogre",
        rule: "Il Demone non può avere l’abilità dell’Ogre."
    },
    {
        character1: "Boffin",
        character2: "Politician",
        rule: "Il Demone non può avere l’abilità del Politician."
    },
    {
        character1: "Boffin",
        character2: "Village Idiot",
        rule: "Se c’è un segnalino inutilizzato, il Boffin può dare al Demone l’abilità del Village Idiot."
    },
    {
        character1: "Princess",
        character2: "Cannibal",
        rule: "Se il Cannibal ha nominato, fatto giustiziare e ucciso la Princess oggi, il Demone non uccide stanotte."
    },
    {
        character1: "Princess",
        character2: "Al-Hadikhia",
        rule: "Se la Princess ha nominato e fatto giustiziare un giocatore nel suo 1º giorno, nessuno muore per l’abilità dell’Al-Hadikhia stanotte."
    },
    {
        character1: "Wraith",
        character2: "Alchemist",
        rule: "Se l’Alchemist ha l’abilità del Wraith, non la possiede, e un Wraith è in gioco. Ogni giorno, dopo la fase di esecuzione, l’Alchemist vivo può pubblicamente indovinare un giocatore vivo come Wraith: se corretto, il Demone deve scegliere il Wraith stanotte."
    },
    {
        character1: "Wraith",
        character2: "Magician",
        rule: "Ogni giorno, dopo la fase di esecuzione, il Magician vivo può pubblicamente indovinare un giocatore vivo come Wraith: se corretto, il Demone deve scegliere il Wraith stanotte."
    },
    {
        character1: "Wraith",
        character2: "Plague Doctor",
        rule: "Se il Plague Doctor muore, un Minion vivo ottiene l’abilità del Wraith in aggiunta alla propria abilità, e lo scopre."
    },
    {
        character1: "Wraith",
        character2: "Marionette",
        rule: "Il Wraith non si sveglia insieme alla Marionette."
    },
];

let isModalOpen = false;
let modal = document.querySelector(".js_modal");
let closeBtn = document.getElementsByClassName("close")[0];
let ability;
let intro;
let flavor;
let examples;
let howToRun;
let group;
let originalName;
let altName;
let name;

initialize();

async function initialize() {
    closeModal(); 
    setHeaderHeight();
    populateAll();           // riempie TB di default (quello attuale)
    setupDynamicScripts();   // attiva menu + load
}

function setHeaderHeight() {
    let headerHeight = $("header").outerHeight();
    $("html").css({'scroll-padding-top':`${headerHeight}px`});
}

function populateAll() {

    characters.forEach(character => {
        let originalName = character.name;
        let name = getName(originalName);
        let group = character.group;
        let script = character.script;

        if (character.script == "tb") {
            populateTB(name, originalName, group);
        }
        if (character.group == "Traveller") {
            populateTraveller(name, originalName, script);
        }
        if (character.script == "fabled") {
            populateFabled(name, originalName);
        }
    })

    characters.sort((a, b) => a.name.localeCompare(b.name));
    characters.forEach(character => {
        let originalName = character.name;
        let name = getName(originalName);
        let group = character.group;
        let script = character.script;
        populateRest(name, originalName, group);
    })

}

const SCRIPTS_MANIFEST_URL = "./scripts/manifest.json";
const SCRIPTS_BASE_PATH = "./scripts/";

let scriptsIndex = []; // [{ file, name }]

function buildCharacterIndex() {
    const index = new Map();
    characters.forEach(c => {
        if (c.id) index.set(c.id, c);
    });
    return index;
}

async function setupDynamicScripts() {
    // 1) click delegation (così i token aggiunti dopo funzionano)
    bindTokenClicksDelegated();

    // 2) carica manifest + popola select
    await loadScriptsManifestAndPopulateSelect();

    // 3) bottone Load
    $("#loadScriptBtn").on("click", onLoadScriptClicked);

    $("#loadScriptUrlBtn").on("click", onLoadScriptUrlClicked);

    setupHelpModal();
}

function bindTokenClicksDelegated() {
    // rimuove eventuali handler vecchi (sicurezza)
    $(document).off("click.dynamicToken");

    // SOLO token dentro la lista (evita il token dentro il modal che ha anche class "token")
    $(document).on("click.dynamicToken", ".all .script img.token", function () {
        openModal();

        resetModal();

        originalName = $(this).attr("data-name");
        altName = originalName;

        getCharacterInformation(originalName);
        updateName();
        colorText(group);

        populateModal(name, altName, intro, ability, flavor, examples, howToRun, originalName);
    });


}

async function loadScriptsManifestAndPopulateSelect() {
    const select = $("#scriptSelect");
    select.empty();

    let files;
    try {
        files = await fetchJson("./scripts/manifest.json");
    } catch (e) {
        console.error("Impossibile caricare manifest:", e);
        select.append(`<option value="">(manifest mancante)</option>`);
        return;
    }

    scriptsIndex = [];

    for (const file of files) {
        try {
            const data = await fetchJson(SCRIPTS_BASE_PATH + file);
            const meta = data.find(x => typeof x === "object" && x && x.id === "_meta");
            const name = meta?.name || file;
            scriptsIndex.push({ file, name });
        } catch (e) {
            console.warn("Script non leggibile:", file, e);
        }
    }

    // ordina per nome
    scriptsIndex.sort((a, b) => a.name.localeCompare(b.name));

    // opzione placeholder
    select.append(`<option value="">Seleziona uno script…</option>`);

    scriptsIndex.forEach(s => {
        select.append(`<option value="${s.file}">${s.name}</option>`);
    });
}

async function onLoadScriptClicked() {
    const file = $("#scriptSelect").val();
    if (!file) return;

    let data;
    try {
        data = await fetchJson(SCRIPTS_BASE_PATH + file);
    } catch (e) {
        console.error("Impossibile caricare lo script:", file, e);
        return;
    }

    const meta = data.find(x => typeof x === "object" && x && x.id === "_meta");
    const roleIds = data.filter(x => typeof x === "string");

    const characterIndex = buildCharacterIndex();

    // svuota TB
    $(".js_tb-townsfolk, .js_tb-outsiders, .js_tb-minions, .js_tb-demons").empty();

    // popola TB dal json
    roleIds.forEach(id => {
        const character = characterIndex.get(id);
        if (!character) {
            console.warn("ID ruolo non trovato in characters:", id);
            return;
        }
        const originalName = character.name;
        const name = getName(originalName);
        const group = character.group;
        populateTB(name, originalName, group); // già esiste :contentReference[oaicite:3]{index=3}
    });

    // opzionale: cambia il titolo “Trouble Brewing” col nome script caricato
    if (meta?.name) {
        $("#trouble-brewing").text(meta.name);
    }
}

async function onLoadScriptUrlClicked() {
  const url = $("#scriptUrlInput").val().trim();
  if (!url) return;

  let scriptId;
  try {
    scriptId = extractBotcScriptId(url);
  } catch (e) {
    console.error(e);
    alert("URL non valido. Esempio valido: https://www.botcscripts.com/api/scripts/83/json/");
    return;
  }

  let data;
  try {
    data = await fetchJson(url);
  } catch (e) {
    console.error("Errore fetch (probabile CORS o URL errato):", e);
    alert("Impossibile caricare questo URL (probabile CORS o link errato).");
    return;
  }

  // Formato botcscripts: array di oggetti { id: "balloonist" }
  if (!Array.isArray(data)) {
    alert("JSON non valido: mi aspettavo un array.");
    return;
  }

  const roleIds = data
    .map(x => (x && typeof x === "object") ? x.id : null)
    .filter(id => typeof id === "string" && id.length > 0);

  if (roleIds.length === 0) {
    alert("JSON non valido: nessun campo 'id' trovato.");
    return;
  }

  // Nome: il numero nello URL
  applyScriptToTB(`Script ${scriptId}`, roleIds);
}

function extractBotcScriptId(url) {
  // accetta sia con che senza slash finale
  const m = url.match(/\/api\/scripts\/(\d+)\/json\/?$/i);
  if (!m) throw new Error("URL non compatibile con botcscripts api/scripts/{id}/json");
  return m[1];
}

function applyScriptToTB(scriptName, roleIds) {
  const characterIndex = buildCharacterIndex();

  // svuota TB
  $(".js_tb-townsfolk, .js_tb-outsiders, .js_tb-minions, .js_tb-demons").empty();

  // ripopola TB come fai già per i file locali :contentReference[oaicite:6]{index=6}
  roleIds.forEach(id => {
    const character = characterIndex.get(id);
    if (!character) {
      console.warn("ID ruolo non trovato in characters:", id);
      return;
    }
    const originalName = character.name;
    const name = getName(originalName);
    populateTB(name, originalName, character.group);
  });

  $("#trouble-brewing").text(scriptName);
}


async function fetchJson(url) {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status} su ${url}`);
    return await res.json();
}

function getName(originalName, name) {
    name = originalName.toLowerCase();
    name = name.split(" ");
    if (name[2]) {
        name = name[0] + "-" + name[1] + "-" + name[2];
        name = name.replace("'",'');
    } else if (name[1]) {
        name = name[0] + "-" + name[1];
        name = name.replace("'",'');
    }
    return(name);
};

function populateTB(name, originalName, group) {
    if (group == "Townsfolk") {
        $(".js_tb-townsfolk").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (group == "Outsider") {
        $(".js_tb-outsiders").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (group == "Minion") {
        $(".js_tb-minions").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`)
    } else if (group == "Demon") {
        $(".js_tb-demons").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    }
}

function populateRest(name, originalName, group) {
    if (group == "Townsfolk") {
        $(".js_all-townsfolk").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (group == "Outsider") {
        $(".js_all-outsiders").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (group == "Minion") {
        $(".js_all-minions").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`)
    } else if (group == "Demon") {
        $(".js_all-demons").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    }
}

function populateTraveller(name, originalName, script) {
    if (script == "tb") {
        $(".js_trav-tb").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (script == "bmr") {
        $(".js_trav-bmr").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (script == "sv") {
        $(".js_trav-sv").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    } else if (script == "exp") {
        $(".js_trav-exp").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
    }
}

function populateFabled(name, originalName) {
    $(".js_fabled-all").append(`<img class="token" loading="lazy" src="./img/${name}.png" data-name="${originalName}" alt="${originalName}">`);
}

function openModal() {
    modal.style.display = "block";
    isModalOpen = true;
}

$('.js_modal-close').click(function(){
    closeModal();
});

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};

$(document).keyup(function(e) {
    if (e.key === "Escape" && isModalOpen) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = "none";
    $("html").removeClass("modal-open");
    isModalOpen = false;
}

function resetModal() {
    //resets modal position
    setTimeout( () => {
        modal.scrollTop = 0;
    }, 1);

    //stops page scroll
    $("html").addClass("modal-open");
}

function getCharacterInformation(originalName) {
    characters.forEach(character => {
        if (character.name == originalName) {
            ability = character.ability;
            intro = character.intro;
            flavor = character.flavor;
            examples = character.examples;
            howToRun = character.howToRun;
            group = character.group;
        }
    });
};

function updateName() {
    name = originalName.toLowerCase();
    name = name.split(" ");
    if (name[2]) {
        name = name[0] + "-" + name[1] + "-" + name[2];
        name = name.replace("'",'');
    } else if (name[1]) {
        name = name[0] + "-" + name[1];
        name = name.replace("'",'');
    }
}

function colorText(group) {
    if (group == "Townsfolk" || group == "Outsider") {
        $(".modal__title").removeClass("modal__title--bad");
        $(".modal__title").addClass("modal__title--good");
    } else if (group == "Minion" || group == "Demon") {
        $(".modal__title").removeClass("modal__title--good");
        $(".modal__title").addClass("modal__title--bad");
    }
}

function populateModal(name, altName, intro, ability, flavor, examples, howToRun, originalName) {
    setImage(name, altName);
    setName(altName);
    setIntro(intro);
    setAbility(ability);
    setFlavor(flavor);
    setExamples(examples);
    setHowToRun(howToRun);
    setJinxes(originalName, name);
}

function setImage(name, altName) {
    $(".js_token").attr("src",`./img/${name}.png`);
    $(".js_token").attr("alt",`The icon for the ${altName} character`);
}

function setName(altName) {
    $(".js_modal-name").html(`${altName}`);
}

function setAbility(ability) {
    $(".js_modal-ability").html(`${ability}`);
}

function setIntro(intro) {
    if (intro) {
        $(".js_modal-overview").html(`${intro}`);
    } else {
        $(".js_modal-overview").html(`Extra info coming soon...`);
    }
}

function setFlavor(flavor) {
    $(".js_flavor").html(`${flavor}`);
}

function setExamples(examples) {
    if (examples) {
        $(".js_examples").html(`${examples}`);
    } else {
        $(".js_examples").html(`Examples coming soon...`);
    }
}

function setHowToRun(howToRun) {
    if (howToRun) {
        $(".js_how-to-run").html(`${howToRun}`);
    } else {
        $(".js_how-to-run").html(`How to Run coming soon...`);
    }
}

function setJinxes(originalName, name) {
    $(".js_jinxes").empty();
    let foundMatch = false;
    let otherCharacter;
    $(jinxes).each(function() {
        if (this.character1 == originalName || this.character2 == originalName) {
            if (this.character1 == originalName) {
                otherCharacter = this.character2;
            } else {
                otherCharacter = this.character1;
            }
            foundMatch = true;
            let formattedName = otherCharacter.toLowerCase();
            formattedName = formattedName.split(" ");
            if (formattedName[2]) {
                formattedName = formattedName[0] + "-" + formattedName[1] + "-" + formattedName[2];
                formattedName = formattedName.replace("'",'');
            } else if (formattedName[1]) {
                formattedName = formattedName[0] + "-" + formattedName[1];
                formattedName = formattedName.replace("'",'');
            }

            $(".js_jinxes").append(`<div class="modal__jinx" style="display: flex; align-items: center; margin: 15px"><img style="max-width: 75px; margin-right: 10px;" src="./img/${formattedName}.png"><p>${this.rule}</div>`);
        }
    })
    if (originalName == "Djinn") {
        $(".js_jinx-container span").removeClass("d-none");
        foundMatch = true;
        $(jinxes).each(function() {
            let name1 = this.character1;
            let name2 = this.character2;

            name1 = name1.toLowerCase();
            name1 = name1.split(" ");
            if (name1[2]) {
                name1 = name1[0] + "-" + name1[1] + "-" + name1[2];
                name1 = name1.replace("'",'');
            } else if (name1[1]) {
                name1 = name1[0] + "-" + name1[1];
                name1 = name1.replace("'",'');
            }

            name2 = name2.toLowerCase();
            name2 = name2.split(" ");
            if (name2[2]) {
                name2 = name2[0] + "-" + name2[1] + "-" + name2[2];
                name2 = name2.replace("'",'');
            } else if (name2[1]) {
                name2 = name2[0] + "-" + name2[1];
                name2 = name2.replace("'",'');
            }
            $(".js_jinxes").append(`<div class="jinx" style="display: flex; align-items: center; margin: 15px"><img style="max-width: 75px; margin-right: 10px;" src="./img/${name1}.png"><img style="max-width: 75px; margin-right: 10px;" src="./img/${name2}.png"><p>${this.rule}</div>`);

        })
    }
    if (foundMatch) {
        $(".js_jinx-container").removeClass("d-none");
    } else {
        $(".js_jinx-container").addClass("d-none");
    }
}

function setupHelpModal() {
  const btn = document.getElementById("botcLinkHelpBtn");
  const modal = document.getElementById("botcLinkHelpModal");
  if (!btn || !modal) return;

  const open = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  btn.addEventListener("click", open);

  // chiudi cliccando su backdrop o X (elementi con data-close)
  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.getAttribute && target.getAttribute("data-close") === "1") {
      close();
    }
  });

  // chiudi con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });
}

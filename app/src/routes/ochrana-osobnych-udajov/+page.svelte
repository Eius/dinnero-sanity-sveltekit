<script>

	import contacts from "$lib/data/contacts";

</script>

<svelte:head>
	<title>Dinnero Pizza | Ochrana osobných údajov</title>
</svelte:head>

<div class="py-32 container max-w-[1000px]">
    <section>
        <h2>Ochrana osobných údajov</h2>
        <p>Vaše súkromie je pre nás dôležité. Táto stránka sa zaväzuje chrániť a rešpektovať vaše osobné údaje. 
        Táto politika vysvetľuje, ako získavame a spracovávame vaše údaje, ako aj vaše práva týkajúce sa týchto údajov.</p>
    </section>
    <section>
        <h2>Aké informácie zhromažďujeme</h2>
        <p>Pri návšteve tejto stránky môžeme zhromažďovať a spracovávať nasledujúce údaje:</p>
        <ul>
            <li><b>Osobné údaje, ktoré nám poskytnete pri registrácii alebo vyplnení formulárov</b> - 
                Napríklad meno, emailová adresa, telefónne číslo a ďalšie informácie, ktoré nám poskytnete.</li>
            <li><b>Informácie získané automaticky</b> - Akýkoľvek obsah, ktorý prezrádza informácie 
                o vašom zariadení alebo o vašom používaní tejto stránky, ako sú IP adresy, typ prehliadača, zariadenie a operačný systém.</li>
        </ul>
    </section>
    <section>
        <h2>Ako používame vaše údaje</h2>
        <p>Vaše údaje môžeme použiť na nasledujúce účely:</p>
        <ul>
            <li><b>Poskytovanie a spravovanie našich služieb</b> - Napríklad na registráciu účtu, spracovanie objednávok a komunikáciu s vami o vašom účte.</li>
            <li><b>Personalizácia používateľského zážitku</b> - Pomocou údajov môžeme prispôsobiť naše služby vašim preferenciám a záujmom.</li>
            <li><b>Marketing a reklama</b> - Ak nám dáte súhlas, môžeme vám zasielať marketingové informácie o našich produktoch a službách.</li>
        </ul>
    </section>
    <section>
        <h2>Zdieľanie vašich údajov</h2>
        <p>Vaše osobné údaje nikdy nezdieľame s tretími stranami bez vášho súhlasu, s výnimkou prípadov, 
            keď je to nevyhnutné na poskytnutie našich služieb alebo v súlade s právnymi požiadavkami.</p>
    </section>
    <section>
        <h2>Vaše práva</h2>
        <p>Máte právo požadovať prístup k vašim osobným údajom, ich opravu, vymazanie alebo obmedzenie 
            spracovania. Máte tiež právo namietať voči spracovaniu vašich údajov a na prenosnosť údajov.</p>
    </section>
    <section>
        <h2>Zmeny v našej politike ochrany osobných údajov</h2>
        <p>Táto politika ochrany osobných údajov môže byť občas aktualizovaná. Ak k tomu dôjde, zmeny sa prejavia na tejto stránke.</p>
    </section>
    <section>
        <h2>Kontaktné informácie</h2>
        <p>Ak máte akékoľvek otázky alebo obavy týkajúce sa tejto politiky ochrany osobných údajov, neváhajte nás kontaktovať na {contacts.email}</p>
    </section>
</div>

<style lang="postcss">
    section {
        @apply pb-4 mb-4 border-b border-gray border-dashed;
    }

    h2 {
        @apply pb-2 text-white text-4xl font-title;
    }

    p {
        @apply text-white text-lg;
    }

    ul {
        @apply pt-4 list-disc list-inside text-white text-lg;
    }

    div section:last-child {
        @apply border-none;
    }
</style>
<!-- 
Osobné údaje, ktoré nám poskytnete pri registrácii alebo vyplnení formulárov - Napríklad meno, emailová adresa, telefónne číslo a ďalšie informácie, ktoré nám poskytnete.
Informácie získané automaticky - Akýkoľvek obsah, ktorý prezrádza informácie o vašom zariadení alebo o vašom používaní tejto stránky, ako sú IP adresy, typ prehliadača, zariadenie a operačný systém.
Ako používame vaše údaje
Vaše údaje môžeme použiť na nasledujúce účely:

Poskytovanie a spravovanie našich služieb - Napríklad na registráciu účtu, spracovanie objednávok a komunikáciu s vami o vašom účte.
Personalizácia používateľského zážitku - Pomocou údajov môžeme prispôsobiť naše služby vašim preferenciám a záujmom.
Marketing a reklama - Ak nám dáte súhlas, môžeme vám zasielať marketingové informácie o našich produktoch a službách.
Zdieľanie vašich údajov
Vaše osobné údaje nikdy nezdieľame s tretími stranami bez vášho súhlasu, s výnimkou prípadov, keď je to nevyhnutné na poskytnutie našich služieb alebo v súlade s právnymi požiadavkami.

Vaše práva
Máte právo požadovať prístup k vašim osobným údajom, ich opravu, vymazanie alebo obmedzenie spracovania. Máte tiež právo namietať voči spracovaniu vašich údajov a na prenosnosť údajov.

Zmeny v našej politicke ochrany osobných údajov
Táto politika ochrany osobných údajov môže byť občas aktualizovaná. Ak k tomu dôjde, oznámime vám zmeny na tejto stránke.

Kontaktné informácie
Ak máte akékoľvek otázky alebo obavy týkajúce sa tejto politiky ochrany osobných údajov, neváhajte nás kontaktovať na [email protected]

Vaša dôvera je pre nás kľúčová. Ďakujeme, že ste si prečítali našu politiku ochrany osobných údajov. -->
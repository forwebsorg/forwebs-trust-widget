(() => {
    // Az összes widget keresése a .forwebs-widget osztály alapján
    const widgetContainers = document.querySelectorAll(".forwebs-widget");

    const languages = {
        english: { reliable: "Trusted", reviews: "Reviews" },
        hungarian: { reliable: "Megbízható", reviews: "Vélemények" },
        mandarin: { reliable: "可靠", reviews: "评论" },
        spanish: { reliable: "Confiable", reviews: "Reseñas" },
        mexican_spanish: { reliable: "De confianza", reviews: "Opiniones" },
        french: { reliable: "Fiable", reviews: "Avis" },
        arabic: { reliable: "موثوق", reviews: "مراجعات" },
        bengali: { reliable: "বিশ্বাসযোগ্য", reviews: "মতামত" },
        russian: { reliable: "Надежный", reviews: "Отзывы" },
        portuguese: { reliable: "Confiável", reviews: "Avaliações" },
        hindi: { reliable: "विश्वसनीय", reviews: "समीक्षाएँ" },
        urdu: { reliable: "قابل اعتماد", reviews: "جائزے" },
        german: { reliable: "Zuverlässig", reviews: "Bewertungen" },
        japanese: { reliable: "信頼できる", reviews: "レビュー" },
        italian: { reliable: "Affidabile", reviews: "Recensioni" },
        korean: { reliable: "신뢰할 수 있는", reviews: "리뷰" },
        turkish: { reliable: "Güvenilir", reviews: "Yorumlar" },
        vietnamese: { reliable: "Đáng tin cậy", reviews: "Đánh giá" },
        polish: { reliable: "Niezawodny", reviews: "Opinie" },
        ukrainian: { reliable: "Надійний", reviews: "Відгуки" },
        romanian: { reliable: "Fiabil", reviews: "Recenzii" },
        greek: { reliable: "Αξιόπιστος", reviews: "Κριτικές" },
        dutch: { reliable: "Betrouwbaar", reviews: "Beoordelingen" },
        swedish: { reliable: "Tillförlitlig", reviews: "Recensioner" },
        finnish: { reliable: "Luotettava", reviews: "Arvostelut" },
        czech: { reliable: "Spolehlivý", reviews: "Recenze" },
        slovak: { reliable: "Spoľahlivý", reviews: "Recenzie" },
        danish: { reliable: "Pålidelig", reviews: "Anmeldelser" },
        bulgarian: { reliable: "Надежден", reviews: "Отзиви" },
        serbian: { reliable: "Pouzdano", reviews: "Recenzije" },
        croatian: { reliable: "Pouzdano", reviews: "Recenzije" },
        slovene: { reliable: "Zanesljiv", reviews: "Mnenja" },
        norwegian: { reliable: "Pålitelig", reviews: "Vurderinger" },
        latvian: { reliable: "Uzticams", reviews: "Atsauksmes" },
        lithuanian: { reliable: "Patikimas", reviews: "Atsiliepimai" },
        estonian: { reliable: "Usaldusväärne", reviews: "Arvustused" },
        albanian: { reliable: "I besueshëm", reviews: "Rishikime" },
        macedonian: { reliable: "Доверлив", reviews: "Прегледи" },
        bosnian: { reliable: "Pouzdano", reviews: "Recenzije" },
        montenegrin: { reliable: "Pouzdano", reviews: "Recenzije" },
        armenian: { reliable: "Հուսալի", reviews: "Մեկնաբանություններ" },
        georgian: { reliable: "ნდობით აღჭურვილი", reviews: "მიმოხილვები" },
        kazakh: { reliable: "Сенімді", reviews: "Пікірлер" },
        uzbek: { reliable: "Ishonchli", reviews: "Sharhlar" },
        kyrgyz: { reliable: "Ишенимдүү", reviews: "Пикирлер" },
        tajik: { reliable: "Боэътимод", reviews: "Баррасӣ" },
        hebrew: { reliable: "אמין", reviews: "ביקורות" },
        persian: { reliable: "قابل اعتماد", reviews: "نقدها" },
        nepali: { reliable: "विश्वसनीय", reviews: "समीक्षाहरू" },
        sinhala: { reliable: "නම්බනීය", reviews: "සමාලෝචන" },
        tamil: { reliable: "நம்பகமான", reviews: "விமர்சனங்கள்" },
        telugu: { reliable: "నమ్మకమైన", reviews: "సమీక్షలు" },
        kannada: { reliable: "ನಂಬಲರ್ಹ", reviews: "ವಿಮರ್ಶೆಗಳು" },
        malayalam: { reliable: "വിശ്വസനീയ", reviews: "അവലോകനങ്ങൾ" },
        marathi: { reliable: "विश्वसनीय", reviews: "समीक्षाएँ" },
        gujarati: { reliable: "વિશ્વસનીય", reviews: "સમીક્ષાઓ" },
        swahili: { reliable: "Inayohusiana", reviews: "Mapitio" },
        amharic: { reliable: "ታመናቸው", reviews: "እትም" },
        somali: { reliable: "Aamin", reviews: "Faallooyinka" },
        malay: { reliable: "Dipercayai", reviews: "Ulasan" },
        thai: { reliable: "เชื่อถือได้", reviews: "รีวิว" },
        filipino: { reliable: "Mapagkakatiwalaan", reviews: "Mga Review" },
        indonesian: { reliable: "Terpercaya", reviews: "Ulasan" },
        zulu: { reliable: "Othembekile", reviews: "Izibuyekezo" },
        haitian_creole: { reliable: "Fidèl", reviews: "Revizyon" },
        yoruba: { reliable: "Gbẹkẹle", reviews: "Atunwo" },
        igbo: { reliable: "Njikọ", reviews: "Nyocha" },
        maori: { reliable: "Whakapono", reviews: "Arotake" },
        samoan: { reliable: "Faatuatuaina", reviews: "Iloiloga" },
        tigrinya: { reliable: "ታማኝ", reviews: "እይታዎች" },
        pashto: { reliable: "باوري", reviews: "کتنې" },
        luxembourgish: { reliable: "Zouverléisseg", reviews: "Bewäertungen" },
        catalan: { reliable: "Fiable", reviews: "Resenyes" },
        galician: { reliable: "Fiable", reviews: "Reseñas" },
        basque: { reliable: "Fidagarria", reviews: "Iritziak" },
        welsh: { reliable: "Dibynadwy", reviews: "Adolygiadau" },
        irish: { reliable: "Iontaofa", reviews: "Athbhreithnithe" },
        maltese: { reliable: "Affidabbli", reviews: "Reviżjonijiet" },
        esperanto: { reliable: "Fidinda", reviews: "Recenzoj" },
        lao: { reliable: "ໄວ້ໃຈໄດ້", reviews: "ຄຳທະວີ" },
        burmese: { reliable: "ယုံကြည်ရသော", reviews: "သုံးသပ်ချက်များ" },
        khmer: { reliable: "គួរឱ្យទុកចិត្ត", reviews: "ស្នើរសុំ" },
        mongolian: { reliable: "Найдвартай", reviews: "Сэтгэгдэл" },
        tibetan: { reliable: "རྟགས་ཅན་", reviews: "བསམ་བཀོད།" },
        hmong: { reliable: "Tsim nyog ntseeg siab", reviews: "Kev tshuaj xyuas" },
        uzbek_cyrillic: { reliable: "Ишончли", reviews: "Шарҳлар" },
        romani: { reliable: "Vastipe", reviews: "Zuralimata" },
    
    };
    

    // Ellenőrizni, hogy a szükséges CSS/JS már be van-e töltve
    const loadScriptAndCSS = () => {
        if (!document.querySelector('link[href*="bootstrap.min.css"]')) {
            const bootstrapCSS = document.createElement("link");
            bootstrapCSS.rel = "stylesheet";
            bootstrapCSS.href =
                "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";
            document.head.appendChild(bootstrapCSS);
        }

        if (!document.querySelector('script[src*="bootstrap.bundle.min.js"]')) {
            const bootstrapJS = document.createElement("script");
            bootstrapJS.src =
                "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
            document.body.appendChild(bootstrapJS);
        }

        if (!document.querySelector('link[href*="flaticon-uicons"]')) {
            const flatIconsCSS = document.createElement("link");
            flatIconsCSS.rel = "stylesheet";
            flatIconsCSS.href =
                "https://cdn.jsdelivr.net/npm/@flaticon/flaticon-uicons@3.3.1/css/all/all.min.css";
            document.head.appendChild(flatIconsCSS);
        }
    };

    // Betöltés egyszer a szükséges CSS/JS fájlokra
    loadScriptAndCSS();

    // Minden widgethez külön feldolgozást végzünk
    widgetContainers.forEach((widgetContainer, index) => {
        const widgetId = `forwebs-widget-${index}`;
        widgetContainer.setAttribute("id", widgetId);

        // Get the color and language attributes for style and text selection
        const colorScheme = widgetContainer.getAttribute("data-color") || "light";
        const language = widgetContainer.getAttribute("data-language") || "english";

        // Nyelvellenőrzés, alapértelmezett angol, ha nem található
        const currentLanguage = languages[language] || languages.english;

        // Define styles for light and dark modes
        const styles = {
            light: {
                backgroundColor: "#f8f9fa",
                borderColor: "#ddd",
                textColor: "#212529",
                starColor: "#ffc107",
                logo: "logo.png",
            },
            dark: {
                backgroundColor: "#212529",
                borderColor: "#444",
                textColor: "#f8f9fa",
                starColor: "#ffc107",
                logo: "logo-dark.png",
            },
        };

        const currentStyle = styles[colorScheme] || styles.light;

        // Fetch the data for the widget
        const domain = window.location.hostname;
        fetch(`widget-datas.php?company=${domain}`)
            .then(response => response.json())
            .then(data => {
                const stars = data.stars;
                const reviews = data.reviews;

                // Determine star color and icon based on rating ranges
                let starColor = currentStyle.starColor;
                let iconClass = "fi fi-sr-shield-trust";

                if (stars >= 1 && stars <= 1.5) {
                    starColor = "red";
                    iconClass = "fi fi-sr-octagon-xmark";
                } else if (stars > 1.5 && stars <= 2.5) {
                    starColor = "brown";
                    iconClass = "fi fi-sr-diamond-exclamation";
                } else if (stars > 2.5 && stars <= 4.5) {
                    starColor = "blue";
                    iconClass = "fi fi-ss-hexagon-check";
                }

                // Calculate full and half stars with opacity logic
                const fullStars = Math.floor(stars);
                let halfStars = 0;
                let halfStarOpacity = 1;

                if ((stars % 1) >= 0.2 && (stars % 1) <= 0.5) {
                    halfStars = 1;
                    halfStarOpacity = 0.5;
                } else if ((stars % 1) > 0.5) {
                    halfStars = 1;
                }

                // Create the widget-specific styles
                const styleElement = document.createElement("style");
                styleElement.textContent = `
                    #${widgetId} {
                        width: 100%;
                    }
                    #${widgetId} a {
                        display: inline-flex;
                        align-items: center;
                        width: auto;
                        padding: 10px;
                        background-color: ${currentStyle.backgroundColor};
                        border: 1px solid ${currentStyle.borderColor};
                        border-radius: 5px;
                        cursor: pointer;
                        text-align: center;
                        color: ${currentStyle.textColor};
                        text-decoration: none;
                        font-family: Arial;
                    }
                    #${widgetId} .reliable-info {
                        display: flex;
                        align-items: center;
                        margin-top: 5px;
                        line-height: 0rem;
                    }
                    #${widgetId} .fi {
                        font-size: 1.5rem;
                        color: ${starColor};
                        margin-right: 5px;
                    }
                    #${widgetId} .stars {
                        color: ${starColor};
                        font-size: 1.2rem;
                    }
                    #${widgetId} .review-count {
                        font-size: 0.9rem;
                        color: ${currentStyle.textColor};
                    }
                    #${widgetId} .half-star {
                        opacity: ${halfStarOpacity};
                    }
                `;
                document.head.appendChild(styleElement);

                // Create the widget HTML
                const widgetHTML = `
                    <a href="https://forwebs.org/${domain}" target="_blank" title="${domain}">
                        <div style="text-align: center;">
                            <img src="${currentStyle.logo}" alt="Logo" style="margin-bottom: 5px; height: 20px;">
                            <div class="reliable-info">
                                <i class="${iconClass}"></i>
                                <span>${currentLanguage.reliable}</span>
                            </div>
                        </div>
                        <div style="text-align: left; margin-left: 13px;">
                            <div class="stars">
                                ${'★'.repeat(fullStars)}${halfStars ? `<span class="half-star">&#11242;</span>` : ""} ${stars}
                            </div>
                            <div class="review-count">${stars} | ${reviews} ${currentLanguage.reviews}</div>
                        </div>
                    </a>
                `;

                // Inject the widget HTML into the container
                widgetContainer.innerHTML = widgetHTML;
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });
})();

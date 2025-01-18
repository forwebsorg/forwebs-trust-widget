(()=>{const widgetContainers=document.querySelectorAll(".forwebs-widget");const loadScriptAndCSS=()=>{if(!document.querySelector('link[href*="bootstrap.min.css"]')){const bootstrapCSS=document.createElement("link");bootstrapCSS.rel="stylesheet";bootstrapCSS.href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";document.head.appendChild(bootstrapCSS)}
if(!document.querySelector('script[src*="bootstrap.bundle.min.js"]')){const bootstrapJS=document.createElement("script");bootstrapJS.src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";document.body.appendChild(bootstrapJS)}
if(!document.querySelector('link[href*="flaticon-uicons"]')){const flatIconsCSS=document.createElement("link");flatIconsCSS.rel="stylesheet";flatIconsCSS.href="https://cdn.jsdelivr.net/npm/@flaticon/flaticon-uicons@3.3.1/css/all/all.min.css";document.head.appendChild(flatIconsCSS)}};loadScriptAndCSS();widgetContainers.forEach((widgetContainer,index)=>{const widgetId=`forwebs-widget-${index}`;widgetContainer.setAttribute("id",widgetId);const colorScheme=widgetContainer.getAttribute("data-color")||"light";const language=widgetContainer.getAttribute("data-language")||"english";const styles={light:{backgroundColor:"#f8f9fa",borderColor:"#ddd",textColor:"#212529",starColor:"#ffc107",logo:"logo.png",},dark:{backgroundColor:"#212529",borderColor:"#444",textColor:"#f8f9fa",starColor:"#ffc107",logo:"logo-dark.png",},};const currentStyle=styles[colorScheme]||styles.light;const domain=window.location.hostname;fetch(`widget-datas.php?company=${domain}`).then(response=>response.json()).then(data=>{const stars=data.stars;const reviews=data.reviews;let starColor=currentStyle.starColor;let iconClass="fi fi-sr-shield-trust";if(stars>=1&&stars<=1.5){starColor="red";iconClass="fi fi-sr-octagon-xmark"}else if(stars>1.5&&stars<=2.5){starColor="brown";iconClass="fi fi-sr-diamond-exclamation"}else if(stars>2.5&&stars<=4.5){starColor="blue";iconClass="fi fi-ss-hexagon-check"}
const fullStars=Math.floor(stars);let halfStars=0;let halfStarOpacity=1;if((stars%1)>=0.2&&(stars%1)<=0.5){halfStars=1;halfStarOpacity=0.5}else if((stars%1)>0.5){halfStars=1}
const styleElement=document.createElement("style");styleElement.textContent=`
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
                `;document.head.appendChild(styleElement);const widgetHTML=`
                    <a href="https://forwebs.org/${domain}" target="_blank" title="${domain}">
                        <div style="text-align: center;">
                            <img src="${currentStyle.logo}" alt="Logo" style="margin-bottom: 5px; height: 20px;">
                            <div class="reliable-info">
                                <i class="${iconClass}"></i>
                                <span>Reliable</span>
                            </div>
                        </div>
                        <div style="text-align: left; margin-left: 13px;">
                            <div class="stars">
                                ${'★'.repeat(fullStars)}${halfStars ? `<span class="half-star">&#11242;</span>` : ""} ${stars}
                            </div>
                            <div class="review-count">${stars} | ${reviews} Reviews</div>
                        </div>
                    </a>
                `;widgetContainer.innerHTML=widgetHTML}).catch(error=>{console.error("Error fetching data:",error)})})})()
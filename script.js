

let currentLanguage = "en";
let lastFocusedElement = null;

const projectDetails = {
  sehhati: {
    type: {en:"Academic Proposal",ar:"مقترح أكاديمي"},
    title: {en:"Sehhati+",ar:"صحتي+"},
    subtitle: {en:"AI-Powered Emergency Healthcare Management",ar:"مقترح لإدارة الرعاية الصحية الطارئة باستخدام الذكاء الاصطناعي"},
    sections: [
      {title:{en:"Problem Statement",ar:"المشكلة"},text:{en:"The proposal addresses delays in identifying a suitable available hospital during emergencies, traffic congestion affecting ambulance routes, and the lack of an AI assistant to guide users through services.",ar:"يتناول المقترح التأخر في العثور على مستشفى مناسب ومتاح للحالات الطارئة، والازدحام المروري الذي يؤثر على مسارات الإسعاف، وغياب مساعد ذكي لإرشاد المستخدمين إلى الخدمات."}},
      {title:{en:"Proposed Solution",ar:"الحل المقترح"},text:{en:"An enhancement concept for the Sehhati app that would use patient location, hospital availability, medical specialty, and traffic conditions to support emergency routing and preparation.",ar:"فكرة لتطوير تطبيق صحتي بالاعتماد على موقع المريض وتوفر المستشفيات والتخصصات الطبية وحالة المرور لدعم توجيه الحالات الطارئة والاستعداد لاستقبالها."}},
      {title:{en:"Proposed Development Plan",ar:"خطة التطوير المقترحة"},list:{en:["Sprint 1: AI-powered chatbot to guide users through emergency requests.","Sprint 2: Integrate real-time traffic data to support ambulance route optimization.","Sprint 3: Provide hospitals with real-time updates about incoming patients.","Sprint 4: Propose automatic location sharing and hospital selection based on availability and traffic."],ar:["السبرنت الأول: روبوت محادثة ذكي لإرشاد المستخدمين في طلبات الطوارئ.","السبرنت الثاني: دمج بيانات المرور المباشرة لدعم تحسين مسارات الإسعاف.","السبرنت الثالث: تزويد المستشفيات بتحديثات فورية عن الحالات القادمة.","السبرنت الرابع: اقتراح مشاركة الموقع تلقائيًا واختيار المستشفى وفق التوفر وحالة المرور."]}},
      {title:{en:"Skills & Concepts",ar:"المهارات والمفاهيم"},tags:["Healthcare","Artificial Intelligence","Emergency Management","Agile / Scrum"]}
    ],
    footer:{en:"Academic proposal · Proposed features, not a completed implementation.",ar:"مقترح أكاديمي · ميزات مقترحة وليست نظامًا منفذًا."}
  },
  library: {
    type:{en:"Academic Project",ar:"مشروع أكاديمي"},
    title:{en:"Online Library System",ar:"نظام المكتبة الإلكتروني"},
    subtitle:{en:"Library Management & Database Design",ar:"إدارة المكتبة وتصميم قاعدة البيانات"},
    sections:[
      {title:{en:"Project Overview",ar:"نبذة عن المشروع"},text:{en:"A prototype concept for simplifying book browsing, borrowing, and returning through a digital library system with three roles: administrator, librarian, and student.",ar:"تصور لنموذج أولي يهدف إلى تسهيل استعراض الكتب واستعارتها وإرجاعها من خلال نظام مكتبة رقمي بثلاثة أدوار: المدير وأمين المكتبة والطالب."}},
      {title:{en:"Main Features",ar:"الميزات الرئيسية"},list:{en:["Administrator: add, remove, and update user accounts.","Librarian: manage the book inventory, process returns, and track overdue books.","Student: browse available books and manage borrowing and returns.","SQL database concept for users, books, and borrowing records."],ar:["المدير: إضافة حسابات المستخدمين وحذفها وتحديثها.","أمين المكتبة: إدارة الكتب ومعالجة الإرجاع ومتابعة الكتب المتأخرة.","الطالب: استعراض الكتب المتاحة وإدارة الاستعارة والإرجاع.","تصور لقاعدة بيانات SQL للمستخدمين والكتب وسجلات الاستعارة."]}},
      {title:{en:"Key Concepts",ar:"المفاهيم الرئيسية"},tags:["SQL Database","Role-Based Access","System Design"]}
    ],
    footer:{en:"Academic prototype · Implementation details not confirmed.",ar:"نموذج أولي أكاديمي ·"}
  },
  attendance: {
    type:{en:"Academic Project",ar:"مشروع أكاديمي"},
    title:{en:"Student Attendance & Exit System",ar:"نظام حضور وانصراف الطلاب"},
    subtitle:{en:"System Analysis, Design & Project Planning",ar:"تحليل النظام وتصميمه وتخطيط المشروع"},
    sections:[
      {title:{en:"Project Overview",ar:"نبذة عن المشروع"},text:{en:"A proposed system for safer, more organized school dismissal. The concept includes absence reporting, parent notifications when students leave school, a smart canteen, and a school-specific app intended to reduce congestion.",ar:"نظام مقترح لتنظيم انصراف الطلاب وتعزيزه بالسلامة. تشمل الفكرة تسجيل الغياب وإشعار ولي الأمر عند خروج الطالب ومقصفًا ذكيًا وتطبيقًا خاصًا بالمدرسة للمساعدة في تقليل الازدحام."}},
      {title:{en:"Analysis & Design",ar:"التحليل والتصميم"},list:{en:["System use cases and workflow modeling.","Sequence and activity diagrams as part of the system documentation.","System architecture and UML modeling concepts."],ar:["حالات استخدام النظام ونمذجة سير العمل.","مخططات التسلسل والنشاط ضمن توثيق النظام.","مفاهيم معمارية النظام ونمذجة UML."]}},
      {title:{en:"My Role & Methodology",ar:"دوري والمنهجية"},text:{en:"My contribution focused primarily on project planning and management, helping organize and coordinate the project work. The proposed development approach was the Incremental Model.",ar:"تركزت مساهمتي بشكل أساسي على تخطيط المشروع وإدارته والمساعدة في تنظيم العمل وتنسيقه. وكانت منهجية التطوير المقترحة هي النموذج التزايدي (Incremental Model)."}},
      {title:{en:"Key Concepts",ar:"المفاهيم الرئيسية"},tags:["Project Planning","Project Management","UML","Incremental Model"]}
    ],
    footer:{en:"Academic analysis and design project · No programming implementation.",ar:"مشروع أكاديمي للتحليل والتصميم · دون تنفيذ برمجي."}
  },
  color: {
    type:{en:"UI/UX Design",ar:"تصميم واجهات المستخدم"},
    title:{en:"Color App Redesign",ar:"إعادة تصميم تطبيق Color"},
    subtitle:{en:"Child-Friendly Interface Redesign",ar:"إعادة تصميم واجهات مناسبة للأطفال"},
    sections:[
      {title:{en:"Project Overview",ar:"نبذة عن المشروع"},text:{en:"A redesign project for a children's educational app that teaches colors. The original interfaces included unsettling facial illustrations, so the team redesigned the visual experience to feel friendlier and more age-appropriate.",ar:"مشروع لإعادة تصميم تطبيق تعليمي للأطفال لتعلّم الألوان. احتوت الواجهات الأصلية على رسومات وجوه غير مريحة، لذلك أعاد الفريق تصميم التجربة البصرية لتكون ألطف وأكثر ملاءمة للأطفال."}},
      {title:{en:"My Role",ar:"دوري في المشروع"},text:{en:"Designed the redesigned app interfaces using Figma.",ar:"تصميم واجهات التطبيق بعد إعادة التصميم باستخدام Figma."}},
      {title:{en:"Tools & Skills",ar:"الأدوات والمهارات"},tags:["UI/UX Design","Figma","Proto.io","Prototyping"]}
    ],
    footer:{en:"Academic design project · Interface redesign, not app development.",ar:"مشروع تصميم أكاديمي · إعادة تصميم الواجهات وليست برمجة التطبيق."}
  }
    ,
  baseer: {
    type: {
      en: "Hackathon Project · Health-Thon",
      ar: "مشروع هاكاثون · هاكاثون الصحة"
    },
    title: {
      en: "Baseer | بصير",
      ar: "بصير | Baseer"
    },
    subtitle: {
      en: "An assistive consent-signing concept for patients who cannot use their hands",
      ar: "حل مساعد لتسهيل التوقيع على الموافقات للمرضى الذين لا يستطيعون استخدام أيديهم"
    },
    sections: [
      {
        title: {en:"Project Overview", ar:"نبذة عن المشروع"},
        text: {
          en:"Baseer is an assistive healthcare concept designed to make medical consent procedures more accessible for patients who cannot use their hands to sign. It aims to support patient autonomy and help healthcare providers document consent.",
          ar:"بصير فكرة تقنية مساعدة في القطاع الصحي تهدف إلى تسهيل إجراءات الموافقة الطبية للمرضى الذين لا يستطيعون استخدام أيديهم للتوقيع، مع دعم استقلالية المريض ومساعدة مقدمي الرعاية الصحية في توثيق الموافقة."
        }
      },
      {
        title: {en:"Target Users", ar:"الفئات المستهدفة"},
        list: {
          en:[
            "Patients who cannot use their hands to sign.",
            "Hospitals and healthcare facilities.",
            "Healthcare professionals responsible for consent procedures."
          ],
          ar:[
            "المرضى الذين لا يستطيعون استخدام أيديهم للتوقيع.",
            "المستشفيات والمنشآت الصحية.",
            "الممارسون الصحيون المسؤولون عن إجراءات الموافقة."
          ]
        }
      },
      {
        title: {en:"My Contribution", ar:"مساهمتي"},
        text: {
          en:"Contributed to the technical development of the project as the team's primary programmer. The team reached the final stage of Health-Thon at King Saud University.",
          ar:"ساهمت في التطوير التقني للمشروع بصفتي المبرمجة الرئيسية للفريق. وتأهل الفريق إلى المرحلة النهائية من هاكاثون الصحة في جامعة الملك سعود."
        }
      },
      {
        title: {en:"Key Areas", ar:"المجالات الرئيسية"},
        tags:["Accessibility","Healthcare","Assistive Technology","Consent Documentation"]
      }
    ],
    footer: {
      en:"Health-Thon finalist project · Specific interaction details are intentionally kept confidential.",
      ar:"مشروع تأهل للمرحلة النهائية في هاكاثون الصحة · تفاصيل آلية التفاعل محفوظة حفاظًا على خصوصية الفكرة."
    }
  }
    ,
  emaa: {
    type: {
      en: "Graduation Project",
      ar: "مشروع التخرج"
    },
    title: {
      en: "Emaa | إيماء",
      ar: "إيماء | Emaa"
    },
    subtitle: {
      en: "A communication app connecting people with hearing or speech disabilities and service providers",
      ar: "تطبيق تواصل يربط الأشخاص ذوي الإعاقة السمعية أو النطقية بمقدمي الخدمات"
    },
    sections: [
      {
        title: {en:"Project Overview", ar:"نبذة عن المشروع"},
        text: {
          en:"Emaa is a graduation project designed to make everyday communication easier between people with hearing or speech disabilities and staff in places such as restaurants, cafés, and pharmacies.",
          ar:"إيماء مشروع تخرج يهدف إلى تسهيل التواصل اليومي بين الأشخاص ذوي الإعاقة السمعية أو النطقية والعاملين في أماكن مثل المطاعم والمقاهي والصيدليات."
        }
      },
      {
        title: {en:"Two-Way Communication", ar:"التواصل في الاتجاهين"},
        list: {
          en:[
            "Staff can type regular text, which is presented to the user through a 3D sign-language avatar, character by character.",
            "Users can enter sign-language letters through a dedicated keyboard, allowing staff to read the corresponding written text.",
            "The described translation is character-by-character, not full semantic translation of complete sign-language sentences."
          ],
          ar:[
            "يكتب الموظف النص بالطريقة المعتادة، ثم يُعرض للمستخدم عبر شخصية ثلاثية الأبعاد تؤدي إشارات لغة الإشارة حرفًا بحرف.",
            "يمكن للمستخدم إدخال حروف لغة الإشارة عبر لوحة مفاتيح مخصصة، ليتمكن الموظف من قراءة النص المكتوب المقابل.",
            "تعتمد الترجمة الموضحة على الحروف حرفًا بحرف، وليست ترجمة دلالية كاملة لجمل لغة الإشارة."
          ]
        }
      },
      {
        title: {en:"Supporting Features", ar:"الميزات المساندة"},
        list: {
          en:[
            "Session access using a six-digit code.",
            "Chat between the user and service staff.",
            "Service-ordering functionality for supported venues.",
            "A sign-language dictionary and limited-vocabulary AI support."
          ],
          ar:[
            "الدخول إلى الجلسة باستخدام رمز مكوّن من ستة أرقام.",
            "محادثة بين المستخدم وموظف الخدمة.",
            "إمكانية طلب الخدمات في الأماكن المدعومة.",
            "قاموس للغة الإشارة ودعم ذكاء اصطناعي محدود المفردات."
          ]
        }
      },
      {
        title: {en:"My Role", ar:"دوري في المشروع"},
        text: {
          en:"Worked on front-end and user-interface development using Flutter and Dart, while contributing ideas and coordinating work within the four-member team.",
          ar:"عملت على تطوير الواجهات الأمامية وواجهات المستخدم باستخدام Flutter وDart، مع المساهمة في طرح الأفكار وتنسيق العمل ضمن فريق مكوّن من أربعة أعضاء."
        }
      },
      {
        title: {en:"Technologies", ar:"التقنيات المستخدمة"},
        tags:["Flutter","Dart","Firebase","UI Development","Accessibility"]
      }
    ],
    footer: {
      en:"Academic graduation project · Team of four.",
      ar:"مشروع تخرج أكاديمي · فريق مكوّن من أربعة أعضاء."
    }
  }
    ,
  readmrz: {
    type: {
      en: "Cooperative Training · Tamkeen Technologies",
      ar: "التدريب التعاوني · تمكين للتقنيات"
    },
    title: {
      en: "ReadMRZ",
      ar: "ReadMRZ"
    },
    subtitle: {
      en: "Automated MRZ recognition and data extraction from passports and identity documents",
      ar: "قراءة منطقة MRZ واستخراج البيانات تلقائيًا من جوازات السفر ووثائق الهوية"
    },
    sections: [
      {
        title: {en:"Project Overview", ar:"نبذة عن المشروع"},
        text: {
          en:"ReadMRZ is a document-processing solution developed during cooperative training at Tamkeen Technologies. It reads the machine-readable zone (MRZ) from passports and supported identity documents and extracts key document-holder information.",
          ar:"ReadMRZ حل لمعالجة الوثائق طُوّر خلال التدريب التعاوني في شركة تمكين للتقنيات. يقرأ منطقة القراءة الآلية (MRZ) من جوازات السفر ووثائق الهوية المدعومة، ويستخرج أهم بيانات حامل الوثيقة."
        }
      },
      {
        title: {en:"Extracted Information", ar:"البيانات المستخرجة"},
        list: {
          en:[
            "Name and other name components available in the MRZ.",
            "Gender and date of birth.",
            "Nationality and document or passport number.",
            "Document expiration date and other supported MRZ fields."
          ],
          ar:[
            "الاسم ومكوّنات الاسم الأخرى المتاحة في منطقة MRZ.",
            "الجنس وتاريخ الميلاد.",
            "الجنسية ورقم الوثيقة أو جواز السفر.",
            "تاريخ انتهاء الوثيقة وغيرها من حقول MRZ المدعومة."
          ]
        }
      },
      {
        title: {en:"Technical Work", ar:"العمل التقني"},
        list: {
          en:[
            "Compared open-source OCR and MRZ libraries and evaluated their limitations.",
            "Built a Python processing pipeline using image preprocessing and OCR tools.",
            "Customized a Tesseract OCR model using approximately 10,000 passport samples to improve character recognition.",
            "Added tailored handling for certain document formats with different character styles, including some Ugandan passports.",
            "Tested API behavior and prototype flows using Postman before integration."
          ],
          ar:[
            "مقارنة مكتبات مفتوحة المصدر لقراءة OCR وMRZ وتقييم حدودها.",
            "بناء مسار معالجة باستخدام Python وتحسين الصور وأدوات OCR.",
            "تخصيص نموذج Tesseract OCR باستخدام نحو 10,000 عينة من جوازات السفر لتحسين التعرّف على الأحرف.",
            "إضافة معالجة مخصصة لبعض تنسيقات الوثائق ذات أنماط الأحرف المختلفة، بما فيها بعض جوازات أوغندا.",
            "اختبار واجهات API والنماذج الأولية باستخدام Postman قبل الدمج."
          ]
        }
      },
      {
        title: {en:"My Role & Tools", ar:"دوري والأدوات"},
        text: {
          en:"Worked on backend development and OCR/document-processing improvements using Python, OpenCV, FastMRZ, EasyOCR, Tesseract, and Postman.",
          ar:"عملت على تطوير الواجهة الخلفية وتحسين معالجة الوثائق وOCR باستخدام Python وOpenCV وFastMRZ وEasyOCR وTesseract وPostman."
        }
      },
      {
        title: {en:"Key Technologies", ar:"أبرز التقنيات"},
        tags:["Python","OpenCV","OCR","FastMRZ","EasyOCR","Tesseract","Postman"]
      }
    ],
    footer: {
      en:"Cooperative training project · Technical details summarized for confidentiality.",
      ar:"مشروع تدريب تعاوني · لُخّصت التفاصيل التقنية حفاظًا على السرية."
    }
  }
  
};

function toggleLanguage(){
  currentLanguage = currentLanguage === "en" ? "ar" : "en";
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.getElementById("langBtn").textContent = currentLanguage === "ar" ? "English" : "عربي";

  document.querySelectorAll("[data-en][data-ar]").forEach(element => {
    element.textContent = element.dataset[currentLanguage];
  });

  const activeProject = document.getElementById("projectModal").dataset.project;
  if(activeProject) renderProject(activeProject);
}

function openProject(projectKey){
  lastFocusedElement = document.activeElement;
  const modal = document.getElementById("projectModal");
  modal.dataset.project = projectKey;
  renderProject(projectKey);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function renderProject(projectKey){
  const project = projectDetails[projectKey];
  if(!project) return;
  const lang = currentLanguage;

  document.getElementById("modalKicker").textContent = project.type[lang];
  document.getElementById("modalTitle").textContent = project.title[lang];
  document.getElementById("modalSubtitle").textContent = project.subtitle[lang];
  document.getElementById("modalFooter").textContent = project.footer[lang];

  const content = document.getElementById("modalContent");
  content.replaceChildren();

  project.sections.forEach(section => {
    const wrapper = document.createElement("div");
    wrapper.className = "modal-section";

    const heading = document.createElement("h3");
    heading.textContent = section.title[lang];
    wrapper.appendChild(heading);

    if(section.text){
      const paragraph = document.createElement("p");
      paragraph.textContent = section.text[lang];
      wrapper.appendChild(paragraph);
    }

    if(section.list){
      const list = document.createElement("ul");
      section.list[lang].forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
      wrapper.appendChild(list);
    }

    if(section.tags){
      const tags = document.createElement("div");
      tags.className = "tags";
      section.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = tag;
        tags.appendChild(span);
      });
      wrapper.appendChild(tags);
    }

    content.appendChild(wrapper);
  });
}

function closeProject(){
  const modal = document.getElementById("projectModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  delete modal.dataset.project;
  document.body.classList.remove("modal-open");
  if(lastFocusedElement) lastFocusedElement.focus();
}

document.getElementById("projectModal").addEventListener("click", event => {
  if(event.target.id === "projectModal") closeProject();
});

document.addEventListener("keydown", event => {
  const modal = document.getElementById("projectModal");
  if(event.key === "Escape" && modal.classList.contains("open")) closeProject();
});

document.getElementById("year").textContent = new Date().getFullYear();
let previousCertificateFocus = null;

function openCertificate(file, title) {
  const modal = document.getElementById("certificateModal");
  const frame = document.getElementById("certificateFrame");
  const image = document.getElementById("certificateImage");

  previousCertificateFocus = document.activeElement;

  document.getElementById("certificateTitle").textContent = title;

  if (file.toLowerCase().endsWith(".png")) {
    frame.style.display = "none";
    image.style.display = "block";
    image.src = file;
  } else {
    image.style.display = "none";
    image.removeAttribute("src");
    frame.style.display = "block";
    frame.src = file;
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  modal.querySelector(".certificate-close").focus();
}

function closeCertificate() {
  const modal = document.getElementById("certificateModal");

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  document.getElementById("certificateFrame").src = "about:blank";
  document.getElementById("certificateImage").removeAttribute("src");

  document.body.classList.remove("modal-open");

  if (previousCertificateFocus) {
    previousCertificateFocus.focus();
  }
}

document.getElementById("certificateModal").addEventListener("click", function(event) {
  if (event.target === this) {
    closeCertificate();
  }
});

document.addEventListener("keydown", function(event) {
  const modal = document.getElementById("certificateModal");

  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeCertificate();
  }
});

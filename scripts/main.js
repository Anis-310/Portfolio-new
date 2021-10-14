// -------------------------------------
// vue app
// -------------------------------------
const app = Vue.createApp({
    data() {
        return {
            // the date my career started (change to yours)
            careerStartDate: 2009,

            // the date copyright started (change to yours)
            copyrightStartDate: 2021,

            // for the template theme
            appTheme: 'light_theme',
            savedTheme: null,

            // flag to toggle the preloader
            isPreloading: true,

            // toast notifications array
            notifications: [],

            // manage loading spinner status
            ajaxLoading: [],

            // for minimizing the header on scrolling down
            startMinimizingHeaderAt: 100,
            isHeaderBig: true,
            // for toggling the header on scrolling down
            lastScrollPosition: 0,
            isHeaderHidden: false,
            // for scroll to top button
            startShowingScrollTopBtnAt: 600,
            isScrollTopBtnDisplayed: false,

            // flag to toggle focus style class
            isAnyFocus: false,

            // flag to toggle nav menu
            isNavMenuOpen: false,

            // list of nav links to loop through it
            navLinks: [{
                url: '#hero',
                title: {
                    en: 'Home',
                }
            }, {
                url: '#about',
                title: {
                    en: 'About',
                }
            }, {
                url: '#skills',
                title: {
                    en: 'Skills',
                }
            }, {
                url: '#portfolio',
                title: {
                    en: 'Portfolio',
                }
            }, {
                url: '#contact',
                title: {
                    en: 'Contact',
                }
            }],

            // flag to toggle between skills types in skills section
            skillsType: '',

            // list of skills items to loop through it
            skillsItems: [{
                imgUrl: 'assets/images/skills/html5.png',
                title: 'HTML5'
            }, {
                imgUrl: 'assets/images/skills/css3.png',
                title: 'CSS3'
            }, {
                imgUrl: 'assets/images/skills/javascript.png',
                title: 'JavaScript'
            },  {
                imgUrl: 'assets/images/skills/react.png',
                title: 'React'
            }, {
                imgUrl: 'assets/images/skills/bootstrap.png',
                title: 'Bootstrap'
            }, {
                imgUrl: 'assets/images/skills/angular.png',
                title: 'Angular'
            }, {
                imgUrl: 'assets/images/skills/python.png',
                title: 'Python'
            }, {
                imgUrl: 'assets/images/skills/sass.png',
                title: 'SASS'
            }],

            // list of tools items to loop through it
            toolsItems: [{
                imgUrl: 'assets/images/skills/git.png',
                title: 'Git (Github)'
            }, {
                imgUrl: 'assets/images/skills/command.png',
                title: 'Command Line'
            }, {
                imgUrl: 'assets/images/skills/vs-code.png',
                title: 'VS Code'
            }, {
                imgUrl: 'assets/images/skills/trello.png',
                title: 'Trello'
            }, {
                imgUrl: 'assets/images/skills/clickup.png',
                title: 'ClickUp'
            }, {
                imgUrl: 'assets/images/skills/slack.png',
                title: 'Slack'
            }, {
                imgUrl: 'assets/images/skills/photoshop.png',
                title: 'Adobe Photoshop'
            }, {
                imgUrl: 'assets/images/skills/ai.png',
                title: 'Adobe Illustrator'
            }],

            // list of experience items to loop through it
            experienceItems: [{
                date: '2016',
                companyName: {
                    en: 'Open IT Ltd.',
                },
                jobTitle: {
                    en: 'Java Programmer',
                },
                desc: {
                    en: 'Working with Open IT Ltd as a Intern Java Programmer.',
                }
            }, {
                date: '2017',
                companyName: {
                    en: 'Addie Soft Ltd.',
                },
                jobTitle: {
                    en: 'Junior Executive',
                },
                desc: {
                    en: 'Here was my responsibilities is Manage Student Management Solution, Web Design and Development & Graphics Design.',
                }
            }, {
                date: '2018',
                companyName: {
                    en: 'Konnakumari.',
                },
                jobTitle: {
                    en: 'Co-Founder',
                },
                desc: {
                    en: 'I have founded Konnakumari e-commerce and serves as its Founder.',
                }
            }, {
                date: '2019',
                companyName: {
                    en: 'Idea Solution Ltd.',
                },
                jobTitle: {
                    en: 'CEO',
                },
                desc: {
                    en: 'I have founded Idea Solution Ltd and serves as its Cheif Executive Officer.',
                }
            }, {
                date: '2019',
                companyName: {
                    en: 'BAF Shaheen College, Kurmitola.',
                },
                jobTitle: {
                    en: 'IT Officer',
                },
                desc: {
                    en: 'Here was my responsibilities is Manage Student Management Solution, Web Design and Development & Graphics Design.',
                }
            }, {
                date: '2020',
                companyName: {
                    en: 'Banglafire Solution Ltd.',
                },
                jobTitle: {
                    en: 'Software Support Engnieer',
                },
                desc: {
                    en: 'Here is my responsibilities is Manage Education Management Solution.',
                }
            }, {
                date: '2021',
                companyName: {
                    en: 'Data Science BD.',
                },
                jobTitle: {
                    en: 'Full Stack Developer',
                },
                desc: {
                    en: 'Collaborate with creative and development teams on the execution of ideas.',
                }
            }, {}, {}],

            // portfolio items filter by type
            filters: ['All', 'HTML', 'Laravel', 'WordPress'],
            currentFilter: 'All',

            // list of portfolio items to loop through it
            allPortfolioItems: [ {
                id: 11,
                url: 'index.html',
                imgUrl: 'assets/images/portfolio/portfolio-11.png',
                title: {
                    en: 'Ecommerce Website',
                },
                date: {
                    en: 'April 2020',
                },
                desc: {
                    
                },
                category: 'WordPress',
                tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'TailwindCSS', 'AJAX', 'Angular', 'Firebase'],
            }, {
                id: 12,
                // url: 'index.html',
                imgUrl: 'assets/images/portfolio/portfolio-12.png',
                title: {
                    en: 'Company Website',
                },
                date: {
                    en: 'April 2020',
                },
                desc: {
                    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
                },
                category: 'WordPress',
                tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Materialize', 'AJAX', 'Vue', 'NodeJs', 'MongoDB'],
            }, {
                id: 13,
                // url: 'index.html',
                imgUrl: 'assets/images/portfolio/portfolio-13.png',
                title: {
                    en: 'Education Management Solution',
                },
                date: {
                    en: 'April 2020',
                },
                desc: {
                    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
                },
                category: 'HTML',
                tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'TailwindCSS', 'AJAX', 'Angular', 'Firebase'],
                screenshots: {
                    img1: {
                        url: 'assets/images/single-portfolio/single-portfolio-5.png',
                        caption: {
                            en: 'caption 5',
                            ar: 'تسمية توضيحية 5'
                        }
                    },
                    img2: {
                        url: 'assets/images/single-portfolio/single-portfolio-4.png',
                        caption: {
                            en: 'caption 4',
                            ar: 'تسمية توضيحية 4'
                        }
                    },
                    img3: {
                        url: 'assets/images/single-portfolio/single-portfolio-3.png',
                        caption: {
                            en: 'caption 3',
                            ar: 'تسمية توضيحية 3'
                        }
                    },
                    img4: {
                        url: 'assets/images/single-portfolio/single-portfolio-2.png',
                        caption: {
                            en: 'caption 2',
                            ar: 'تسمية توضيحية 2'
                        }
                    },
                    img5: {
                        url: 'assets/images/single-portfolio/single-portfolio-1.png',
                        caption: {
                            en: 'caption 1',
                            ar: 'تسمية توضيحية 1'
                        }
                    }
                }
            }, {
                id: 14,
                // url: 'index.html',
                imgUrl: 'assets/images/portfolio/portfolio-14.png',
                title: {
                    en: 'Education Website',
                },
                date: {
                    en: 'April 2021',
                },
                desc: {
                    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
                },
                category: 'HTML',
                tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Bootstrap', 'AJAX', 'Vue', 'NodeJs', 'MongoDB'],
                screenshots: {
                    img1: {
                        url: 'assets/images/single-portfolio/single-portfolio-5.png',
                        caption: {
                            en: 'caption 5',
                            ar: 'تسمية توضيحية 5'
                        }
                    },
                    img2: {
                        url: 'assets/images/single-portfolio/single-portfolio-4.png',
                        caption: {
                            en: 'caption 4',
                            ar: 'تسمية توضيحية 4'
                        }
                    },
                    img3: {
                        url: 'assets/images/single-portfolio/single-portfolio-3.png',
                        caption: {
                            en: 'caption 3',
                            ar: 'تسمية توضيحية 3'
                        }
                    },
                    img4: {
                        url: 'assets/images/single-portfolio/single-portfolio-2.png',
                        caption: {
                            en: 'caption 2',
                            ar: 'تسمية توضيحية 2'
                        }
                    },
                    img5: {
                        url: 'assets/images/single-portfolio/single-portfolio-1.png',
                        caption: {
                            en: 'caption 1',
                            ar: 'تسمية توضيحية 1'
                        }
                    }
                }
            }, {
                id: 15,
                // url: 'single-portfolio.html?id=15',
                imgUrl: 'assets/images/portfolio/portfolio-15.png',
                title: {
                    en: 'Portfolio Website'
                },
                date: {
                    en: 'April 2021'
                },
                desc: {
                    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
                },
                category: 'HTML',
                tools: ['HTML', 'PugJS', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Materialize', 'AJAX', 'Angular', 'Firebase'],
                screenshots: {
                    img1: {
                        url: 'assets/images/single-portfolio/single-portfolio-5.png',
                        caption: {
                            en: 'caption 5',
                            ar: 'تسمية توضيحية 5'
                        }
                    },
                    img2: {
                        url: 'assets/images/single-portfolio/single-portfolio-4.png',
                        caption: {
                            en: 'caption 4',
                            ar: 'تسمية توضيحية 4'
                        }
                    },
                    img3: {
                        url: 'assets/images/single-portfolio/single-portfolio-3.png',
                        caption: {
                            en: 'caption 3',
                            ar: 'تسمية توضيحية 3'
                        }
                    },
                    img4: {
                        url: 'assets/images/single-portfolio/single-portfolio-2.png',
                        caption: {
                            en: 'caption 2',
                            ar: 'تسمية توضيحية 2'
                        }
                    },
                    img5: {
                        url: 'assets/images/single-portfolio/single-portfolio-1.png',
                        caption: {
                            en: 'caption 1',
                            ar: 'تسمية توضيحية 1'
                        }
                    }
                }
            }, {
                id: 16,
                // url: 'index.html',
                imgUrl: 'assets/images/portfolio/portfolio-16.png',
                title: {
                    en: 'Compnay Website',
                },
                date: {
                    en: 'April 2019',
                },
                desc: {
                    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                },
                category: 'HTML',
                tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Bootstrap', 'AJAX', 'Vue', 'NodeJs', 'MongoDB'],
                screenshots: {
                    img1: {
                        url: 'assets/images/single-portfolio/single-portfolio-5.png',
                        caption: {
                            en: 'caption 5',
                            ar: 'تسمية توضيحية 5'
                        }
                    },
                    img2: {
                        url: 'assets/images/single-portfolio/single-portfolio-4.png',
                        caption: {
                            en: 'caption 4',
                            ar: 'تسمية توضيحية 4'
                        }
                    },
                    img3: {
                        url: 'assets/images/single-portfolio/single-portfolio-3.png',
                        caption: {
                            en: 'caption 3',
                            ar: 'تسمية توضيحية 3'
                        }
                    },
                    img4: {
                        url: 'assets/images/single-portfolio/single-portfolio-2.png',
                        caption: {
                            en: 'caption 2',
                            ar: 'تسمية توضيحية 2'
                        }
                    },
                    img5: {
                        url: 'assets/images/single-portfolio/single-portfolio-1.png',
                        caption: {
                            en: 'caption 1',
                            ar: 'تسمية توضيحية 1'
                        }
                    }
                }
            }, {
                id: 18,
                // url: 'index.html',
                imgUrl: 'assets/images/portfolio/portfolio-18.png',
                title: {
                    en: 'E-commerce Website',
                },
                date: {
                    en: 'April 2019',
                },
                desc: {
                    en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                    ar: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً، دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
                },
                category: 'Laravel',
                tools: ['HTML', 'Slim', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'Materialize', 'AJAX', 'Vue', 'NodeJs', 'MongoDB'],
                screenshots: {
                    img1: {
                        url: 'assets/images/single-portfolio/single-portfolio-5.png',
                        caption: {
                            en: 'caption 5',
                            ar: 'تسمية توضيحية 5'
                        }
                    },
                    img2: {
                        url: 'assets/images/single-portfolio/single-portfolio-4.png',
                        caption: {
                            en: 'caption 4',
                            ar: 'تسمية توضيحية 4'
                        }
                    },
                    img3: {
                        url: 'assets/images/single-portfolio/single-portfolio-3.png',
                        caption: {
                            en: 'caption 3',
                            ar: 'تسمية توضيحية 3'
                        }
                    },
                    img4: {
                        url: 'assets/images/single-portfolio/single-portfolio-2.png',
                        caption: {
                            en: 'caption 2',
                            ar: 'تسمية توضيحية 2'
                        }
                    },
                    img5: {
                        url: 'assets/images/single-portfolio/single-portfolio-1.png',
                        caption: {
                            en: 'caption 1',
                            ar: 'تسمية توضيحية 1'
                        }
                    }
                }
            }].reverse(),

            // current page of portfolio items
            portfolioItemsPage: 1,

            // portfolio items per page
            itemsPerPage: 7,

            // viewed portfolio items
            portfolioItems: [],

            // portfolio archive name
            portfolioArchiveName: '',

            // list of testimonials items to loop through it
            testimonialsItems: [{
                imgUrl: 'assets/images/testimonials/kamrul-hasan.png',
                quoteContent: {
                    en: 'Anisur Rahman simply provides amazing web development service. He is extremely professional and the easiest to meet I have ever worked with him. I would recommend Anisur Rahman to anyone.',
                },
                quoteAuthor: {
                    en: 'Samsul Alam',
                },
                jobTitle: {
                    en: 'Founder, Open IT Ltd.',
                }
            }, {
                imgUrl: 'assets/images/testimonials/sakib.png',
                quoteContent: {
                    en: 'Anisur Rahman is very professional, always delivers high quality results, and is always ready to help. Look forward to working with Anisur Rahman in other projects.',
                },
                quoteAuthor: {
                    en: 'Sakib Rabbani',
                },
                jobTitle: {
                    en: 'Managing Director, Addie Soft Ltd.',
                }
            }, {
                imgUrl: 'assets/images/testimonials/liza.jpg',
                quoteContent: {
                    en: 'Excellent Person to work with. Always positive to find the most appropriate solution. Anisur Rahman is one of the professional Software Engineer who provides awesome services.',
                },
                quoteAuthor: {
                    en: 'Arnoba Jahan Liza',
                },
                jobTitle: {
                    en: 'CEO, Konnakumari',
                }
            }, {
                imgUrl: 'assets/images/testimonials/kamrul-hasan.png',
                quoteContent: {
                    en: 'Anisur Rahman worked on a handful of projects for us and has always exceeded our expectations. Anisur Rahman is dedicated, talented and a delight to work with.'
                },
                quoteAuthor: {
                    en: 'Kamrul Hasan'
                },
                jobTitle: {
                    en: 'Chairman, Idea Solution Ltd.'
                }
            }, {
                imgUrl: 'assets/images/testimonials/jahangir-alam.png',
                quoteContent: {
                    en: 'Anisur Rahman simply provides amazing web development service. He is extremely professional and the easiest to meet I have ever worked with him. I would recommend Anisur Rahman to anyone.',
                },
                quoteAuthor: {
                    en: 'Gp. Jahangir Alam Talukder'
                },
                jobTitle: {
                    en: 'Principal, BAF Shaheen College, Kurmitola.'
                }
            }, {
                imgUrl: 'assets/images/testimonials/towfiq.jpg',
                quoteContent: {
                    en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!Anisur RAhman was a real pleasure to work with and we look forward to working with him again.'
                },
                quoteAuthor: {
                    en: 'Maj. Dr. Towfiqur Rahman'
                },
                jobTitle: {
                    en: 'CEO, Banglafire Solution Ltd.'
                }
            }, {
                imgUrl: 'assets/images/testimonials/k-islam.png',
                quoteContent: {
                    en: 'I know I can count on your service if I need my project done fast and with the best possible result. I am a regular customer and hope to continue our work!Anisur RAhman was a real pleasure to work with and we look forward to working with him again.'
                },
                quoteAuthor: {
                    en: 'Khandoker R Islam',
                },
                jobTitle: {
                    en: 'President, KSI Data Research',
                }
            }, {
                imgUrl: 'assets/images/testimonials/sohel.jpg',
                quoteContent: {
                    en: 'Anisur Rahman is very professional, always delivers high quality results, and he is always ready to help. Look forward to working with Anisur Rahman in other projects.'
                },
                quoteAuthor: {
                    en: 'Sohel Alam Rana'
                },
                jobTitle: {
                    en: 'CEO, Alok Barta'
                }
            }, {
                imgUrl: 'assets/images/testimonials/arif-bin-jalal.jpg',
                quoteContent: {
                    en: 'Anisur Rahman worked on a handful of projects for us and has always exceeded our expectations. Anisur Rahman is dedicated, talented and a delight to work with.'
                },
                quoteAuthor: {
                    en: 'Arif Bin Jalal'
                },
                jobTitle: {
                    en: 'CEO, Trust Garden Planner'
                }
            }, {
                imgUrl: 'assets/images/testimonials/ritu-rani.png',
                quoteContent: {
                    en: 'Anisur Rahman is very professional, always delivers high quality results, and he is always ready to help. Look forward to working with Anisur Rahman in other projects.'
                },
                quoteAuthor: {
                    en: 'Ritu Rani'
                },
                jobTitle: {
                    en: 'CEO, Meghdut Crafts'
                }
            }, {
                imgUrl: 'assets/images/testimonials/anik.jpg',
                quoteContent: {
                    en: 'Excellent Person to work with. Always positive to find the most appropriate solution. Anisur Rahman is one of the professional Software Engineer who provides awesome services',
                },
                quoteAuthor: {
                    en: 'Sontus Chandra Anik',
                },
                jobTitle: {
                    en: 'CEO, IO Soft Ltd.',
                }
            }, {
                imgUrl: 'assets/images/testimonials/kamrul-hasan.png',
                quoteContent: {
                    en: 'Anisur Rahman is very professional, always delivers high quality results, and is always ready to help. Look forward to working with Anisur Rahman in other projects.',
                },
                quoteAuthor: {
                    en: 'Tobarak Hossain',
                },
                jobTitle: {
                    en: 'CEO, STS IT Solution',
                }
            },]
        }
    },
    created() {
        // get a theme to use
        this.getAppTheme();
    },
    mounted() {
        if (window.innerWidth >= 992) {
            // initialize circle cursor
            this.initCircleCursor();

            // apply pan effect hero image
            this.heroImgPanEffect();

            // initialize VanillaTilt library in portfolio section
            this.initializeTilt();
        }

        // nav menu tab trap
        this.navMenuTabTrap();

        // hide the preloader screen after loading
        window.addEventListener('load', () => this.isPreloading = false);

        // scrolling options
        this.scrollingOptions();
        document.addEventListener('scroll', () => this.scrollingOptions());

        // initialize popper.js plugin
        document.querySelectorAll('.has-ultimate-tooltip').forEach(el => {
            Popper.createPopper(el, el.querySelector('.ultimate-tooltip'), {
                placement: 'top',
                modifiers: [{
                    name: 'offset',
                    options: {
                        offset: [0, 30]
                    }
                }]
            });
        });

        // get portfolio items
        this.getPortfolioItems();

        // init glightbox plugin
        const lightbox = new GLightbox({
            autoplayVideos: false,
        });

        // initialize the first displayed type of skills
        this.initSkillsFirstType();
    },
    methods: {
        // initialize circle cursor
        initCircleCursor() {
            const app = this.$refs.appRef;
            const outer = this.$refs.circleCursorOuter;
            const inner = this.$refs.circleCursorInner;

            // return if disabled
            if (!outer || !inner) {
                return;
            }

            app.addEventListener('mousemove', e => {
                // make the circles follow the cursor
                outer.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
                inner.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);

                // add link hover style
                (e.target.closest('a') || e.target.closest('button') || e.target.closest('.link-hover')) ? inner.classList.add('cursor-link-hover'): inner.classList.remove('cursor-link-hover');
            });

            app.addEventListener('click', () => {
                // add pulse effect on click
                inner.classList.add('cursor-click-effect');
                setTimeout(() => inner.classList.remove('cursor-click-effect'), 200);
            });
        },

        // get a theme to use
        getAppTheme() {
            // get the saved theme from the localStorage
            const storageSavedTheme = localStorage.getItem('nafieSavedTheme');

            // Check to see if there a saved theme
            if (storageSavedTheme) {
                this.savedTheme = storageSavedTheme;

            } else {
                // So, try to get the browser default theme or make your own default

                // Check to see if Media-Queries are supported
                if (window.matchMedia) {

                    // Check if the dark-mode Media-Query matches
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        this.savedTheme = 'dark_theme';
                    } else {
                        this.savedTheme = 'light_theme';
                    }

                } else {
                    // Default (when Media-Queries are not supported)
                    this.savedTheme = this.appTheme;
                }
            }

            // save the new theme in the localStorage
            localStorage.setItem('nafieSavedTheme', this.savedTheme);
        },

        // detect the theme changes
        changeAppTheme() {
            (this.savedTheme === 'light_theme') ? this.savedTheme = 'dark_theme': this.savedTheme = 'light_theme';

            // save the new theme in the localStorage
            localStorage.setItem('nafieSavedTheme', this.savedTheme);
        },

        // toggle nav menu
        toggleNavMenu() {
            this.isNavMenuOpen = !this.isNavMenuOpen;
            this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu();
        },

        // open nav menu
        openNavMenu() {
            const bodyEl = document.getElementsByTagName('body')[0];

            this.isNavMenuOpen = true;

            bodyEl.setAttribute('style', 'overflow-y: hidden;');

            // set focus on nav menu
            this.$refs.headerNav.querySelector('.desktop-menu-content').focus();
        },

        // close nav menu
        closeNavMenu() {
            const bodyEl = document.getElementsByTagName('body')[0];

            this.isNavMenuOpen = false;

            bodyEl.removeAttribute('style');

            // set focus on nav menu toggle button
            this.$refs.navMenuToggleBtn.focus();
        },

        // nav menu tab trap
        navMenuTabTrap() {
            const nav = this.$refs.headerNav;
            const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
            let firstTabStop;
            let lastTabStop;
            let isFirstTabStop;
            let isLastTabStop;

            document.addEventListener('keyup', e => {
                if (nav.classList.contains('menu-open')) {
                    // get first & last focusable elements in the side menu for the tab trap
                    const visibleFocusableEls = [...nav.querySelectorAll(focusableElementsString)]
                        .filter(el => window.getComputedStyle(el).getPropertyValue('visibility') !== 'hidden');
                    firstTabStop = visibleFocusableEls[0];
                    lastTabStop = visibleFocusableEls[visibleFocusableEls.length - 1];

                    if (e.code === 'Tab') {
                        if (e.shiftKey) /* shift + tab */ {
                            // if this is the first item, move to the last item
                            isFirstTabStop && lastTabStop.focus();
                        } else /* tab */ {
                            // if this is the last item, go back to the first item
                            isLastTabStop && firstTabStop.focus();
                        }

                        // close nav menu on Escape button press
                    } else if (e.code === 'Escape') {
                        this.toggleNavMenu();
                    }

                    // get current active element
                    const activeEl = document.activeElement;

                    // check if last item or not
                    isLastTabStop = (activeEl === lastTabStop) ? true : false;

                    // check if first item or not
                    isFirstTabStop = (activeEl === firstTabStop) ? true : false;
                }
            });
        },

        // apply pan effect hero image
        heroImgPanEffect() {
            const parent = this.$refs.heroSection;

            // return if disabled
            if (!parent || !parent.getAttribute('data-paneffect')) {
                return;
            }

            const layer1 = parent.querySelectorAll('.layer')[0];
            const layer2 = parent.querySelectorAll('.layer')[1];

            parent.addEventListener('mousemove', (e) => {
                const x = ((e.x - parent.getBoundingClientRect().x) / parent.offsetWidth) * 100;
                const y = ((e.y - parent.getBoundingClientRect().y) / parent.offsetHeight) * 100;

                parent.classList.add('parallax-animation');

                layer1.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
                layer2.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
            });
        },

        // scrolling options
        scrollingOptions() {
            const scrollPosition = window.pageYOffset;

            // check for current scroll position to minimize the header
            this.isHeaderBig = (scrollPosition >= this.startMinimizingHeaderAt) ? false : true;

            // check for current scroll position to toggle the header
            this.isHeaderHidden = ((scrollPosition > 100) && (scrollPosition > this.lastScrollPosition)) ? true : false;
            this.lastScrollPosition = scrollPosition;

            // check for current scroll position to show the scrollTop button
            this.isScrollTopBtnDisplayed = (scrollPosition >= this.startShowingScrollTopBtnAt) ? true : false;
        },

        // scroll to top
        scrollToTop() {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        },

        // initialize the first displayed type of skills
        initSkillsFirstType() {
            const skillsSwitchBtn = this.$refs.skillsSwitchBtn;

            // return if disabled
            if (!skillsSwitchBtn) {
                return;
            }

            this.skillsType = skillsSwitchBtn.querySelector('input').value;
        },

        // initialize VanillaTilt library in portfolio section
        initializeTilt() {
            const portfolioItems = this.$refs.portfolioItems;

            // return if disabled
            if (!portfolioItems) {
                return;
            }

            VanillaTilt.init(this.$refs.portfolioItems.querySelectorAll('.portfolio-item'), {
                max: 8,
                speed: 400,
                glare: true,
                'max-glare': 0.3
            });
        },

        // get portfolio items
        getPortfolioItems() {
            const itemsArr = this.allPortfolioItems
                .filter(item => {
                    const urlParams = new URLSearchParams(window.location.search);
                    const tax = urlParams.get('tax');

                    if (tax) {
                        if (tax === 'cat') {
                            const cat = urlParams.get('cat');

                            this.portfolioArchiveName = cat;
                            return item.category === cat;

                        } else if (tax === 'tools') {
                            const tool = urlParams.get('tools');

                            this.portfolioArchiveName = tool;
                            return item.tools.includes(tool);
                        }

                    } else {
                        return this.currentFilter === 'All' || item.category === this.currentFilter;
                    }
                })
                .slice(this.filteredPortfolioItems.length, this.portfolioItemsPage * this.itemsPerPage);

            // check if have works or not
            if (itemsArr.length) {
                this.portfolioItems.push(...itemsArr);

                // initialize VanillaTilt for new items
                setTimeout(() => this.portfolioItemsPage > 1 && this.initializeTilt(), 0);

                this.portfolioItemsPage++;

            } else {

                // show message "No works" to the user
                this.setNotify({
                    className: 'danger',
                    msg: this.$refs.portfolioItems.getAttribute('data-no-works-msg'),
                    time: 3000
                });
            }
        },

        // filter portfolio items
        filterPortfolioItems(filter) {
            this.currentFilter = filter;
            this.portfolioItemsPage = 1;

            if (this.filteredPortfolioItems.length) {
                // initialize VanillaTilt for new items
                setTimeout(() => this.initializeTilt(), 0);

            } else {
                // get new portfolio items
                this.getPortfolioItems();
            }
        },

        // contact form validation
        contactFormValidation() {

            // contact form
            const contactForm = this.$refs.contactForm;

            // form controls
            const name = contactForm.querySelector('input[name="name"]');
            const email = contactForm.querySelector('input[name="email"]');
            const phone = contactForm.querySelector('input[name="phone"]');
            const message = contactForm.querySelector('textarea');

            // form validation status
            let errors = {
                name: {
                    required: true,
                    minLength: true
                },
                email: {
                    required: true,
                    invalid: true
                },
                phone: {
                    invalid: true
                },
                message: {
                    required: true
                }
            };

            /* --------------- */
            /* name validation */
            /* --------------- */

            // required validation
            if (name.value === '') {
                errors.name.required = true;
                this.setNotify({
                    id: 'nameRequired',
                    className: 'danger',
                    msg: name.closest('.control').querySelector('.errors-msgs .required').value
                });

            } else {
                errors.name.required = false;
                this.dismissNotify('nameRequired');
            }

            // minlength validation
            if (name.value.length > 0 && name.value.length < name.getAttribute('minlength')) {
                errors.name.minLength = true;
                this.setNotify({
                    id: 'nameMinLength',
                    className: 'danger',
                    msg: name.closest('.control').querySelector('.errors-msgs .minLength').value
                });

            } else {
                errors.name.minLength = false;
                this.dismissNotify('nameMinLength');
            }

            // toggle invalid errors & style classes
            if (Object.keys(errors.name).some(err => errors.name[err] === true)) {
                name.classList.remove('valid');
                name.classList.add('invalid');
            } else {
                name.classList.remove('invalid');
                name.classList.add('valid');
            }

            /* ---------------- */
            /* email validation */
            /* ---------------- */

            // required validation
            if (email.value === '') {
                errors.email.required = true;
                this.setNotify({
                    id: 'emailRequired',
                    className: 'danger',
                    msg: email.closest('.control').querySelector('.errors-msgs .required').value
                });

            } else {
                errors.email.required = false;
                this.dismissNotify('emailRequired');
            }

            // email validation
            if (email.value.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
                errors.email.invalid = true;
                this.setNotify({
                    id: 'emailInvalid',
                    className: 'danger',
                    msg: email.closest('.control').querySelector('.errors-msgs .invalid').value
                });

            } else {
                errors.email.invalid = false;
                this.dismissNotify('emailInvalid');
            }

            // toggle invalid errors & style classes
            if (Object.keys(errors.email).some(err => errors.email[err] === true)) {
                email.classList.remove('valid');
                email.classList.add('invalid');
            } else {
                email.classList.remove('invalid');
                email.classList.add('valid');
            }

            /* ---------------- */
            /* phone validation */
            /* ---------------- */

            // phone validation
            if (phone.value.length > 0 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)) {
                errors.phone.invalid = true;
                this.setNotify({
                    id: 'phoneInvalid',
                    className: 'danger',
                    msg: phone.closest('.control').querySelector('.errors-msgs .invalid').value
                });

            } else {
                errors.phone.invalid = false;
                this.dismissNotify('phoneInvalid');
            }

            // toggle invalid errors & style classes
            if (Object.keys(errors.phone).some(err => errors.phone[err] === true)) {
                phone.classList.remove('valid');
                phone.classList.add('invalid');
            } else {
                phone.classList.remove('invalid');
                phone.classList.add('valid');
            }

            /* ------------------ */
            /* message validation */
            /* ------------------ */

            // required validation
            if (message.value === '') {
                errors.message.required = true;
                this.setNotify({
                    id: 'messageRequired',
                    className: 'danger',
                    msg: message.closest('.control').querySelector('.errors-msgs .required').value
                });

            } else {
                errors.message.required = false;
                this.dismissNotify('messageRequired');
            }

            // toggle invalid errors & style classes
            if (Object.keys(errors.message).some(err => errors.message[err] === true)) {
                message.classList.remove('valid');
                message.classList.add('invalid');
            } else {
                message.classList.remove('invalid');
                message.classList.add('valid');
            }

            // send the message if the form is valid
            (!Object.values(errors).some(control => Object.values(control).some(Boolean))) && this.sendContactFormMessage(contactForm);
        },

        // send message from contact form
        sendContactFormMessage(form) {
            const url = form.getAttribute('action');
            const formData = new FormData(form);

            // start loading spinner
            this.startLoading();

            // send post request
            fetch(url, {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.text())
                .then(data => {
                    if (data === 'success') {
                        // show success message
                        this.setNotify({
                            className: 'success',
                            msg: form.getAttribute('data-success-msg'),
                            time: 5000
                        });

                        // reset all form inputs
                        form.reset();

                        // remove inputs valid classes
                        form.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));

                    } else if (data === 'error') {
                        // show error message
                        this.setNotify({
                            className: 'danger',
                            msg: form.getAttribute('data-err-msg'),
                            time: 5000
                        });
                    }

                    // end loading spinner
                    this.endLoading();

                    console.log(data);
                })
                .catch(err => console.log(err));
        },

        // show messages by toast notifications
        setNotify({
            id,
            className,
            msg,
            time
        }) {
            const notify = {
                id: id || `${Date.now()}${this.notifications.length}`,
                className,
                msg,
                time
            };

            if (id) {
                (!this.notifications.some(e => e.id === id)) && this.notifications.push(notify);

            } else {
                this.notifications.push(notify);
            }

            // remove this notification from the array after (n) seconds
            time && setTimeout(() => this.dismissNotify(notify.id), time);
        },

        // dismiss the notifications
        dismissNotify(id) {
            const index = this.notifications.findIndex(notify => notify.id === id);
            (index > -1) && this.notifications.splice(index, 1);
        },

        // add ajax loading spinner
        startLoading() {
            this.ajaxLoading.push(true);
        },

        // remove ajax loading spinner
        endLoading() {
            this.ajaxLoading.pop();
        }
    },
    computed: {
        // flag to toggle ajax loading spinner
        isAjaxLoading() {
            return this.ajaxLoading.some(state => state === true);
        },

        // get the total years of experience
        experienceYears() {
            return new Date(new Date() - new Date(String(this.careerStartDate))).getFullYear() - 1978;
        },

        // split experience items into chunks of 3 items
        experienceChunks() {
            return [...Array(Math.ceil(this.experienceItems.length / 3))].map(() => this.experienceItems.splice(0, 3));
        },

        // filtered portfolio items
        filteredPortfolioItems() {
            const urlParams = new URLSearchParams(window.location.search);
            const tax = urlParams.get('tax');

            if (tax) {
                return this.portfolioItems;

            } else {
                return this.portfolioItems.filter(item => this.currentFilter === 'All' || item.category === this.currentFilter);
            }
        },

        // get single portfolio item
        getSinglePortfolioItem() {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');

            return this.allPortfolioItems.find(item => item.id == id);
        },

        // get the total years of copyright
        copyrightDate() {
            const yearsDuration = new Date(new Date() - new Date(String(this.copyrightStartDate))).getFullYear() - 1970;
            return yearsDuration === 0 ? this.copyrightStartDate : `${this.copyrightStartDate} - ${this.copyrightStartDate + yearsDuration}`;
        }
    },
    directives: {
        // clone directive
        clone: {
            mounted(el) {
                el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
            }
        },

        // add stagger delay to children elements
        staggerdelay: {
            mounted(el, binding) {
                [...el.children].forEach((child, i) => {
                    child.setAttribute('style', `animation-delay: ${(i + 1) * (binding.value || 100)}ms`);
                });
            }
        },

        // tooltip directive
        tooltip: {
            mounted(el, binding) {
                el.classList.add('has-tooltip');
                el.insertAdjacentHTML('beforeend', `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`);
            }
        }
    }
});
app.mount('#app');
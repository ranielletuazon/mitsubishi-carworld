import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface NoticeSection {
    id: string;
    number: string;
    title: string;
    content: React.ReactNode;
}

const sections: NoticeSection[] = [
    {
        id: "what-we-collect",
        number: "1",
        title: "What We May Collect From You",
        content: (
            <>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        Basic personal information including your full name,
                        date of birth, gender and marital status as well as
                        supporting documents such as government ID details;
                    </li>
                    <li>
                        Your contact details including your residential and
                        business addresses, mobile and telephone numbers, e-mail
                        address as well as supporting documents such as utility
                        records;
                    </li>
                    <li>Specimen signatures;</li>
                    <li>
                        Images via closed-circuit television cameras (CCTVs) and
                        other similar recording devices which may be observed
                        when visiting our dealerships, business units and/or
                        using our other facilities;
                    </li>
                    <li>
                        Voice recordings of our conversations with you, where
                        applicable;
                    </li>
                    <li>
                        Financial information (such as income, expenses,
                        balances, investments, tax, insurance, financial and
                        transaction history, etc.); and,
                    </li>
                    <li>Business interests, assets and credit information.</li>
                </ul>
                <p className="mt-4">
                    References, as necessary, to verify or augment the above
                    personal data, may be made with third parties including
                    government regulators, supervisory bodies, tax authorities
                    or courts of competent jurisdiction and, in the process,
                    gain additional information about you.
                </p>
            </>
        ),
    },
    {
        id: "how-we-collect",
        number: "2",
        title: "How We Collect Your Personal Data",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>
                    When you submit any form, including but not limited to
                    application forms or other documents relating to any of our
                    products and services which you avail at or through
                    CARWORLD, INC.;
                </li>
                <li>
                    When you enter into any agreement or provide other
                    documentation or information with regard to your
                    transactions with us, or when you avail of our products and
                    services;
                </li>
                <li>
                    When you interact with our personnel, including business
                    managers, sales heads and their assistants, and all other
                    authorized personnel via telephone calls (which may be
                    recorded), letters, fax, face-to-face meetings and e-mails;
                </li>
                <li>
                    When your images are captured by us via CCTVs or other
                    equipment or devices while you are within our premises;
                </li>
                <li>
                    When you use some of our products and services provided
                    through online and other technology platforms, such as
                    websites and apps;
                </li>
                <li>
                    When you request that we contact you, or include you in an
                    e-mail or other mailing list; or when you respond to our
                    request for additional personal data, promotional campaigns
                    and other marketing activities;
                </li>
                <li>
                    When you are contacted by, and respond to our marketing
                    representatives, agents and other service providers;
                </li>
                <li>
                    When we seek information about you and receive your personal
                    data from third parties in connection with your relationship
                    and transactions with us, for example, from referrers,
                    business partners, public agencies or the relevant
                    authorities;
                </li>
                <li>
                    When in connection with any investigation, litigation, or
                    inquiry which may relate to you or any connected person;
                    and,
                </li>
                <li>
                    When you submit your personal data to us for any other
                    reason.
                </li>
            </ul>
        ),
    },
    {
        id: "how-we-use",
        number: "3",
        title: "How We Use Your Personal Data",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>To identify you;</li>
                <li>To process your applications and transactions;</li>
                <li>
                    To document and record your information for sales
                    transaction and available third party financing, if
                    applicable;
                </li>
                <li>
                    To facilitate warranty registration, processing and payment
                    of claims as determined in accordance with existing company
                    procedures;
                </li>
                <li>To bill and collect your payments;</li>
                <li>
                    To facilitate release and delivery of your vehicles, parts
                    and accessories, contracts and policies and other
                    deliverables;
                </li>
                <li>
                    To allow the availment and processing of your after-sales
                    concerns and claims services;
                </li>
                <li>To determine your financial capacity;</li>
                <li>
                    To continuously engage you in connection with our new
                    products and offerings as well as events and services;
                </li>
                <li>
                    To conduct studies and researches for the purpose of
                    reviewing, developing and improving our products and
                    services;
                </li>
                <li>
                    To perform profile analysis, behavioral modeling and
                    analytics to understand the market's needs, preferences and
                    trends for the improvements and recommendations of suitable
                    products and services;
                </li>
                <li>
                    To establish certain protective safeguards against the
                    improper use or abuse of our products and services,
                    including fraud prevention;
                </li>
                <li>
                    To be used for referral to LGC's affiliates and
                    subsidiaries;
                </li>
                <li>
                    To be employed in report generation, consolidation and
                    business review of CARWORLD, INC.;
                </li>
                <li>
                    To be submitted as part of reports to, and as required by,
                    the government and/or any regulating bodies;
                </li>
                <li>
                    To receive, address and verify your inquiries, complaints,
                    or feedback for appropriate action;
                </li>
                <li>
                    To perform other activities using your personal data for any
                    other legitimate purpose as permitted by law and/or with
                    your express consent.
                </li>
            </ul>
        ),
    },
    {
        id: "how-we-share",
        number: "4",
        title: "How We May Share Your Personal Data",
        content: (
            <>
                <p className="mb-4">
                    We will not share your personal information with third
                    parties unless:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>necessary for the above-mentioned purposes; and,</li>
                    <li>you give your express consent thereto.</li>
                </ul>
                <p className="mb-4">
                    Such third parties include, but are not limited to:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>LGC's business units, subsidiaries, affiliates;</li>
                    <li>Principals;</li>
                    <li>Third party suppliers and service providers; and,</li>
                    <li>
                        Government authorities, regulating bodies and/or courts
                        of competent jurisdiction.
                    </li>
                </ul>
                <p className="mb-4">
                    We engage third parties for the following reasons:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>
                        To offer you additional products and services that we
                        believe you might find interesting;
                    </li>
                    <li>
                        To support us in delivering our services. This may
                        involve anonymous or aggregated information to help
                        improve our products, services, and content;
                    </li>
                    <li>
                        To validate, consolidate or update your information
                        records and/or credit history;
                    </li>
                    <li>
                        To send reminders, announcements, promotions, offers,
                        invitations and other notifications;
                    </li>
                    <li>
                        To enrol you in, and/or renew your enlistment in our
                        loyalty and similar client-oriented programs;
                    </li>
                    <li>
                        To aid us in the conduct and performance of our business
                        operations;
                    </li>
                    <li>
                        To assist us in research or to design other related
                        products or services;
                    </li>
                    <li>To promote promotional and/or marketing activities;</li>
                    <li>
                        To comply with a legal obligation to which CARWORLD,
                        INC., is subject.
                    </li>
                    <li>
                        To enable us to fulfill our contractual obligations with
                        the said third party;
                    </li>
                    <li>
                        To enforce our terms of use including, among others, our
                        rights as creditor to those availing of our loan or
                        credit products, or such other applicable policies with
                        respect to the products and services that we provide;
                    </li>
                    <li>
                        To address fraud, security or technical issues, and
                        respond to an emergency or otherwise protect your
                        rights, property or security or that of said third
                        parties; and,
                    </li>
                    <li>
                        To carry out all other legitimate and related purposes
                        set out above.
                    </li>
                </ul>
                <p className="mb-4">
                    We may process, store and/or transfer your personal data
                    outside the Philippines. In doing so, we will comply with
                    the Data Privacy Act of 2012 and its Implementing Rules and
                    Regulations, and other related issuances of the NPC.
                </p>
                <p>
                    We wish to assure you that we do not, and will not, sell
                    personal data to any third parties. All our engagements with
                    third parties shall be fully compliant with our obligation
                    of confidentiality imposed on us under the applicable
                    agreements and/or terms and conditions or any applicable
                    laws that govern our relationship with you.
                </p>
            </>
        ),
    },
    {
        id: "how-we-protect",
        number: "5",
        title: "How We Protect Your Personal Data",
        content: (
            <>
                <p className="mb-4">
                    Your privacy and security are important to us. We recognize
                    the value of your personal data. Thus, we strictly enforce
                    physical, occupational and security safeguards to maintain
                    the confidentiality, integrity and availability of your
                    personal information against loss, misuse, wrongful
                    modification, unauthorized or accidental access or
                    disclosure, illicit alteration or destruction. These
                    safeguards include, but are not limited to the following:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        Your personal data are kept and maintained by using a
                        secured server behind a firewall, deploying encryption
                        on computing devices and establishing physical security
                        controls;
                    </li>
                    <li>
                        Access to your personal data is restricted only to
                        qualified and authorized personnel who hold your
                        personal data with strict confidentiality;
                    </li>
                    <li>
                        Our employees are well-trained to properly handle your
                        personal data; and,
                    </li>
                    <li>
                        Our third parties are required to protect your personal
                        data conforming with our own security standards.
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: "retention",
        number: "6",
        title: "How We Retain and Dispose Your Personal Data",
        content: (
            <>
                <p className="mb-4">
                    We keep and retain your personal data on our databases and
                    physical storage facilities.
                </p>
                <p className="mb-4">
                    We retain personal data only according to our operational
                    needs and in compliance with legal and regulatory purposes.
                    We shall retain your personal data for a period of ten (10)
                    years from the date your information was first processed and
                    collected, unless otherwise still necessary:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>To continue legitimate business purposes;</li>
                    <li>To establish, exercise or defend legal claims; or,</li>
                    <li>As provided by law.</li>
                </ul>
                <p>
                    Such retention shall be without prejudice to the exercise of
                    your rights as data subject as protected under the Data
                    Privacy Act of 2012.
                </p>
            </>
        ),
    },
    {
        id: "your-rights",
        number: "7",
        title: "What Your Rights Are",
        content: (
            <>
                <p className="mb-4">
                    Please ensure that the personal data you submit to us are
                    complete, correct and accurate. Failure on your part to do
                    so may result in our inability to provide you with products
                    and services you have requested. Kindly inform us
                    immediately of any change of facts or circumstances which
                    may render any personal data previously provided incomplete,
                    incorrect or inaccurate, and provide any information or
                    documentation we may reasonably require for the purposes of
                    verifying the accuracy of the updated personal data.
                </p>
                <p className="mb-4">
                    Under the Data Privacy Act of 2012, you have the following
                    rights:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Right to be informed;</li>
                    <li>Right to object;</li>
                    <li>Right to access;</li>
                    <li>Right to rectify or correct erroneous data;</li>
                    <li>Right to erase or block;</li>
                    <li>Right to secure data portability;</li>
                    <li>Right to be indemnified for damages; and,</li>
                    <li>Right to file a complaint.</li>
                </ul>
                <p className="mb-4">
                    In connection therewith, you may opt to tell us:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>
                        Not to send you marketing materials via e-mail, SMS or
                        to your registered address;
                    </li>
                    <li>To opt you out of our customer or marketing list;</li>
                    <li>
                        Not to share your information with our affiliates or
                        other companies that we have business with, provided
                        that such information is not critical or required by
                        applicable laws, contractual obligations and company
                        regulations to maintain the products and services that
                        you have availed with us;
                    </li>
                    <li>
                        To provide you with information that we currently have
                        about you, subject to restrictions applied to us and
                        certain laws and regulations;
                    </li>
                    <li>To update your information;</li>
                    <li>
                        About your other concerns relating to how we collect,
                        use, share, protect or dispose your personal data; and,
                    </li>
                    <li>
                        To have your information deleted in our system, subject
                        to restrictions imposed by law on erasure of your
                        personal data.
                    </li>
                </ul>
                <p>
                    Your rights, however, shall be subject to applicable
                    internal policies, relevant laws and regulations.
                </p>
            </>
        ),
    },
    {
        id: "changes",
        number: "8",
        title: "Changes or Modifications to This Notice",
        content: (
            <p>
                We reserve the right to change, modify, revise or update this
                Notice from time to time to ensure that it is consistent with
                industry trends, relevant laws and regulations applicable to us.
                These changes will be posted in our premises, as well as in our
                website and other social networking platforms for your
                information and guidance.
            </p>
        ),
    },
    {
        id: "contact",
        number: "9",
        title: "How You May Contact Us",
        content: (
            <>
                <p className="mb-4">
                    For any questions, comments, or queries, or if you want to
                    report what you reasonably believe is a compromise to the
                    security and privacy of your personal data, or you wish to
                    exercise any of your rights mentioned in this Notice, you
                    may reach our Data Protection Officer at:
                </p>
                <div className="border-l-2 border-red-600 pl-4">
                    <p className="font-bold text-gray-900 mb-1">
                        Data Protection Officer
                    </p>
                    <p className="text-gray-600">
                        Carworld Building, Jose Abad Santos Avenue, San Jose,
                        City of San Fernando, Pampanga
                    </p>
                    <a
                        href="mailto:dpo.cwi@lausgroup.com.ph"
                        className="text-red-600 hover:underline"
                    >
                        dpo.cwi@lausgroup.com.ph
                    </a>
                </div>
            </>
        ),
    },
];

export default function DataPrivacyNotice() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setMobileNavOpen(false);
    };

    return (
        <>
            <Header />
            <main className="w-full max-w-full bg-white">
                {/* Hero */}
                <section className="w-full bg-black py-12 sm:py-16 px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="w-5 h-0.5 bg-red-600" />
                        <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-500">
                            Your Privacy Matters
                        </span>
                        <span className="w-5 h-0.5 bg-red-600" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        Data Privacy Notice
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        How Carworld, Inc. collects, uses, and protects your
                        personal data in accordance with the Data Privacy Act of
                        2012.
                    </p>
                </section>

                {/* Mobile TOC toggle */}
                <div className="lg:hidden border-b border-gray-200">
                    <button
                        onClick={() => setMobileNavOpen((prev) => !prev)}
                        className="w-full flex items-center justify-between px-4 py-4 text-sm font-bold uppercase tracking-widest text-gray-900 cursor-pointer"
                    >
                        Jump to section
                        <span
                            className={`transition-transform duration-200 ${mobileNavOpen ? "rotate-180" : ""}`}
                        >
                            ▾
                        </span>
                    </button>
                    {mobileNavOpen && (
                        <nav className="px-4 pb-4 flex flex-col gap-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="text-left text-sm text-gray-600 hover:text-red-600 py-2 transition-colors duration-150 cursor-pointer"
                                >
                                    {section.number}. {section.title}
                                </button>
                            ))}
                        </nav>
                    )}
                </div>

                {/* Body */}
                <section className="container mx-auto px-4 lg:px-6 py-14 sm:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-14">
                        {/* Desktop sticky sidebar */}
                        <nav className="hidden lg:block">
                            <div className="sticky top-24 flex flex-col gap-1">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    Contents
                                </p>
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() =>
                                            scrollToSection(section.id)
                                        }
                                        className="text-left text-sm text-gray-600 hover:text-red-600 py-1.5 transition-colors duration-150 cursor-pointer"
                                    >
                                        {section.number}. {section.title}
                                    </button>
                                ))}
                            </div>
                        </nav>

                        {/* Intro + sections */}
                        <div>
                            <div className="prose-content text-sm text-gray-700 leading-relaxed space-y-4 mb-14 max-w-3xl">
                                <p>
                                    We, at CARWORLD, INC., a member of the Laus
                                    Group of Companies (LGC), care about the
                                    privacy and security of your personal data.
                                </p>
                                <p>
                                    We aim to establish and implement fair
                                    information practices as part of our
                                    commitment and guarantee to product and
                                    service quality that go beyond your
                                    expectations. Thus, we warrant that our
                                    services are guided by the following
                                    principles:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        We will ensure the security and
                                        confidentiality of any personal data you
                                        share with us;
                                    </li>
                                    <li>
                                        We will limit the collection and use of
                                        personal data to a minimum;
                                    </li>
                                    <li>
                                        We will only authorize employees, who
                                        are knowledgeable in the handling of
                                        customer data, to have access to
                                        thereto;
                                    </li>
                                    <li>
                                        We will not disclose personal data to
                                        any external organization unless we have
                                        previously informed you in disclosures
                                        or agreements, have been expressly
                                        authorized by you, or are required by
                                        law. For purposes of credit reporting,
                                        sales verification and other related and
                                        legitimate purposes, we will exchange
                                        information about you with reputable
                                        reference sources.
                                    </li>
                                </ul>
                                <p>
                                    This Data Privacy Notice ("Notice")
                                    carefully and thoroughly explains: a) what
                                    and why personal data may be collected from
                                    you; b) why we process your personal data
                                    and who has access to the same; c) how we
                                    protect and safeguard the personal data that
                                    we collect, process, disclose and dispose;
                                    and, d) what privacy rights you have and how
                                    you can exercise them as mandated by
                                    Republic Act (RA) No. 10173, also known as
                                    The Data Privacy Act of 2012, its
                                    Implementing Rules and Regulations, and
                                    other related issuances from the National
                                    Privacy Commission (NPC).
                                </p>
                                <p>
                                    This Notice covers both our online and
                                    offline data collection activities,
                                    including those we collect and process
                                    through our various channels such as, but
                                    not limited to, websites, social networking
                                    sites, telephone conversations, consumer
                                    engagement services, points of sale and
                                    events, and other similar activities. This
                                    Notice likewise outlines and streamlines the
                                    general practice of Carworld, Inc. in
                                    relation to our processes and contents which
                                    are made available through the foregoing
                                    networks. It also includes the privacy
                                    practices for our customers and guests who
                                    apply for and obtain products and services
                                    from us.
                                </p>
                                <p>
                                    We collect personal data when you interact
                                    with our employees and authorized
                                    representatives through our various
                                    dealerships, business units, social media,
                                    electronic channels and other similar
                                    activities. By filling out and signing the
                                    log documents, customer sheets, registration
                                    and/or application forms, survey
                                    questionnaires, sales invoices and repair
                                    orders, you express your consent to the
                                    collection, processing, use and disclosure
                                    of your personal data.
                                </p>
                                <p>
                                    When accessing our websites, online
                                    applications, and social media pages and/or
                                    availing of our services from outside the
                                    Philippines, you acknowledge and agree that
                                    your personal information may be transferred
                                    to and processed in the Philippines,
                                    following legal and regulatory standards for
                                    data protection that may differ from your
                                    current or home jurisdiction.
                                </p>
                            </div>

                            {/* Numbered sections */}
                            <div className="space-y-14">
                                {sections.map((section) => (
                                    <div
                                        key={section.id}
                                        id={section.id}
                                        className="scroll-mt-24"
                                    >
                                        <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-red-600">
                                            <span className="text-red-600 font-black text-lg">
                                                {section.number}.
                                            </span>
                                            <h2 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight">
                                                {section.title}
                                            </h2>
                                        </div>
                                        <div className="text-sm text-gray-700 leading-relaxed max-w-3xl">
                                            {section.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

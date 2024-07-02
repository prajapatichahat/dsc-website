import React, { useEffect } from "react";
import { ROUTES } from "../../../constants/routes";
import { Link } from "react-router-dom";

export default function Privacynotice() {
    useEffect(() => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, []);
  return (
    <>
      <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 breadcrumb-1">
              <h3 className="title">Privacy Notice</h3>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="bread-tag">
                <Link to={ROUTES.home}>Home</Link>
                <span> / </span>
                <a href="#" className="active">
                  Privacy Notice
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <p className="text-muted">
                This privacy policy (“Policy”) applies to the Service operated
                by Quantalium with mobile applications and a website located at
                www.quantalium.com (the “Service”). The Policy is designed to
                tell you how we collect and use personally identifying
                information (“PII”) (as defined below) so you can make an
                informed decision about using our Service. Please read this
                statement before using our Service or submitting any PII to us.
                By using our Service, you represent that you are 18 years old or
                older and you consent to the information collection and use
                practices described herein. We reserve the right to change the
                provisions of this privacy policy at any time by posting a
                revised privacy policy on the Site and indicating on the privacy
                policy the date it was last updated. Your use of the Service
                following the posting of such changes or revised statement shall
                constitute your acceptance of any such changes. We encourage you
                to review our privacy policy whenever you use our Service to
                determine if any changes have been made and to make sure that
                you understand how any PII you provide will be used.
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                What is “PII”?
              </h6>
              <p className="text-muted">
                As used herein, the term “PII” generally means information that
                specifically identifies an individual (such as user’s name,
                address, telephone number, e-mail address, credit card or other
                account number or geophysical location) or that is associated
                with an identifiable person (such as demographic information or
                information about a person’s activities when such information is
                linked to personally identifying information). PII does not
                include “aggregate” information, which is data we collect about
                the use of the Service or categories of Service users, from
                which any PII has been removed. For example, information that
                forty-six percent of the Service’s registered users identify
                themselves as male, is aggregate information. We collect
                aggregate data for a number of purposes, including to help us
                understand trends and user needs. This policy in no way limits
                or restricts our collection of aggregate information.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                What PII do we collect?
              </h6>
              <p className="text-muted">
                We do not collect any PII from mere visitors to the Site or
                Service. Your email address may be collected when you send us an
                email. If you register (as defined in the Quantalium User Access
                and License Agreement), we will collect your email address,
                name, organization information, address and credit card and/or
                other account information and possibly photos.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                What other information do we collect?
              </h6>
              <p className="text-muted">
                When you visit our Site, some information is also automatically
                collected through the use of log files, such as your computer’s
                Internet Protocol (IP) address, your computer’s operating
                system, the browser type, the address of a referring web Service
                and your activity on the Service. We use this information for
                purposes such as analyzing trends, administering the Service,
                improving customer service, diagnosing problems with our
                servers, tracking user movement, and gathering broad demographic
                information for aggregate use. We may also automatically collect
                certain information through the use of “cookies.” Cookies are
                small data files that are stored on a user’s hard drive at the
                request of a Web Service to enable the Service to recognize
                users who have previously visited them and retain certain
                information such as customer preferences and history. If we
                combine cookies with or link them to any of the PII, we would
                treat this information as PII. If you wish to block, erase, or
                be warned of cookies, please refer to your browser instructions
                or help screen to learn about these functions. However, if your
                browser is set not to accept cookies or if a user rejects a
                cookie, you will not be able to sign in to your Quantalium
                account and will not be able to access certain Service features
                or Services.
                <br /> We may also use third parties to provide certain
                functionalities or to collect, track and analyze non-personally
                identifiable usage and statistical information from users, such
                as the user’s browser type, operating system, browsing behavior
                and demographic information. These third parties may collect PII
                from you in connection with the Services they provide and may
                place cookies, web beacons or other devices on your computer to
                collect nonpersonal information which may be used, among other
                things, to deliver advertising targeted to your interests and to
                better understand the usage and visitation of our Service and
                the other Services tracked by these third parties. We are not
                responsible for, and do not control, any actions or policies of
                any third party service providers.
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                Usage and disclosure
              </h6>
              <p className="text-muted">
                We do not sell information to third parties. Quantalium only
                uses your PII to send you the communications noted below and as
                necessary to provide the Services, as described below.
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                PII may be used in one or more of the following ways:
              </h6>
              <ul style={{ color: "#6c757d" }}>
                <li>
                  To publicly display information in a manner selected by our
                  customers to their customers.
                </li>
                <li>
                  To register a customer and process payments. Credit card
                  processing is performed by a PCI compliant third party
                  processor and such information is not processed or retained by
                  Quantalium.
                </li>
                <li>To have a record of who posted content to the Service.</li>
                <li>
                  To send periodic emails: The email address you provide may be
                  used to send you information and updates pertaining to the
                  Services, and, if you do not “opt out”, to send you occasional
                  company news, updates, or related product or service
                  information.
                </li>
              </ul>
              <p className="text-muted">
                We do not sell, share, or rent any PII to others in ways
                different from what is disclosed in this Policy without first
                obtaining your consent, although we may provide aggregate
                information or other nonpersonal information to third parties
                without your authorization. We may share your contact
                information with third parties if you have indicated to us that
                you wish to receive information from such parties. In the event
                that we engage or partner with third party vendors, consultants
                or other service providers in connection with the operation of
                our business (“Service Providers”), we may share PII with such
                Service Providers who need access to such information to carry
                out their work for us. You should also note that information
                that you provide to us for posting to the Service will be posted
                for display in the manner you select. Your posting of such
                information to our Service constitutes your consent to display
                such information in such manner. We also may disclose personal
                information when we are required to or we believe it is
                appropriate to comply with the law (e.g., a lawful subpoena,
                warrant or court order); to enforce or apply this privacy policy
                or our other policies or agreements; to initiate, render, bill,
                and collect for amounts owed to us; to protect our or our
                customers’ rights, property or safety; to protect our customers
                from fraudulent, abusive, or unlawful use of our Service or
                Service; or if we believe that an emergency involving the danger
                of death or serious physical injury to any person requires
                disclosure of communications or justifies disclosure of personal
                information. In addition, information about our customers,
                including personal information, may be disclosed as part of any
                merger, acquisition, debt financing, sale of Quantalium assets,
                as well as in the event of an insolvency, bankruptcy or
                receivership in which personally identifiable information could
                be transferred to third parties as one of the business assets of
                the Quantalium.
              </p>
              <p className="text-muted">
                <b style={{ fontWeight: "bold" }}>Please note:</b> The Service
                may contain links to other Services. Please be aware that
                although we may participate in or utilize such other Services,
                we are not responsible for the privacy practices of such other
                Services. We encourage you to be aware when you leave our
                Service and to read the privacy policies of any Web Service that
                collects personally identifiable information. Similarly, if you
                entered this Service through another Web Service, we are also
                not responsible for the privacy practices of that Service, and
                you should review the privacy policy of the originating Service
                before providing any personal information to that Service. This
                privacy policy applies solely to information collected by us.
              </p>
              <p className="text-muted">
                Google. Our Services use Google Analytics to help analyze how
                users use the Services. The tool uses “cookies,” which are text
                files placed on mobile device, to collect standard Internet log
                information and visitor behavior information in an anonymous
                form. The information generated by the cookie about your use of
                the Services (including IP address) is transmitted to Google.
                This information is then used to evaluate visitors’ use of the
                Services and to compile statistical reports for Quantalium.
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                What steps do we take to protect your information online?
              </h6>
              <p className="text-muted">
                Quantalium endeavors to secure your personal information from
                unauthorized access, use or disclosure by putting into place
                physical, electronic and managerial procedures to safeguard the
                information we collect through this Service. Credit card
                information is encrypted during transmission and payment
                processing is performed by a PCI compliant third party processor
                and such information is not processed or retained by Quantalium.
                Other account information is accessible online only through the
                use of a password and data fields calling for personally
                identifying information are encrypted when in storage and in
                transmission. Please be aware, however, that despite our
                efforts, no security measures are perfect or impenetrable. To
                protect the confidentiality of your personal information, you
                must keep your password confidential and not disclose it to any
                other person. You are responsible for all uses of the Service by
                any person using your password. Please advise us immediately by
                emailing us at help@repairshopr.com if you believe your password
                has been misused. You should also note that email is not secure,
                and you should not send any confidential or sensitive
                information to us via an unsecured email.
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                Information We Collect.
              </h6>
              <p className="text-muted">
                Quantalium collects information that identifies, relates to,
                describes, references, is capable of being associated with, or
                could reasonably be linked, directly or indirectly, with a
                particular Subject or device (“personal information”)
                <ul style={{ color: "#6c757d" }}>
                  <li>
                    Identifiers” Real name, alias, Sex, postal address, unique
                    personal identifier, online identifier, internet protocol
                    (IP) address, email address, account name, social security
                    number, driver’s license number, passport number, or other
                    similar identifiers
                  </li>
                  <li>
                    Internet or other electronic network activity information:
                    Information regarding usage of a site, software, or app
                  </li>
                  <li>Geolocation data</li>
                  <li>
                    Professional or employment-related information: Place of
                    work, current occupation, duration of occupation,
                    position/title
                  </li>
                  <li>
                    Directly from you: From forms you complete or orders for
                    products and services you Purchase
                  </li>
                  <li>
                    Indirectly from you : From observing your actions on the
                    Service.
                  </li>
                </ul>
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                Use of Personal Information.
              </h6>
              <p className="text-muted">
                We may use or disclose the personal information we collect for
                one or more of the following business purposes:
                <ul style={{ color: "#6c757d" }}>
                  <li>
                    To fulfill the purpose for which you provided the
                    information. For example, if you share your name and contact
                    information to request a price quote or ask a question about
                    our products or services, we will use that personal
                    information to respond to your inquiry. If you provide your
                    personal information to purchase a product or service, we
                    will use that information to process your payment and
                    facilitate delivery. We may use personal information you
                    provide us to provide technical support. In addition, we may
                    use the above information:
                  </li>
                  <li>
                    To provide, support, personalize, and develop our websites,
                    products, and/or services;
                  </li>
                  <li>
                    To create, maintain, customize, and secure your account with
                    us;
                  </li>
                  <li>
                    To process your requests, purchases, transactions, and
                    payments and prevent transactional fraud;
                  </li>
                  <li>
                    To provide you with support and to respond to your
                    inquiries, including to investigate and address your
                    concerns and monitor and improve our responses;
                  </li>
                  <li>
                    To help maintain the safety, security, and integrity of our
                    Website, products and services, databases and other
                    technology assets, and business;
                  </li>
                  <li>
                    To respond to law enforcement requests and as required by
                    applicable law, court order, or governmental regulations;
                    and
                  </li>
                  <li>
                    As described to you when collecting your personal
                    information or as otherwise set forth in the CCPA.
                  </li>
                </ul>
                Quantalium will not collect additional categories of personal
                information or use the personal information we collected for
                materially different, unrelated, or incompatible purposes
                without providing you notice.
                <br /> Quantalium does not sell your personal information.
                Quantalium does share personal information with our third party
                service providers and vendors in order to provide you the
                Service.
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                International Transfer
              </h6>
              <p className="text-muted">
                Your information, including personal information, may be
                transferred to – and maintained on – computers located outside
                of your state, province, country or other governmental
                jurisdiction where the data protection laws may differ from
                those of your jurisdiction. If you are located outside United
                States and choose to provide information to us, please note that
                we transfer and process the data, including your personal
                information, outside the EEA/UK and Canada. Your consent to this
                Policy followed by your submission of such information
                represents your agreement to that transfer.
                <br /> We will take all the steps reasonably necessary to ensure
                that your personal information is treated securely and in
                accordance with this Policy and no transfer of your personal
                information will take place to an organization or a country
                unless there are adequate controls in place including the
                security of personal information.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                Your Rights and Choices
              </h6>
              <p className="text-muted">
                This section describes your CCPA rights and explains how to
                exercise those rights. <br />
                You have the right to request that we disclose certain
                information to you about our collection and use of your personal
                information over the past 12 months. Once we receive and verify
                your request, we will disclose to you:
                <ul style={{ color: "#6c757d" }}>
                  <li>
                    The categories of personal information we collected about
                    you;
                  </li>
                  <li>
                    The categories of sources for the personal information we
                    collected about you;
                  </li>
                  <li>
                    Our business or commercial purpose for collecting or selling
                    that personal information;
                  </li>
                  <li>
                    The categories of third parties with whom we share that
                    personal information;
                  </li>
                  <li>
                    The specific pieces of personal information we collected
                    about you (also called a data portability request);
                  </li>
                  <li>
                    If we sold or disclosed your personal information for a
                    business purpose, two separate lists disclosing:
                  </li>
                  <li>
                    sales, identifying the personal information categories that
                    each category of recipient purchased; and
                  </li>
                  <li>
                    disclosures for a business purpose, identifying the personal
                    information categories that each category of recipient
                    obtained.
                  </li>
                </ul>
                You have the right to request that we delete any of your
                personal information that we collected from you and retained,
                subject to certain exceptions. Once we receive and verify your
                request, we will delete (and direct our service providers to
                delete) your personal information from our records, unless an
                exception applies.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                We may deny your deletion request if retaining the information
                is necessary for us or our service providers to:
              </h6>
              <p className="text-muted">
                <ul style={{ color: "#6c757d" }}>
                  <li>
                    Complete the transaction for which we collected the personal
                    information, provide a good or service that you requested,
                    take actions reasonably anticipated within the context of
                    our ongoing business relationship with you, or otherwise
                    perform our contract with you;
                  </li>
                  <li>
                    Detect security incidents, protect against malicious,
                    deceptive, fraudulent, or illegal activity, or prosecute
                    those responsible for such activities;
                  </li>
                  <li>
                    Debug products to identify and repair errors that impair
                    existing intended functionality;
                  </li>
                  <li>
                    Exercise free speech, ensure the right of another California
                    Data Subject to exercise their free speech rights, or
                    exercise another right provided for by law;
                  </li>
                  <li>
                    Comply with the Electronic Communications Privacy Act of EU
                  </li>
                  <li>
                    Engage in public or peer-reviewed scientific, historical, or
                    statistical research in the public interest that adheres to
                    all other applicable ethics and privacy laws, when the
                    information’s deletion may likely render impossible or
                    seriously impair the research’s achievement, if you
                    previously provided informed consent;
                    <ul style={{ color: "#6c757d" }}>
                      <li>
                        Enable solely internal uses that are reasonably aligned
                        with Data Subject expectations based on your
                        relationship with us; <br />
                        a. Comply with a legal obligation; and <br />
                        b. Make other internal and lawful uses of that
                        information that are compatible with the context in
                        which you provided it.
                      </li>
                    </ul>
                  </li>
                </ul>
                To exercise the access, data portability, and deletion rights
                described above, please submit a verifiable request to us by
                sending us an email at <b>info@quantlium.com.</b>
              </p>

              <p className="text-muted">
                Only you or a person registered with us, that you authorize to
                act on your behalf, may make a verifiable Data Subject request
                related to your personal information.
                <ul style={{ color: "#6c757d" }}>
                  <li>
                    Provide sufficient information that allows us to reasonably
                    verify you are the person about whom we collected personal
                    information or an authorized representative; and
                  </li>
                  <li>
                    Describe your request with sufficient detail that allows us
                    to properly understand, evaluate, and respond to it.
                  </li>
                </ul>
                We cannot respond to your request or provide you with personal
                information if we cannot verify your identity or authority to
                make the request and confirm the personal information relates to
                you.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                Right of Non-Discrimination.
              </h6>
              <p className="text-muted">
                We will not discriminate against you for exercising any of your
                CCPA rights. We will not take any of the following actions
                against you in response to an exercise of your rights:
                <ul style={{ color: "#6c757d" }}>
                  <li>Deny you goods or services.</li>
                  <li>
                    Charge you different prices or rates for goods or services,
                    including through granting discounts or other benefits, or
                    imposing penalties.
                  </li>
                  <li>
                    Provide you a different level or quality of goods or
                    services.
                  </li>
                  <li>
                    Suggest that you may receive a different price or rate for
                    goods or services or a different level or quality of goods
                    or services.
                  </li>
                </ul>
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                Privacy Notice
              </h6>
              <p className="text-muted">
                This Section governs personal data, information relating to an
                identified or identifiable natural person, gathered from data
                subjects located in the EU only.
                <br />
                General Data Protection Regulation (“GDPR”) Information
                <br />
                The following information describes our commitments to you under
                EU General Data Protection Regulation (“GDPR”).
                <br />
                The GDPR makes a distinction between organizations that process
                personal data for their own purposes (known as “Data
                Controllers”) and organizations that process personal data on
                behalf of other organizations (known as “Data Processors”).
                Quantalium only acts as a Data Controller for very limited types
                of data, such as the information you enter when you register an
                account on our website or the information you submit when
                purchasing our software.
                <br />
                When Quantalium Acts as a Data Controller
                <br />
                When we process your data as a Data Controller, the following
                applies.
                <br />
                When we process your data as a Data Controller, the following
                applies.
                <br />
                We collect, use, and share your personal data where we are
                satisfied that we have an appropriate legal basis to do this.
                This may be because:
                <ul style={{ color: "#6c757d" }}>
                  <li>Deny you goods or services.</li>
                  <li>
                    <b style={{ fontWeight: 700 }}>– Consent:</b> Our use of
                    your personal data is in accordance with your consent. If we
                    process your personal data based on consent, you will be
                    asked for said consent at or before the time of data
                    collection. You may withdraw your consent at any time, and
                    will not suffer any detriment for withdrawing your consent.
                  </li>
                  <li>
                    <b style={{ fontWeight: 700 }}>– Contract:</b> Our use of
                    your personal data is to fulfil a contract between us and
                    you.
                  </li>
                  <li>
                    <b style={{ fontWeight: 700 }}>– Legal Obligation:</b> Our
                    use of your personal data is necessary to comply with a
                    relevant legal or regulatory obligation that we have (for
                    example, where we are required to disclose personal data to
                    a court); or
                  </li>
                  <li>
                    <b style={{ fontWeight: 700 }}>– Legitimate Interest:</b>
                    Our use of your personal data is for a legitimate interest
                    of ours, such as fraud prevention and ensuring our network’s
                    security.
                  </li>
                  <li>
                    Subject to certain exemptions, and in some cases dependent
                    upon the processing activity we are undertaking, EU
                    residents have certain rights in relation to their personal
                    data:
                  </li>
                  <li>
                    <b style={{ fontWeight: 700 }}>– Right to Access:</b>
                    You have the right to access to your personal data that is
                    being processed; specifically, you may request to view your
                    personal data and obtain copies of your personal data.
                  </li>
                  <li>
                    <b style={{ fontWeight: 700 }}>– Right to Rectification:</b>
                    You have the right to request modifications to your personal
                    data if it is out of date or inaccurate. In some
                    circumstances, you may be able to exercise this right, in
                    whole or in part, through your existing account with us.
                  </li>
                  <li>
                    <b style={{ fontWeight: 700 }}>– Right of Erasure:</b>
                    You have the right to ask that we delete your personal data.
                    However, we are not required to comply with your request to
                    erase personal data if the processing of your personal data
                    is necessary for compliance with a legal obligation, or for
                    the establishment, exercise, or Défense of legal claims.
                  </li>
                  <li>
                    <b style={{ fontWeight: 700 }}>
                      – Right to Restriction of Processing:
                    </b>
                    Under certain circumstances, you have the right to request
                    we restrict processing your personal data You have the right
                    to restrict the use of your personal data. However, we can
                    continue to use your personal data following a request for
                    restriction (a) where we have your consent; (b) to
                    establish, exercise or defend legal claims; or (c) to
                    protect the rights of another natural or legal person.
                  </li>
                  <li>
                    <b style={{ fontWeight: 700 }}>
                      – Right to Data Portability:
                    </b>
                    To the extent that we process your information (i) based on
                    your consent or under a contract; and (ii) through automated
                    means, you have the right to receive such personal data in a
                    structured, commonly used, machine-readable format, or you
                    can ask to have it transferred directly to another data
                    controller.
                  </li>
                  <li>
                    <b style={{ fontWeight: 700 }}>– Right to Object:</b>
                    You have the right to object to the processing of your
                    personal data. However, we may still process your personal
                    data if we demonstrate compelling legitimate grounds for the
                    processing which override the interests, rights and freedoms
                    of the data subject or for the establishment, exercise or
                    defence of legal claims.
                  </li>
                  <li>
                    <b style={{ fontWeight: 700 }}>
                      – Right to Object to Automated Processing:
                    </b>
                    You have the right to object to decisions based on automated
                    processing, such as where a computer assesses factors in the
                    data we collect about you and makes a determination.
                  </li>
                </ul>
              </p>
              <p className="text-muted">
                We retain your personal data for as long as necessary to provide
                you with our services, or for other important purposes such as
                complying with legal obligations, resolving disputes, and
                enforcing our agreements.
              </p>
              <p className="text-muted">
                We ask that you please attempt to resolve any issues regarding
                your data protection or requests with us first before contacting
                the relevant supervisory authority. If you would like to
                exercise any of the rights described above, please send a
                request to [info@quantalium.com]. In your message, please
                indicate the right you would like to exercise and the
                information that you would like to access, review, correct, or
                delete.
              </p>
              <p className="text-muted">
                We may ask you for additional information to confirm your
                identity and for security purposes, before disclosing the
                requested personal data.
              </p>
              <p className="text-muted">
                We may not always be able to fully address your request, for
                example if it would impact the duty of confidentiality we owe to
                others, or if we are legally entitled to deal with the request
                in a different way.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                When Quantalium Acts as a Data Processor
              </h6>
              <p className="text-muted">
                Where we process your data in our capacity as a Data Processor,
                the processing of your data will not be governed by the
                foregoing provisions (“When We Act As Data Controller”), but you
                can contact the Data Controller directly to learn about their
                processing of your information and to exercise your rights, or
                we will forward your request directly to them at your request.
                <br />
                Quantalium’s “privacy by design” approach requires that our
                default user data protection levels be at the highest setting by
                default. In the unlikely event of breach, Quantalium will notify
                data subjects and Supervisory Authorities (SAs) in the EU
                according to procedures provided in GDPR Articles 33 and 34.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                Lawful Requests
              </h6>
              <p className="text-muted">
                Quantalium may be required to disclose personal data pursuant to
                lawful requests made by public authorities, including to meet
                national security or law enforcement requirements.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                Inquiries and Complaints
              </h6>
              <p className="text-muted">
                We take safeguarding your privacy very seriously. If you wish to
                verify, correct or delete any personal data we have collected,
                or if you have any questions or concerns, or if you have any
                complaints, please contact us at [info@quantalium.com]
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>Notice</h6>
              <p className="text-muted">
                When Quantalium collects personal data from individuals, it will
                inform the individual of the purpose for which it collects and
                uses the personal data and the types of non-agent third parties
                to which Quantalium discloses or may disclose that information.
                Quantalium shall provide the individual with the choice and
                means for limiting the use and disclosure of their personal
                data. Notice will be provided in clear and conspicuous language
                when individuals are first asked to provide personal data to
                Quantalium, or as soon as practicable thereafter, and in any
                event before Quantalium uses or discloses personal data for a
                purpose other than for which it was originally collected.
                <br />
                In instances in which Quantalium is not the controller or
                collector of the personal data, but only a processor, it has no
                means of providing individuals with the choice and means for
                limiting the use and disclosure of their personal data or
                providing notices when individuals are first asked to provide
                personal data to Quantalium . In such instances, Quantalium will
                comply with the instructions of the controller of such
                information; provide appropriate technical and organizational
                measures to protect personal data against accidental or unlawful
                destruction or accidental loss, alteration, unauthorized
                disclosure or access, and to the extent appropriate, assist the
                controller in responding to individuals exercising their rights
                under the Principles.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>Choice</h6>
              <p className="text-muted">
                Except as indicated in the next paragraph, in those instances in
                which Quantalium collects personal data from individuals, such
                information will not be disclosed to any third party or used for
                a purpose other than the purpose for which it was originally
                collected or subsequently authorized by the individual. The only
                choice to be made by the user is whether to provide the
                information to Quantaliumfor the purposes disclosed to the user
                at the time the user submits the information.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                Disclosures to Third Parties
              </h6>
              <p className="text-muted">
                Quantalium will not provide individuals’ personal data to third
                parties unless required by law enforcement or in the event of
                the acquisition of all of its business assets. In the latter
                event, prior to disclosing personal data to an acquirer,
                Quantalium shall notify the individual of such disclosure and
                allow the individual the choice to opt out of such disclosure.
                Quantalium shall ensure that any such acquirer subscribes to
                these principles or are subject to law providing the same level
                of privacy protection as is required by these principles and
                agree in writing to provide an adequate level of privacy
                protection. Quantalium is liable under the Principles if, in the
                event of an onward transfer, its agent processes such personal
                information in a manner inconsistent with the Principles, unless
                Quantalium proves that it is not responsible for the event
                giving rise to the damage.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                Data Security
              </h6>
              <p className="text-muted">
                Quantalium shall take reasonable steps to protect personal data
                from loss, misuse and unauthorized access, disclosure,
                alteration and destruction. Quantalium has put in place
                appropriate physical, electronic and managerial procedures to
                safeguard and secure the information from loss, misuse,
                unauthorized access or disclosure, alteration or destruction.
                Quantalium cannot guarantee the security of information on or
                transmitted via the Internet.
                <br />
                Quantalium uses a self-assessment approach or outside compliance
                review to assure compliance with this privacy policy and
                periodically verifies that this privacy policy is accurate,
                comprehensive for the information intended to be covered, and in
                accordance with the Principles.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                Data Integrity
              </h6>
              <p className="text-muted">
                Quantalium shall only process personal data in a way that is
                compatible with and relevant for the purpose for which it was
                collected or authorized by those who provided the information.
                To the extent necessary for those purposes, Quantalium shall
                take reasonable steps to ensure that personal data is accurate,
                complete, current and reliable for its intended use.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>Access</h6>
              <p className="text-muted">
                In those instances in which Quantalium collects personal data
                directly from individuals, Quantalium shall allow those
                individuals access to their personal data and allow the
                individual to correct, amend or delete inaccurate information,
                except where the burden or expense of providing access would be
                disproportionate to the risks to the privacy of the individual
                in the case in question or where the rights of persons other
                than the individual would be violated.
                <br />
                Quantalium is a part of Servably, Inc., any reference to
                Quantalium is also a reference to Servably, Inc.
                <br />
                How can you correct and update your personal information, or
                obtain additional information?
                <br />
                If you have any questions or comments about this Policy or the
                practices relating to this Service, or you wish to verify,
                correct or delete any personal information we have collected,
                please contact us at info@quantalium.com.
                <br />
                How can you correct and update your personal information, or
                obtain additional information?
                <br />
                If you have any questions or comments about this Policy or the
                practices relating to this Service, or you wish to verify,
                correct or delete any personal information we have collected,
                please contact us at <b style={{fontWeight:700}}>info@quantalium.com.</b>
              </p>
              <div>
                {/* <CustomButtons.ColorButton onClick={() => history.push("")}>
                  Show Me More
                </CustomButtons.ColorButton> */}
              </div>
            </div>
          </div>
        </div>
        <div className="icon-effects-w3-1">{/* <img src={Circle} /> */}</div>
      </section>
    </>
  );
}

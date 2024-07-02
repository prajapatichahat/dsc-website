import React, { useEffect } from "react";
import { ROUTES } from "../../../constants/routes";
import { Link } from "react-router-dom";

export default function Termsconditions() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 breadcrumb-1">
              <h3 className="title">Site Terms & Conditions</h3>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="bread-tag">
                <Link to={ROUTES.home}>Home</Link>
                <span> / </span>
                <a href="#" className="active">
                  Site Terms & Conditions
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
                PLEASE READ THESE SITE TERMS CAREFULLY. BY ACCESSING OR USING
                THIS WEB SITE, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS
                DESCRIBED HEREIN AND ALL TERMS, POLICIES, GUIDELINES AND
                DISCLOSURES INCORPORATED BY REFERENCE. IF YOU REGISTER FOR
                SERVICES, YOU SHALL ALSO BE BOUND BY THE TERMS OF OUR QUANTALIUM
                USER ACCESS AND LICENSE AGREEMENT. IF YOU DO NOT AGREE TO ALL OF
                THESE TERMS, DO NOT USE THIS WEB SITE.
              </p>
              <p className="text-muted">
                These Site Terms govern your access to, and use of, the
                Quantalium site located at www.Quantalium.com (the “Site”),
                which is owned by Quantalium, Inc. (“Quantalium”). These Site
                Terms do not alter in any way the terms or conditions of any
                written agreement you may have with Quantalium, or its
                subsidiaries or affiliates, for products, services or otherwise.
                If you are using the Site on behalf of any entity, you represent
                and warrant that you are authorized to accept these Site Terms
                on such entity’s behalf. <br />
                Quantalium reserves the right to change these Site Terms at any
                time and in its sole discretion. Any changes or modification
                will be effective immediately upon posting of the revisions on
                the Site. Your continued use of this Site following the posting
                of its changes will constitute your acceptance of such changes.
                If you don’t agree to the amended terms, you must stop using the
                Site. You warrant and attest that you are at least eighteen (18)
                years of age. <br />
                All questions or comments about the Site or its contents should
                be directed to support@Quantalium.com.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                1. Privacy Policy
              </h6>
              <p className="text-muted">
                Please refer to our Privacy Policy for information on how
                Quantalium collects, uses and discloses personally identifiable
                and other information from its Site users.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                2. Copyright and Limited License
              </h6>
              <p className="text-muted">
                Unless otherwise indicated, the Site itself, including, without
                limitation, the Quantalium logo, and all designs, text,
                graphics, pictures, information, data, software, sound files,
                other files and the selection and arrangement thereof
                (collectively, the “Materials”) are the property of Quantalium
                and its licensors and are protected by international copyright
                laws. <br />
                You are granted a limited, non-sublicensable license to access
                and use the Site. Such license is subject to these Site Terms
                and does not include or authorize: (a) any resale or commercial
                use of the Site or the Materials therein; (b) the distribution,
                public performance or public display of any Materials; (c)
                modifying or otherwise making any derivative uses of the Site or
                the Materials, or any portion thereof; (d) use of automated
                means, including spiders, robots, crawlers, data mining tools,
                or the like to download data from the Site; (e) downloading
                (other than page caching) of any portion of the Site, the
                Materials or any information contained therein, except as
                expressly permitted; (f) any attempt to gain unauthorized access
                to Quantalium’s computer systems or engage in any activity that
                disrupts, diminishes the quality of, interferes with the
                performance of, or impairs the functionality of the Site; or (g)
                any use of the Site or the Materials other than for their
                intended purpose; (h) use of any portion of the Site or the
                Materials as a destination linked from any unsolicited bulk
                messages or unsolicited commercial messages; (i) any use of the
                Site or the Materials other than for their intended purpose; (j)
                copying, modifying, creating a derivative work of, reverse
                engineering, decompiling or otherwise attempting to extract the
                source code of any software or any part thereof, unless this is
                expressly permitted or required by law, or unless you have been
                specifically told that you may do so by Quantalium, in writing.
                Any use of the Site or the Materials other than as specifically
                authorized herein, without the prior written permission of
                Quantalium, is strictly prohibited and will terminate the
                license granted herein. Such unauthorized use may also violate
                applicable laws including without limitation copyright and
                trademark laws and applicable communications regulations and
                statutes. Unless explicitly stated herein, nothing in these Site
                Terms shall be construed as conferring any license to
                intellectual property rights, whether by estoppel, implication
                or otherwise. This license is revocable at any time for any
                reason by Quantalium.
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                3. Hyperlinks
              </h6>
              <p className="text-muted">
                You are granted a limited, non-exclusive right to create a text
                hyperlink to the Site, provided such link does not portray
                Quantalium, any of its products or services, in a false,
                misleading, derogatory or otherwise defamatory manner and
                provided further that the linking site does not contain any
                adult or illegal material or any material that is offensive,
                harassing or otherwise objectionable. This limited right may be
                revoked at any time. You may use a Quantalium logo or other
                proprietary graphic to link to this Site without the express
                written permission of Quantalium as long as the manner of your
                use is not objectionable to Quantalium. In the event that
                Quantalium objects to your use of the Quantalium logo or other
                proprietary graphic, you agree to cease using them. Further, you
                may not use, frame or utilize framing techniques to enclose any
                Quantalium trademark, logo or other proprietary information,
                including the images found at the Site, the content of any text
                or the layout/design of any page or form contained on a page on
                the Site without Quantalium’ express written consent. Except as
                noted above, you are not conveyed any right or license by
                implication, estoppel or otherwise in or under any patent,
                trademark, copyright or proprietary right of Quantalium or any
                third party.
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                4. Advertisements and Promotions
              </h6>
              <p className="text-muted">
                Quantalium may run advertisements and promotions from third
                parties on this Site. Your business dealings or correspondence
                with, or participation in promotions of, advertisers other than
                Quantalium, and any terms, conditions, warranties or
                representations associated with such dealings, are solely
                between you and such third party. Quantalium is not responsible
                or liable for any loss or damage of any sort incurred as the
                result of any such dealings or as the result of the presence of
                such third party
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                5. Third Party Content
              </h6>
              <p className="text-muted">
                Quantalium or its industry partners may provide links to Web
                pages and content of third parties as a service to those
                interested in such links and content, and Quantalium may post
                third party content or allow users to post their content or
                third party content to the Site. Quantalium does not monitor or
                have any control over any Third Party Content or third party Web
                sites. Quantalium does not endorse or adopt any Third Party
                Content or third party Website and can make no guarantee as to
                its accuracy or completeness. Quantalium does not represent or
                warrant the accuracy of any information contained therein and
                undertakes no responsibility to update or review any Third Party
                Content or third party Websites. Users use these links, Third
                Party Content and third party Websites at their own risk. When
                you leave the Site, you should be aware that our terms and
                policies no longer govern. You should review the applicable
                terms and policies, including privacy and data gathering
                practices, of any site to which you navigate from the Site.
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                6. Third Party Services
              </h6>
              <p className="text-muted">
                The Site may also contain, provide information regarding or link
                to certain applications and services provided or offered by
                third parties (collectively the “Third-Party Services”).
                Quantalium is merely an information provider and is not a
                referral service, and it does not recommend or endorse any such
                Third-Party Services or monitor or have any control over such
                Third-Party Services. Therefore, Quantalium makes no guarantee,
                representation or warranty of any kinds as to the quality,
                competency, value, reliability, responsiveness, accuracy or
                completeness of any such Third-Party Services or the results
                obtained therefrom, and Quantalium assumes no responsibility or
                liability for any Third Party Services or for the actions or
                failure to act of those providing such Third-Party Services. You
                assume full responsibility for your use of any such Third-Party
                Services, and Quantalium is not responsible or liable for any
                Third-Party Services.
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                7. Digital Millennium Copyright Act
              </h6>
              <p className="text-muted">
                Quantalium respects the intellectual property rights of others
                and expects users of the Site to do the same. We will respond to
                notices of alleged copyright infringement that comply with
                applicable law and are properly provided to us. If you believe
                that your content has been copied in a way that constitutes
                copyright infringement, please provide us with the following
                information: (i) a physical or electronic signature of the
                copyright owner or a person authorized to act on their behalf;
                (ii) identification of the copyrighted work claimed to have been
                infringed; (iii) identification of the material that is claimed
                to be infringing or to be the subject of infringing activity and
                that is to be removed or access to which is to be disabled, and
                information reasonably sufficient to permit us to locate the
                material; (iv) your contact information, including your address,
                telephone number, and an email address; (v) a statement by you
                that you have a good faith belief that use of the material in
                the manner complained of is not authorized by the copyright
                owner, its agent, or the law; and (vi) a statement that the
                information in the notification is accurate, and, under penalty
                of perjury, that you are authorized to act on behalf of the
                copyright owner. We reserve the right to remove content alleged
                to be infringing without prior notice and at our sole
                discretion. Our designated copyright agent for notice of alleged
                copyright infringement appearing on the Site is:
                <br /> Quantalium help@Quantalium.com
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                8. Trademarks
              </h6>
              <p className="text-muted">
                “Quantalium”, the Quantalium logo and any other product or
                service name or slogan displayed on the Site are trademarks of
                Quantalium and its suppliers or licensors, and may not be
                copied, imitated or used, in whole or in part, without the prior
                written permission of Quantalium or the applicable trademark
                holder. You may not use any metatags or any other “hidden text”
                utilizing “Quantalium” or any other name, trademark or product
                or service name of Quantalium without our prior written
                permission. In addition, the look and feel of the Site,
                including all page headers, custom graphics, button icons and
                scripts, is the service mark, trademark and/or trade dress of
                Quantalium and may not be copied, imitated or used, in whole or
                in part, without our prior written permission. All other
                trademarks, registered trademarks, product names and Quantalium
                names or logos displayed on the Site are the property of their
                respective owners.
              </p>
              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                9. Disclaimers and Acknowledgements Regarding Use of Site
                Information
              </h6>
              <p className="text-muted">
                THE SITE AND THE MATERIALS ARE PROVIDED ON AN “AS IS” AND “AS
                AVAILABLE” BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED. QUANTALIUM DISCLAIMS ALL WARRANTIES, EXPRESS OR
                IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND
                NON-INFRINGEMENT AS TO THE INFORMATION, CONTENT OR MATERIALS.
                QUANTALIUM DOES NOT REPRESENT OR WARRANT THAT MATERIALS,
                INCLUDING THE INFORMATION AVAILABLE IN OR ON THE SITE ARE
                ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE. QUANTALIUM
                DOES NOT REPRESENT OR WARRANT THAT THE SITE OR ITS SERVERS ARE
                FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. <br />
                QUANTALIUM IS NOT RESPONSIBLE FOR ERRORS OR OMISSIONS IN ANY
                INFORMATION OR MATERIALS CONTAINED ON THE SITE. WHILE QUANTALIUM
                ATTEMPTS TO MAKE YOUR ACCESS AND USE OF THE SITE SAFE,
                QUANTALIUM CANNOT AND DOES NOT REPRESENT OR WARRANT THAT THE
                SITE OR ITS SERVER(S), OR ANY CONTENT OR MATERIALS ARE FREE OF
                VIRUSES OR OTHER HARMFUL COMPONENTS; THEREFORE, YOU SHOULD USE
                INDUSTRY-RECOGNIZED SOFTWARE TO DETECT AND NEUTRALIZE VIRUSES,
                SPYWARE, MALWARE, AND OTHER HARMFUL OR OTHERWISE UNDESIRABLE
                COMPONENTS FROM ANY DOWNLOAD.
                <br /> Quantalium reserves the right to change any and all
                content contained on the Site and any services offered through
                the Site at any time without notice.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                10. Limitation of Liability
              </h6>
              <p className="text-muted">
                IN NO EVENT SHALL QUANTALIUM OR ANY OF ITS CORPORATE AFFILIATES,
                INDEPENDENT CONTRACTORS, SERVICE PROVIDERS OR CONSULTANTS, OR
                ANY OF THEIR RESPECTIVE DIRECTORS, EMPLOYEES AND AGENTS, BE
                LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES,
                INCLUDING BUT NOT LIMITED TO, LOSS OF USE, LOSS OF PROFITS OR
                LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING
                BUT NOT LIMITED TO NEGLIGENCE) OR OTHERWISE, ARISING OUT OF OR
                IN ANY WAY RELATED TO OR CONNECTED WITH ANY USE OF THE SITE, THE
                CONTENT OR THE MATERIALS CONTAINED IN OR ACCESSED THROUGH THE
                SITE, INCLUDING WITHOUT LIMITATION ANY DAMAGES, LOSS OR INJURY
                CAUSED BY OR RESULTING FROM RELIANCE ON ANY INFORMATION OBTAINED
                FROM QUANTALIUM, OR THAT RESULT FROM MISTAKES, OMISSIONS,
                INTERRUPTIONS, DELETION OF FILES OR EMAIL, ERRORS, DEFECTS,
                VIRUSES, DELAYS IN OPERATION OR TRANSMISSION OR ANY FAILURE OF
                PERFORMANCE, WHETHER OR NOT RESULTING FROM ACTS OF GOD,
                COMMUNICATIONS FAILURE, THEFT, DESTRUCTION OR UNAUTHORIZED
                ACCESS TO QUANTALIUM’S RECORDS, PROGRAMS OR SERVICES. THE
                AGGREGATE LIABILITY OF QUANTALIUM, WHETHER IN CONTRACT,
                WARRANTY, TORT (INCLUDING NEGLIGENCE, WHETHER ACTIVE, PASSIVE OR
                IMPUTED), PRODUCT LIABILITY, STRICT LIABILITY OR OTHER THEORY,
                ARISING OUT OF OR RELATING IN ANY MANNER TO THE USE OF THE SITE,
                SHALL NOT EXCEED ANY COMPENSATION YOU PAY, IF ANY, TO QUANTALIUM
                FOR ACCESS TO OR USE OF THE SITE. <br />
                IF YOU ARE A CALIFORNIA RESIDENT, YOU WAIVE CALIFORNIA CIVIL
                CODE SECTION 1542, WHICH SAYS “A GENERAL RELEASE DOES NOT EXTEND
                TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST
                IN HIS FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH, IF
                KNOWN BY HIM MUST HAVE MATERIALLY AFFECTED HIS SETTLEMENT WITH
                THE DEBTOR.”
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                11. Dispute Resolution.
              </h6>
              <p className="text-muted">
                Except for the right of a party to apply to a court for a
                temporary restraining order, preliminary injunction or other
                equitable relief, any controversy or claim arising out of or
                relating to this Agreement that cannot be resolved through
                negotiation will be resolved by binding arbitration before a
                single arbitrator in accordance with the Commercial Arbitration
                Rules of the American Arbitration Association. If the parties
                cannot agree on a single arbitrator, the arbitrator will be
                selected by the American Arbitration Association. All
                arbitration proceedings will occur in English and will be held
                in Ireland. The parties agree that any dispute resolution
                proceeding will be conducted on an individual basis and not as a
                class or representation action. Neither you nor Quantalium shall
                be a member of a class, consolidated or representative action or
                proceeding. The award of the arbitrator shall be binding and may
                be entered as a judgment in any court of competent jurisdiction.
                The cost of the arbitration shall be borne equally by the
                parties. Neither party nor the arbitrator may disclose the
                existence or results of any arbitration hereunder. The authority
                of the arbitrator to award damages in any event is and shall be
                limited by this Agreement.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                12. Applicable Law and Venue
              </h6>
              <p className="text-muted">
                These Site Terms the Service Terms and your use of the Site
                shall be governed by and construed in accordance with the laws
                of Ireland .You agree that with respect to any disputes or
                claims not subject to arbitration (as set forth above), any
                action at law or in equity arising out of or relating to the
                Site or these Site Terms or Service Terms shall be filed only in
                Ireland and you hereby irrevocably and unconditionally consent
                and submit to the exclusive jurisdiction of such courts.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                13. Severability
              </h6>
              <p className="text-muted">
                If any of these Site Terms or the Service Terms should be
                determined to be invalid, illegal or unenforceable for any
                reason by any court of competent jurisdiction then such term
                shall be enforced only to the extent it is enforceable and the
                remaining terms shall survive and remain in full force and
                effect and continue to be binding and enforceable.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                14. Feedback
              </h6>
              <p className="text-muted">
                You may choose to or we may invite you to submit comments or
                ideas about the Service, including without limitation about how
                to improve the Service or our products (“Feedback”). By
                submitting Feedback, you agree that your disclosure is
                gratuitous, unsolicited and without restriction and will not
                place Quantalium under any fiduciary or other obligation, that
                we are free to disclose the Feedback on a non-confidential basis
                to anyone or otherwise use the Feedback without any additional
                compensation to you. You acknowledge that, by acceptance of your
                submission, Quantalium does not waive any rights to use similar
                or related ideas previously known to Quantalium, or developed by
                its employees, or obtained from sources other than you.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>15. Waiver.</h6>
              <p className="text-muted">
                No waiver of any term, provision or condition of this Agreement,
                whether by conduct or otherwise, in any one or more instances,
                shall be deemed to be, or shall constitute, a waiver of any
                other term, provision or condition hereof, whether or not
                similar, nor shall such waiver constitute a continuing waiver of
                any such term, provision r condition hereof. No waiver shall be
                binding unless executed in writing by the party making the
                waiver.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                16. Force Majeure.
              </h6>
              <p className="text-muted">
                If the performance of any part of this Agreement by either party
                is prevented, hindered, delayed or otherwise made impracticable
                by reason of any flood, riot, fire, judicial or governmental
                action, labor disputes, act of God or any other causes beyond
                the control of either party, that party shall be excused from
                such to the extent that it is prevented, hindered or delayed by
                such causes.
              </p>

              <h6 style={{ fontSize: "18px", fontWeight: 500 }}>
                17. Entire Agreement.
              </h6>
              <p className="text-muted">
                This Agreement, together with the Service Terms and Privacy
                Policy, constitute the complete and exclusive statement of the
                agreement between the parties with respect to the use of the
                Site.
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

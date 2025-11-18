import { IgrAccordion, IgrAvatar, IgrButton, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrExpansionPanel, IgrList, IgrListItem, IgrTab, IgrTabs } from '@infragistics/igniteui-react';
import styles from './main-page.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function MainPage() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("column-layout main-page-container")}>
        <div className={classes("row-layout hero-section")}>
          <div className={classes("row-layout hero-content-container")}>
            <div className={classes("column-layout hero-content")}>
              <h2 className={classes("content_2")}>
                <span>We DEVliver: Innovate, Code, Connect</span>
              </h2>
              <h6 className={classes("content")}>
                <span>Join us on November 18th &amp; 21st for 2 days of React &amp; AI breakthroughs.</span>
              </h6>
              <div className={classes("column-layout hero-buttons-text")}>
                <div className={classes("row-layout hero-buttons")}>
                  <IgrButton type="button" className={classes("get-tickets-button")}>
                    <span>Get Tickets</span>
                  </IgrButton>
                </div>
                <p className={classes("typography__body-2 content")}>
                  <span>Secure your spot now and be part of the future of tech!</span>
                </p>
              </div>
            </div>
            <img src="/src/assets/Auto%20generated%20image%20for%20d4c5d32f-2c59-456e-91c5-dff4d4622c33-2f96f2b0-ba13-440b-866c-73e631bbb3d4.png" className={classes("hero-image")} />
          </div>
        </div>
        <div className={classes("row-layout features-section")}>
          <div className={classes("column-layout features-content")}>
            <div className={classes("column-layout features-header")}>
              <h4 className={classes("content_4")}>
                <span>Why Attend We DEVliver?</span>
              </h4>
              <h6 className={classes("features-subtitle")}>
                <span>Heading</span>
              </h6>
            </div>
            <div className={classes("row-layout feature-cards")}>
              <IgrCard className={classes("feature-card-1")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span> </span>
                  </h3>
                  <h5 slot="subtitle">
                    <span> </span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout feature-card-1-content")}>
                    <IgrAvatar shape="circle" className={classes("feature-card-1-avatar feature-card-1-avatar_1")}>
                      <span className={classes("material-icons icon")}>
                        <span>code</span>
                      </span>
                    </IgrAvatar>
                    <h6 className={classes("content_2")}>
                      <span>Cutting-Edge Topics</span>
                    </h6>
                    <p className={classes("typography__body-1 content_3")}>
                      <span>Explore the latest in React and AI with industry leaders.</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" className={classes("feature-card-1-button")}>
                      <span>Learn more</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_right_alt</span>
                      </span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
              <IgrCard className={classes("feature-card-1")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span> </span>
                  </h3>
                  <h5 slot="subtitle">
                    <span> </span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout feature-card-1-content")}>
                    <IgrAvatar shape="circle" className={classes("feature-card-1-avatar feature-card-1-avatar_2")}>
                      <span className={classes("material-icons icon")}>
                        <span>person_outline</span>
                      </span>
                    </IgrAvatar>
                    <h6 className={classes("content_2")}>
                      <span>Expert Speakers</span>
                    </h6>
                    <p className={classes("typography__body-1 content_3")}>
                      <span>Learn from renowned experts and connect with your peers.</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" className={classes("feature-card-1-button")}>
                      <span>Learn more</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_right_alt</span>
                      </span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
              <IgrCard className={classes("feature-card-1")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span> </span>
                  </h3>
                  <h5 slot="subtitle">
                    <span> </span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout feature-card-1-content")}>
                    <IgrAvatar shape="circle" className={classes("feature-card-1-avatar feature-card-1-avatar_3")}>
                      <span className={classes("material-icons icon")}>
                        <span>group</span>
                      </span>
                    </IgrAvatar>
                    <h6 className={classes("content_2")}>
                      <span>Networking Opportunities</span>
                    </h6>
                    <p className={classes("typography__body-1 content_3")}>
                      <span>Forge new connections and collaborate on innovative ideas.</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" className={classes("feature-card-1-button")}>
                      <span>Learn more</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_right_alt</span>
                      </span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
            </div>
          </div>
        </div>
        <div className={classes("row-layout agenda-section")}>
          <div className={classes("column-layout features-content")}>
            <div className={classes("column-layout features-header")}>
              <h4 className={classes("content_4")}>
                <span>Event Agenda</span>
              </h4>
              <h6 className={classes("features-subtitle")}>
                <span>Two days packed with insightful sessions.</span>
              </h6>
            </div>
            <div className={classes("row-layout feature-cards")}>
              <IgrTabs alignment="justify" className={classes("agenda-tabs")}>
                <IgrTab selected={true} className={classes("agenda-tab-day-1")}>
                  <span slot="label">
                    <span className={classes("material-icons")}>
                      <span>info</span>
                    </span>
                  </span>
                  <span slot="label">Day 1 - Nov 18</span>
                  <div className={classes("row-layout agenda-tab-day-1-content")}>
                    <div className={classes("column-layout day1-agenda")}>
                      <h5 className={classes("content_3")}>
                        <span>Day 1 Agenda</span>
                      </h5>
                      <IgrList className={classes("day1-list")}>
                        <IgrListItem>
                          <div slot="title">8:00 - 9:00 Registration</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">9:00 - 9:30 Opening Keynote: The Future of React (Speaker: Jane Doe)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">9:30 - 10:00 React Hooks Deep Dive (Speaker: John Smith)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">10:00 - 10:30 AI in Web Development (Speaker: Emily White)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">10:30 - 11:00 Coffee Break &amp; Networking</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">11:00 - 11:30 Advanced React Performance (Speaker: David Green)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">11:30 - 12:00 Building Intelligent UIs with AI (Speaker: Sarah Johnson)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">12:00 - 13:00 Lunch Break</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">13:00 - 13:30 State Management in React (Speaker: Michael Brown)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">13:30 - 14:00 Machine Learning for React Developers (Speaker: Jessica Lee)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">14:00 - 14:30 React Native and AI (Speaker: Robert Davis)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">14:30 - 15:00 Coffee Break &amp; Networking</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">15:00 - 15:30 AI-Powered Testing for React Apps (Speaker: Laura Miller)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">15:30 - 16:00 Closing Remarks Day 1 (Speaker: Event Host)</div>
                        </IgrListItem>
                      </IgrList>
                    </div>
                  </div>
                </IgrTab>
                <IgrTab className={classes("agenda-tab-day-1")}>
                  <span slot="label">
                    <span className={classes("material-icons")}>
                      <span>info</span>
                    </span>
                  </span>
                  <span slot="label">Day 2 - Nov 21</span>
                  <div className={classes("row-layout agenda-tab-day-1-content")}>
                    <div className={classes("column-layout day1-agenda")}>
                      <h5 className={classes("content_3")}>
                        <span>Day 2 Agenda</span>
                      </h5>
                      <IgrList className={classes("day1-list")}>
                        <IgrListItem>
                          <div slot="title">9:00 - 9:30 Keynote: The AI-Powered Developer (Speaker: Chris Wilson)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">9:30 - 10:00 Building Custom AI Models with React (Speaker: Anna King)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">10:00 - 10:30 Server-Side Rendering with React (Speaker: James Taylor)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">10:30 - 11:00 Coffee Break &amp; Networking</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">11:00 - 11:30 AI Ethics and Responsible Development (Speaker: Olivia Moore)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">11:30 - 12:00 Micro-frontends with React (Speaker: Daniel Clark)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">12:00 - 13:00 Lunch Break</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">13:00 - 13:30 AI-Driven Code Generation (Speaker: Sophia Hall)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">13:30 - 14:00 Building Cross-Platform Apps with React (Speaker: Ethan Lewis)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">14:00 - 14:30 Future Trends in React and AI (Speaker: Ava Scott)</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">14:30 - 15:00 Coffee Break &amp; Networking</div>
                        </IgrListItem>
                        <IgrListItem>
                          <div slot="title">15:00 - 16:00 Closing Keynote &amp; Future Vision (Speaker: Event Organizers)</div>
                        </IgrListItem>
                      </IgrList>
                    </div>
                  </div>
                </IgrTab>
              </IgrTabs>
            </div>
          </div>
        </div>
        <div className={classes("row-layout features-section")}>
          <div className={classes("column-layout features-content")}>
            <div className={classes("column-layout features-header")}>
              <h4 className={classes("content_4")}>
                <span>Meet Our Speakers</span>
              </h4>
              <h6 className={classes("features-subtitle")}>
                <span>Inspiring minds shaping the future of technology.</span>
              </h6>
            </div>
            <div className={classes("row-layout feature-cards")}>
              <IgrCard className={classes("feature-card-1")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span>Jane Doe</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span>Lead React Developer at InnovateTech</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout feature-card-1-content")}>
                    <IgrAvatar shape="circle" className={classes("feature-card-1-avatar feature-card-1-avatar_4")}>
                      <span className={classes("material-icons icon")}>
                        <span>code</span>
                      </span>
                    </IgrAvatar>
                    <h6 className={classes("content_2")}>
                      <span>Expert in React Performance &amp; Hooks</span>
                    </h6>
                    <p className={classes("typography__body-1 content_3")}>
                      <span>Keynote: The Future of React</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" className={classes("feature-card-1-button")}>
                      <span>View Profile</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_right_alt</span>
                      </span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
              <IgrCard className={classes("feature-card-1")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span>John Smith</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span>Senior AI Engineer at AI Solutions</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout feature-card-1-content")}>
                    <IgrAvatar shape="circle" className={classes("feature-card-1-avatar feature-card-1-avatar_5")}>
                      <span className={classes("material-icons icon")}>
                        <span>psychology_alt</span>
                      </span>
                    </IgrAvatar>
                    <h6 className={classes("content_2")}>
                      <span>Specialist in Machine Learning &amp; NLP</span>
                    </h6>
                    <p className={classes("typography__body-1 content_3")}>
                      <span>AI in Web Development</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" className={classes("feature-card-1-button")}>
                      <span>View Profile</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_right_alt</span>
                      </span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
              <IgrCard className={classes("feature-card-1")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span>Emily White</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span>React Native Expert at MobileDev</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout feature-card-1-content")}>
                    <IgrAvatar shape="circle" className={classes("feature-card-1-avatar feature-card-1-avatar_6")}>
                      <span className={classes("material-icons icon")}>
                        <span>phone_iphone</span>
                      </span>
                    </IgrAvatar>
                    <h6 className={classes("content_2")}>
                      <span>Cross-Platform Development</span>
                    </h6>
                    <p className={classes("typography__body-1 content_3")}>
                      <span>React Native and AI</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" className={classes("feature-card-1-button")}>
                      <span>View Profile</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_right_alt</span>
                      </span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
              <IgrCard className={classes("feature-card-1")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span>David Green</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span>Principal Software Engineer at GlobalTech</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout feature-card-1-content")}>
                    <IgrAvatar shape="circle" className={classes("feature-card-1-avatar feature-card-1-avatar_7")}>
                      <span className={classes("material-icons icon")}>
                        <span>cloud</span>
                      </span>
                    </IgrAvatar>
                    <h6 className={classes("content_2")}>
                      <span>Cloud-Native Architectures</span>
                    </h6>
                    <p className={classes("typography__body-1 content_3")}>
                      <span>Server-Side Rendering with React</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" className={classes("feature-card-1-button")}>
                      <span>View Profile</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_right_alt</span>
                      </span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
              <IgrCard className={classes("feature-card-1")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span>Sarah Johnson</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span>AI Research Scientist at FutureAI</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout feature-card-1-content")}>
                    <IgrAvatar shape="circle" className={classes("feature-card-1-avatar feature-card-1-avatar_8")}>
                      <span className={classes("material-icons icon")}>
                        <span>lightbulb</span>
                      </span>
                    </IgrAvatar>
                    <h6 className={classes("content_2")}>
                      <span>Ethical AI Development</span>
                    </h6>
                    <p className={classes("typography__body-1 content_3")}>
                      <span>AI Ethics and Responsible Development</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" className={classes("feature-card-1-button")}>
                      <span>View Profile</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_right_alt</span>
                      </span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
              <IgrCard className={classes("feature-card-1")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span>Michael Brown</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span>Staff Software Engineer at CodeGen Solutions</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout feature-card-1-content")}>
                    <IgrAvatar shape="circle" className={classes("feature-card-1-avatar feature-card-1-avatar_9")}>
                      <span className={classes("material-icons icon")}>
                        <span>smart_toy</span>
                      </span>
                    </IgrAvatar>
                    <h6 className={classes("content_2")}>
                      <span>AI-Powered Development Tools</span>
                    </h6>
                    <p className={classes("typography__body-1 content_3")}>
                      <span>AI-Driven Code Generation</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" className={classes("feature-card-1-button")}>
                      <span>View Profile</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_right_alt</span>
                      </span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
            </div>
          </div>
        </div>
        <div className={classes("row-layout features-section")}>
          <div className={classes("column-layout features-content")}>
            <div className={classes("column-layout features-header")}>
              <h4 className={classes("content_4")}>
                <span>Choose Your Pass</span>
              </h4>
              <h6 className={classes("features-subtitle")}>
                <span>Flexible options for your event experience.</span>
              </h6>
            </div>
            <div className={classes("row-layout feature-cards")}>
              <IgrCard className={classes("feature-card-1")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span> </span>
                  </h3>
                  <h5 slot="subtitle">
                    <span> </span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout day1-agenda")}>
                    <div className={classes("column-layout features-header")}>
                      <IgrAvatar shape="circle" className={classes("feature-card-1-avatar feature-card-1-avatar_10")}>
                        <span className={classes("material-icons icon")}>
                          <span>av_timer</span>
                        </span>
                      </IgrAvatar>
                      <div className={classes("column-layout hero-buttons-text")}>
                        <h5 className={classes("content_4")}>
                          <span>Single Day Pass</span>
                        </h5>
                        <h2 className={classes("pricing-card-1-price")}>
                          <span>$99</span>
                        </h2>
                      </div>
                    </div>
                    <p className={classes("typography__body-1 pricing-card-1-key-attribute")}>
                      <span>Access to one day of sessions.</span>
                    </p>
                    <IgrList className={classes("day1-list")}>
                      <IgrListItem>
                        <div slot="start">
                          <IgrAvatar shape="circle" className={classes("pricing-card-1-benefit-1-avatar pricing-card-1-benefit-1-avatar_1")}>
                            <span className={classes("material-icons icon_1")}>
                              <span>check</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div slot="title">Keynote access</div>
                      </IgrListItem>
                      <IgrListItem>
                        <div slot="start">
                          <IgrAvatar shape="circle" className={classes("pricing-card-1-benefit-1-avatar pricing-card-1-benefit-1-avatar_2")}>
                            <span className={classes("material-icons icon_1")}>
                              <span>check</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div slot="title">Networking events</div>
                      </IgrListItem>
                      <IgrListItem>
                        <div slot="start">
                          <IgrAvatar shape="circle" className={classes("pricing-card-1-benefit-1-avatar pricing-card-1-benefit-1-avatar_3")}>
                            <span className={classes("material-icons icon_1")}>
                              <span>check</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div slot="title">Coffee &amp; Lunch breaks</div>
                      </IgrListItem>
                      <IgrListItem>
                        <div slot="start">
                          <IgrAvatar shape="circle" className={classes("pricing-card-1-benefit-1-avatar pricing-card-1-benefit-1-avatar_4")}>
                            <span className={classes("material-icons icon_1")}>
                              <span>check</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div slot="title">Exclusive content</div>
                      </IgrListItem>
                    </IgrList>
                    <IgrButton type="button" className={classes("feature-card-1-button")}>
                      <span>Buy Day Pass</span>
                    </IgrButton>
                  </div>
                </IgrCardContent>
              </IgrCard>
              <IgrCard className={classes("feature-card-1")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span> </span>
                  </h3>
                  <h5 slot="subtitle">
                    <span> </span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout day1-agenda")}>
                    <div className={classes("column-layout features-header")}>
                      <IgrAvatar shape="circle" className={classes("feature-card-1-avatar feature-card-1-avatar_11")}>
                        <span className={classes("material-icons icon")}>
                          <span>av_timer</span>
                        </span>
                      </IgrAvatar>
                      <div className={classes("column-layout hero-buttons-text")}>
                        <h5 className={classes("content_4")}>
                          <span>2-Day Full Pass</span>
                        </h5>
                        <h2 className={classes("pricing-card-1-price")}>
                          <span>$149</span>
                        </h2>
                      </div>
                    </div>
                    <p className={classes("typography__body-1 pricing-card-1-key-attribute")}>
                      <span>Full access to both days.</span>
                    </p>
                    <IgrList className={classes("day1-list")}>
                      <IgrListItem>
                        <div slot="start">
                          <IgrAvatar shape="circle" className={classes("pricing-card-1-benefit-1-avatar pricing-card-1-benefit-1-avatar_5")}>
                            <span className={classes("material-icons icon_1")}>
                              <span>check</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div slot="title">All Day Pass benefits</div>
                      </IgrListItem>
                      <IgrListItem>
                        <div slot="start">
                          <IgrAvatar shape="circle" className={classes("pricing-card-1-benefit-1-avatar pricing-card-1-benefit-1-avatar_6")}>
                            <span className={classes("material-icons icon_1")}>
                              <span>check</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div slot="title">Premium swag bag</div>
                      </IgrListItem>
                      <IgrListItem>
                        <div slot="start">
                          <IgrAvatar shape="circle" className={classes("pricing-card-1-benefit-1-avatar pricing-card-1-benefit-1-avatar_7")}>
                            <span className={classes("material-icons icon_1")}>
                              <span>check</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div slot="title">Access to after-party</div>
                      </IgrListItem>
                      <IgrListItem>
                        <div slot="start">
                          <IgrAvatar shape="circle" className={classes("pricing-card-1-benefit-1-avatar pricing-card-1-benefit-1-avatar_8")}>
                            <span className={classes("material-icons icon_1")}>
                              <span>check</span>
                            </span>
                          </IgrAvatar>
                        </div>
                        <div slot="title">Certificate of attendance</div>
                      </IgrListItem>
                    </IgrList>
                    <IgrButton type="button" className={classes("feature-card-1-button")}>
                      <span>Buy Full Pass</span>
                    </IgrButton>
                  </div>
                </IgrCardContent>
              </IgrCard>
            </div>
          </div>
        </div>
        <div className={classes("row-layout location-section")}>
          <div className={classes("row-layout hero-content-container")}>
            <div className={classes("column-layout hero-content")}>
              <h4 className={classes("content_2")}>
                <span>Liberty Science Center</span>
              </h4>
              <p className={classes("typography__body-1 content_3")}>
                <span>Join us at the iconic Liberty Science Center, a world-renowned museum and learning center. Its innovative spaces and inspiring exhibits provide the perfect backdrop for a forward-thinking tech event.</span>
              </p>
              <div className={classes("column-layout location-buttons")}>
                <div className={classes("row-layout location-action-buttons")}>
                  <IgrButton type="button" className={classes("get-tickets-button")}>
                    <span>Get Directions</span>
                  </IgrButton>
                </div>
              </div>
            </div>
            <img src="/src/assets/Auto%20generated%20image%20for%20633e607c-fb7b-4262-8d7f-310515e320a2-044dc8f2-20ca-4843-8e63-79b51042f354.png" className={classes("hero-image")} />
          </div>
        </div>
        <div className={classes("row-layout agenda-section")}>
          <div className={classes("column-layout features-content")}>
            <div className={classes("column-layout features-header")}>
              <h4 className={classes("content_4")}>
                <span>Frequently Asked Questions</span>
              </h4>
              <h6 className={classes("features-subtitle")}>
                <span>Heading</span>
              </h6>
            </div>
            <div className={classes("row-layout feature-cards")}>
              <IgrAccordion singleExpand={true} className={classes("faq-accordion")}>
                <IgrExpansionPanel indicatorPosition="end">
                  <p className={classes("typography__body-2 content_3")}>
                    <span>You can register by clicking the 'Get Tickets' button on the homepage and choosing your preferred pass option (Single Day or 2-Day Full Pass). Follow the prompts to complete your registration.</span>
                  </p>
                  <span slot="title">How do I register for We DEVliver?</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel indicatorPosition="end">
                  <p className={classes("typography__body-2 content_3")}>
                    <span>We DEVliver takes place on November 18th and 21st. Registration on Day 1 is from 8:00 - 9:00. Each day includes a lunch break from 12:00 - 13:00 and coffee breaks in the morning and afternoon.</span>
                  </p>
                  <span slot="title">What are the dates and times for the event?</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel indicatorPosition="end">
                  <p className={classes("typography__body-2 content_3")}>
                    <span>The event will feature sessions relevant to React and AI, covering cutting-edge topics, deep dives into frameworks, practical applications, and future trends. Check the 'Agenda' section for detailed session titles and speakers.</span>
                  </p>
                  <span slot="title">What topics will be covered?</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel indicatorPosition="end">
                  <p className={classes("typography__body-2 content_3")}>
                    <span>Yes, a complimentary lunch will be provided each day from 12:00 - 13:00. Coffee breaks with light refreshments are also available in both morning and afternoon sessions.</span>
                  </p>
                  <span slot="title">Is lunch provided?</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel indicatorPosition="end">
                  <p className={classes("typography__body-2 content_3")}>
                    <span>The event will be held at the Liberty Science Center. You can find more details and get directions in the 'Location' section of our website.</span>
                  </p>
                  <span slot="title">What is the event location?</span>
                </IgrExpansionPanel>
              </IgrAccordion>
            </div>
          </div>
        </div>
        <div className={classes("column-layout footer-section")}>
          <div className={classes("row-layout footer-top")}>
            <div className={classes("row-layout footer-content")}>
              <div className={classes("column-layout footer-about")}>
                <div className={classes("row-layout footer-logo")}>
                  <span className={classes("material-icons footer-icon")}>
                    <span>code</span>
                  </span>
                  <p className={classes("typography__subtitle-2 content_3")}>
                    <span>We DEVliver</span>
                  </p>
                </div>
                <p className={classes("typography__body-2 content_5")}>
                  <span>We DEVliver: Your Gateway to Future Tech.</span>
                </p>
                <div className={classes("row-layout footer-social-media")}>
                  <span className={classes("imx-icon imx-twitter footer-twitter")}></span>
                  <span className={classes("imx-icon imx-facebook footer-twitter")}></span>
                  <span className={classes("imx-icon imx-instagram footer-twitter")}></span>
                </div>
              </div>
              <div className={classes("column-layout footer-about")}>
                <p className={classes("typography__subtitle-2 content_3")}>
                  <span>Event Links</span>
                </p>
                <a className={classes("typography__body-2 content_5")}>
                  <span>Agenda</span>
                </a>
                <a className={classes("typography__body-2 content_5")}>
                  <span>Speakers</span>
                </a>
                <a className={classes("typography__body-2 content_5")}>
                  <span>Tickets</span>
                </a>
                <a className={classes("typography__body-2 content_5")}>
                  <span>Location</span>
                </a>
              </div>
              <div className={classes("column-layout footer-about")}>
                <p className={classes("typography__subtitle-2 content_3")}>
                  <span>Legal</span>
                </p>
                <a className={classes("typography__body-2 content_5")}>
                  <span>Privacy Policy</span>
                </a>
                <a className={classes("typography__body-2 content_5")}>
                  <span>Terms of Service</span>
                </a>
                <a className={classes("typography__body-2 content_5")}>
                  <span>Refund Policy</span>
                </a>
                <a className={classes("typography__body-2 content_5")}>
                  <span>Code of Conduct</span>
                </a>
              </div>
              <div className={classes("column-layout footer-about")}>
                <p className={classes("typography__subtitle-2 content_3")}>
                  <span>Contact Us</span>
                </p>
                <div className={classes("row-layout footer-contact-email")}>
                  <span className={classes("material-icons footer-contact-email-icon")}>
                    <span>mail_outline</span>
                  </span>
                  <a className={classes("typography__body-2 footer-contact-email-link")}>
                    <span>support@wedevliver.com</span>
                  </a>
                </div>
                <div className={classes("row-layout footer-contact-email")}>
                  <span className={classes("material-icons footer-contact-email-icon")}>
                    <span>phone</span>
                  </span>
                  <p className={classes("typography__body-2 content_5")}>
                    <span>+1 555 123 4567</span>
                  </p>
                </div>
                <div className={classes("row-layout footer-contact-email")}>
                  <span className={classes("material-icons footer-contact-email-icon")}>
                    <span>business</span>
                  </span>
                  <p className={classes("typography__body-2 content_5")}>
                    <span>222 Jersey City Blvd, Jersey City, NJ 07305</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes("row-layout footer-bottom")}>
            <p className={classes("typography__body-2 content_5")}>
              <span>© 2025 We DEVliver - All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

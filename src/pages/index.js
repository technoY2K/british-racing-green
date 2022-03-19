import React from "react"
import Head from "../components/head"
import SubHead from "../components/subhead"
import Header from "../components/header"
import Content from "../components/content"
import Column from "../components/column/column"
import { Mercury, Venus, Pluto } from "../components/column/formats"
import { Helmet } from "react-helmet"

export default function X() {
    return (
        <>
            <Helmet>
                <meta name="image" property="og:image" content="/rGreen.png" />
                <meta property="og:title" content="Kevia's Street Journal" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kevia.me" />
                <meta
                    property="og:description"
                    content="Learn more about me here."
                />
            </Helmet>
            <Head>
                <Header>Kevia's Street Journal</Header>
                <SubHead>Phoenix, AZ - 00:00:00, 3000</SubHead>
            </Head>
            <Content>
                <main
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                    }}
                >
                    <Column>
                        <Mercury>
                            <span>{`"Start Here"`}</span>
                            <span>This is the intro</span>
                            <p>Hello 👋</p>
                            <p>🌐</p>
                            <p>
                                <a
                                    href="https://twitter.com/technoY2K"
                                    alt=""
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Twitter
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://github.com/technoY2K"
                                    alt=""
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://stackoverflow.com/users/3276646/technoY2K"
                                    alt=""
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Stackoverflow
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://www.linkedin.com/in/kevia-cloud"
                                    alt=""
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </p>
                            <p>
                                I think life is about the journey of becoming a
                                better ☸️ person everyday through discipline and
                                any Religion of your choosing 🙏.
                            </p>
                        </Mercury>
                    </Column>
                    <Column>
                        <Venus>
                            <span>Outside of Work</span>
                            <span>*****</span>
                            <p>
                                <ul style={{ listStyle: "none" }}>
                                    <h3>Reading</h3>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Basic_Economics"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Basic Economics
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://en.wikipedia.org/wiki/Snow_Crash"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Snow Crash
                                        </a>
                                    </li>
                                </ul>
                                <ul style={{ listStyle: "none" }}>
                                    <h3>Listening to</h3>
                                    <li>
                                        <a
                                            href="https://www.darude.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Darude
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/nervouststpilot?lang=en"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            nervous_testpilot
                                        </a>
                                    </li>
                                </ul>
                            </p>
                        </Venus>
                    </Column>
                    <Column>
                        <Pluto>
                            <span>Things I'm working on</span>
                            <span>work | hobby | leisure</span>
                            <p>
                                For my "JOB JOB" I build and maintain control
                                panel software for some big company worth a few
                                1 X 10^9, no big deal 😏 (just{" "}
                                <a
                                    href="https://www.globenewswire.com/news-release/2020/11/02/2118350/0/en/Endurance-International-Group-Announces-Agreement-to-be-Acquired-by-Clearlake-Capital-Group-L-P-for-9-50-per-Share.html"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    acquired
                                </a>
                                ). We're using React for the UI, a quasi custom
                                implementation of flux for state management,
                                webpack as our bundler all backed by a Perl API.
                                A common shared component library is used across
                                multiple teams to build a consistent and unified
                                user interface. The tools used to build the
                                design system are webpack, storybook and Lerna
                                to manage all the packages/components as a
                                monorepo. Working on this design system has been
                                very challenging but enjoyable.
                            </p>
                            <ul style={{ textAlign: "left" }}>
                                <li>
                                    <p>
                                        learning{" "}
                                        <a
                                            href="https://www.haskell.org/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Haskell
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        participated in the 2nd cohort of the{" "}
                                        <a
                                            href="https://plutus-pioneer-program.readthedocs.io/en/latest/plutus_pioneer_program.html"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Plutus Pioneer Program
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        my claim to{" "}
                                        <a
                                            href="https://github.com/input-output-hk/plutus-pioneer-program/pull/31"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            FAME
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </Pluto>
                    </Column>
                    <Column>
                        <Mercury>
                            <span>Built With</span>
                            <span>All the tech stuff</span>
                            <p>
                                This site was built using{" "}
                                <a
                                    href="https://www.gatsbyjs.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Gatsby
                                </a>
                                . Gatsby is just a static site generator. Under
                                the hood it's React and JavaScript with most of
                                the build process taken care of by Gatsby. I
                                styled it using styled components using only
                                CSS, no framework for the layout (PHEW). The
                                site is hosted on Netlify.
                            </p>
                            <p>
                                This site was created during the Covid-19
                                pandemic in 2020. Life on this planet at that
                                moment in time was surreal. Busy cities were
                                desolate and grocery store shelves were empty.
                                There were riots in the streets caused by pent
                                up anxiety from the pandemic lockdowns and
                                racial tensions in America. The leader of one of
                                the world's most powerful country was being
                                ruled by a man who embodied the characteristics
                                of the typical billionaire villain you would see
                                in comic books. I always wanted to update my
                                personal site so I guess you can say I had some
                                time on my hands. Alright take care and be safe.
                            </p>
                            <figure>
                                <img src="https://media.giphy.com/media/3ornjPaUwr60cYjXuE/giphy.gif" />
                            </figure>
                        </Mercury>
                    </Column>
                </main>
            </Content>
        </>
    )
}

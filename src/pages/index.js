import React, { Fragment } from "react"
import Head from "../components/head"
import SubHead from "../components/subhead"
import Header from "../components/header"
import Content from "../components/content"
import Column from "../components/column/column"
import { Mercury, Venus, Pluto } from "../components/column/formats"

export default function X(props) {
    return (
        <>
            <Head>
                <Header>Kevia's Street Journal</Header>
                <SubHead>Phoenix, AZ - 00:00:00, 3000</SubHead>
            </Head>
            <Content>
                <main>
                    <Column>
                        <Mercury>
                            <span>{`"Start Here"`}</span>
                            <span>This is the intro</span>
                            <p>
                                Welcome to my random thoughts, aha moments,
                                musings, rants and what not
                            </p>
                            <p>
                                So any way. Let's start off with where else you
                                can find me!
                            </p>
                            <p>
                                <a
                                    href="https://twitter.com/keviaDotMe"
                                    target="_blank"
                                >
                                    Twitter
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://github.com/jhamPac"
                                    target="_blank"
                                >
                                    Github
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://stackoverflow.com/users/3276646/jhampac"
                                    target="_blank"
                                >
                                    Stackoverflow
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://www.linkedin.com/in/kevia-cloud"
                                    target="_blank"
                                >
                                    LinkedIn
                                </a>
                            </p>
                            <p>
                                Yeah, as you can see I work as a software
                                engineer. Notice I said *I WORK* as a software
                                engineer as opposed to *I'AM* a software
                                engineer. I say that because my work doesn't
                                define me. Isn't weird how we always introduce
                                ourselves by our professions instead of with our
                                hobbies and interests? It might be hard for some
                                of us tho. Our profession is our hobby 👨🏽‍💻.
                            </p>
                        </Mercury>
                    </Column>
                    <Column>
                        <Venus>
                            <span>Yeezy Boost 350</span>
                            <span>***</span>
                            <p>
                                I rate them 3 out of 5 stars. The styling is
                                amazing but they feel a little "socky" after a
                                while. In terms of comfort the adidas ultra
                                boost are by far the best. But you can't deny
                                the profile of these shoes. Very innovative and
                                what the kids say these days... COOL.
                            </p>
                            <figure>
                                <img src="https://i.pinimg.com/originals/ef/c0/00/efc0001ecad2dc93e4ed5e92f1ab814e.jpg" />
                                <figcaption>
                                    Yeezy Boost 350 "red stripe"
                                </figcaption>
                            </figure>
                        </Venus>
                    </Column>
                    <Column>
                        <Pluto>
                            <span>Things I'm working on</span>
                            <span>work | hobby | leisure</span>
                            <p>
                                For my "JOB JOB" I build and maintain control
                                panel software for some big company worth a few
                                1 X 10^9, no big deal 😏. It's all in React,
                                webpack, front-end...blah blah. We are currently
                                working on building a design system for the
                                whole company using storybook as a monorepo with
                                Lerna.
                            </p>
                            <p>
                                Outside of my "JOB JOB" I code in Golang and I
                                work on distrubted web stuff with{" "}
                                <a href="https://ipfs.io/">IPFS</a>.I'm really
                                into blockchain, merkle trees (DAG),
                                cryptography, WEB 3.0 and all of that jazz 🎷.
                            </p>
                            <p>
                                Outside of software engineering, I mainly like
                                to read, walks through downtown PHX, 👀 fashion
                                (I guess I'm kind of a sneaker head) and the
                                journey to becoming a better person everyday.
                            </p>
                        </Pluto>
                    </Column>
                    <Column>
                        <Mercury>
                            <span>Built With</span>
                            <span>All the tech stuff</span>
                            <p>
                                This site was built using{" "}
                                <a href="https://www.gatsbyjs.org/">Gatsby</a>.
                                Gatsby is just a static site generator. Under
                                the hood it's React and JavaScript with most of
                                the build process taken care of by Gatsby. I
                                styled it using styled components using only
                                CSS, no framework for the layout (PHEW). The
                                site is hosted using Github pages using my
                                custom domain name.
                            </p>
                            <p>
                                I built it during this crazy Covid-19 pandemic.
                                This is absolutely surreal what is going on
                                right now. What a crazy time we live in. The
                                whole city is shutdown. Anyway I had some time
                                on my hands so I just went ahead and built this.
                                I always wanted to update my personal site but
                                procrastinated hard AF. Alright take care and be
                                safe.
                                <figure>
                                    <img src="https://media.giphy.com/media/XCm2bdvadvtur1Mr10/giphy.gif" />
                                </figure>
                            </p>
                        </Mercury>
                    </Column>
                </main>
            </Content>
        </>
    )
}

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
                            <span>Third</span>
                            <span>This is the intro</span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </Pluto>
                    </Column>
                    <Column>
                        <Mercury>
                            <span>Other Stuff</span>
                            <span>This is the intro</span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </Mercury>
                    </Column>
                </main>
            </Content>
        </>
    )
}

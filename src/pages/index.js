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
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </Mercury>
                    </Column>
                    <Column>
                        <Venus>
                            <span>Yeezy Boost 350</span>
                            <span>***</span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
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
                            <span>{`"Start Here"`}</span>
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

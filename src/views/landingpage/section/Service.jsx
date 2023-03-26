import styles from '../../../style';
import { Grid, Card, Text } from '@nextui-org/react';
import { washMachine, hanger, iron, clothes } from '../../../assets';

const Service = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col md:ml-20`} >
            <div className={`w-full xl:px-0 sm:px-16 px-6 space-x-20`} >
                <div className={`flex flex-row justify-start items-center`}>
                    <div className={`absolute bg-magenta container w-[16px] h-[150px] rounded-[50px] mt-20`}>
                    </div>
                    <div className={`flex flex-col font-righteous font-semibold z-20 ml-10`}>
                        <p className={`underline underline-offset-4 pt-20 text-2xl ${styles.copyright}`}>
                            Service
                        </p>
                        <h1 className={`${styles.heading2}`}>
                            Clean, Fresh <br />Fast, Easy!
                        </h1>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <Grid.Container gap={5} xs justify="center">
                        <Grid>
                            <Card css={{ background: "magenta", mw: "400px", }}>
                                <Card.Body>
                                    <img src={washMachine} alt="washing" />
                                    <Text css={{ fontFamily: "righteous", textAlign: "center" }}>
                                        Washing</Text>
                                    <div className={`border-4 rounded-5 p-5 container w-full text-center hover:bg-magentas hover:cursor-pointer`}>
                                        <a href="" className='text-white font-medium'>Learn More!</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Grid>
                        <Grid>
                            <Card css={{ background: "magenta", mw: "400px", size: "auto" }}>
                                <Card.Body>
                                    <img src={clothes} alt="clothes" />
                                    <Text css={{ fontFamily: "righteous", textAlign: "center" }}>
                                        Folding</Text>
                                    <div className={`border-4 rounded-5 p-5 container w-full text-center hover:bg-magentas hover:cursor-pointer`}>
                                        <a href="" className='text-white font-medium'>Learn More!</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Grid>
                        <Grid>
                            <Card css={{ background: "magenta", mw: "400px", }}>
                                <Card.Body>
                                    <img src={iron} alt="iron" />
                                    <Text css={{ fontFamily: "righteous", textAlign: "center", }}>
                                        Ironing Clothes</Text>
                                    <div className={`border-4 rounded-5 p-5 container w-full text-center hover:bg-magentas hover:cursor-pointer`}>
                                        <a href="" className='text-white font-medium'>Learn More!</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Grid>
                        <Grid>
                            <Card css={{ background: "magenta", mw: "400px", }}>
                                <Card.Body>
                                    <img src={hanger} alt="hanger" />
                                    <Text css={{ fontFamily: "righteous", textAlign: "center" }}>
                                        Dry Cleaning</Text>
                                    <div className={`border-4 rounded-5 p-5 container w-full text-center hover:bg-magentas hover:cursor-pointer`}>
                                        <a href="" className='text-white font-medium'>Learn More!</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Grid>
                    </Grid.Container>
                </div>
            </div>
        </section>
    )
}

export default Service
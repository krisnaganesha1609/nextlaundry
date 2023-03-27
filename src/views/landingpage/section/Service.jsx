import styles from '../../../style';
import { Grid, Card, Text, Row, Spacer } from '@nextui-org/react';
import { washMachine, hanger, iron, clothes } from '../../../assets';

const Service = () => {
    return (
        <section id="services" className={`flex md:flex-row flex-col  ${styles.paddingX}`} >
            <div className={`w-full xl:px-0 sm:px-16 px-6 space-x-20`} >
                <div className={`flex flex-row justify-start items-center`}>
                    <div className={`bg-magenta container w-[16px] h-[150px] rounded-[50px] mt-20`}>
                    </div>
                    <div className={`flex flex-col font-righteous font-semibold ml-10`}>
                        <p className={`underline underline-offset-4 pt-20 text-2xl ${styles.copyright}`}>
                            Service
                        </p>
                        <h1 className={`${styles.heading2}`}>
                            Clean, Fresh <br />Fast, Easy!
                        </h1>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <Grid.Container gap={5} justify="center">
                        <Grid xs>
                            <Card css={{ background: "magenta", mw: "400px", borderRadius: 30 }}>
                                    <Card.Body>
                                    <div className='mx-auto border-4 rounded-full p-6'>
                                        <img src={washMachine} alt="washing" />
                                    </div>
                                    <Spacer y={2} />
                                        <Text css={{ fontFamily: "righteous", textAlign: "center", color: "White" }}>
                                            Washing</Text>
                                            <Spacer />
                                    <div className={`mx-auto border-black border-4 rounded-2xl p-5 container w-max text-center hover:bg-magenta hover:border-white hover:cursor-pointer`}>
                                            <a href="" className='text-black font-righteous font-medium'>Learn More!</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                        </Grid>
                        <Grid xs>
                                <Card css={{ background: "magenta", mw: "400px", borderRadius: 30 }}>
                                    <Card.Body>
                                        <div className='mx-auto border-4 rounded-full p-6'>
                                            <img src={clothes} alt="clothes" />
                                        </div>
                                        <Spacer y={2}/>
                                    <Text css={{ fontFamily: "righteous", textAlign: "center", color: "White" }}>
                                            Folding</Text>
                                            <Spacer />
                                    <div className={`mx-auto border-black border-4 rounded-2xl p-5 container w-max text-center hover:bg-magenta hover:border-white hover:cursor-pointer`}>
                                        <a href="" className='text-black font-righteous font-medium'>Learn More!</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                        </Grid>
                        <Grid xs>
                            <Card css={{ background: "magenta", mw: "400px", borderRadius: 30 }}>
                                    <Card.Body>
                                    <div className='mx-auto border-4 rounded-full p-5'>
                                        <img src={iron} alt="iron" />
                                    </div>
                                    <Spacer y={2} />
                                    <Text css={{ fontFamily: "righteous", textAlign: "center", color: "White" }}>
                                            Ironing Clothes</Text>
                                            <Spacer />
                                    <div className={`mx-auto border-black border-4 rounded-2xl p-5 container w-max text-center hover:bg-magenta hover:border-white hover:cursor-pointer`}>
                                        <a href="" className='text-black font-righteous font-medium'>Learn More!</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                        </Grid>
                        <Grid xs>
                            <Card css={{ background: "magenta", mw: "400px", borderRadius: 30 }}>
                                    <Card.Body>
                                    <div className='mx-auto border-4 rounded-full p-6'>
                                        <img src={hanger} alt="hanger" />
                                    </div>
                                    <Spacer y={2}/>
                                    <Text css={{ fontFamily: "righteous", textAlign: "center", color: "White" }}>
                                            Dry Cleaning</Text>
                                            <Spacer />
                                    <div className={`mx-auto border-black border-4 rounded-2xl p-5 container w-max text-center hover:bg-magenta hover:border-white hover:cursor-pointer`}>
                                            <a href="" className='text-black font-righteous font-medium'>Learn More!</a>
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
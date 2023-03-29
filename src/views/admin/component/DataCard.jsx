import { Card, Row, Text, Grid } from '@nextui-org/react'
import React from 'react'
import styles from '../../../style'

const DataCard = ({header, total, percent, trending, footer}) => {
  return (
    <Grid xs={4} >
        <Card isHoverable>
            <Card.Header className='bg-purple'>
                  <Text h3 className={`${styles.copyright} ml-4`} css={{ color: '$white', opacity: 0.5 }}>{header}</Text>
            </Card.Header>
            <Card.Body className='bg-purple'>
                      <Text h2 className='font-righteous font-bold text-2xl ml-4' css={{color: '$white'}}>{total}</Text>
            </Card.Body>
        </Card>
    </Grid>
  )
}

export default DataCard
import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const KatsuStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const katsuSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Katsu Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total KATSU Supply')}</Text>
          {katsuSupply && <CardValue fontSize="14px" value={katsuSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total KATSU Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New KATSU/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={22} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default KatsuStats

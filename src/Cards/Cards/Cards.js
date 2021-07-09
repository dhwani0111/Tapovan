import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Card.elements';

function Card() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>News Section</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                {/* <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon> */}
                <PricingCardPlan>Desc Line1</PricingCardPlan>
                <PricingCardCost>Line2</PricingCardCost>
                <PricingCardLength>Line3</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                {/* <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon> */}
                <PricingCardPlan>Desc Line1</PricingCardPlan>
                <PricingCardCost>Line2</PricingCardCost>
                <PricingCardLength>Line3</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                {/* <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon> */}
                <PricingCardPlan>Desc Line1</PricingCardPlan>
                <PricingCardCost>Line2</PricingCardCost>
                <PricingCardLength>Line3</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Card;
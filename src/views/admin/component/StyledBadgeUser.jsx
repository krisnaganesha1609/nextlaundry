import { styled } from '@nextui-org/react';

export const StyledBadgeUser = styled('span', {
    display: 'inline-block',
    textTransform: 'uppercase',
    padding: '$2 $3',
    margin: '0 2px',
    fontSize: '10px',
    fontWeight: '$bold',
    borderRadius: '14px',
    letterSpacing: '0.6px',
    lineHeight: 1,
    boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
    alignItems: 'center',
    alignSelf: 'center',
    color: '$white',
    variants: {
        type: {
            admin: {
                bg: '$primaryLight',
                color: '$primaryLightContrast'
            },
            cashier: {
                bg: '$secondaryLight',
                color: '$secondaryLightContrast'
            },
            owner: {
                bg: '$successLight',
                color: '$successLightContrast'
            }
        }
    },
    defaultVariants: {
        type: 'active'
    }
});

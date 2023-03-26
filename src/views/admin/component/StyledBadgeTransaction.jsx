import { styled } from '@nextui-org/react';

export const StyledBadgeTransactionStatus = styled('span', {
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
            baru: {
                bg: '$primaryLight',
                color: '$primaryLightContrast'
            },
            proses: {
                bg: '$warningLight',
                color: '$warningLightContrast'
            },
            selesai: {
                bg: '$successLight',
                color: '$successLightContrast'
            },
            diambil: {
                bg: '$secondaryLight',
                color: '$secondaryLightContrast'
            }
        }
    },
    defaultVariants: {
        type: 'active'
    }
});

export const StyledBadgeTransactionPaidStatus = styled('span', {
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
            dibayar: {
                bg: '$successLight',
                color: '$successLightContrast'
            },
            belum_dibayar: {
                bg: '$errorLight',
                color: '$errorLightContrast'
            }
        }
    },
    defaultVariants: {
        type: 'active'
    }
});
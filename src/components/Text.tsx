import {ReactNode} from "react";

export enum TextVariant {
    H1 = 'H1',
    H2 = 'H2',
    H3 = 'H3',
    P = 'P',
    B = 'B',
}

type TextProps = {
    children: ReactNode;
    variant: TextVariant;
};
const Text = ({children, variant}:TextProps) => {
    const variantStyleMap = {
        [TextVariant.H1]: 'lg:text-[52px] text-[40px] font-bold',
        [TextVariant.H2]: '',
        [TextVariant.H3]: 'text-[20px] font-normal',
        [TextVariant.P]: 'text-[20px] font-light',
        [TextVariant.B]: 'text-[20px] font-bold'
    };

    return (
        <p className={variantStyleMap[variant]}>
            {children}
        </p>
    );
};


export default Text;
import { BotContext } from '@/types';
export declare const setPaymentInProgressInStorage: (state: {
    sessionId: string;
    probot: BotContext['probot'];
}) => void;
export declare const getPaymentInProgressInStorage: () => string | null;
export declare const removePaymentInProgressFromStorage: () => void;
//# sourceMappingURL=paymentInProgressStorage.d.ts.map
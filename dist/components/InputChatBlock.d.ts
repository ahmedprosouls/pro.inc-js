import type { ChatReply, Theme } from '@typebot.io/schemas';
import { BotContext } from '@/types';
type Props = {
    ref: HTMLDivElement | undefined;
    block: NonNullable<ChatReply['input']>;
    hasHostAvatar: boolean;
    guestAvatar?: Theme['chat']['guestAvatar'];
    inputIndex: number;
    context: BotContext;
    isInputPrefillEnabled: boolean;
    hasError: boolean;
    onSubmit: (answer: string) => void;
    onSkip: () => void;
};
export declare const InputChatBlock: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=InputChatBlock.d.ts.map
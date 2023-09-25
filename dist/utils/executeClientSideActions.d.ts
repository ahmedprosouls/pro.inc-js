import { ClientSideActionContext } from '@/types';
import type { ChatReply, ReplyLog } from '@typebot.io/schemas';
type Props = {
    clientSideAction: NonNullable<ChatReply['clientSideActions']>[0];
    context: ClientSideActionContext;
    onMessageStream?: (message: string) => void;
};
export declare const executeClientSideAction: ({ clientSideAction, context, onMessageStream, }: Props) => Promise<{
    blockedPopupUrl: string;
} | {
    replyToSend: string | undefined;
    logs?: ReplyLog[];
} | void>;
export {};
//# sourceMappingURL=executeClientSideActions.d.ts.map
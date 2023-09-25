import type { StartParams } from '@typebot.io/schemas';
export declare function getInitialChatReplyQuery({ typebot, isPreview, apiHost, prefilledVariables, startGroupId, resultId, stripeRedirectStatus, }: StartParams & {
    stripeRedirectStatus?: string;
    apiHost?: string;
}): Promise<{
    data: {
        probot?: any;
        messages: ({
            id: string;
        } & ({
            type: import("@typebot.io/schemas").BubbleBlockType.TEXT;
            content: {
                richText: any[];
                html?: string | undefined;
                plainText?: string | undefined;
            };
        } | {
            type: import("@typebot.io/schemas").BubbleBlockType.IMAGE;
            content: {
                url?: string | undefined;
                clickLink?: {
                    url?: string | undefined;
                    alt?: string | undefined;
                } | undefined;
            };
        } | {
            type: import("@typebot.io/schemas").BubbleBlockType.VIDEO;
            content: {
                url?: string | undefined;
                id?: string | undefined;
                type?: import("@typebot.io/schemas").VideoBubbleContentType | undefined;
            };
        } | {
            type: import("@typebot.io/schemas").BubbleBlockType.AUDIO;
            content: {
                url?: string | undefined;
                isAutoplayEnabled?: boolean | undefined;
            };
        } | {
            type: import("@typebot.io/schemas").BubbleBlockType.EMBED;
            content: {
                url?: string | undefined;
                height?: number | undefined;
            };
        }))[];
        input?: (({
            id: string;
            groupId: string;
            options: {
                isMultipleChoice: boolean;
                buttonLabel: string;
                variableId?: string | undefined;
                dynamicVariableId?: string | undefined;
                isSearchable?: boolean | undefined;
                searchInputPlaceholder?: string | undefined;
            };
            type: import("@typebot.io/schemas").InputBlockType.CHOICE;
            items: {
                id: string;
                type: import("@typebot.io/schemas").ItemType.BUTTON;
                outgoingEdgeId?: string | undefined;
                blockId?: string | undefined;
                content?: string | undefined;
                displayCondition?: {
                    isEnabled?: boolean | undefined;
                    condition?: {
                        logicalOperator: import("@typebot.io/schemas").LogicalOperator;
                        comparisons: {
                            id: string;
                            variableId?: string | undefined;
                            comparisonOperator?: import("@typebot.io/schemas").ComparisonOperators | undefined;
                            value?: string | undefined;
                        }[];
                    } | undefined;
                } | undefined;
            }[];
            outgoingEdgeId?: string | undefined;
        } | {
            id: string;
            groupId: string;
            options: {
                labels: {
                    button: string;
                    from: string;
                    to: string;
                };
                hasTime: boolean;
                isRange: boolean;
                variableId?: string | undefined;
                format?: string | undefined;
                min?: string | undefined;
                max?: string | undefined;
            };
            type: import("@typebot.io/schemas").InputBlockType.DATE;
            outgoingEdgeId?: string | undefined;
        } | {
            id: string;
            groupId: string;
            options: {
                labels: {
                    button: string;
                    placeholder: string;
                };
                isLong: boolean;
                variableId?: string | undefined;
            };
            type: import("@typebot.io/schemas").InputBlockType.TEXT;
            outgoingEdgeId?: string | undefined;
        } | {
            id: string;
            groupId: string;
            options: {
                labels: {
                    button: string;
                    placeholder: string;
                };
                variableId?: string | undefined;
                retryMessageContent?: string | undefined;
            };
            type: import("@typebot.io/schemas").InputBlockType.EMAIL;
            outgoingEdgeId?: string | undefined;
        } | {
            id: string;
            groupId: string;
            options: {
                labels: {
                    button: string;
                    placeholder: string;
                    clear?: string | undefined;
                    skip?: string | undefined;
                };
                isMultipleAllowed: boolean;
                variableId?: string | undefined;
                isRequired?: boolean | undefined;
                sizeLimit?: number | undefined;
            };
            type: import("@typebot.io/schemas").InputBlockType.FILE;
            outgoingEdgeId?: string | undefined;
        } | {
            id: string;
            groupId: string;
            options: {
                labels: {
                    button: string;
                    placeholder: string;
                };
                variableId?: string | undefined;
                min?: number | `{{${string}}}` | undefined;
                max?: number | `{{${string}}}` | undefined;
                step?: number | `{{${string}}}` | undefined;
            };
            type: import("@typebot.io/schemas").InputBlockType.NUMBER;
            outgoingEdgeId?: string | undefined;
        } | {
            id: string;
            groupId: string;
            options: {
                labels: {
                    button: string;
                    success?: string | undefined;
                };
                provider: import("@typebot.io/schemas").PaymentProvider;
                currency: string;
                variableId?: string | undefined;
                additionalInformation?: {
                    description?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                    phoneNumber?: string | undefined;
                    address?: {
                        country?: string | undefined;
                        line1?: string | undefined;
                        line2?: string | undefined;
                        state?: string | undefined;
                        city?: string | undefined;
                        postalCode?: string | undefined;
                    } | undefined;
                } | undefined;
                credentialsId?: string | undefined;
                amount?: string | undefined;
                retryMessageContent?: string | undefined;
            };
            type: import("@typebot.io/schemas").InputBlockType.PAYMENT;
            outgoingEdgeId?: string | undefined;
        } | {
            id: string;
            groupId: string;
            options: {
                labels: {
                    button: string;
                    placeholder: string;
                };
                retryMessageContent: string;
                variableId?: string | undefined;
                defaultCountryCode?: string | undefined;
            };
            type: import("@typebot.io/schemas").InputBlockType.PHONE;
            outgoingEdgeId?: string | undefined;
        } | {
            id: string;
            groupId: string;
            options: {
                length: number;
                labels: {
                    button: string;
                    left?: string | undefined;
                    right?: string | undefined;
                };
                buttonType: "Icons" | "Numbers";
                customIcon: {
                    isEnabled: boolean;
                    svg?: string | undefined;
                };
                variableId?: string | undefined;
                isOneClickSubmitEnabled?: boolean | undefined;
            };
            type: import("@typebot.io/schemas").InputBlockType.RATING;
            outgoingEdgeId?: string | undefined;
        } | {
            id: string;
            groupId: string;
            options: {
                labels: {
                    button: string;
                    placeholder: string;
                };
                retryMessageContent: string;
                variableId?: string | undefined;
            };
            type: import("@typebot.io/schemas").InputBlockType.URL;
            outgoingEdgeId?: string | undefined;
        } | {
            id: string;
            groupId: string;
            options: {
                buttonLabel: string;
                searchInputPlaceholder: string;
                variableId?: string | undefined;
                isMultipleChoice?: boolean | undefined;
                isSearchable?: boolean | undefined;
                dynamicItems?: {
                    isEnabled?: boolean | undefined;
                    titlesVariableId?: string | undefined;
                    descriptionsVariableId?: string | undefined;
                    pictureSrcsVariableId?: string | undefined;
                } | undefined;
            };
            type: import("@typebot.io/schemas").InputBlockType.PICTURE_CHOICE;
            items: {
                id: string;
                type: import("@typebot.io/schemas").ItemType.PICTURE_CHOICE;
                outgoingEdgeId?: string | undefined;
                blockId?: string | undefined;
                pictureSrc?: string | undefined;
                title?: string | undefined;
                description?: string | undefined;
                displayCondition?: {
                    isEnabled?: boolean | undefined;
                    condition?: {
                        logicalOperator: import("@typebot.io/schemas").LogicalOperator;
                        comparisons: {
                            id: string;
                            variableId?: string | undefined;
                            comparisonOperator?: import("@typebot.io/schemas").ComparisonOperators | undefined;
                            value?: string | undefined;
                        }[];
                    } | undefined;
                } | undefined;
            }[];
            outgoingEdgeId?: string | undefined;
        }) & {
            prefilledValue?: string | undefined;
            runtimeOptions?: {
                paymentIntentSecret: string;
                amountLabel: string;
                publicKey: string;
            } | undefined;
        }) | undefined;
        clientSideActions?: ({
            lastBubbleBlockId?: string | undefined;
            expectsDedicatedReply?: boolean | undefined;
        } & ({
            scriptToExecute: {
                content: string;
                args: {
                    id: string;
                    value?: string | number | boolean | (string | null)[] | null | undefined;
                }[];
            };
        } | {
            redirect: {
                isNewTab: boolean;
                url?: string | undefined;
            };
        } | {
            chatwoot: {
                scriptToExecute: {
                    content: string;
                    args: {
                        id: string;
                        value?: string | number | boolean | (string | null)[] | null | undefined;
                    }[];
                };
            };
        } | {
            googleAnalytics: {
                trackingId?: string | undefined;
                category?: string | undefined;
                action?: string | undefined;
                label?: string | undefined;
                value?: number | `{{${string}}}` | undefined;
                sendTo?: string | undefined;
            };
        } | {
            wait: {
                secondsToWaitFor: number;
            };
        } | {
            setVariable: {
                scriptToExecute: {
                    content: string;
                    args: {
                        id: string;
                        value?: string | number | boolean | (string | null)[] | null | undefined;
                    }[];
                };
            };
        } | {
            streamOpenAiChatCompletion: {
                messages: {
                    content?: string | undefined;
                    role?: "user" | "system" | "assistant" | undefined;
                }[];
                displayStream?: boolean | undefined;
            };
        } | {
            webhookToExecute: {
                url: string;
                headers?: Record<string, string> | undefined;
                body?: unknown;
                method?: import("@typebot.io/schemas/features/blocks/integrations/webhook/enums").HttpMethod | undefined;
            };
        } | {
            startPropsToInject: {
                googleAnalyticsId?: string | undefined;
                pixelId?: string | undefined;
                gtmId?: string | undefined;
                customHeadCode?: string | undefined;
            };
        } | {
            pixel: {
                params?: {
                    id: string;
                    key?: string | undefined;
                    value?: any;
                }[] | undefined;
                pixelId?: string | undefined;
                isInitSkip?: boolean | undefined;
                eventType?: undefined;
            } | {
                eventType: "Lead" | "Contact" | "CompleteRegistration" | "Schedule" | "SubmitApplication" | "ViewContent" | "AddPaymentInfo" | "AddToCart" | "AddToWishlist" | "CustomizeProduct" | "Donate" | "FindLocation" | "InitiateCheckout" | "Purchase" | "Search" | "StartTrial" | "Subscribe";
                params?: {
                    id: string;
                    key?: string | undefined;
                    value?: any;
                }[] | undefined;
                pixelId?: string | undefined;
                isInitSkip?: boolean | undefined;
            } | {
                eventType: "Custom";
                params?: {
                    id: string;
                    key?: string | undefined;
                    value?: any;
                }[] | undefined;
                pixelId?: string | undefined;
                isInitSkip?: boolean | undefined;
                name?: string | undefined;
            };
        }))[] | undefined;
        sessionId: string;
        typebot: {
            id: string;
            theme: {
                general: {
                    font: string;
                    background: {
                        type: import("@typebot.io/schemas").BackgroundType;
                        content?: string | undefined;
                    };
                };
                chat: {
                    buttons: {
                        backgroundColor: string;
                        color: string;
                    };
                    hostBubbles: {
                        backgroundColor: string;
                        color: string;
                    };
                    guestBubbles: {
                        backgroundColor: string;
                        color: string;
                    };
                    inputs: {
                        backgroundColor: string;
                        color: string;
                        placeholderColor: string;
                    };
                    hostAvatar?: {
                        isEnabled: boolean;
                        url?: string | undefined;
                    } | undefined;
                    guestAvatar?: {
                        isEnabled: boolean;
                        url?: string | undefined;
                    } | undefined;
                    roundness?: "medium" | "large" | "none" | undefined;
                };
                customCss?: string | undefined;
            };
            settings: {
                metadata: {
                    title?: string | undefined;
                    description?: string | undefined;
                    imageUrl?: string | undefined;
                    favIconUrl?: string | undefined;
                    customHeadCode?: string | undefined;
                    googleTagManagerId?: string | undefined;
                };
                general: {
                    isBrandingEnabled: boolean;
                    isTypingEmulationEnabled?: boolean | undefined;
                    isInputPrefillEnabled?: boolean | undefined;
                    isHideQueryParamsEnabled?: boolean | undefined;
                    isNewResultOnRefreshEnabled?: boolean | undefined;
                    rememberUser?: {
                        isEnabled?: boolean | undefined;
                        storage?: "session" | "local" | undefined;
                    } | undefined;
                };
                typingEmulation: {
                    enabled: boolean;
                    speed: number;
                    maxDelay: number;
                };
                whatsApp?: {
                    credentialsId?: string | undefined;
                    startCondition?: {
                        logicalOperator: import("@typebot.io/schemas").LogicalOperator;
                        comparisons: {
                            id: string;
                            comparisonOperator?: import("@typebot.io/schemas").ComparisonOperators | undefined;
                            value?: string | undefined;
                        }[];
                    } | undefined;
                } | undefined;
            };
        };
        resultId?: string | undefined;
        dynamicTheme?: {
            hostAvatarUrl?: string | undefined;
            guestAvatarUrl?: string | undefined;
        } | undefined;
        logs?: {
            status: string;
            description: string;
            details?: unknown;
        }[] | undefined;
        lastMessageNewFormat?: string | undefined;
    } | undefined;
    error: Error | undefined;
}>;
//# sourceMappingURL=getInitialChatReplyQuery.d.ts.map
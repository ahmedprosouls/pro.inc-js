import type { SendMessageInput } from '@typebot.io/schemas';
export declare const sendMessageQuery: ({ apiHost, ...body }: {
    message?: string | undefined;
    sessionId?: string | undefined;
    startParams?: {
        typebot: (string | {
            variables: {
                id: string;
                name: string;
                value?: string | (string | null)[] | null | undefined;
            }[];
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
            version: "3" | "4" | "5" | null;
            groups: {
                id: string;
                title: string;
                graphCoordinates: {
                    x: number;
                    y: number;
                };
                blocks: ({
                    id: string;
                    groupId: string;
                    type: import("@typebot.io/schemas").BubbleBlockType.AUDIO;
                    content: {
                        url?: string | undefined;
                        isAutoplayEnabled?: boolean | undefined;
                    };
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    type: import("@typebot.io/schemas").BubbleBlockType.EMBED;
                    content: {
                        height: number | `{{${string}}}`;
                        url?: string | undefined;
                    };
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    type: import("@typebot.io/schemas").BubbleBlockType.IMAGE;
                    content: {
                        url?: string | undefined;
                        clickLink?: {
                            url?: string | undefined;
                            alt?: string | undefined;
                        } | undefined;
                    };
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    type: import("@typebot.io/schemas").BubbleBlockType.TEXT;
                    content: {
                        richText: any[];
                        html?: string | undefined;
                        plainText?: string | undefined;
                    };
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    type: import("@typebot.io/schemas").BubbleBlockType.VIDEO;
                    content: {
                        url?: string | undefined;
                        id?: string | undefined;
                        type?: import("@typebot.io/schemas").VideoBubbleContentType | undefined;
                    };
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    type: import("@typebot.io/schemas").LogicBlockType.CONDITION;
                    items: {
                        id: string;
                        type: import("@typebot.io/schemas").ItemType.CONDITION;
                        content: {
                            logicalOperator: import("@typebot.io/schemas").LogicalOperator;
                            comparisons: {
                                id: string;
                                variableId?: string | undefined;
                                comparisonOperator?: import("@typebot.io/schemas").ComparisonOperators | undefined;
                                value?: string | undefined;
                            }[];
                        };
                        outgoingEdgeId?: string | undefined;
                        blockId?: string | undefined;
                    }[];
                    outgoingEdgeId?: string | undefined;
                } | {
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
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        baseUrl: string;
                        websiteToken: string;
                        task?: "Show widget" | "Close widget" | undefined;
                        user?: {
                            id?: string | undefined;
                            email?: string | undefined;
                            name?: string | undefined;
                            avatarUrl?: string | undefined;
                            phoneNumber?: string | undefined;
                        } | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.CHATWOOT;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        trackingId?: string | undefined;
                        category?: string | undefined;
                        action?: string | undefined;
                        label?: string | undefined;
                        value?: number | `{{${string}}}` | undefined;
                        sendTo?: string | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.GOOGLE_ANALYTICS;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        credentialsId?: string | undefined;
                        sheetId?: string | undefined;
                        spreadsheetId?: string | undefined;
                        action?: undefined;
                    } | {
                        action: import("@typebot.io/schemas").GoogleSheetsAction.GET;
                        cellsToExtract: {
                            id: string;
                            column?: string | undefined;
                            variableId?: string | undefined;
                        }[];
                        credentialsId?: string | undefined;
                        sheetId?: string | undefined;
                        spreadsheetId?: string | undefined;
                        referenceCell?: {
                            id: string;
                            column?: string | undefined;
                            value?: string | undefined;
                        } | undefined;
                        filter?: {
                            logicalOperator: import("@typebot.io/schemas").LogicalOperator;
                            comparisons: {
                                id: string;
                                column?: string | undefined;
                                comparisonOperator?: import("@typebot.io/schemas").ComparisonOperators | undefined;
                                value?: string | undefined;
                            }[];
                        } | undefined;
                        totalRowsToExtract?: "All" | "First" | "Last" | "Random" | undefined;
                    } | {
                        action: import("@typebot.io/schemas").GoogleSheetsAction.INSERT_ROW;
                        cellsToInsert: {
                            id: string;
                            column?: string | undefined;
                            value?: string | undefined;
                        }[];
                        credentialsId?: string | undefined;
                        sheetId?: string | undefined;
                        spreadsheetId?: string | undefined;
                    } | {
                        action: import("@typebot.io/schemas").GoogleSheetsAction.UPDATE_ROW;
                        cellsToUpsert: {
                            id: string;
                            column?: string | undefined;
                            value?: string | undefined;
                        }[];
                        credentialsId?: string | undefined;
                        sheetId?: string | undefined;
                        spreadsheetId?: string | undefined;
                        referenceCell?: {
                            id: string;
                            column?: string | undefined;
                            value?: string | undefined;
                        } | undefined;
                        filter?: {
                            logicalOperator: import("@typebot.io/schemas").LogicalOperator;
                            comparisons: {
                                id: string;
                                column?: string | undefined;
                                comparisonOperator?: import("@typebot.io/schemas").ComparisonOperators | undefined;
                                value?: string | undefined;
                            }[];
                        } | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.GOOGLE_SHEETS;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        variablesForTest: {
                            id: string;
                            variableId?: string | undefined;
                            value?: string | undefined;
                        }[];
                        responseVariableMapping: {
                            id: string;
                            variableId?: string | undefined;
                            bodyPath?: string | undefined;
                        }[];
                        isAdvancedConfig?: boolean | undefined;
                        isCustomBody?: boolean | undefined;
                        isExecutedOnClient?: boolean | undefined;
                        webhook?: {
                            id: string;
                            queryParams: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            headers: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            method: import("@typebot.io/schemas/features/blocks/integrations/webhook/enums").HttpMethod;
                            url?: string | undefined;
                            body?: string | undefined;
                        } | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.WEBHOOK;
                    outgoingEdgeId?: string | undefined;
                    webhookId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        variablesForTest: {
                            id: string;
                            variableId?: string | undefined;
                            value?: string | undefined;
                        }[];
                        responseVariableMapping: {
                            id: string;
                            variableId?: string | undefined;
                            bodyPath?: string | undefined;
                        }[];
                        isAdvancedConfig?: boolean | undefined;
                        isCustomBody?: boolean | undefined;
                        isExecutedOnClient?: boolean | undefined;
                        webhook?: {
                            id: string;
                            queryParams: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            headers: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            method: import("@typebot.io/schemas/features/blocks/integrations/webhook/enums").HttpMethod;
                            url?: string | undefined;
                            body?: string | undefined;
                        } | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.MAKE_COM;
                    outgoingEdgeId?: string | undefined;
                    webhookId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        variablesForTest: {
                            id: string;
                            variableId?: string | undefined;
                            value?: string | undefined;
                        }[];
                        responseVariableMapping: {
                            id: string;
                            variableId?: string | undefined;
                            bodyPath?: string | undefined;
                        }[];
                        isAdvancedConfig?: boolean | undefined;
                        isCustomBody?: boolean | undefined;
                        isExecutedOnClient?: boolean | undefined;
                        webhook?: {
                            id: string;
                            queryParams: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            headers: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            method: import("@typebot.io/schemas/features/blocks/integrations/webhook/enums").HttpMethod;
                            url?: string | undefined;
                            body?: string | undefined;
                        } | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.PABBLY_CONNECT;
                    outgoingEdgeId?: string | undefined;
                    webhookId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        credentialsId: string;
                        recipients: string[];
                        isCustomBody?: boolean | undefined;
                        isBodyCode?: boolean | undefined;
                        subject?: string | undefined;
                        body?: string | undefined;
                        replyTo?: string | undefined;
                        cc?: string[] | undefined;
                        bcc?: string[] | undefined;
                        attachmentsVariableId?: string | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.EMAIL;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        variablesForTest: {
                            id: string;
                            variableId?: string | undefined;
                            value?: string | undefined;
                        }[];
                        responseVariableMapping: {
                            id: string;
                            variableId?: string | undefined;
                            bodyPath?: string | undefined;
                        }[];
                        isAdvancedConfig?: boolean | undefined;
                        isCustomBody?: boolean | undefined;
                        isExecutedOnClient?: boolean | undefined;
                        webhook?: {
                            id: string;
                            queryParams: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            headers: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            method: import("@typebot.io/schemas/features/blocks/integrations/webhook/enums").HttpMethod;
                            url?: string | undefined;
                            body?: string | undefined;
                        } | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.ZAPIER;
                    outgoingEdgeId?: string | undefined;
                    webhookId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
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
                    type: import("@typebot.io/schemas").IntegrationBlockType.PIXEL;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        responseMapping: {
                            id: string;
                            valueToExtract: "Summary" | "Results";
                            variableId?: string | undefined;
                        }[];
                        credentialsId?: string | undefined;
                        projectId?: string | undefined;
                        systemPrompt?: string | undefined;
                        prompt?: string | undefined;
                        query?: string | undefined;
                        maxResults?: number | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.ZEMANTIC_AI;
                    outgoingEdgeId?: string | undefined;
                    blockId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        name: string;
                        content?: string | undefined;
                        shouldExecuteInParentContext?: boolean | undefined;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.SCRIPT;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        isNewTab: boolean;
                        url?: string | undefined;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.REDIRECT;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        variableId?: string | undefined;
                        expressionToEvaluate?: string | undefined;
                        isCode?: boolean | undefined;
                        type?: "Custom" | "Empty" | "User ID" | "Now" | "Today" | "Yesterday" | "Tomorrow" | "Random ID" | "Moment of the day" | "Map item with same index" | "Phone number" | "Contact name" | undefined;
                        mapListItemParams?: {
                            baseItemVariableId?: string | undefined;
                            baseListVariableId?: string | undefined;
                            targetListVariableId?: string | undefined;
                        } | undefined;
                        isExecutedOnClient?: boolean | undefined;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.SET_VARIABLE;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        typebotId?: string | undefined;
                        groupId?: string | undefined;
                        mergeResults?: boolean | undefined;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.TYPEBOT_LINK;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        secondsToWaitFor?: string | undefined;
                        shouldPause?: boolean | undefined;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.WAIT;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        aPercent: number;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.AB_TEST;
                    items: [{
                        id: string;
                        path: "a";
                        type: import("@typebot.io/schemas").ItemType.AB_TEST;
                        outgoingEdgeId?: string | undefined;
                        blockId?: string | undefined;
                    }, {
                        id: string;
                        path: "b";
                        type: import("@typebot.io/schemas").ItemType.AB_TEST;
                        outgoingEdgeId?: string | undefined;
                        blockId?: string | undefined;
                    }];
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    type: "start";
                    label: string;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        baseUrl: string;
                        task?: undefined;
                        credentialsId?: string | undefined;
                        apiVersion?: string | undefined;
                    } | {
                        task: "Create chat completion";
                        baseUrl: string;
                        responseMapping: {
                            id: string;
                            valueToExtract: "Message content" | "Total tokens";
                            variableId?: string | undefined;
                        }[];
                        model: string;
                        messages: ({
                            id: string;
                            role?: "user" | "system" | "assistant" | undefined;
                            content?: string | undefined;
                            name?: string | undefined;
                        } | {
                            id: string;
                            role: "Messages sequence ✨";
                            content?: {
                                assistantMessagesVariableId?: string | undefined;
                                userMessagesVariableId?: string | undefined;
                            } | undefined;
                        })[];
                        advancedSettings?: {
                            temperature?: number | `{{${string}}}` | undefined;
                        } | undefined;
                        credentialsId?: string | undefined;
                        apiVersion?: string | undefined;
                    } | {
                        task: "Create image";
                        baseUrl: string;
                        responseMapping: {
                            id: string;
                            valueToExtract: "Image URL";
                            variableId?: string | undefined;
                        }[];
                        advancedOptions: {
                            size?: "256x256" | "512x512" | "1024x1024" | undefined;
                        };
                        prompt?: string | undefined;
                        credentialsId?: string | undefined;
                        apiVersion?: string | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.OPEN_AI;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        groupId?: string | undefined;
                        blockId?: string | undefined;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.JUMP;
                    outgoingEdgeId?: string | undefined;
                })[];
            }[];
            edges: {
                id: string;
                from: {
                    groupId: string;
                    blockId: string;
                    itemId?: string | undefined;
                };
                to: {
                    groupId: string;
                    blockId?: string | undefined;
                };
            }[];
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
        }) & (string | {
            variables: {
                id: string;
                name: string;
                value?: string | (string | null)[] | null | undefined;
            }[];
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
            version: "3" | "4" | "5" | null;
            groups: {
                id: string;
                title: string;
                graphCoordinates: {
                    x: number;
                    y: number;
                };
                blocks: ({
                    id: string;
                    groupId: string;
                    type: import("@typebot.io/schemas").BubbleBlockType.AUDIO;
                    content: {
                        url?: string | undefined;
                        isAutoplayEnabled?: boolean | undefined;
                    };
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    type: import("@typebot.io/schemas").BubbleBlockType.EMBED;
                    content: {
                        height: number | `{{${string}}}`;
                        url?: string | undefined;
                    };
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    type: import("@typebot.io/schemas").BubbleBlockType.IMAGE;
                    content: {
                        url?: string | undefined;
                        clickLink?: {
                            url?: string | undefined;
                            alt?: string | undefined;
                        } | undefined;
                    };
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    type: import("@typebot.io/schemas").BubbleBlockType.TEXT;
                    content: {
                        richText: any[];
                        html?: string | undefined;
                        plainText?: string | undefined;
                    };
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    type: import("@typebot.io/schemas").BubbleBlockType.VIDEO;
                    content: {
                        url?: string | undefined;
                        id?: string | undefined;
                        type?: import("@typebot.io/schemas").VideoBubbleContentType | undefined;
                    };
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    type: import("@typebot.io/schemas").LogicBlockType.CONDITION;
                    items: {
                        id: string;
                        type: import("@typebot.io/schemas").ItemType.CONDITION;
                        content: {
                            logicalOperator: import("@typebot.io/schemas").LogicalOperator;
                            comparisons: {
                                id: string;
                                variableId?: string | undefined;
                                comparisonOperator?: import("@typebot.io/schemas").ComparisonOperators | undefined;
                                value?: string | undefined;
                            }[];
                        };
                        outgoingEdgeId?: string | undefined;
                        blockId?: string | undefined;
                    }[];
                    outgoingEdgeId?: string | undefined;
                } | {
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
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        baseUrl: string;
                        websiteToken: string;
                        task?: "Show widget" | "Close widget" | undefined;
                        user?: {
                            id?: string | undefined;
                            email?: string | undefined;
                            name?: string | undefined;
                            avatarUrl?: string | undefined;
                            phoneNumber?: string | undefined;
                        } | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.CHATWOOT;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        trackingId?: string | undefined;
                        category?: string | undefined;
                        action?: string | undefined;
                        label?: string | undefined;
                        value?: number | `{{${string}}}` | undefined;
                        sendTo?: string | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.GOOGLE_ANALYTICS;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        credentialsId?: string | undefined;
                        sheetId?: string | undefined;
                        spreadsheetId?: string | undefined;
                        action?: undefined;
                    } | {
                        action: import("@typebot.io/schemas").GoogleSheetsAction.GET;
                        cellsToExtract: {
                            id: string;
                            column?: string | undefined;
                            variableId?: string | undefined;
                        }[];
                        credentialsId?: string | undefined;
                        sheetId?: string | undefined;
                        spreadsheetId?: string | undefined;
                        referenceCell?: {
                            id: string;
                            column?: string | undefined;
                            value?: string | undefined;
                        } | undefined;
                        filter?: {
                            logicalOperator: import("@typebot.io/schemas").LogicalOperator;
                            comparisons: {
                                id: string;
                                column?: string | undefined;
                                comparisonOperator?: import("@typebot.io/schemas").ComparisonOperators | undefined;
                                value?: string | undefined;
                            }[];
                        } | undefined;
                        totalRowsToExtract?: "All" | "First" | "Last" | "Random" | undefined;
                    } | {
                        action: import("@typebot.io/schemas").GoogleSheetsAction.INSERT_ROW;
                        cellsToInsert: {
                            id: string;
                            column?: string | undefined;
                            value?: string | undefined;
                        }[];
                        credentialsId?: string | undefined;
                        sheetId?: string | undefined;
                        spreadsheetId?: string | undefined;
                    } | {
                        action: import("@typebot.io/schemas").GoogleSheetsAction.UPDATE_ROW;
                        cellsToUpsert: {
                            id: string;
                            column?: string | undefined;
                            value?: string | undefined;
                        }[];
                        credentialsId?: string | undefined;
                        sheetId?: string | undefined;
                        spreadsheetId?: string | undefined;
                        referenceCell?: {
                            id: string;
                            column?: string | undefined;
                            value?: string | undefined;
                        } | undefined;
                        filter?: {
                            logicalOperator: import("@typebot.io/schemas").LogicalOperator;
                            comparisons: {
                                id: string;
                                column?: string | undefined;
                                comparisonOperator?: import("@typebot.io/schemas").ComparisonOperators | undefined;
                                value?: string | undefined;
                            }[];
                        } | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.GOOGLE_SHEETS;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        variablesForTest: {
                            id: string;
                            variableId?: string | undefined;
                            value?: string | undefined;
                        }[];
                        responseVariableMapping: {
                            id: string;
                            variableId?: string | undefined;
                            bodyPath?: string | undefined;
                        }[];
                        isAdvancedConfig?: boolean | undefined;
                        isCustomBody?: boolean | undefined;
                        isExecutedOnClient?: boolean | undefined;
                        webhook?: {
                            id: string;
                            queryParams: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            headers: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            method: import("@typebot.io/schemas/features/blocks/integrations/webhook/enums").HttpMethod;
                            url?: string | undefined;
                            body?: string | undefined;
                        } | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.WEBHOOK;
                    outgoingEdgeId?: string | undefined;
                    webhookId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        variablesForTest: {
                            id: string;
                            variableId?: string | undefined;
                            value?: string | undefined;
                        }[];
                        responseVariableMapping: {
                            id: string;
                            variableId?: string | undefined;
                            bodyPath?: string | undefined;
                        }[];
                        isAdvancedConfig?: boolean | undefined;
                        isCustomBody?: boolean | undefined;
                        isExecutedOnClient?: boolean | undefined;
                        webhook?: {
                            id: string;
                            queryParams: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            headers: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            method: import("@typebot.io/schemas/features/blocks/integrations/webhook/enums").HttpMethod;
                            url?: string | undefined;
                            body?: string | undefined;
                        } | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.MAKE_COM;
                    outgoingEdgeId?: string | undefined;
                    webhookId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        variablesForTest: {
                            id: string;
                            variableId?: string | undefined;
                            value?: string | undefined;
                        }[];
                        responseVariableMapping: {
                            id: string;
                            variableId?: string | undefined;
                            bodyPath?: string | undefined;
                        }[];
                        isAdvancedConfig?: boolean | undefined;
                        isCustomBody?: boolean | undefined;
                        isExecutedOnClient?: boolean | undefined;
                        webhook?: {
                            id: string;
                            queryParams: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            headers: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            method: import("@typebot.io/schemas/features/blocks/integrations/webhook/enums").HttpMethod;
                            url?: string | undefined;
                            body?: string | undefined;
                        } | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.PABBLY_CONNECT;
                    outgoingEdgeId?: string | undefined;
                    webhookId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        credentialsId: string;
                        recipients: string[];
                        isCustomBody?: boolean | undefined;
                        isBodyCode?: boolean | undefined;
                        subject?: string | undefined;
                        body?: string | undefined;
                        replyTo?: string | undefined;
                        cc?: string[] | undefined;
                        bcc?: string[] | undefined;
                        attachmentsVariableId?: string | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.EMAIL;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        variablesForTest: {
                            id: string;
                            variableId?: string | undefined;
                            value?: string | undefined;
                        }[];
                        responseVariableMapping: {
                            id: string;
                            variableId?: string | undefined;
                            bodyPath?: string | undefined;
                        }[];
                        isAdvancedConfig?: boolean | undefined;
                        isCustomBody?: boolean | undefined;
                        isExecutedOnClient?: boolean | undefined;
                        webhook?: {
                            id: string;
                            queryParams: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            headers: {
                                id: string;
                                key?: string | undefined;
                                value?: string | undefined;
                            }[];
                            method: import("@typebot.io/schemas/features/blocks/integrations/webhook/enums").HttpMethod;
                            url?: string | undefined;
                            body?: string | undefined;
                        } | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.ZAPIER;
                    outgoingEdgeId?: string | undefined;
                    webhookId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
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
                    type: import("@typebot.io/schemas").IntegrationBlockType.PIXEL;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        responseMapping: {
                            id: string;
                            valueToExtract: "Summary" | "Results";
                            variableId?: string | undefined;
                        }[];
                        credentialsId?: string | undefined;
                        projectId?: string | undefined;
                        systemPrompt?: string | undefined;
                        prompt?: string | undefined;
                        query?: string | undefined;
                        maxResults?: number | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.ZEMANTIC_AI;
                    outgoingEdgeId?: string | undefined;
                    blockId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        name: string;
                        content?: string | undefined;
                        shouldExecuteInParentContext?: boolean | undefined;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.SCRIPT;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        isNewTab: boolean;
                        url?: string | undefined;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.REDIRECT;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        variableId?: string | undefined;
                        expressionToEvaluate?: string | undefined;
                        isCode?: boolean | undefined;
                        type?: "Custom" | "Empty" | "User ID" | "Now" | "Today" | "Yesterday" | "Tomorrow" | "Random ID" | "Moment of the day" | "Map item with same index" | "Phone number" | "Contact name" | undefined;
                        mapListItemParams?: {
                            baseItemVariableId?: string | undefined;
                            baseListVariableId?: string | undefined;
                            targetListVariableId?: string | undefined;
                        } | undefined;
                        isExecutedOnClient?: boolean | undefined;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.SET_VARIABLE;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        typebotId?: string | undefined;
                        groupId?: string | undefined;
                        mergeResults?: boolean | undefined;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.TYPEBOT_LINK;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        secondsToWaitFor?: string | undefined;
                        shouldPause?: boolean | undefined;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.WAIT;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        aPercent: number;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.AB_TEST;
                    items: [{
                        id: string;
                        path: "a";
                        type: import("@typebot.io/schemas").ItemType.AB_TEST;
                        outgoingEdgeId?: string | undefined;
                        blockId?: string | undefined;
                    }, {
                        id: string;
                        path: "b";
                        type: import("@typebot.io/schemas").ItemType.AB_TEST;
                        outgoingEdgeId?: string | undefined;
                        blockId?: string | undefined;
                    }];
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    type: "start";
                    label: string;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        baseUrl: string;
                        task?: undefined;
                        credentialsId?: string | undefined;
                        apiVersion?: string | undefined;
                    } | {
                        task: "Create chat completion";
                        baseUrl: string;
                        responseMapping: {
                            id: string;
                            valueToExtract: "Message content" | "Total tokens";
                            variableId?: string | undefined;
                        }[];
                        model: string;
                        messages: ({
                            id: string;
                            role?: "user" | "system" | "assistant" | undefined;
                            content?: string | undefined;
                            name?: string | undefined;
                        } | {
                            id: string;
                            role: "Messages sequence ✨";
                            content?: {
                                assistantMessagesVariableId?: string | undefined;
                                userMessagesVariableId?: string | undefined;
                            } | undefined;
                        })[];
                        advancedSettings?: {
                            temperature?: number | `{{${string}}}` | undefined;
                        } | undefined;
                        credentialsId?: string | undefined;
                        apiVersion?: string | undefined;
                    } | {
                        task: "Create image";
                        baseUrl: string;
                        responseMapping: {
                            id: string;
                            valueToExtract: "Image URL";
                            variableId?: string | undefined;
                        }[];
                        advancedOptions: {
                            size?: "256x256" | "512x512" | "1024x1024" | undefined;
                        };
                        prompt?: string | undefined;
                        credentialsId?: string | undefined;
                        apiVersion?: string | undefined;
                    };
                    type: import("@typebot.io/schemas").IntegrationBlockType.OPEN_AI;
                    outgoingEdgeId?: string | undefined;
                } | {
                    id: string;
                    groupId: string;
                    options: {
                        groupId?: string | undefined;
                        blockId?: string | undefined;
                    };
                    type: import("@typebot.io/schemas").LogicBlockType.JUMP;
                    outgoingEdgeId?: string | undefined;
                })[];
            }[];
            edges: {
                id: string;
                from: {
                    groupId: string;
                    blockId: string;
                    itemId?: string | undefined;
                };
                to: {
                    groupId: string;
                    blockId?: string | undefined;
                };
            }[];
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
        } | undefined);
        isPreview?: boolean | undefined;
        resultId?: string | undefined;
        startGroupId?: string | undefined;
        prefilledVariables?: Record<string, unknown> | undefined;
        isStreamEnabled?: boolean | undefined;
        isOnlyRegistering?: boolean | undefined;
    } | undefined;
    clientLogs?: {
        status: string;
        description: string;
        details?: unknown;
    }[] | undefined;
} & {
    apiHost?: string | undefined;
}) => Promise<{
    data?: {
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
        sessionId?: string | undefined;
        typebot?: {
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
        } | undefined;
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
    error?: Error | undefined;
}>;
//# sourceMappingURL=sendMessageQuery.d.ts.map
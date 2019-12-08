declare namespace Auth {
    namespace Delete {
        namespace Responses {
            export type $200 = BaseResponse;
        }
    }
}
declare namespace AuthEmailForgotPassword {
    namespace Post {
        export interface BodyParameters {
            body: AuthEmailForgotPassword.Post.Parameters.Body;
        }
        namespace Parameters {
            export interface Body {
                /**
                 * example:
                 * maty@globalbit.co.il
                 */
                email?: string;
            }
        }
        namespace Responses {
            export type $200 = BaseResponse;
        }
    }
}
declare namespace AuthEmailSignIn {
    namespace Post {
        export interface BodyParameters {
            body: AuthEmailSignIn.Post.Parameters.Body;
        }
        namespace Parameters {
            export interface Body {
                /**
                 * example:
                 * maty@globalbit.co.il
                 */
                email?: string;
                /**
                 * example:
                 * globalbit123
                 */
                password?: string;
            }
        }
        namespace Responses {
            export type $200 = UserAuthenticationResponse;
        }
    }
}
declare namespace AuthEmailSignUp {
    namespace Post {
        export interface BodyParameters {
            body: AuthEmailSignUp.Post.Parameters.Body;
        }
        namespace Parameters {
            export interface Body {
                /**
                 * example:
                 * maty@globalbit.co.il
                 */
                email?: string;
                /**
                 * example:
                 * globalbit123
                 */
                password?: string;
            }
        }
        namespace Responses {
            export type $200 = UserAuthenticationResponse;
        }
    }
}
declare namespace AuthFacebook {
    namespace Post {
        export interface BodyParameters {
            body: AuthFacebook.Post.Parameters.Body;
        }
        namespace Parameters {
            export interface Body {
                /**
                 * example:
                 * 123456789abcdefghjiklmnopqrstuvwxyz
                 */
                access_token?: string;
            }
        }
        namespace Responses {
            export type $200 = UserAuthenticationResponse;
        }
    }
}
declare namespace AuthGoogle {
    namespace Post {
        export interface BodyParameters {
            body: AuthGoogle.Post.Parameters.Body;
        }
        namespace Parameters {
            export interface Body {
                /**
                 * example:
                 * 123456789abcdefghjiklmnopqrstuvwxyz
                 */
                access_token?: string;
            }
        }
        namespace Responses {
            export type $200 = UserAuthenticationResponse;
        }
    }
}
declare namespace AuthSmsSend {
    namespace Post {
        export interface BodyParameters {
            body: AuthSmsSend.Post.Parameters.Body;
        }
        namespace Parameters {
            export interface Body {
                phone?: Phone;
            }
        }
        namespace Responses {
            export type $200 = BaseResponse;
        }
    }
}
declare namespace AuthSmsVerify {
    namespace Post {
        export interface BodyParameters {
            body: AuthSmsVerify.Post.Parameters.Body;
        }
        namespace Parameters {
            export interface Body {
                phone?: Phone;
                /**
                 * example:
                 * 1992
                 */
                code?: string;
            }
        }
        namespace Responses {
            export type $200 = UserAuthenticationResponse;
        }
    }
}
declare interface BaseResponse {
    error?: ErrorData;
}
declare interface Chat {
    /**
     * example:
     * 5d25ae98a419281981574392
     */
    id?: string;
    /**
     * example:
     * 2017-07-21T17:32:28.000Z
     */
    createdAt?: string;
    lastMessage?: ChatMessage;
}
declare namespace Chat$IdAudio {
    namespace Post {
        namespace Parameters {
            /**
             * example:
             * 5d273ad85e43c01eabd9b01b
             */
            export type Id = string;
        }
        export interface PathParameters {
            id: Chat$IdAudio.Post.Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                error?: ErrorData;
                message?: ChatMessage;
            }
        }
    }
}
declare namespace Chat$IdPhoto {
    namespace Post {
        namespace Parameters {
            /**
             * example:
             * 5d273ad85e43c01eabd9b01b
             */
            export type Id = string;
        }
        export interface PathParameters {
            id: Chat$IdPhoto.Post.Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                error?: ErrorData;
                message?: ChatMessage;
            }
        }
    }
}
declare namespace Chat$IdVideo {
    namespace Post {
        namespace Parameters {
            /**
             * example:
             * 5d273ad85e43c01eabd9b01b
             */
            export type Id = string;
        }
        export interface PathParameters {
            id: Chat$IdVideo.Post.Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                error?: ErrorData;
                message?: ChatMessage;
            }
        }
    }
}
declare interface ChatMessage {
    /**
     * example:
     * 5d25ae98a419281981574392
     */
    id?: string;
    /**
     * example:
     * 2017-07-21T17:32:28.000Z
     */
    createdAt?: string;
    from?: User;
    /**
     * example:
     * 5d25ae98a419281981574392
     */
    chat?: string;
    type?: ChatMessageType;
    /**
     * example:
     * Message
     */
    message?: string;
    /**
     * Only when sending media
     */
    file?: File;
}
declare type ChatMessageType = "text" | "photo" | "audio" | "video";
declare namespace Config {
    namespace Get {
        namespace Responses {
            export type $200 = SystemSettingsResponse;
        }
    }
}
declare interface ErrorData {
    /**
     * example:
     * 0
     */
    code?: number;
    /**
     * example:
     * Success
     */
    description?: string;
}
declare interface File {
    /**
     * example:
     * http://www.domain.com/image.jpg
     */
    url?: string;
    /**
     * example:
     * image/jpg
     */
    mime?: string;
    /**
     * example:
     * http://www.domain.com/image.thumbnail.jpg
     */
    thumbnail?: string;
}
declare interface Language {
    /**
     * example:
     * he
     */
    code?: string;
    /**
     * Passes the language title, in the language requested by the client
     * example:
     * Иврит
     */
    title?: string;
    /**
     * Passes the language title, in it's own language
     * example:
     * עברית
     */
    nativeTitle?: string;
    /**
     * Passes the language title, in English
     * example:
     * Hebrew
     */
    latinTitle?: string;
}
declare namespace Languages {
    namespace Get {
        namespace Responses {
            export type $200 = LanguagesResponse;
        }
    }
}
declare interface LanguagesResponse {
    error?: ErrorData;
    languages?: Language[];
}
declare interface LengthValidation {
    /**
     * example:
     * 2
     */
    minLength?: number;
    /**
     * example:
     * 18
     */
    maxLength?: number;
    /**
     * example:
     * \w
     */
    regex?: string;
}
declare interface Page {
    /**
     * example:
     * about
     */
    code?: string;
    /**
     * example:
     * About us
     */
    title?: string;
    /**
     * HTML content of the page
     */
    content?: string;
}
declare interface Phone {
    /**
     * example:
     * +972
     */
    prefix?: string;
    /**
     * example:
     * 528330112
     */
    number?: string;
    /**
     * example:
     * +972528330112
     */
    readonly full?: string;
    /**
     * example:
     * 0528330112
     */
    readonly display?: string;
}
declare interface Profile {
    /**
     * example:
     * Maty
     */
    firstName?: string;
    /**
     * example:
     * Michalsky
     */
    lastName?: string;
    /**
     * example:
     * Maty Michalsky
     */
    readonly fullName?: string;
    /**
     * example:
     * 1992-06-04
     */
    birthday?: string;
    /**
     * example:
     * https://domain.com/path/image.jpg
     */
    picture?: string;
}
declare interface RangeValidation {
    /**
     * example:
     * 2
     */
    min?: number;
    /**
     * example:
     * 18
     */
    max?: number;
}
declare namespace SOCKETReceivedEvent {
    /**
     * Subscribe to retrieve chat messages list. Limited to 50 messages.
     */
    export interface Chat {
        chat?: Chat;
        messages?: ChatMessage[];
    }
    /**
     * Subscribe to this event to retrieve the list of all existing chats
     */
    export interface Chats {
        chats?: Chat[];
    }
    /**
     * Subscribe to receive an event whenever new message is received.
     */
    export interface MessageReceived {
        message?: ChatMessage;
    }
    /**
     * Subscribe to receive an event whenever a message is sent by you (to confirm the message is sent)
     */
    export interface MessageSent {
        message?: ChatMessage;
        /**
         * An ID (or UUID) created by client side,  to determine which message is the one that has been sent.
         * example:
         * 123456789
         */
        clientMessageId?: string;
    }
    /**
     * Subscribe to receive an event whenever new chat is created - either by a message you sent, or sent to you.
     */
    export interface NewChat {
        chat?: Chat;
        /**
         * An ID (or UUID) created by client side,  to determine which message is the one that has been sent.
         * example:
         * 123456789
         */
        clientMessageId?: string;
    }
}
declare namespace SOCKETSentEvent {
    /**
     * Send this event to retrieve messages list by chat. Because the messages list is limited to 50, you will need to use "beforeId" to retrieve previous messages.
     */
    export interface Chat {
        /**
         * example:
         * 5d273ad85e43c01eabd9b01b
         */
        chat?: string;
        /**
         * Display all messages sent before a certain message
         * example:
         * 5d273ad85e43c01eabd9b01b
         */
        beforeId?: string;
    }
    /**
     * Send this event to retrieve the list of all existing chats
     */
    export type Chats = any;
    /**
     * Send this event to send new message to chat/user.
     */
    export interface Message {
        /**
         * Send an existing chat ID, or a user's ID to create a new chat with user if not yet created.
         * example:
         * 5d273ad85e43c01eabd9b01b
         */
        chat?: string;
        /**
         * example:
         * A new message
         */
        message?: string;
        /**
         * An ID (or UUID) that will be created by client side, and will be sent back to the client when "message-sent" & "new-chat" events are fired, to determine which message is the one that has been sent.
         * example:
         * 123456789
         */
        clientMessageId?: string;
    }
}
declare interface SystemSettings {
    pages?: {
        /**
         * example:
         * http://globalbit.co.il/legal/libs/
         */
        libraries?: string;
        /**
         * example:
         * http://globalbit.co.il/legal/libs/
         */
        about?: string;
        /**
         * example:
         * http://globalbit.co.il/legal/libs/
         */
        terms?: string;
        /**
         * example:
         * http://globalbit.co.il/legal/libs/
         */
        privacy?: string;
    };
    validations?: {
        password?: LengthValidation;
        firstName?: LengthValidation;
        lastName?: LengthValidation;
        confirmationCode?: LengthValidation;
    };
    appVersions?: {
        ios?: {
            /**
             * example:
             * 0.0.0
             */
            minimumVersion?: string;
            /**
             * example:
             * 0.0.0
             */
            latestVersion?: string;
        };
        android?: {
            /**
             * example:
             * 0.0.0
             */
            minimumVersion?: string;
            /**
             * example:
             * 0.0.0
             */
            latestVersion?: string;
        };
        firstName?: LengthValidation;
        lastName?: LengthValidation;
        confirmationCode?: LengthValidation;
    };
    formats?: {
        images?: string[];
    };
    contactInformation?: {
        /**
         * example:
         * info@globalbit.co.il
         */
        info?: string;
        /**
         * example:
         * support@globalbit.co.il
         */
        support?: string;
    };
}
declare interface SystemSettingsResponse {
    error?: ErrorData;
    config?: SystemSettings;
}
declare interface User {
    /**
     * example:
     * 5d25ae98a419281981574392
     */
    id?: string;
    /**
     * example:
     * 2017-07-21T17:32:28.000Z
     */
    createdAt?: string;
    /**
     * example:
     * 2017-07-21T17:32:28.000Z
     */
    updatedAt?: string;
    profile?: Profile;
    readonly phone?: Phone;
    /**
     * example:
     * maty@globalbit.co.il
     */
    email?: string;
}
declare namespace User {
    namespace Get {
        namespace Responses {
            export type $200 = UserResponse;
        }
    }
    namespace Put {
        export interface BodyParameters {
            body: User.Put.Parameters.Body;
        }
        namespace Parameters {
            export type Body = User;
        }
        namespace Responses {
            export type $200 = UserResponse;
        }
    }
}
declare namespace User$Id {
    namespace Get {
        namespace Parameters {
            /**
             * example:
             * 5d273ad85e43c01eabd9b01b
             */
            export type Id = string;
        }
        export interface PathParameters {
            id: User$Id.Get.Parameters.Id;
        }
        namespace Responses {
            export type $200 = UserResponse;
        }
    }
}
declare interface UserAuthenticationResponse {
    error?: ErrorData;
    user?: User;
    /**
     * example:
     * abcdegfhjiklmnopqrstuvwxyz
     */
    token?: string;
}
declare namespace UserProfilePicture {
    namespace Delete {
        namespace Responses {
            export type $200 = BaseResponse;
        }
    }
    namespace Put {
        namespace Responses {
            export interface $200 {
                error?: ErrorData;
                /**
                 * example:
                 * http://globalbit.co.il/path/image.jpg
                 */
                picture?: string;
            }
        }
    }
}
declare interface UserResponse {
    error?: ErrorData;
    user?: User;
}

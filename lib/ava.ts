/**
 * Protegrity Ava trigger module.
 *
 * The real Ava chatbot will be installed later through Voiceflow.
 * Every Ava related button on the homepage calls the single function below.
 *
 * This file is the only place that needs to be edited when the real
 * Voiceflow embed is connected. Do not add chatbot state, memory,
 * localStorage conversation storage, fake AI responses, or a custom
 * message engine elsewhere in the codebase.
 *
 * Future Voiceflow integration example (placeholder, not active):
 *
 *   declare global {
 *     interface Window {
 *       voiceflow?: {
 *         chat?: {
 *           open: (options?: { context?: string }) => void
 *         }
 *       }
 *     }
 *   }
 *
 *   window.voiceflow?.chat?.open({ context })
 */

export type AvaContext =
  | "start-coverage-review"
  | "find-my-coverage"
  | "ask-ava"
  | "chat-with-ava"
  | "floating"
  | (string & {})

export function openAvaWidget(context?: AvaContext): void {
  // ----------------------------------------------------------------
  // Voiceflow embed will be wired here.
  // For now, emit a single console marker so trigger wiring is verifiable
  // during development. Replace the body of this function with the real
  // Voiceflow open call when the chatbot is installed.
  // ----------------------------------------------------------------
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log("[Ava] openAvaWidget called", { context: context ?? "default" })
  }
}

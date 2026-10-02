export type HomeAction = "company-lead" | "professional-signup" | "open-chat";

export function handleHomeAction(action: HomeAction) {
  const target = action === "company-lead" ? "empresas" : action === "professional-signup" ? "profissionais" : "contato";
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.dispatchEvent(new CustomEvent("coolaborativa:action", { detail: { action } }));
}
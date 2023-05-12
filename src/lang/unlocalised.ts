import { Language } from "../types/localization";

export default new Proxy(
  {},
  new (class implements ProxyHandler<Language> {
    get(target: Language, p: string | symbol, receiver: any) {
      target; receiver
      return p as string;
    }
  })()
) as Language

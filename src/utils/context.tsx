import { PropsWithChildren, createContext, useContext, useState } from "react";

export function createDynamicContext<T>(contextName: string, defaultValue: T) {
	const Context = createContext<
		[T, React.Dispatch<React.SetStateAction<T>>] | null
	>(null);
	return {
		use() {
			const ctx = useContext(Context);
			if (ctx == null) throw new Error(`Context should exist ${contextName}`);
			return ctx;
		},
		Provider({ children, initial }: PropsWithChildren<{ initial?: T }>) {
			const state = useState<T>(initial ?? defaultValue);

			return <Context.Provider value={state}>{children}</Context.Provider>;
		},
	};
}

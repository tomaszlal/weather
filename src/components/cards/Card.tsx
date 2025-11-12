import type { ReactNode } from "react"

type Props = {
  children: ReactNode,
  title: string
}

export default function Card({ children, title }: Props) {
  return (
    <div className="p-4 rounded-xl bg-zinc-900 shadow-md flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div>{children}</div>
    </div>
  )
}



// import { Component, type ReactNode } from "react";

// type Props = {
//   children: ReactNode,
//   title: string
// };

// // Define the State type (optional, but good practice for a class component)
// // Since this component doesn't need internal state, we use an empty object.
// type State = unknown;

// export default class Card extends Component<Props, State> {
//   // A class component must implement a render method
//   render() {
//     const { children, title } = this.props;

//     return (
//       <div className="p-4 rounded-xl bg-zinc-900 shadow-md flex flex-col gap-4">
//         <h2 className="text-2xl font-semibold">{title}</h2>
//         <div>{children}</div>
//       </div>
//     );
//   }
// }
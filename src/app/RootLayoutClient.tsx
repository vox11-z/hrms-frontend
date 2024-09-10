'use client';

import { Provider } from 'react-redux'
import { store } from '../store'

export default function RootLayoutClient({
  children,
  inter,
}: {
  children: React.ReactNode
  inter: any // Use the appropriate type from next/font
}) {
  return (
    <Provider store={store}>
      <body className={inter.className}>{children}</body>
    </Provider>
  )
}
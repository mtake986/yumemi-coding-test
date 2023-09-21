import { useResas } from '@/contexts/ResasContext';
import React from 'react'
import State from '../State';

const States = () => {
  const {japanStates} = useResas();
  return (
    <div>
      {japanStates.map((state: any) => (
        <State key={state.prefCode} prefName={state.prefName} />
      ))}
    </div>
  )
}

export default States
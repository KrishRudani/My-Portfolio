/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\skill.gltf
Author: riach (https://sketchfab.com/riach)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/abstract-rainbow-translucent-pendant-fd730e2886e748a0bd645d05fd96040d
Title: Abstract Rainbow Translucent Pendant
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/skill.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.03}>
        <mesh geometry={nodes['Hedra001_Material_#0_0'].geometry} material={materials.Material_0} position={[-0.62, 0, 3.48]} rotation={[-Math.PI / 2, 0, 0]} scale={0.64} />
      </group>
    </group>
  )
}

useGLTF.preload('/skill.gltf')

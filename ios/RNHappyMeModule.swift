//
//  RNHappyMeModule.swift
//  RNHappyMeModule
//
//  Copyright © 2022 Hamal Saefudin. All rights reserved.
//

import Foundation

@objc(RNHappyMeModule)
class RNHappyMeModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}

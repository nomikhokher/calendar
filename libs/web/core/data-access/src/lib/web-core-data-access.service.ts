import { Injectable } from '@angular/core'
import { ApolloAngularSDK } from '@calendar/shared/util/sdk'

@Injectable({ providedIn: 'root' })
export class WebCoreDataAccessService extends ApolloAngularSDK {}

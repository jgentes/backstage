/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Config } from '@backstage/config';

// eslint-disable-next-line @backstage/no-relative-monorepo-imports
import { CacheManager as _CacheManager } from '../../../backend-defaults/src/entrypoints/cache/CacheManager';
// eslint-disable-next-line @backstage/no-relative-monorepo-imports
import {
  type PluginCacheManager as _PluginCacheManager,
  type CacheManagerOptions as _CacheManagerOptions,
} from '../../../backend-defaults/src/entrypoints/cache/types';

// eslint-disable-next-line @backstage/no-relative-monorepo-imports
import {
  dropDatabase as _dropDatabase,
  DatabaseManager as _DatabaseManager,
  type DatabaseManagerOptions as _DatabaseManagerOptions,
  type LegacyRootDatabaseService as _LegacyRootDatabaseService,
} from '../../../backend-defaults/src/entrypoints/database/DatabaseManager';

import {
  LifecycleService,
  PluginMetadataService,
  CacheService,
  CacheServiceOptions,
  CacheServiceSetOptions,
  DatabaseService as _PluginDatabaseManager,
  isDatabaseConflictError as _isDatabaseConflictError,
  resolvePackagePath as _resolvePackagePath,
  resolveSafeChildPath as _resolveSafeChildPath,
  isChildPath as _isChildPath,
} from '@backstage/backend-plugin-api';
import _ from 'lodash';

export * from './scm';
export * from './tokens';

/**
 * @public
 * @deprecated Use `CacheManager` from the `@backstage/backend-defaults` package instead
 */
export const CacheManager = _CacheManager;

/**
 * @public
 * @deprecated Use `CacheManagerOptions` from the `@backstage/backend-defaults` package instead
 */
export type CacheManagerOptions = _CacheManagerOptions;

/**
 * @public
 * @deprecated Use `PluginCacheManager` from the `@backstage/backend-defaults` package instead
 */
export type PluginCacheManager = _PluginCacheManager;

/**
 * @public
 * @deprecated Use `CacheService` from the `@backstage/backend-plugin-api` package instead
 */
export type CacheClient = CacheService;

/**
 * @public
 * @deprecated Use `CacheServiceSetOptions` from the `@backstage/backend-plugin-api` package instead
 */
export type CacheClientSetOptions = CacheServiceSetOptions;

/**
 * @public
 * @deprecated Use `CacheServiceOptions` from the `@backstage/backend-plugin-api` package instead
 */
export type CacheClientOptions = CacheServiceOptions;

/**
 * @public
 * @deprecated Use `DatabaseManager` from the `@backstage/backend-defaults` package instead
 */
export class DatabaseManager implements LegacyRootDatabaseService {
  private constructor(private readonly _databaseManager: _DatabaseManager) {}

  static fromConfig(
    config: Config,
    options?: DatabaseManagerOptions,
  ): DatabaseManager {
    const _databaseManager = _DatabaseManager.fromConfig(config, options);
    return new DatabaseManager(_databaseManager);
  }

  forPlugin(
    pluginId: string,
    deps?:
      | { lifecycle: LifecycleService; pluginMetadata: PluginMetadataService }
      | undefined,
  ): PluginDatabaseManager {
    return this._databaseManager.forPlugin(pluginId, deps);
  }
}

/**
 * @public
 * @deprecated Use `DatabaseManagerOptions` from the `@backstage/backend-defaults` package instead
 */
export type DatabaseManagerOptions = _DatabaseManagerOptions;

/**
 * @public
 * @deprecated Use `DatabaseService` from the `@backstage/backend-plugin-api` package instead
 */
export type PluginDatabaseManager = _PluginDatabaseManager;

/**
 * @public
 * @deprecated Use `LegacyRootDatabaseService` from the `@backstage/backend-defaults` package instead
 */
export type LegacyRootDatabaseService = _LegacyRootDatabaseService;

/**
 * @public
 * @deprecated Use `dropDatabase` from the `@backstage/backend-defaults` package instead
 */
export const dropDatabase = _dropDatabase;

/**
 * @public
 * @deprecated This function is deprecated and will be removed in a future release, see https://github.com/backstage/backstage/issues/24493.
 * Please use the `isDatabaseConflictError` function from the `@backstage/backend-plugin-api` package instead.
 */
export const isDatabaseConflictError = _isDatabaseConflictError;

/**
 * @public
 * @deprecated This function is deprecated and will be removed in a future release, see https://github.com/backstage/backstage/issues/24493.
 * Please use the `resolvePackagePath` function from the `@backstage/backend-plugin-api` package instead.
 */
export const resolvePackagePath = _resolvePackagePath;

/**
 * @public
 * @deprecated This function is deprecated and will be removed in a future release, see https://github.com/backstage/backstage/issues/24493.
 * Please use the `resolveSafeChildPath` function from the `@backstage/backend-plugin-api` package instead.
 */
export const resolveSafeChildPath = _resolveSafeChildPath;

/**
 * @public
 * @deprecated This function is deprecated and will be removed in a future release, see https://github.com/backstage/backstage/issues/24493.
 * Please use the `isChildPath` function from the `@backstage/cli-common` package instead.
 */
export const isChildPath = _isChildPath;

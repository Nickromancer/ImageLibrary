IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
CREATE TABLE [AspNetRoles] (
    [Id] nvarchar(450) NOT NULL,
    [Name] nvarchar(256) NULL,
    [NormalizedName] nvarchar(256) NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetRoles] PRIMARY KEY ([Id])
);

CREATE TABLE [AspNetUsers] (
    [Id] nvarchar(450) NOT NULL,
    [UserName] nvarchar(256) NULL,
    [NormalizedUserName] nvarchar(256) NULL,
    [Email] nvarchar(256) NULL,
    [NormalizedEmail] nvarchar(256) NULL,
    [EmailConfirmed] bit NOT NULL,
    [PasswordHash] nvarchar(max) NULL,
    [SecurityStamp] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    [PhoneNumber] nvarchar(max) NULL,
    [PhoneNumberConfirmed] bit NOT NULL,
    [TwoFactorEnabled] bit NOT NULL,
    [LockoutEnd] datetimeoffset NULL,
    [LockoutEnabled] bit NOT NULL,
    [AccessFailedCount] int NOT NULL,
    CONSTRAINT [PK_AspNetUsers] PRIMARY KEY ([Id])
);

CREATE TABLE [Images] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(max) NOT NULL,
    [Description] nvarchar(max) NOT NULL,
    [ImageData] varbinary(max) NOT NULL,
    [ContentType] nvarchar(max) NOT NULL,
    [CreatedAt] datetime2 NOT NULL,
    [UpdatedAt] datetime2 NOT NULL,
    CONSTRAINT [PK_Images] PRIMARY KEY ([Id])
);

CREATE TABLE [AspNetRoleClaims] (
    [Id] int NOT NULL IDENTITY,
    [RoleId] nvarchar(450) NOT NULL,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE CASCADE
);

CREATE TABLE [AspNetUserClaims] (
    [Id] int NOT NULL IDENTITY,
    [UserId] nvarchar(450) NOT NULL,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

CREATE TABLE [AspNetUserLogins] (
    [LoginProvider] nvarchar(450) NOT NULL,
    [ProviderKey] nvarchar(450) NOT NULL,
    [ProviderDisplayName] nvarchar(max) NULL,
    [UserId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY ([LoginProvider], [ProviderKey]),
    CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

CREATE TABLE [AspNetUserRoles] (
    [UserId] nvarchar(450) NOT NULL,
    [RoleId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY ([UserId], [RoleId]),
    CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

CREATE TABLE [AspNetUserTokens] (
    [UserId] nvarchar(450) NOT NULL,
    [LoginProvider] nvarchar(450) NOT NULL,
    [Name] nvarchar(450) NOT NULL,
    [Value] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY ([UserId], [LoginProvider], [Name]),
    CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

CREATE TABLE [Tags] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(max) NOT NULL,
    [ImageId] uniqueidentifier NULL,
    CONSTRAINT [PK_Tags] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Tags_Images_ImageId] FOREIGN KEY ([ImageId]) REFERENCES [Images] ([Id])
);

CREATE INDEX [IX_AspNetRoleClaims_RoleId] ON [AspNetRoleClaims] ([RoleId]);

CREATE UNIQUE INDEX [RoleNameIndex] ON [AspNetRoles] ([NormalizedName]) WHERE [NormalizedName] IS NOT NULL;

CREATE INDEX [IX_AspNetUserClaims_UserId] ON [AspNetUserClaims] ([UserId]);

CREATE INDEX [IX_AspNetUserLogins_UserId] ON [AspNetUserLogins] ([UserId]);

CREATE INDEX [IX_AspNetUserRoles_RoleId] ON [AspNetUserRoles] ([RoleId]);

CREATE INDEX [EmailIndex] ON [AspNetUsers] ([NormalizedEmail]);

CREATE UNIQUE INDEX [UserNameIndex] ON [AspNetUsers] ([NormalizedUserName]) WHERE [NormalizedUserName] IS NOT NULL;

CREATE INDEX [IX_Tags_ImageId] ON [Tags] ([ImageId]);

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20260921115618_InitalCreate', N'10.0.11');

COMMIT;
GO

BEGIN TRANSACTION;
ALTER TABLE [Tags] DROP CONSTRAINT [FK_Tags_Images_ImageId];

DROP INDEX [IX_Tags_ImageId] ON [Tags];

DECLARE @var nvarchar(max);
SELECT @var = QUOTENAME([d].[name])
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Tags]') AND [c].[name] = N'ImageId');
IF @var IS NOT NULL EXEC(N'ALTER TABLE [Tags] DROP CONSTRAINT ' + @var + ';');
ALTER TABLE [Tags] DROP COLUMN [ImageId];

DECLARE @var1 nvarchar(max);
SELECT @var1 = QUOTENAME([d].[name])
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Tags]') AND [c].[name] = N'Name');
IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [Tags] DROP CONSTRAINT ' + @var1 + ';');
ALTER TABLE [Tags] ALTER COLUMN [Name] nvarchar(450) NOT NULL;

CREATE TABLE [ImageTag] (
    [ImagesId] uniqueidentifier NOT NULL,
    [TagsId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_ImageTag] PRIMARY KEY ([ImagesId], [TagsId]),
    CONSTRAINT [FK_ImageTag_Images_ImagesId] FOREIGN KEY ([ImagesId]) REFERENCES [Images] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_ImageTag_Tags_TagsId] FOREIGN KEY ([TagsId]) REFERENCES [Tags] ([Id]) ON DELETE CASCADE
);

CREATE UNIQUE INDEX [IX_Tags_Name] ON [Tags] ([Name]);

CREATE INDEX [IX_ImageTag_TagsId] ON [ImageTag] ([TagsId]);

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20260921122142_AddImageRefToTagsAndNameUniquness', N'10.0.11');

COMMIT;
GO

BEGIN TRANSACTION;
ALTER TABLE [ImageTag] DROP CONSTRAINT [FK_ImageTag_Images_ImagesId];

ALTER TABLE [ImageTag] DROP CONSTRAINT [FK_ImageTag_Tags_TagsId];

ALTER TABLE [ImageTag] DROP CONSTRAINT [PK_ImageTag];

EXEC sp_rename N'[ImageTag]', N'ImageTags', 'OBJECT';

EXEC sp_rename N'[ImageTags].[IX_ImageTag_TagsId]', N'IX_ImageTags_TagsId', 'INDEX';

ALTER TABLE [ImageTags] ADD CONSTRAINT [PK_ImageTags] PRIMARY KEY ([ImagesId], [TagsId]);

ALTER TABLE [ImageTags] ADD CONSTRAINT [FK_ImageTags_Images_ImagesId] FOREIGN KEY ([ImagesId]) REFERENCES [Images] ([Id]) ON DELETE CASCADE;

ALTER TABLE [ImageTags] ADD CONSTRAINT [FK_ImageTags_Tags_TagsId] FOREIGN KEY ([TagsId]) REFERENCES [Tags] ([Id]) ON DELETE CASCADE;

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20260925121214_AddImageTagManyToMany', N'10.0.11');

COMMIT;
GO

BEGIN TRANSACTION;
ALTER TABLE [Images] ADD [ThumbnailData] varbinary(max) NOT NULL DEFAULT 0x;

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20260928094819_AddThumbnailToImages', N'10.0.11');

COMMIT;
GO

BEGIN TRANSACTION;
DECLARE @var2 nvarchar(max);
SELECT @var2 = QUOTENAME([d].[name])
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Images]') AND [c].[name] = N'ImageData');
IF @var2 IS NOT NULL EXEC(N'ALTER TABLE [Images] DROP CONSTRAINT ' + @var2 + ';');
ALTER TABLE [Images] DROP COLUMN [ImageData];

DECLARE @var3 nvarchar(max);
SELECT @var3 = QUOTENAME([d].[name])
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Images]') AND [c].[name] = N'ThumbnailData');
IF @var3 IS NOT NULL EXEC(N'ALTER TABLE [Images] DROP CONSTRAINT ' + @var3 + ';');
ALTER TABLE [Images] DROP COLUMN [ThumbnailData];

DECLARE @var4 nvarchar(max);
SELECT @var4 = QUOTENAME([d].[name])
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Images]') AND [c].[name] = N'Description');
IF @var4 IS NOT NULL EXEC(N'ALTER TABLE [Images] DROP CONSTRAINT ' + @var4 + ';');
ALTER TABLE [Images] ALTER COLUMN [Description] nvarchar(max) NULL;

CREATE TABLE [ImagePicture] (
    [ImageId] uniqueidentifier NOT NULL,
    [Data] varbinary(max) NOT NULL,
    CONSTRAINT [PK_ImagePicture] PRIMARY KEY ([ImageId]),
    CONSTRAINT [FK_ImagePicture_Images_ImageId] FOREIGN KEY ([ImageId]) REFERENCES [Images] ([Id]) ON DELETE CASCADE
);

CREATE TABLE [ImageThumbnail] (
    [ImageId] uniqueidentifier NOT NULL,
    [Data] varbinary(max) NOT NULL,
    CONSTRAINT [PK_ImageThumbnail] PRIMARY KEY ([ImageId]),
    CONSTRAINT [FK_ImageThumbnail_Images_ImageId] FOREIGN KEY ([ImageId]) REFERENCES [Images] ([Id]) ON DELETE CASCADE
);

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20260928104123_AddSeperateDataOfPicturesAndThumbnails', N'10.0.11');

COMMIT;
GO

BEGIN TRANSACTION;
INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20260928132235_AddTagsOptional', N'10.0.11');

COMMIT;
GO


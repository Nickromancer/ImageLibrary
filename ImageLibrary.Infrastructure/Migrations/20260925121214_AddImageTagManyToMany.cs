using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ImageLibrary.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddImageTagManyToMany : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ImageTag_Images_ImagesId",
                table: "ImageTag");

            migrationBuilder.DropForeignKey(
                name: "FK_ImageTag_Tags_TagsId",
                table: "ImageTag");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ImageTag",
                table: "ImageTag");

            migrationBuilder.RenameTable(
                name: "ImageTag",
                newName: "ImageTags");

            migrationBuilder.RenameIndex(
                name: "IX_ImageTag_TagsId",
                table: "ImageTags",
                newName: "IX_ImageTags_TagsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ImageTags",
                table: "ImageTags",
                columns: new[] { "ImagesId", "TagsId" });

            migrationBuilder.AddForeignKey(
                name: "FK_ImageTags_Images_ImagesId",
                table: "ImageTags",
                column: "ImagesId",
                principalTable: "Images",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ImageTags_Tags_TagsId",
                table: "ImageTags",
                column: "TagsId",
                principalTable: "Tags",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ImageTags_Images_ImagesId",
                table: "ImageTags");

            migrationBuilder.DropForeignKey(
                name: "FK_ImageTags_Tags_TagsId",
                table: "ImageTags");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ImageTags",
                table: "ImageTags");

            migrationBuilder.RenameTable(
                name: "ImageTags",
                newName: "ImageTag");

            migrationBuilder.RenameIndex(
                name: "IX_ImageTags_TagsId",
                table: "ImageTag",
                newName: "IX_ImageTag_TagsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ImageTag",
                table: "ImageTag",
                columns: new[] { "ImagesId", "TagsId" });

            migrationBuilder.AddForeignKey(
                name: "FK_ImageTag_Images_ImagesId",
                table: "ImageTag",
                column: "ImagesId",
                principalTable: "Images",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ImageTag_Tags_TagsId",
                table: "ImageTag",
                column: "TagsId",
                principalTable: "Tags",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

import { Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FilesArmazenados } from "./files.dm";
import multerConfig from "./multer-config";
import { Request } from "express";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('files')
@Controller('files')
export class FilesController{
    constructor(private readonly arquivos:FilesArmazenados){}
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
    @Post()
    @UseInterceptors(FileInterceptor('arquivo', multerConfig))
    uploadArquivo(@UploadedFile() file:Express.Multer.File, @Req() req:Request){
        return this.arquivos.salvarDados(file,req);
    }
    @ApiResponse({status:200, description:"A operação foi um sucesso"})
    @ApiResponse({status:500, description:"Ocorreu um erro na operação! Tente novamente mais tarde"})
    @Get(':imgpath')
    retornaArquivo(@Param('imgpath') image, @Res() res){
        return res.sendFile(image,{root: './upload/files'})
    }
}
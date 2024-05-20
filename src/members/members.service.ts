import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';

@Injectable()
export class MembersService {

  private readonly logger = new Logger('MemberService');
  
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>
  ){}

  async create(createMemberDto: CreateMemberDto) {
    try{
      const member = this.memberRepository.create(createMemberDto);
      await this.memberRepository.save(member);
      return member;
    }catch(error){
      console.log(error); 
      if(error.sqlState === '23000')
        throw new BadRequestException(error.sqlMessage);

      this.logger.error(error);
      throw new InternalServerErrorException('Error desconocido en la aplicación');
    }
  }

  findAll() {
    return `This action returns all members`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}

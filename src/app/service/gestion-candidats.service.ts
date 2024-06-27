import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionRecruesService } from './gestion-recrues.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GestionCandidatsService {
  link = 'http://localhost:3000/cv/candidats';
  private candidates: Candidat[] = [
    new Candidat(1, 'bruno', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'ugo', 'simpson', 51, 'directeur', 'homer.png'),
    new Candidat(3, 'jenny', 'simpson', 28, 'designer', 'lisa.png'),
  ];

  getAllCandidates() {
    return this.candidates;
  }
  getAllCandidatesAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
  }

  constructor(
    private recrueService: GestionRecruesService,
    private http: HttpClient
  ) {}

  getCandidateById(id) {
    return this.candidates.find((cand) => cand._id == id);
  }

  getCandidateByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  addCandidate(newCand) {
    newCand._id = this.candidates[this.candidates.length - 1]._id + 1;
    this.candidates.push(newCand);
  }

  addCandidateAPI(newCand) {
    let token = localStorage.getItem('access_token');
    if (token) {
      let h = new HttpHeaders().append('Authorization', `bearer ${token}`);
      return this.http.post(`${this.link}`, newCand, { headers: h });
    }
    return this.http.post(`${this.link}`, newCand);
  }

  updateCandidate(uCand) {
    let i = this.candidates.findIndex((cand) => cand._id == uCand._id);
    this.candidates[i] = uCand;
  }

  updateCandidateAPI(uCand) {
    return this.http.put(`${this.link}/${uCand._id}`, uCand);
  }

  deleteCandidate(id) {
    let i = this.candidates.findIndex((cand) => cand._id == id);
    this.candidates.splice(i, 1);
  }

  deleteCandidateAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  uploadAvatar(f: FormData) {
    return this.http.post('http://localhost:3000/images/upload', f);
  }
  showHello() {
    console.log('Je suis le service');
    this.recrueService.sayHi();
  }
}

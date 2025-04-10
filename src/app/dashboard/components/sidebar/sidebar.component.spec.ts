import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

// Describe un conjunto de pruebas (test suite) para el componente SidebarComponent
    describe('SidebarComponent', () => {
      // Declara una variable para la instancia del componente
      let component: SidebarComponent;
      // Declara una variable para el fixture, que es el entorno de prueba del componente
      let fixture: ComponentFixture<SidebarComponent>;

      // Antes de cada prueba, configura el entorno de pruebas
      beforeEach(async () => {
        // Configura el módulo de pruebas con el componente que se va a probar
        await TestBed.configureTestingModule({
          // Declara el componente SidebarComponent dentro del módulo de pruebas
          declarations: [SidebarComponent]
        })
        // Compila los componentes declarados, incluyendo sus plantillas HTML y estilos CSS
        .compileComponents();

        // Crea el fixture para el componente SidebarComponent
        fixture = TestBed.createComponent(SidebarComponent);
        // Obtiene la instancia del componente desde el fixture
        component = fixture.componentInstance;
        // Ejecuta la detección de cambios para inicializar el componente y su vista
        fixture.detectChanges();
      });

      // Define un caso de prueba para verificar si el componente se crea correctamente
      it('should create', () => {
        // Verifica que la instancia del componente sea "verdadera" (es decir, que exista y esté inicializada)
        expect(component).toBeTruthy();
      });
    });
